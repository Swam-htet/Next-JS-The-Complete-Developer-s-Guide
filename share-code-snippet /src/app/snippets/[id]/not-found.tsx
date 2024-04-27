import React from 'react';

interface SnippetNotFoundProps {
     params: {
          id: string;
     };
}
export default function SnippetNotFound(props: SnippetNotFoundProps) {
     return (
          <div>
               <h3 className="text-center text-2xl">
                    Sorry, snippet not found
               </h3>
          </div>
     );
}
