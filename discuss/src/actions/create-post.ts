import { error } from 'console';
'use server';
import { z } from 'zod';
import { db } from '@/db';
import { auth } from '@/auth';
import { Post } from '@prisma/client';


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
};

export async function createPost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> {
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
          return { errors: { _form: ['You must be logged in to create a post'] } };
     }

     // let post: Post;
     // // create the post
     // try {
     //      post = await db.post.create({
     //           data: {
     //                title,
     //                content,
     //           }
     //      });
     
     // } catch (error) {

     // }

     return { errors: {} };

     // todo : revalidate the topic show page after creating a post

}
