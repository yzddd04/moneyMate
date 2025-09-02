'use client';

import { useState } from 'react';
import { User, CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/lib/theme-context';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

const questions: Question[] = [
  { id: 1, question: 'What is your estimated investment period?', options: [
    { text: '≤ 1 Year', score: 1 }, { text: '1 – 3 Years', score: 2 }, { text: '3 – 5 Years', score: 3 }, { text: '5 – 10 Years', score: 4 }, { text: '> 10 Years', score: 5 }
  ]},
  { id: 2, question: 'Which statement best reflects your investment goal?', options: [
    { text: 'Very low risk investments, returns ≤ 5%', score: 1 }, { text: 'Low risk investments, returns 5–10%', score: 2 }, { text: 'Moderate risk investments, returns 10–30%', score: 3 }, { text: 'High risk investments, returns 30–50%', score: 4 }, { text: 'Very high risk investments, returns > 50%', score: 5 }
  ]},
  { id: 3, question: 'If you invest Rp 200 million, how much loss can you tolerate?', options: [
    { text: 'Do not want any loss at all', score: 0 }, { text: '≤ 5% (≤ Rp 10 million)', score: 1 }, { text: '5 – 10% (Rp 10 – 20 million)', score: 2 }, { text: '10 – 30% (Rp 20 – 60 million)', score: 3 }, { text: '> 30% (> Rp 60 million)', score: 5 }
  ]},
  { id: 4, question: 'What percentage of your net worth will you invest?', options: [
    { text: '≤ 25%', score: 1 }, { text: '25% – 50%', score: 2 }, { text: '50% – 75%', score: 3 }, { text: '75% – < 100%', score: 4 }, { text: '100%', score: 5 }
  ]},
  { id: 5, question: 'What is your investment knowledge and experience level?', options: [
    { text: 'No knowledge or experience at all', score: 1 }, { text: 'Know only basic products: savings, deposits, giro', score: 2 }, { text: 'Understand intermediate products: bonds, mutual funds, forex', score: 3 }, { text: 'Understand advanced products: stocks, balanced funds', score: 4 }, { text: 'Understand complex products: options, futures, derivatives', score: 5 }
  ]}
];

export default function InvestmentPersonality() {
  const { theme } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const getRiskProfile = (score: number) => {
    if (score <= 7) return { type: 'Conservative', color: 'blue', description: 'Suitable for safe investments with minimal risk such as deposits or money market funds' };
    if (score <= 14) return { type: 'Moderate', color: 'green', description: 'Can accept medium fluctuations, suitable for fixed income funds, balanced funds, bonds' };
    if (score <= 21) return { type: 'Aggressive', color: 'orange', description: 'Willing to take high risks for higher potential returns, suitable for stocks and equity funds' };
    return { type: 'Highly Aggressive', color: 'red', description: 'Very high risk tolerance, experienced, can invest in speculative/complex instruments' };
  };

  const riskProfile = getRiskProfile(totalScore);

  return (
    <div className={`min-h-screen bg-background theme-transition ${theme === 'dark' ? 'dark' : ''}`}>
      <Header className="pt-4 sm:pt-6 md:pt-8" />

      <section className="px-4 sm:px-6 lg:px-8 pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-40">
        <div className="max-w-6xl mx-auto">
          {/* Title header with Back at top-left (not inline with icon/title) */}
          <div className="relative mb-8 text-center">
            <Link href="/invest" className="absolute left-0 top-0 inline-flex p-2 rounded-lg dark:text-gray-300 text-gray-600 hover:dark:text-white hover:text-gray-900 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
              <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900">Investment Personality</h1>
            </div>
            <p className="mt-3 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              Assess your investing risk profile through a quick, structured questionnaire and get tailored product ideas.
            </p>
          </div>

          {!showResults ? (
            <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-0">
                  <span className="dark:text-white text-gray-900 font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6 leading-relaxed">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.score)}
                      className="w-full p-4 text-left dark:bg-white/5 bg-gray-100 border dark:border-white/20 border-gray-200 rounded-xl dark:text-white text-gray-900 hover:opacity-90 transition-all duration-200"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 dark:bg-white/10 bg-gray-200 dark:text-white text-gray-900 rounded-xl border dark:border-white/20 border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <div></div>
              </div>
            </div>
          ) : (
            <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
              <div className="mb-6 flex items-center gap-3">
                <button onClick={() => { setShowResults(false); setCurrentQuestion(0); }} className="inline-flex p-2 rounded-lg dark:text-gray-300 text-gray-600 hover:dark:text-white hover:text-gray-900 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">Your Risk Profile</h2>
              </div>
              {/* Completion Badge */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-2">Your Risk Profile</h2>
                <p className="dark:text-gray-300 text-gray-600">Based on your answers, here is your investment risk profile</p>
              </div>

              {/* Score Display removed */}

              {/* Risk Profile Result */}
              <div className={`rounded-xl p-8 mb-8 border bg-gradient-to-r from-blue-500/10 to-blue-400/10 dark:border-blue-500/30 border-blue-200/60`}>
                <div className="text-center">
                  <h3 className={`text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4`}>
                    {riskProfile.type}
                  </h3>
                  <p className="dark:text-white text-gray-900 text-lg leading-relaxed">
                    {riskProfile.description}
                  </p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="dark:bg-white/5 bg-gray-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">Recommended Investment Products</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {riskProfile.type === 'Conservative' && (
                    <>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Deposits</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">Stable returns 3–6% per year</p>
                      </div>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Money Market Fund</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">High liquidity, low risk</p>
                      </div>
                    </>
                  )}

                  {riskProfile.type === 'Moderate' && (
                    <>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Balanced Fund</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">Balance between stocks and bonds</p>
                      </div>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Corporate Bonds</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">Higher return than government bonds</p>
                      </div>
                    </>
                  )}

                  {(riskProfile.type === 'Aggressive' || riskProfile.type === 'Highly Aggressive') && (
                    <>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Individual Stocks</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">High potential return, volatile risk</p>
                      </div>
                      <div className="p-4 bg-blue-500/10 rounded-lg border dark:border-blue-500/30 border-blue-200/60">
                        <h4 className="font-semibold dark:text-blue-300 text-blue-700 mb-2">Equity Mutual Funds</h4>
                        <p className="dark:text-gray-300 text-gray-700 text-sm">Diversified stock portfolio managed by professionals</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}