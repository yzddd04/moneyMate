//  Mobile : 390 × 844 px
// Tablet : 820 × 1180 px
// Desktop : 1440 × 1024 px

'use client';

import Header from '@/components/Header';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background theme-transition">
      {/* Header */}
      <Header className="pt-4 sm:pt-6 md:pt-8"/>
      
      {/* Main Content with proper spacing for fixed header */}
      <div>

        {/* Hero Section */}
        <Hero />

        {/* Features: MateLearn & MateVest */}
        <Features />
        
        {/* Solutions: MateLearn & MateVest */}
        <Solutions />

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}