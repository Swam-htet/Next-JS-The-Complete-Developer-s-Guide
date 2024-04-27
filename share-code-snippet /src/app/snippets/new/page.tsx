import { createSnippet } from '@/actions';
import Header from '@/components/share/Header';
import Link from 'next/link';
import React from 'react';

const SnippetCreatePage = () => {
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
                         <div className="flex gap-3">
                              <button className="min-w-[200px] text-center hover:bg-gray-300 p-2 rounded">
                                   <Link href="/">Back</Link>
                              </button>
                              <button
                                   className="bg-blue-200 min-w-[200px] text-center hover:bg-blue-300 p-2 rounded"
                                   type="submit"
                              >
                                   Save
                              </button>
                         </div>
                    </form>{' '}
               </div>
          </div>
     );
};

export default SnippetCreatePage;
