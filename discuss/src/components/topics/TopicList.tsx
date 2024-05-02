import { db } from '@/db';
import path from '@/helpers/path';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

export default async function TopicList() {
     const topics = await db.topic.findMany();
     return (
          <div className="flex flex-row gap-3">
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
