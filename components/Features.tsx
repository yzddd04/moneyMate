'use client';

import { BookOpen, FileText, Calculator, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: 'MateLearn',
    description: 'Discover the latest insights, strategies, and tools to build wealth and achieve financial independence. Learn with our interactive video and article content.',
    features: ['Video & Articles', 'Progress Tracking'],
    color: 'from-blue-500 to-cyan-500',
    href: '/learn'
  },
  {
    icon: TrendingUp,
    title: 'MateVest',
    description: 'Investment simulation and education, we provide three core tools to build your financial knowledge and strategy, featuring a calculator, portfolio analyzer, and personality assessment.',
    features: ['Calculator', 'Portfolio Analyzer', 'Personality Assessment'],
    color: 'from-indigo-500 to-purple-500',
    href: '/invest'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-background theme-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6">
            Complete Financial Education Suite
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300 text-gray-700 max-w-3xl mx-auto px-4">
            Four powerful tools to transform your financial literacy and build lasting wealth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 dark:border-slate-700/50 border-gray-200/50 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 block h-full shadow-lg"
            >
              {/* Icon and Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className={`p-2.5 sm:p-3.5 rounded-2xl dark:bg-white/5 bg-slate-200/10 dark:border-current/20 border-gray-200/50`}>
                    <feature.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-500 dark:text-blue-400`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 leading-tight">{feature.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="dark:text-gray-300 text-gray-700 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                {feature.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {feature.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 dark:bg-blue-500/20 bg-blue-100/50 dark:text-blue-300 text-blue-700 rounded-full dark:border-blue-500/30 border-blue-200/50"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}