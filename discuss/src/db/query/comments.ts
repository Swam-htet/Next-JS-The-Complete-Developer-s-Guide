import { Comment } from '@prisma/client';
import { db } from '..';
import { cache } from 'react';

export type CommentWithUser = Comment & {
     user: {
          image: string | null;
          name: string | null;
     };
};

export const fetchCommentByPostId = cache(async function (
     postId: string
): Promise<CommentWithUser[]> {
     await new Promise((resolve) => setTimeout(resolve, 2000));
     return db.comment.findMany({
          where: { postId },
          include: { user: { select: { image: true, name: true } } },
          orderBy: { createdAt: 'asc' },
     });
});
