import {
     Navbar,
     NavbarBrand,
     NavbarContent,
     NavbarItem,
     Link,
} from '@nextui-org/react';
import React, { Suspense } from 'react';
import HeaderAuth from './HeaderAuth';
import SearchInput from './SearchInput';

export default function Header() {
     return (
          <Navbar>
               <NavbarBrand>
                    <Link href="/" className="font-bold">
                         Discuss
                    </Link>
               </NavbarBrand>

               <NavbarContent className="justify-center">
                    <NavbarItem>
                         <Suspense>
                              <SearchInput />
                         </Suspense>
                    </NavbarItem>
               </NavbarContent>

               <NavbarContent justify="end">
                    <HeaderAuth />
               </NavbarContent>
          </Navbar>
     );
}
