import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import Profile from '@/components/profile';

export default function Home() {
     return (
          <div>
               <form action={actions.SignIn}>
                    <Button color="primary" type="submit">
                         Sign In
                    </Button>
               </form>

               {/* <form action={actions.SignOut}>
                    <Button color="secondary" type="submit">
                         Sign Out
                    </Button>
               </form> */}

               <Profile />
          </div>
     );
}
