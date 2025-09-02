'use client';

import { useState } from 'react';
import { GraduationCap, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme-context';

export default function Header({ className = "" }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center ${className}`}>
      <div className="dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-4xl w-full mx-2 sm:mx-3 md:mx-4 shadow-lg">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white text-gray-900">MoneyMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            <Link href="/" className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-base xl:text-lg font-medium">
              Home
            </Link>
            <Link href="/learn" className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-base xl:text-lg font-medium">
              MateLearn
            </Link>
            <div className="relative group">
              <Link href="/invest" className="flex items-center gap-1 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-base xl:text-lg font-medium">
                MateVest
                <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="w-max dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-lg p-2 shadow-xl">
                  <Link href="/invest/calculator" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Calculator</Link>
                  <Link href="/invest/personality" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Personality</Link>
                  <Link href="/invest/portofolio" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Portfolio</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            <Link href="/" className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Home
            </Link>
            <Link href="/learn" className="dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              MateLearn
            </Link>
            <div className="relative group">
              <Link href="/invest" className="flex items-center gap-1 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
                MateVest
                <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="w-max dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-lg p-2 shadow-xl">
                  <Link href="/invest/calculator" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Calculator</Link>
                  <Link href="/invest/personality" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Personality</Link>
                  <Link href="/invest/portofolio" className="block whitespace-nowrap px-3 py-2 rounded-md dark:text-gray-200 text-gray-800 hover:dark:bg-white/10 hover:bg-gray-100">Investment Portfolio</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Theme Switch & Get Started Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 dark:text-white text-gray-900 hover:dark:text-blue-400 hover:text-blue-600"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            {/* Get Started Button */}
            <Link href="/learn" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden dark:text-white text-gray-900 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 py-3 sm:py-4 dark:border-white/10 border-gray-200/50">
            <div className="flex flex-col space-y-4">
              {/* Home Link */}
              <Link href="/" className="dark:text-white text-gray-900 hover:dark:text-gray-300 hover:text-gray-700 transition-colors text-base font-medium">
                Home
              </Link>
              {/* Links */}
              <Link href="/learn" className="block pl-0 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors text-base font-medium">
                MateLearn
              </Link>
              <Link href="/invest" className="block pl-0 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors text-base font-medium">
                MateVest
              </Link>

              {/* Theme Switch & Get Started Button */}
              <div className="pt-4 dark:border-white/10 border-gray-200/50 space-y-4">
                {/* Theme Switch */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={toggleTheme}
                    className="p-3 rounded-lg transition-all duration-200 dark:text-white text-gray-900 hover:dark:text-blue-400 hover:text-blue-600"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-6 w-6" />
                    ) : (
                      <Moon className="h-6 w-6" />
                    )}
                  </button>
                </div>
                {/* Get Started Button */}
                <Link href="/learn" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 text-base block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}