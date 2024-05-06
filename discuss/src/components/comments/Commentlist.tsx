import CommentShow from '@/components/comments/CommentShow';
import { CommentWithUser, fetchCommentByPostId } from '@/db/query/comments';

interface CommentListProps {
     // fetchData: () => Promise<CommentWithUser[]>;
     postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
     const comments = await fetchCommentByPostId(postId);
     const topLevelComments = comments.filter(
          (comment) => comment.parentId === null
     );
     const renderedComments = topLevelComments.map((comment) => {
          return (
               <CommentShow
                    key={comment.id}
                    commentId={comment.id}
                    postId={postId}
               />
          );
     });

     return (
          <div className="space-y-3">
               <h1 className="text-lg font-bold">
                    All {comments.length} comments
               </h1>
               {renderedComments}
          </div>
     );
}
