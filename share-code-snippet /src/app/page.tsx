import { db } from '@/app/db';
import Link from 'next/link';
export default async function Home() {
     const snippets = await db.snippet.findMany();
     console.log('This is snippets - ', snippets);
     return (
          <div className="container">
               <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold my-3">Snippet List</h1>
                    <Link
                         href="/snippets/new"
                         className="bg-blue-200 min-w-[200px] text-center hover:bg-blue-300 p-2 rounded"
                    >
                         Create Snippet
                    </Link>
               </div>
               {snippets.map((snippet) => (
                    <div className="border mb-2 rounded-3 p-4" key={snippet.id}>
                         <div className="flex justify-between items-center">
                              <h2 className="font-bold text-xl mb-4">
                                   {snippet.title}
                              </h2>
                              <Link
                                   href={`/snippets/${snippet.id}`}
                                   className="hover:underline"
                              >
                                   View
                              </Link>
                         </div>
                         {/* <pre className="text-green-500">{snippet.code}</pre> */}
                    </div>
               ))}
          </div>
     );
}
