'use server';

import { z } from 'zod';
import { db } from '@/db';
import { auth } from '@/auth';
import { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import path from '@/helpers/path';
import { redirect } from 'next/navigation';

// create post validation schema
const createPostSchema = z.object({
     title: z.string().min(1).max(255),
     content: z.string().min(1).max(1000),
});

interface CreatePostFormState {
     errors: {
          title?: string[];
          content?: string[];
          _form?: string[];
     };
}

export async function createPost(
     slug: string,
     formState: CreatePostFormState,
     formData: FormData
): Promise<CreatePostFormState> {
     const session = await auth();

     // title and content from the form data
     const title = formData.get('title') as string;
     const content = formData.get('content') as string;

     // validate the form data
     const result = createPostSchema.safeParse({ title, content });

     if (!result.success) {
          return { errors: result.error.flatten().fieldErrors };
     }

     // auth check
     if (!session || !session.user) {
          return {
               errors: { _form: ['You must be logged in to create a post'] },
          };
     }

     // check the topicId
     const topic = await db.topic.findFirst({
          where: {
               slug,
          },
     });
     if (!topic) {
          return {
               errors: {
                    _form: ['Cannot find topic'],
               },
          };
     }

     let post: Post;
     try {
          post = await db.post.create({
               data: {
                    title: title,
                    content: content,
                    topicId: topic.id,
                    userId: session.user.id,
               },
          });
     } catch (error) {
          if (error instanceof Error) {
               return {
                    errors: {
                         _form: ['Failed to create post'],
                    },
               };
          } else {
               return {
                    errors: {
                         _form: ['Something went wrong'],
                    },
               };
          }
     }
     // todo : revalidate the topic show page after creating a post
     revalidatePath(path.topicShow(slug));
     redirect(path.postShow(slug, post.id));
}
