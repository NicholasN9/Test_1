'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg fixed w-full top-0 z-50 border-b border-purple-100 dark:border-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform">
                                SocialSync
                            </h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                href="/"
                                className={`${
                                    pathname === '/'
                                        ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/upload"
                                className={`${
                                    pathname === '/upload'
                                        ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                            >
                                Create Post
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                    <Link
                        href="/"
                        className={`${
                            pathname === '/'
                                ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-500 text-purple-600 dark:text-purple-400'
                                : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                        } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/upload"
                        className={`${
                            pathname === '/upload'
                                ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-500 text-purple-600 dark:text-purple-400'
                                : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                        } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                    >
                        Create Post
                    </Link>
                </div>
            </div>
        </nav>
    );
} 