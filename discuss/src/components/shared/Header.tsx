import {
     Navbar,
     NavbarBrand,
     NavbarContent,
     NavbarItem,
     Link,
     Input,
} from '@nextui-org/react';
import React from 'react';
import HeaderAuth from './HeaderAuth';

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
                         <Input />
                    </NavbarItem>
               </NavbarContent>

               <NavbarContent justify="end">
                    <HeaderAuth />
               </NavbarContent>
          </Navbar>
     );
}
