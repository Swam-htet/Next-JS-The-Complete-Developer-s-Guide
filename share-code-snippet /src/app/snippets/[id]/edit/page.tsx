import React from 'react';
import { db } from '@/app/db';
import { notFound, redirect } from 'next/navigation';
import Header from '@/components/share/Header';
import SnippetEditForm from '@/components/snippets/SnippetEditForm';
import { editSnippet } from '@/actions';

interface SnippetEditPageProps {
     params: {
          id: string;
     };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
     console.log('This is props - ', props);

     const snippet = await db.snippet.findFirst({
          where: {
               id: Number(props.params.id),
          },
     });

     console.log('This is snippet - ', snippet);

     if (!snippet) {
          return notFound();
     }

     return (
          <div>
               <Header content="Editing Snippet" />
               <div className="container">
                    <SnippetEditForm snippet={snippet} onSubmit={editSnippet} />
               </div>
          </div>
     );
}
