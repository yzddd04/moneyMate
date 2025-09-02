'use client';

import { Network, Zap, Layers, Shuffle, Shield, Users, Target, Bot, BookOpen, TrendingUp, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    icon: BookOpen,
    title: 'MateLearn',
    subtitle: 'Interactive Financial Education',
    description: 'Master your financial future with our comprehensive learning modules. From basic budgeting to advanced investment strategies, learn at your own pace with interactive tools and gamified experiences.',
    color: 'from-blue-500 to-cyan-500',
    image: '/matelearn.png'
  },
  {
    icon: TrendingUp,
    title: 'MateVest',
    subtitle: 'Investment Simulation & Education',
    description: 'Investment simulation and education, we provide three core tools to build your financial knowledge and strategy, featuring a calculator, portfolio analyzer, and personality assessment',
    color: 'from-blue-500 to-cyan-500',
    image: '/matevest.png'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-background theme-transition section-solutions">
      {/* Background decorative elements - Solutions Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 section-content">

        {/* Solutions Grid - 4 Forms with Alternating Layout */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 dark:border-slate-700/50 border-gray-200/50 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer shadow-lg"
            >
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
                {/* Image Section - Alternating Left/Right */}
                <div className={`order-2 ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}`}>
                  <div className="relative">
                    {/* Large Placeholder Image */}
                    <div className={`relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] rounded-2xl overflow-hidden dark:border-current/20 border-gray-200/50 flex items-center justify-center`}>
                      {solution.image ? (
                        <Image src={solution.image} alt={solution.title} fill className="object-cover" />
                      ) : (
                        <solution.icon className={`h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`} />
                      )}
                    </div>
                    
                    {/* Decorative dots removed for a cleaner look */}
                  </div>
                </div>

                {/* Text Content Section - Alternating Right/Left */}
                <div className={`order-1 ${index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'}`}>
                  <div className="space-y-6 sm:space-y-8 md:space-y-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className={`p-4 sm:p-5 rounded-2xl dark:bg-white/5 bg-slate-200/10 dark:border-current/20 border-gray-200/50`}>
                        <solution.icon className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500 dark:text-blue-400`} />
                        </div>
                        <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">{solution.title}</h3>
                        <p className="text-base sm:text-lg md:text-xl dark:text-gray-400 text-gray-600">{solution.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                      {solution.description}
                    </p>

                    {/* Action Button */}
                    <div className="pt-6">
                      <button className={`bg-gradient-to-r ${solution.color} hover:opacity-90 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-medium transition-all duration-200 text-base sm:text-lg md:text-xl flex items-center gap-3`}>
                        Get Started
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}