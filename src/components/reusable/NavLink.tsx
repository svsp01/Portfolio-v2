import React from 'react'
import Link from 'next/link';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    return (
      <Link href={href}>
        <div className="relative text-base md:text-lg font-mono text-primaryColor dark:text-secondaryColor transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap group">
          {children}
          <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform dark:hover:text-blue-300 duration-300 origin-left"></span>
        </div>
      </Link>
    );
  };

export default NavLink