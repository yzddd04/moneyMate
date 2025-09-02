'use client';

import { Building2, Globe, TrendingUp, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';

const stocks = [
  { 
    name: 'BNB', 
    fullName: 'Binance Coin',
    price: 856.59, 
    change: 1.65, 
    volume: '138M',
    isPositive: true 
  },
  { 
    name: 'SOL', 
    fullName: 'Solana',
    price: 203.35, 
    change: 7.70, 
    volume: '9.38M',
    isPositive: true 
  },
  { 
    name: 'XRP', 
    fullName: 'Ripple',
    price: 3.01, 
    change: 3.44, 
    volume: '6.58M',
    isPositive: true 
  },
  { 
    name: 'ADA', 
    fullName: 'Cardano',
    price: 0.861, 
    change: 2.69, 
    volume: '168M',
    isPositive: true 
  },
  { 
    name: 'AVAX', 
    fullName: 'Avalanche',
    price: 24.40, 
    change: 4.77, 
    volume: '589.7M',
    isPositive: true 
  },
  { 
    name: 'DOT', 
    fullName: 'Polkadot',
    price: 3.86, 
    change: 2.29, 
    volume: '240.8M',
    isPositive: true 
  },
  { 
    name: 'ETH', 
    fullName: 'Ethereum',
    price: 3245.67, 
    change: -1.23, 
    volume: '892.1M',
    isPositive: false 
  },
  { 
    name: 'BTC', 
    fullName: 'Bitcoin',
    price: 67890.45, 
    change: -0.87, 
    volume: '1.2B',
    isPositive: false 
  }
];

const stocks2 = [
  { 
    name: 'AAPL', 
    fullName: 'Apple Inc.',
    price: 185.92, 
    change: 2.34, 
    volume: '45.2M',
    isPositive: true 
  },
  { 
    name: 'MSFT', 
    fullName: 'Microsoft Corp.',
    price: 378.85, 
    change: 1.87, 
    volume: '23.1M',
    isPositive: true 
  },
  { 
    name: 'GOOGL', 
    fullName: 'Alphabet Inc.',
    price: 142.56, 
    change: -0.92, 
    volume: '18.7M',
    isPositive: false 
  },
  { 
    name: 'AMZN', 
    fullName: 'Amazon.com Inc.',
    price: 145.24, 
    change: 3.15, 
    volume: '32.4M',
    isPositive: true 
  },
  { 
    name: 'TSLA', 
    fullName: 'Tesla Inc.',
    price: 248.50, 
    change: -1.23, 
    volume: '67.8M',
    isPositive: false 
  },
  { 
    name: 'META', 
    fullName: 'Meta Platforms',
    price: 334.69, 
    change: 2.78, 
    volume: '15.3M',
    isPositive: true 
  },
  { 
    name: 'NVDA', 
    fullName: 'NVIDIA Corp.',
    price: 485.09, 
    change: 4.56, 
    volume: '42.1M',
    isPositive: true 
  },
  { 
    name: 'NFLX', 
    fullName: 'Netflix Inc.',
    price: 492.42, 
    change: -0.45, 
    volume: '8.9M',
    isPositive: false 
  }
];

const stats = [
  { icon: Building2, value: '500+', label: 'Companies' },
  { icon: Globe, value: '50+', label: 'Countries' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime' }
];

export default function Trust() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-background theme-transition section-trust">
      {/* Background decorative elements - Trust Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left decorative */}
        <div className="absolute top-32 left-32 w-72 h-72 dark:bg-blue-500/6 bg-blue-500/3 rounded-full blur-3xl animate-pulse decorative-element"></div>
        
        {/* Bottom right decorative */}
        <div className="absolute bottom-32 right-32 w-64 h-64 dark:bg-green-500/6 bg-green-500/3 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '1.5s'}}></div>
        
        {/* Center top decorative */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-80 h-80 dark:bg-purple-500/4 bg-purple-500/2 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 dark:bg-blue-400/25 bg-blue-500/15 rounded-full animate-bounce decorative-element" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 dark:bg-green-400/30 bg-green-500/20 rounded-full animate-bounce decorative-element" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 dark:bg-purple-400/35 bg-purple-500/25 rounded-full animate-bounce decorative-element" style={{animationDelay: '1.8s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full section-content">

        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6">
            MoneyMate
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300 text-gray-700 max-w-4xl mx-auto px-4">
            MoneyMate is a financial education platform that helps you learn about personal finance and investing.
          </p>
        </div>

        {/* Stock Market Ticker */}
        <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 marquee-container">
          <div className="flex animate-marquee whitespace-nowrap py-12">
            {stocks.map((stock, index) => (
              <div
                key={index}
                className="group relative flex items-center dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] cursor-pointer hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg stock-card-hover"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:bg-blue-500/20 bg-blue-100/50 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">{stock.name}</span>
                      </div>
                      <div>
                        <div className="dark:text-white text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{stock.name}</div>
                        <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">{stock.fullName}</div>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 sm:space-x-2 ${stock.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.isPositive ? <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />}
                      <span className="text-sm sm:text-base font-medium">{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="dark:text-white text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">${stock.price.toLocaleString('en-US')}</div>
                    <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">Vol: {stock.volume}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate untuk seamless loop */}
            {stocks.map((stock, index) => (
              <div
                key={`duplicate-${index}`}
                className="group relative flex items-center dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] cursor-pointer hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg stock-card-hover"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:bg-blue-500/20 bg-blue-100/50 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">{stock.name}</span>
                      </div>
                      <div>
                        <div className="dark:text-white text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{stock.name}</div>
                        <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">{stock.fullName}</div>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 sm:space-x-2 ${stock.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.isPositive ? <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />}
                      <span className="text-sm sm:text-base font-medium">{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="dark:text-white text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">${stock.price.toLocaleString('en-US')}</div>
                    <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">Vol: {stock.volume}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Market Ticker 2 */}
        <div className="overflow-hidden mt-6 sm:mt-8 md:mt-10 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 marquee-container">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-12">
            {stocks2.map((stock, index) => (
              <div
                key={index}
                className="group relative flex items-center dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] cursor-pointer hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg stock-card-hover"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:bg-blue-500/20 bg-blue-100/50 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">{stock.name}</span>
                      </div>
                      <div>
                        <div className="dark:text-white text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{stock.name}</div>
                        <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">{stock.fullName}</div>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 sm:space-x-2 ${stock.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.isPositive ? <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />}
                      <span className="text-sm sm:text-base font-medium">{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="dark:text-white text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">${stock.price.toLocaleString('en-US')}</div>
                    <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">Vol: {stock.volume}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate untuk seamless loop */}
            {stocks2.map((stock, index) => (
              <div
                key={`duplicate-${index}`}
                className="group relative flex items-center dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 mx-4 sm:mx-6 md:mx-8 lg:mx-10 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] cursor-pointer hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg stock-card-hover"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:bg-blue-500/20 bg-blue-100/50 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">{stock.name}</span>
                      </div>
                      <div>
                        <div className="dark:text-white text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{stock.name}</div>
                        <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">{stock.fullName}</div>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 sm:space-x-2 ${stock.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {stock.isPositive ? <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" /> : <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />}
                      <span className="text-sm sm:text-base font-medium">{stock.change > 0 ? '+' : ''}{stock.change}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="dark:text-white text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">${stock.price.toLocaleString('en-US')}</div>
                    <div className="dark:text-gray-400 text-gray-600 text-xs sm:text-sm">Vol: {stock.volume}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}