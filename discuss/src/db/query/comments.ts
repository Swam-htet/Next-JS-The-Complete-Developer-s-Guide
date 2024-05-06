import { Comment } from '@prisma/client';
import { db } from '..';

export type CommentWithUser = Comment & {
     user: {
          image: string | null;
          name: string | null;
     };
};

export async function fetchCommentByPostId(
     postId: string
): Promise<CommentWithUser[]> {
     console.log('DB Query Called!');

     return db.comment.findMany({
          where: { postId },
          include: { user: { select: { image: true, name: true } } },
          orderBy: { createdAt: 'asc' },
     });
}
