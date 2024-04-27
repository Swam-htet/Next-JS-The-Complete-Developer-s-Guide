'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import * as actions from '@/actions';
import React, { useState } from 'react';
import Header from '../share/Header';

interface SnippetEditFormProps {
     snippet: Snippet;
     onSubmit: (id: number, code: string) => void;
}

const SnippetEditForm: React.FC<SnippetEditFormProps> = ({ snippet }) => {
     const [code, setCode] = useState(snippet.code);

     const handleEditorChange = (value: string = '') => {
          setCode(value);
     };

     const snippetEditAction = actions.editSnippet.bind(null, snippet.id, code);

     return (
          <div className="container">
               <h2 className="my-5 text-xl font-bold">{snippet.title}</h2>
               <Editor
                    height="40vh"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={snippet.code}
                    options={{
                         minimap: { enabled: false },
                         fontSize: 12,
                         padding: { top: 10, bottom: 10 },
                    }}
                    onChange={handleEditorChange}
               />

               <form action={snippetEditAction} className="mt-3">
                    <button
                         type="submit"
                         className="bg-blue-200 min-w-[200px] text-center hover:bg-blue-300 p-2 rounded"
                    >
                         Save
                    </button>
               </form>
          </div>
     );
};

export default SnippetEditForm;
