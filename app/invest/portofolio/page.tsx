'use client';

import { useState } from 'react';
import { Download, TrendingUp, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/lib/theme-context';
import Link from 'next/link';

const formatCurrency = (value: number): string => {
  if (!Number.isFinite(value)) return 'Rp 0';
  return 'Rp ' + new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(value);
};

const parseCurrencyInput = (input: string): number => {
  const digitsOnly = input.replace(/[^0-9]/g, '');
  return Number(digitsOnly || '0');
};

export default function InvestmentPortfolio() {
  const { theme } = useTheme();
  const [investmentAmount, setInvestmentAmount] = useState<number>(100000000);
  const [timeHorizon, setTimeHorizon] = useState<number>(5);
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');
  const [showResults, setShowResults] = useState(false);

  const portfolioAllocations = {
    conservative: { bonds: 60, stocks: 25, cash: 15, expectedReturn: 8, risk: 'Low' },
    moderate: { bonds: 40, stocks: 50, cash: 10, expectedReturn: 12, risk: 'Medium' },
    aggressive: { bonds: 20, stocks: 70, cash: 10, expectedReturn: 16, risk: 'High' }
  };

  const allocation = portfolioAllocations[riskProfile];
  const futureValue = investmentAmount * Math.pow(1 + allocation.expectedReturn / 100, timeHorizon);
  const totalReturn = futureValue - investmentAmount;

  const handleAnalyze = () => setShowResults(true);

  const downloadReport = () => {
    const data = { investmentAmount, timeHorizon, riskProfile, allocation, futureValue, totalReturn };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-analysis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900">Investment Portfolio</h1>
            </div>
            <p className="mt-3 dark:text-gray-300 text-gray-600 max-w-4xl mx-auto">
              Analyze portfolio allocation by risk profile and time horizon, then export a summary report.
            </p>
          </div>

          {/* Single panel: form or results */}
          {!showResults ? (
            <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 mb-6">Portfolio Analysis</h2>

              <div className="space-y-5">
                <div>
                  <label className="block dark:text-white text-gray-900 font-semibold mb-2">Investment Amount</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formatCurrency(investmentAmount)}
                    onChange={(e) => setInvestmentAmount(parseCurrencyInput(e.target.value))}
                    className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Rp 0"
                  />
                  {/* Amount slider */}
                  <div className="mt-4">
                    <input
                      type="range"
                      min={10000000}
                      max={1000000000}
                      step={1000000}
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                      <span>Rp 10 juta</span>
                      <span>Rp1 miliar</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block dark:text-white text-gray-900 font-semibold mb-2">Time Horizon (years)</label>
                  <input
                    type="number"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(Number(e.target.value))}
                    className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Enter time horizon"
                  />
                  {/* Time slider */}
                  <div className="mt-4">
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block dark:text-white text-gray-900 font-semibold mb-3">Risk Profile</label>
                  <div className="space-y-3">
                    {Object.entries(portfolioAllocations).map(([key, profile]) => (
                      <button
                        key={key}
                        onClick={() => setRiskProfile(key as 'conservative' | 'moderate' | 'aggressive')}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          riskProfile === key
                            ? 'border-blue-500 bg-blue-500/10 dark:text-white text-gray-900'
                            : 'dark:border-slate-700/50 border-gray-200/50 dark:text-gray-300 text-gray-600 hover:opacity-80'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold capitalize">
                            {key === 'conservative' ? 'Conservative' : key === 'moderate' ? 'Moderate' : 'Aggressive'}
                          </span>
                          <span className="text-sm">Return: {profile.expectedReturn}%</span>
                        </div>
                        <div className="text-sm mt-1 opacity-80">
                          Stocks {profile.stocks}% • Bonds {profile.bonds}% • Cash {profile.cash}%
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={handleAnalyze} className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">Analyze Portfolio</button>
            </div>
          ) : (
            <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <button onClick={() => setShowResults(false)} className="inline-flex p-2 rounded-lg dark:text-gray-300 text-gray-600 hover:dark:text:white hover:text-gray-900 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">Analysis Results</h2>
                </div>
                {/* Download removed */}
              </div>

                {/* Portfolio Summary */}
                <div className="space-y-5">
                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">Future Portfolio Value</h3>
                    <p className="text-3xl font-bold dark:text-white text-gray-900">Rp {futureValue.toLocaleString('id-ID')}</p>
                    <p className="dark:text-blue-300 text-blue-700 mt-1">In {timeHorizon} years</p>
                  </div>

                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">Total Return</h3>
                    <p className="text-2xl font-bold dark:text-white text-gray-900">Rp {totalReturn.toLocaleString('id-ID')}</p>
                    <p className="dark:text-blue-300 text-blue-700 mt-1">{((totalReturn / investmentAmount) * 100).toFixed(1)}% of initial investment</p>
                  </div>

                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">Risk Profile</h3>
                    <p className="text-xl font-bold dark:text-white text-gray-900 capitalize">
                      {riskProfile === 'conservative' ? 'Conservative' : riskProfile === 'moderate' ? 'Moderate' : 'Aggressive'}
                    </p>
                    <p className="dark:text-blue-300 text-blue-700 mt-1">Risk: {allocation.risk}</p>
                  </div>
                </div>

                {/* Asset Allocation */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Recommended Asset Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 dark:bg-white/5 bg-gray-100 rounded-lg">
                      <span className="dark:text-gray-300 text-gray-700">Stocks</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${allocation.stocks}%` }}></div>
                        </div>
                        <span className="dark:text-white text-gray-900 font-semibold w-12">{allocation.stocks}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 dark:bg-white/5 bg-gray-100 rounded-lg">
                      <span className="dark:text-gray-300 text-gray-700">Bonds</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full" style={{ width: `${allocation.bonds}%` }}></div>
                        </div>
                        <span className="dark:text-white text-gray-900 font-semibold w-12">{allocation.bonds}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 dark:bg-white/5 bg-gray-100 rounded-lg">
                      <span className="dark:text-gray-300 text-gray-700">Cash & Equivalents</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 dark:bg-gray-700 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-300 rounded-full" style={{ width: `${allocation.cash}%` }}></div>
                        </div>
                        <span className="dark:text-white text-gray-900 font-semibold w-12">{allocation.cash}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations removed */}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}