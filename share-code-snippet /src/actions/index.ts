'use server';

import { db } from '@/app/db';
import { Snippet } from '@prisma/client';
import exp from 'constants';
import { redirect } from 'next/navigation';

export async function createSnippet(formValue: FormData) {
    // input validations here
    const title = formValue.get('title') as string;
    const code = formValue.get('code') as string;
    // create new snippet
    const snippet = await db.snippet.create({
        data: {
            title: title,
            code: code,
        },
    });
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
    // redirect to snippets page
    redirect('/');
}

export async function deleteSnippet(id: number) {
    // delete snippet
    const deletedSnippet = await db.snippet.delete({
        where: {
            id: id,
        },
    });
    // redirect to snippets page
    redirect('/');
}