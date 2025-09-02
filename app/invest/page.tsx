'use client';

import { Calculator, TrendingUp, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/lib/theme-context';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen bg-background theme-transition ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Header */}
      <Header className="pt-4 sm:pt-6 md:pt-8" />

      {/* Hero Section */}
      <section className="text-center px-6 pt-24 pb-24 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32 lg:pt-36 lg:pb-40">
        <div className="max-w-4xl mx-auto mt-20 sm:mt-24">
          <h2 className="text-5xl font-bold dark:text-white text-gray-900 mb-6">
            MateVest
          </h2>
          <p className="text-xl dark:text-gray-300 text-gray-600 mb-12 leading-relaxed">
          MateVest is your comprehensive platform for investment education. We provide three core tools to build your financial knowledge and strategy, featuring a calculator, portfolio analyzer, and personality assessment.
          </p>
        </div>
      </section>

      {/* Main Tools Grid */}
      <section className="px-6 pb-24 sm:pb-28 md:pb-32 lg:pb-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Investment Calculator */}
            <Link href="/invest/calculator" className="group block h-full">
              <div className="h-full flex flex-col dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-8 dark:border-slate-700/50 border-gray-200/50 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">Investment Calculator</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
                  Calculate investment targets and required funds using accurate compound interest formulas
                </p>
                <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:opacity-80">
                  Start Calculating
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Investment Portfolio */}
            <Link href="/invest/portofolio" className="group block h-full">
              <div className="h-full flex flex-col dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-8 dark:border-slate-700/50 border-gray-200/50 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">Investment Portfolio</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
                  Analyze investment portfolios by duration and returns, with downloadable recommendations
                </p>
                <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:opacity-80">
                  Analyze Portfolio
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Investment Personality */}
            <Link href="/invest/personality" className="group block h-full">
              <div className="h-full flex flex-col dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-8 dark:border-slate-700/50 border-gray-200/50 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">Investment Personality</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
                  Discover your investment risk profile through a comprehensive questionnaire and get personalized recommendations
                </p>
                <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:opacity-80">
                  Start Assessment
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}