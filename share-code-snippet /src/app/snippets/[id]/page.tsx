import React from 'react';
import { db } from '@/app/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as actions from '@/actions';

interface SnippetDetailProps {
     params: {
          id: string;
     };
}

export async function generateStaticParams() {
     const snippets = await db.snippet.findMany();

     return snippets.map((snippet) => ({
          params: {
               id: String(snippet.id),
          },
     }));
}

export default async function SnippetDetailPage(props: SnippetDetailProps) {
     const snippet = await db.snippet.findFirst({
          where: {
               id: Number(props.params.id),
          },
     });

     if (!snippet) {
          return notFound();
     }

     const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

     return (
          <div className="container">
               <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold my-3">
                         Snippet Detail Page
                    </h1>
               </div>

               <div className="flex items-center justify-between w-full">
                    <Link
                         href="/"
                         className="bg-blue-200 min-w-[200px] text-center hover:bg-blue-300 p-2 rounded"
                    >
                         Back
                    </Link>
               </div>
               <div className="mt-4">
                    <div className="flex justify-between items-center mb-3">
                         <h2 className="font-bold text-xl mb-4">
                              {snippet.title}
                         </h2>
                         <div className="flex gap-2">
                              <form action={deleteSnippetAction}>
                                   <button
                                        className="bg-red-200 min-w-[200px] text-center hover:bg-red-300 p-2 rounded"
                                        type="submit"
                                   >
                                        Delete
                                   </button>
                              </form>
                              <Link
                                   href={`${snippet.id}/edit`}
                                   className="bg-blue-200 min-w-[200px] text-center hover:bg-blue-300 p-2 rounded"
                              >
                                   Edit
                              </Link>
                         </div>
                    </div>
                    <pre
                         className="text-green-500 bg-gray-200 border-2 p-3 rounded border-gray-400
                    "
                    >
                         {snippet.code}
                    </pre>
               </div>
          </div>
     );
}
