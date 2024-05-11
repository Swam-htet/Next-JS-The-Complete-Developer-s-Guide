import PostList from '@/components/posts/PostList';
import PostShowLoading from '@/components/posts/PostShowLoading';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { fetchTopPostsBySearchTerm } from '@/db/query/posts';

interface SearchPageProps {
     searchParams: { term: string };
}
export default function SearchPage({
     searchParams: { term },
}: SearchPageProps) {
     if (!term) {
          redirect('/');
     }
     return (
          <div className="grid grid-cols-4 gap-4 p-4">
               <div className="col-span-3">
                    <h1>Home</h1>
                    <Suspense fallback={<PostShowLoading />}>
                         <PostList
                              fetchData={() => fetchTopPostsBySearchTerm(term)}
                         />
                    </Suspense>
               </div>
               {/* <div>
                    <TopicCreateForm />
                    <Divider className="my-3" />
                    <>
                         <h1 className="text-lg my-2">Topics</h1>
                         <TopicList fetchData={fetchTopics} />
                    </>
               </div> */}
          </div>
     );
}
