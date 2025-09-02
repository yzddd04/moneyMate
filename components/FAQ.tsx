'use client';

import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';

const moneyMateInfo = [
  {
    question: 'What is MoneyMate?',
    answer: 'MoneyMate is a leading financial education platform that combines AI technology with interactive learning. We provide two core tools: MateLearn (education) and MateVest (investing) to help you master financial literacy.'
  },
  {
    question: 'Is MoneyMate free to use?',
    answer: 'Yes, MoneyMate offers free access to all core features. We believe financial education should be accessible to everyone. Some premium features are available for users who want a more advanced experience.'
  },
  {
    question: 'How do I get started with MoneyMate?',
    answer: 'Getting started is simple! Choose the feature you want from our tools. Each tool is designed for beginners with step-by-step guidance and safe interactive simulations.'
  },
  {
    question: 'Is MoneyMate safe to use?',
    answer: 'Security is our top priority. Your data is encrypted and stored securely. Investing features use virtual simulations, so you will not lose real money while learning.'
  },
  {
    question: 'Can I learn investing without risk?',
    answer: 'Absolutely! MateVest provides a virtual trading simulation that lets you learn investing without the risk of losing real money. Practice with real-time market data in a safe environment.'
  },
  {
    question: 'Is MoneyMate suitable for beginners?',
    answer: 'Definitely. MoneyMate is designed for beginners with easy-to-understand content, clear visualizations, and progressive learning. Each tool has difficulty levels you can adjust to your abilities.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-background theme-transition">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6">
            Everything You Need to Know About
            <br />
            <span className="text-blue-500 dark:text-blue-400">MoneyMate</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300 text-gray-700 px-4">
            Find answers to the most common questions about the leading financial education platform
            that helps you master financial literacy.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {moneyMateInfo.map((info, index) => (
            <div
              key={index}
              className="dark:bg-slate-800/30 bg-white/30 backdrop-blur-sm rounded-lg sm:rounded-xl dark:border-slate-700/50 border-gray-200/50 overflow-hidden shadow-lg"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:dark:bg-slate-700/20 hover:bg-gray-100/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="dark:text-white text-gray-900 font-medium pr-3 sm:pr-4 text-sm sm:text-base">{info.question}</span>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 dark:text-gray-400 text-gray-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <div className="dark:border-slate-700/50 border-gray-200/50 pt-3 sm:pt-4">
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">{info.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}