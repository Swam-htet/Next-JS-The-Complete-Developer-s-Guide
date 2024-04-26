import { db } from '@/app/db';
import Header from '@/components/share/Header';
import SnippetCreateForm from '@/components/snippets/SnippetCreateForm';
import { redirect } from 'next/navigation';
import React from 'react';

const SnippetCreatePage = () => {
     async function createSnippet(formValue: FormData) {
          // server action
          'use server';
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
          console.log('This is snippet - ', snippet);
          // redirect to snippets page
          redirect('/snippets');
     }

     return (
          <div>
               <Header content="Create New Snippets" />
               <div className="container">
                    <form action={createSnippet}>
                         <div className="flex gap-5">
                              <label className="w-12" htmlFor="title">
                                   Title
                              </label>
                              <input
                                   type="text"
                                   name="title"
                                   className="border rounded p-2 w-full"
                                   placeholder="Title"
                                   id="title"
                              />
                         </div>
                         <div>
                              <label className="w-12" htmlFor="code">
                                   Code
                              </label>
                              <textarea
                                   name="code"
                                   className="border rounded p-2 w-full"
                                   placeholder="Code"
                                   id="code"
                              ></textarea>
                         </div>
                         <button
                              className="bg-blue-200 hover:bg-blue-300 p-2 rounded"
                              type="submit"
                         >
                              Create Snippet
                         </button>
                    </form>{' '}
               </div>
          </div>
     );
};

export default SnippetCreatePage;
