import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header>
      <ul>
        <li>
            <Link href="/"  className={currentRoute === '/' ? 'active' : 'nonActive'}>Home</Link>
        </li>
        <li>
            <Link href="/about"  className={currentRoute === '/about' ? 'active' : 'nonActive'}>About</Link>
        </li>
        <li>
            <Link href="/service"  className={currentRoute === '/service' ? 'active' : 'nonActive'}>Service</Link>
        </li>
        <li>
            <Link href="/contact"  className={currentRoute === '/contact' ? 'active' : 'nonActive'}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}
