'use server';

import { db } from '@/app/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createSnippet(formState: { message: string }, formValue: FormData) {
    try {
    // input validations here
        const title = formValue.get('title');
        const code = formValue.get('code');

        if (typeof title !== 'string' || title.length === 0) {
            return {
                message: 'Title is required',
            };
        }

        if (typeof code !== 'string' || code.length === 0) {
            return {
                message: 'Code is required',
            };
        }

        // create new snippet
        const snippet = await db.snippet.create({
            data: {
                title: title,
                code: code,
            },
        });
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message
            }
        }
        else {
            return {
                message: 'Something went wrong'
            }
        }
    }
    revalidatePath('/');
    // redirect to snippets page
    redirect('/');
}

export async function editSnippet(id: number, code: string) {

    // update snippet
    const updatedSnippet = await db.snippet.update({
        where: {
            id: id,
        },
        data: {
            code: code,
        },
    });
    revalidatePath(`/snippets/${id}`);
    // redirect to snippets page
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    // delete snippet
    const deletedSnippet = await db.snippet.delete({
        where: {
            id: id,
        },
    });
    revalidatePath('/');
    // redirect to snippets page
    redirect('/');
}