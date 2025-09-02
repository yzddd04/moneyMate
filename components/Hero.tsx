'use client';

import { DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-background theme-transition section-hero">
      {/* Background decorative elements - Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right decorative */}
        <div className="absolute top-20 right-20 w-64 h-64 dark:bg-blue-500/8 bg-blue-500/4 rounded-full blur-3xl animate-pulse decorative-element"></div>
        
        {/* Bottom left decorative */}
        <div className="absolute bottom-20 left-20 w-80 h-80 dark:bg-cyan-500/6 bg-cyan-500/3 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '1s'}}></div>
        
        {/* Center subtle decorative */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 dark:bg-purple-500/4 bg-purple-500/2 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 dark:bg-blue-400/30 bg-blue-500/20 rounded-full animate-bounce decorative-element" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 dark:bg-cyan-400/40 bg-cyan-500/30 rounded-full animate-bounce decorative-element" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 dark:bg-purple-400/35 bg-purple-500/25 rounded-full animate-bounce decorative-element" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center section-content">
        {/* Left Content */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 text-center lg:text-left">

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white text-gray-900 leading-tight">
              <span className="text-green-500 dark:text-green-400">Educate</span>, <span className="text-blue-500 dark:text-blue-400">Calculate</span>,
              <br />
              with <span className="text-yellow-500 dark:text-yellow-400">MoneyMate</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300 text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Master your personal finances with our comprehensive platform. 
              Learn, track, calculate, plan, and invest with confidence through 
              interactive tools and calculation learning experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link href="/learn" className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 glow-effect text-sm sm:text-base md:text-lg">
              Get Started
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>

        {/* Right Side - Education Visualization */}
        <div className="relative flex items-center justify-center order-first lg:order-last">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 blur-xl sm:blur-2xl md:blur-3xl scale-110 sm:scale-125 md:scale-150 pulse-glow"></div>
            
            {/* Main container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-blue-500/30 dark:border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 backdrop-blur-sm"></div>
              
              {/* Money Icon */}
              <div className="relative z-10 float-animation">
                <DollarSign className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 text-blue-500 dark:text-blue-500 shield-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}