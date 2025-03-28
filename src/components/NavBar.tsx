"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Interests', path: '/speaking' },
  ];
  
  return (
    <div className="flex justify-center my-8">
      <nav className="bg-black rounded-full px-6 py-3 flex space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`text-sm font-medium transition-colors ${
              pathname === item.path
                ? 'text-white'
                : 'text-gray-100 hover:text-green-300'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
} 