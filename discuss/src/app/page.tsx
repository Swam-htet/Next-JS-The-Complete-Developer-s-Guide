import TopicCreateForm from '@/components/topics/TopicCreateForm';
import TopicList from '@/components/topics/TopicList';
import { Divider } from '@nextui-org/react';

export default function Home() {
     return (
          <div className="grid grid-cols-4 gap-4 p-4">
               <div className="col-span-3">
                    <h1>Home</h1>
               </div>
               <div>
                    <TopicCreateForm />
                    <Divider className="my-3" />
                    <>
                         <h1 className="text-lg my-2">Topics</h1>
                         <TopicList />
                    </>
               </div>
          </div>
     );
}
