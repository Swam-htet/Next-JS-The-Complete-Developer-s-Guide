'use server';
import { auth } from '@/auth';
import { z } from 'zod';
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import path from '@/helpers/path';
import { revalidatePath } from 'next/cache';

// create topic validation schema
const createTopicSchema = z.object({
     title: z.string().min(5).max(100).regex(/[a-z-]/, {
          message: 'Title must be lowercase and contain only letters and hyphens.'
     }),
     description: z.string().min(10).max(500),
});

interface CreateTopicFormState {
     errors: {
          title?: string[];
          description?: string[];
          _form?: string[];
     };
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {

     // session 
     const session = await auth();

     // get the title and description from the form data 
     const title = formData.get('title') as string;
     const description = formData.get('description') as string;

     // validation 
     const result = createTopicSchema.safeParse({ title, description });
     console.log(result);

     if (!result.success) {
          // handle validation errors
          console.log(result.error.flatten().fieldErrors);
          return {
               errors: result.error.flatten().fieldErrors
          };
     }

     // authentication validation
     if (!session || !session.user) {
          return {
               errors: {
                    _form: ['You must be logged in to create a topic.']
               }
          };
     }

     let topic: Topic;
     try {
          // create a topic
          topic = await db.topic.create({
               data: {
                    slug: result.data.title,
                    description: result.data.description,
               }
          });
     } catch (error) {
          if (error instanceof Error) {
               console.log(error.message);
               return {
                    errors: {
                         _form: [error.message]
                    }
               };
          }
          else {
               return {
                    errors: {
                         _form: ['Something went wrong.']
                    }
               }
          }
     }

     redirect(path.topicShow(topic.slug));
     // todo : revalidate the home page after creating a topic
     revalidatePath('/');

}
