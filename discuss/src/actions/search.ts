'use server';

import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
     const term = formData.get('term');
     console.log('Search server action is working , this is the term: ', term);
     if (typeof term !== 'string') {
          redirect('/');
     }
     redirect(`/search?term=${term}`);
}
