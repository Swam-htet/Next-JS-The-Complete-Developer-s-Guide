import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import Profile from '@/components/Profile';
import { auth } from '@/auth';

export default async function Home() {
     const session = await auth();
     return (
          <div className="flex gap-2">
               <form action={actions.signIn}>
                    <Button color="primary" type="submit">
                         Sign In
                    </Button>
               </form>

               <form action={actions.signOut}>
                    <Button color="secondary" type="submit">
                         Sign Out
                    </Button>
               </form>

               <Profile />
          </div>
     );
}
