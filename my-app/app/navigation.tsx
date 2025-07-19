
import Link from 'next/link';
import './globals.css';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }){

    return(
        <>
        <nav className="bg-blue-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/posts/1">Post 1</Link>
                </li>
                <li>
                    <Link href="/posts/2">Post 2</Link>
                </li>
            
            </ul>
        </nav>

        <main className="p-4">
            {children}
        </main>

        </>
    )
}