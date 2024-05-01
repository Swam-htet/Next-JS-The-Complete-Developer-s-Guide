import { auth } from '@/auth';
import {
     Navbar,
     NavbarBrand,
     NavbarContent,
     NavbarItem,
     Link,
     Button,
     Input,
     Avatar,
     PopoverContent,
     Popover,
     PopoverTrigger,
} from '@nextui-org/react';
import React from 'react';
import * as actions from '@/actions';

export default async function Header() {
     const session = await auth();

     const content: React.ReactNode = (
          <Popover placement="bottom">
               <PopoverTrigger>
                    <Avatar src={session?.user?.image || ''} />
               </PopoverTrigger>

               <PopoverContent>
                    <div className="p-4">
                         <form action={actions.signOut}>
                              <Button type="submit">Sign Out</Button>
                         </form>
                    </div>
               </PopoverContent>
          </Popover>
     );

     return (
          <Navbar>
               <NavbarBrand>
                    <Link href="/" className="font-bold">
                         Discuss
                    </Link>
               </NavbarBrand>

               <NavbarContent className="justify-center">
                    <NavbarItem>
                         <Input />
                    </NavbarItem>
               </NavbarContent>

               <NavbarContent justify="end">
                    {session?.user ? (
                         content
                    ) : (
                         <div className="flex gap-2">
                              <NavbarItem>
                                   <form action={actions.signIn}>
                                        <Button
                                             type="submit"
                                             color="secondary"
                                             variant="bordered"
                                        >
                                             Sign In
                                        </Button>
                                   </form>
                              </NavbarItem>
                              <NavbarItem>
                                   <form action={actions.signIn}>
                                        <Button
                                             type="submit"
                                             color="secondary"
                                             variant="shadow"
                                        >
                                             Sign Up
                                        </Button>
                                   </form>
                              </NavbarItem>
                         </div>
                    )}
               </NavbarContent>
          </Navbar>
     );
}
