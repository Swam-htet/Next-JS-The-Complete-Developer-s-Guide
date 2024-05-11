import { Skeleton } from '@nextui-org/react';

export default function CommentShowLoading() {
     return (
          <div className="m-4">
               <div className="my-2">
                    <Skeleton className="h-8 w-48" />
               </div>
          </div>
     );
}
