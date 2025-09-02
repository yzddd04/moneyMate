'use client';

import { useState } from 'react';
import { Download, Calculator, ArrowLeft } from 'lucide-react';
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

export default function InvestmentCalculator() {
  const { theme } = useTheme();
  const [calculationType, setCalculationType] = useState<'lumpsum' | 'periodic'>('lumpsum');
  const [initialAmount, setInitialAmount] = useState<number>(10000000);
  const [targetAmount, setTargetAmount] = useState<number>(20000000);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(1000000);
  const [timeYears, setTimeYears] = useState<number>(5);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [calculationMode, setCalculationMode] = useState<'target' | 'fund'>('target');
  const [showResults, setShowResults] = useState(false);

  const calculateLumpSum = () => {
    const rate = returnRate / 100;
    if (calculationMode === 'target') {
      return initialAmount * Math.pow(1 + rate, timeYears);
    } else {
      return targetAmount / Math.pow(1 + rate, timeYears);
    }
  };

  const calculatePeriodic = () => {
    const monthlyRate = returnRate / 100 / 12;
    const months = timeYears * 12;
    const futureValue = monthlyAmount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate);
    return futureValue;
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const result = calculationType === 'lumpsum' ? calculateLumpSum() : calculatePeriodic();
  const totalInvestment = calculationType === 'lumpsum' ? initialAmount : monthlyAmount * timeYears * 12;
  const totalReturn = result - totalInvestment;

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
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
              <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900">Investment Calculator</h1>
            </div>
            <p className="mt-3 dark:text-gray-300 text-gray-600 max-w-4xl mx-auto">
              Compute investment targets or required funds using compound growth, including periodic contributions.
            </p>
          </div>

          {/* Single panel: form or results */}
          {!showResults ? (
            <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900 mb-6">Target Calculator</h2>
              
              {/* Calculation Mode */}
              <div className="mb-6">
                <label className="block dark:text-white text-gray-900 font-semibold mb-3">Calculation Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCalculationMode('target')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calculationMode === 'target'
                        ? 'border-blue-500 bg-blue-500/10 dark:text-white text-gray-900'
                        : 'dark:border-slate-700/50 border-gray-200/50 dark:text-gray-300 text-gray-600 hover:opacity-80'
                    }`}
                  >
                    Calculate Target Value
                  </button>
                  <button
                    onClick={() => setCalculationMode('fund')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calculationMode === 'fund'
                        ? 'border-blue-500 bg-blue-500/10 dark:text-white text-gray-900'
                        : 'dark:border-slate-700/50 border-gray-200/50 dark:text-gray-300 text-gray-600 hover:opacity-80'
                    }`}
                  >
                    Calculate Required Fund
                  </button>
                </div>
              </div>

              {/* Investment Type */}
              <div className="mb-6">
                <label className="block dark:text-white text-gray-900 font-semibold mb-3">Investment Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCalculationType('lumpsum')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calculationType === 'lumpsum'
                        ? 'border-blue-500 bg-blue-500/10 dark:text-white text-gray-900'
                        : 'dark:border-slate-700/50 border-gray-200/50 dark:text-gray-300 text-gray-600 hover:opacity-80'
                    }`}
                  >
                    Lump Sum
                  </button>
                  <button
                    onClick={() => setCalculationType('periodic')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      calculationType === 'periodic'
                        ? 'border-blue-500 bg-blue-500/10 dark:text-white text-gray-900'
                        : 'dark:border-slate-700/50 border-gray-200/50 dark:text-gray-300 text-gray-600 hover:opacity-80'
                    }`}
                  >
                    Periodic Investment
                  </button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-5">
                {calculationType === 'lumpsum' ? (
                  <>
                    {calculationMode === 'target' ? (
                      <div>
                        <label className="block dark:text-white text-gray-900 font-semibold mb-2">Initial Investment</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={formatCurrency(initialAmount)}
                          onChange={(e) => setInitialAmount(parseCurrencyInput(e.target.value))}
                          className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                          placeholder="Rp 0"
                        />
                        <div className="mt-4">
                          <input
                            type="range"
                            min={1000000}
                            max={1000000000}
                            step={1000000}
                            value={initialAmount}
                            onChange={(e) => setInitialAmount(Number(e.target.value))}
                            className="w-full accent-blue-600"
                          />
                          <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                            <span>Rp 1 juta</span>
                            <span>Rp1 miliar</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block dark:text-white text-gray-900 font-semibold mb-2">Target Value</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={formatCurrency(targetAmount)}
                          onChange={(e) => setTargetAmount(parseCurrencyInput(e.target.value))}
                          className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                          placeholder="Rp 0"
                        />
                        <div className="mt-4">
                          <input
                            type="range"
                            min={1000000}
                            max={2000000000}
                            step={1000000}
                            value={targetAmount}
                            onChange={(e) => setTargetAmount(Number(e.target.value))}
                            className="w-full accent-blue-600"
                          />
                          <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                            <span>Rp 1 juta</span>
                            <span>Rp2 miliar</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div>
                    <label className="block dark:text-white text-gray-900 font-semibold mb-2">Monthly Investment</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formatCurrency(monthlyAmount)}
                      onChange={(e) => setMonthlyAmount(parseCurrencyInput(e.target.value))}
                      className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      placeholder="Rp 0"
                    />
                    <div className="mt-4">
                      <input
                        type="range"
                        min={100000}
                        max={20000000}
                        step={100000}
                        value={monthlyAmount}
                        onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                        className="w-full accent-blue-600"
                      />
                      <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                        <span>Rp 100 ribu</span>
                        <span>Rp 20 juta</span>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block dark:text-white text-gray-900 font-semibold mb-2">Time Horizon (years)</label>
                  <input
                    type="number"
                    value={timeYears}
                    onChange={(e) => setTimeYears(Number(e.target.value))}
                    className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Enter time horizon"
                  />
                  <div className="mt-4">
                    <input
                      type="range"
                      min={1}
                      max={40}
                      step={1}
                      value={timeYears}
                      onChange={(e) => setTimeYears(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block dark:text-white text-gray-900 font-semibold mb-2">Expected Annual Return (%)</label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full p-4 rounded-xl dark:bg-slate-800/50 bg-white/50 dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    placeholder="Enter expected return"
                  />
                  <div className="mt-4">
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={returnRate}
                      onChange={(e) => setReturnRate(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-sm dark:text-gray-300 text-gray-600 mt-1">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={handleCalculate} className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">Calculate</button>
            </div>
          ) : (
              <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 dark:border-slate-700/50 border-gray-200/50">
                <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <button onClick={() => setShowResults(false)} className="inline-flex p-2 rounded-lg dark:text-gray-300 text-gray-600 hover:dark:text-white hover:text-gray-900 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">Results</h2>
                </div>
                {/* Download removed */}
                </div>

                {/* Summary Cards */}
                <div className="space-y-5">
                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">
                      {calculationMode === 'target' ? 'Target Value' : 'Required Fund'}
                    </h3>
                    <p className="text-3xl font-bold dark:text-white text-gray-900">
                      Rp {result.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">Total Return</h3>
                    <p className="text-2xl font-bold dark:text-white text-gray-900">
                      Rp {totalReturn.toLocaleString('id-ID')}
                    </p>
                    <p className="dark:text-blue-300 text-blue-700 mt-1">
                      {((totalReturn / totalInvestment) * 100).toFixed(1)}% of investment
                    </p>
                  </div>

                  <div className="rounded-xl p-6 border dark:border-blue-500/30 border-blue-200/60 bg-gradient-to-r from-blue-500/10 to-blue-400/10">
                    <h3 className="text-lg font-semibold dark:text-blue-300 text-blue-700 mb-2">Total Investment</h3>
                    <p className="text-2xl font-bold dark:text-white text-gray-900">
                      Rp {totalInvestment.toLocaleString('id-ID')}
                    </p>
                    {calculationType === 'periodic' && (
                      <p className="dark:text-blue-300 text-blue-700 mt-1">
                        Rp {monthlyAmount.toLocaleString('id-ID')} × {timeYears * 12} months
                      </p>
                    )}
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="mt-8 dark:bg-slate-800/40 bg-white/40 rounded-xl p-6">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Investment Breakdown</h3>
                  <div className="relative h-8 dark:bg-gray-700 bg-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg"
                      style={{ width: `${(totalInvestment / result) * 100}%` }}
                    ></div>
                    <div 
                      className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg"
                      style={{ width: `${(totalReturn / result) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-4 text-sm">
                    <span className="dark:text-blue-300 text-blue-700">Principal: {((totalInvestment / result) * 100).toFixed(1)}%</span>
                    <span className="dark:text-blue-300 text-blue-700">Return: {((totalReturn / result) * 100).toFixed(1)}%</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Investment Timeline</h3>
                  <div className="space-y-4">
                    {Array.from({ length: timeYears }, (_, i) => {
                      const year = i + 1;
                      const yearlyValue = calculationType === 'lumpsum' 
                        ? initialAmount * Math.pow(1 + returnRate / 100, year)
                        : monthlyAmount * ((Math.pow(1 + returnRate / 100 / 12, year * 12) - 1) / (returnRate / 100 / 12)) * (1 + returnRate / 100 / 12);
                      return (
                        <div key={year} className="flex items-center justify-between p-4 dark:bg-white/5 bg-gray-100 rounded-lg">
                          <span className="dark:text-gray-300 text-gray-700">Year {year}</span>
                          <span className="dark:text-white text-gray-900 font-semibold">
                            Rp {yearlyValue.toLocaleString('id-ID')}
                          </span>
                        </div>
                      );
                    })}
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