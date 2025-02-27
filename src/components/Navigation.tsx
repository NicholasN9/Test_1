'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-500">
                CreatorConnect
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/discover"
                className={`${
                  pathname === '/discover'
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Discover
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  className={`${
                    pathname === '/dashboard'
                      ? 'border-blue-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {user ? (
                <button
                  onClick={() => signOut()}
                  className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
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
                ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-white'
                : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href="/discover"
            className={`${
              pathname === '/discover'
                ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-white'
                : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Discover
          </Link>
          {user && (
            <Link
              href="/dashboard"
              className={`${
                pathname === '/dashboard'
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-white'
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 