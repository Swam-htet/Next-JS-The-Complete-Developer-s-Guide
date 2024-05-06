import { db } from '@/db';
import path from '@/helpers/path';
import { Chip } from '@nextui-org/react';
import { Topic } from '@prisma/client';
import Link from 'next/link';

interface TopicListProps {
     fetchData: () => Promise<Topic[]>;
}
export default async function TopicList({ fetchData }: TopicListProps) {
     const topics = await fetchData();
     return (
          <div className="flex flex-row flex-wrap gap-3 w-full">
               {topics.map((topic) => (
                    <div key={topic.id}>
                         <Chip color="primary" variant="dot">
                              <Link href={path.topicShow(topic.slug)}>
                                   {topic.slug}
                              </Link>
                         </Chip>
                    </div>
               ))}
          </div>
     );
}
