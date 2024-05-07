import CommentCreateForm from '@/components/comments/CommentCreateForm';
import CommentList from '@/components/comments/Commentlist';
import PostShow from '@/components/posts/PostShow';
import PostShowLoading from '@/components/posts/PostShowLoading';
import Link from 'next/link';
import { Suspense } from 'react';

interface PostShowPageProps {
     params: {
          postId: string;
          slug: string;
     };
}
export default async function PostShowPage({ params }: PostShowPageProps) {
     const { postId, slug } = params;
     return (
          <div className="flex flex-col gap-10">
               <Link href={`/topics/${slug}`} className="hover:underline">
                    {'<'} Back to {slug}
               </Link>
               <Suspense fallback={<PostShowLoading />}>
                    <PostShow postId={postId} />
               </Suspense>
               <CommentCreateForm postId={postId} />
               <CommentList postId={postId} />
          </div>
     );
}
