import { Topic } from '@prisma/client';
import { db } from '..';

export async function fetchTopics(): Promise<Topic[]> {
     return db.topic.findMany();
}
