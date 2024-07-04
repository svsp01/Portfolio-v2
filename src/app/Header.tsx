'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/reusable/ThemeSwitcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import NavLink from '@/components/reusable/NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="border-b border-primaryColor dark:border-secondaryColor bg-secondaryColor dark:bg-primaryColor h-full max-w-full"
      classNames={{
        wrapper: "px-0 max-w-full h-full overflow-x-hidden",
      }}
    >
      <div className="w-full grid grid-cols-[auto_1fr_auto]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden border-primaryColor dark:border-secondaryColor border-e rounded-none p-8"
        />
        <NavbarContent className="md:border-e border-primaryColor dark:border-secondaryColor  h-full">
          <NavbarBrand className='flex justify-center items-center'>
            <Link href="/">
              <div className="text-lg md:text-3xl font-serif font-bold text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap px-4">
                S V
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex justify-end px-4" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.href}-${index}`}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="border-none border-primaryColor dark:border-secondaryColor  h-full sm:px-4">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};



export default Header;