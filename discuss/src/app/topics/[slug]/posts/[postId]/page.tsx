import CommentCreateForm from '@/components/comments/CommentCreateForm';
import CommentList from '@/components/comments/Commentlist';
import PostShow from '@/components/posts/PostShow';
import { db } from '@/db';
import { fetchCommentByPostId } from '@/db/query/comments';
import Link from 'next/link';

interface PostShowPageProps {
     params: {
          postId: string;
          slug: string;
     };
}
export default async function PostShowPage({ params }: PostShowPageProps) {
     const { postId, slug } = params;
     const post = db.post.findUnique({
          where: { id: postId },
          include: { topic: true },
     });
     return (
          <div className="flex flex-col gap-10">
               <Link href={`/topics/${slug}`} className="hover:underline">
                    {'<'} Back to {slug}
               </Link>
               <PostShow postId={postId} />
               <CommentCreateForm postId={postId} />
               <CommentList postId={postId} />
          </div>
     );
}
