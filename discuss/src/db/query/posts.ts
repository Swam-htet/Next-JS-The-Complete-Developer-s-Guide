import type { Post } from '@prisma/client';
import { db } from '@/db';

export type PostWithData = Post & {
     topic: { slug: string };
     user: { name: string | null };
     _count: { comments: number };
};

export async function fetchPostsByTopicSlug(
     slug: string
): Promise<PostWithData[]> {
     // await new Promise((resolve) => setTimeout(resolve, 2000));
     return db.post.findMany({
          where: { topic: { slug } },
          include: {
               topic: { select: { slug: true } },
               user: { select: { name: true } },
               _count: { select: { comments: true } },
          },
     });
}

export async function fetchPostById(postId: string): Promise<Post | null> {
     await new Promise((resolve) => setTimeout(resolve, 2000));

     return db.post.findUnique({
          where: { id: postId },
     });
}

export async function fetchTopPosts(): Promise<PostWithData[]> {
     return db.post.findMany({
          take: 5,
          orderBy: [
               {
                    comments: {
                         _count: 'desc',
                    },
               },
          ],

          include: {
               topic: { select: { slug: true } },
               user: { select: { name: true } },
               _count: { select: { comments: true } },
          },
     });
}
