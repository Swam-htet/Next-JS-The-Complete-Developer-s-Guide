import { fetchPostById } from '@/db/query/posts';

interface PostShowProps {
     postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
     const post = await fetchPostById(postId);
     return (
          <div className="m-4">
               <h1 className="text-2xl font-bold my-2">{post?.title}</h1>
               <p className="p-4 border rounded">{post?.content}</p>
          </div>
     );
}
