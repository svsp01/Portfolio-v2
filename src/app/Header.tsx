'use client'
import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './components/reusable/ThemeSwitcher';

const Header: React.FC = () => {
  return (
    <header className="border-b border-primaryColor dark:border-secondaryColor bg-secondaryColor dark:bg-primaryColor h-full grid grid-cols-[auto_1fr_auto] items-center">
      <div className="flex items-center justify-center border-primaryColor dark:border-secondaryColor border-e h-full px-4">
        <Link href="/">
          <div className="text-lg md:text-3xl font-mono text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap">
            Sakthi Vignesh
          </div>
        </Link>
      </div>
      <nav className="flex items-center h-full justify-end px-4">
        <div className="flex space-x-4 overflow-x-auto">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#collaboration">Collaboration</NavLink>
          <NavLink href="#request-quote">Services</NavLink>
          <NavLink href="#services">Contact</NavLink>
        </div>
      </nav>
      <div className="flex items-center  justify-center border-primaryColor dark:border-secondaryColor border-s h-full px-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="text-base md:text-lg font-mono text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap">
        {children}
      </div>
    </Link>
  );
};

export default Header;