'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/reusable/ThemeSwitcher';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/collaboration", label: "Collaboration" },
    { href: "/services", label: "Services" },
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
        <NavbarContent className="border-e border-primaryColor dark:border-secondaryColor  h-full">
          <NavbarBrand className='flex justify-center items-center'>
            <Link href="/">
              <div className="text-lg md:text-3xl font-mono text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap px-4">
                Sakthi Vignesh
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex justify-end px-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.href}-${index}`}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="border-s border-primaryColor dark:border-secondaryColor  h-full sm:px-4">
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

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="relative text-base md:text-lg font-mono text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap group">
        {children}
        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </div>
    </Link>
  );
};

export default Header;