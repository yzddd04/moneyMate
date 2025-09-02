'use client';

import { useState, useEffect } from 'react';
import { Play, BookOpen, X, ChevronLeft, ChevronRight, CheckCircle, Clock, Users, TrendingUp, Search, Filter, Grid, List, Star, Bookmark, Share2, Instagram, Mail, MessageCircle, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface EducationItem {
  id: number;
  title: string;
  type: 'video' | 'article';
  duration: string;
  difficulty: 'Video' | 'Article';
  progress: number;
  thumbnail: string;
  description: string;
  content: string;
  fullContent?: string;
  author: string;
  views: string;
  category: string;
  rating: number;
  tags: string[];
  isBookmarked: boolean;
}

const featuredItems: EducationItem[] = [
  {
    id: 1,
    title: "Understanding Cryptocurrency: Complete Guide for 2025",
    type: 'video',
    duration: '25 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn the fundamentals of cryptocurrency, blockchain technology, and how to safely invest in digital assets.',
    content: 'This comprehensive video course covers everything you need to know about cryptocurrency...',
    author: 'Sarah Johnson',
    views: '15.2K',
    category: 'Cryptocurrency',
    rating: 4.8,
    tags: ['blockchain', 'digital assets', 'investment'],
    isBookmarked: false
  },
  {
    id: 2,
    title: "Building Your Emergency Fund: A Step-by-Step Guide",
    type: 'article',
    duration: '8 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Essential strategies for building and maintaining an emergency fund that will protect your financial future.',
    content: 'Building an emergency fund is one of the most important financial decisions you can make...',
    fullContent: `An emergency fund is the financial buffer that protects you from life’s uncertainties without forcing you into high-interest debt. Think of it as the shock absorber for your budget: when the car hits a pothole, the absorber keeps you on track. The same principle applies to money. Medical bills, job loss, urgent travel, or an unexpected home repair are not edge cases—they are eventualities. A well-built emergency fund lets you handle them with calm and control.

The first step is defining your target. A common rule of thumb is three to six months of essential living expenses, but your situation may call for more or less. If your income is variable, you are self-employed, or you support dependents, aim toward the higher end—perhaps nine months. Essential expenses include rent or mortgage, utilities, groceries, transportation, insurance, and minimum debt payments. Exclude luxuries and discretionary spending. List these items and total them. This is your monthly baseline; multiply by your chosen months to get a clear savings target.

Next, select the right storage vehicle. The fund should be safe, liquid, and separate from your daily spending. High-yield savings accounts, money market accounts, or short-term treasury-backed funds are ideal because they preserve capital and allow quick access. Avoid stocks or long-term instruments that fluctuate or lock your money for extended periods. Your emergency fund is not an investment for return—it is insurance against risk.

Build momentum with a realistic plan. Automate transfers on payday—pay yourself first—so the habit is effortless. Start small if necessary: even 5–10% of your income builds confidence and consistency. Use windfalls such as tax refunds, annual bonuses, or the proceeds of selling unused items to accelerate progress. Track your growth visually; seeing the balance rise reinforces motivation.

Reduce friction by tightening expenses temporarily. Review subscriptions, renegotiate bills, cook at home, and set short sprints: “This month I’ll add an extra Rp 300.000.” Pair this with income boosters—freelance gigs, overtime, or selling clutter. Each extra rupiah gets you closer to peace of mind.

Establish clear rules for use. Only dip into the emergency fund for genuine necessities that are urgent, unexpected, and important: car engine failure, medical co-pays, or bridging income during job transitions. A sale at your favorite store does not qualify. When you do withdraw, create a recovery plan to replenish the balance as soon as possible, just like refilling a fire extinguisher after use.

Finally, keep the fund dynamic. Reassess your target annually, especially after major life changes—moving cities, having a child, or taking on a mortgage. As your expenses evolve, so should the fund. Once you hit your target, redirect monthly contributions to investing, debt payoff beyond minimums, or other goals, but maintain the emergency fund as a stable cornerstone of your financial strategy.

An emergency fund is not about fear; it is about freedom. It buys you time to think, negotiate, and act wisely when life gets noisy. Start today with the first transfer, however small. Consistency compounded over months will transform vulnerability into resilience.`,
    author: 'Michael Chen',
    views: '8.7K',
    category: 'Savings',
    rating: 4.6,
    tags: ['emergency fund', 'savings', 'financial security'],
    isBookmarked: false
  },
  {
    id: 3,
    title: "Investment Portfolio Diversification Strategies",
    type: 'video',
    duration: '32 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master the art of portfolio diversification to minimize risk and maximize returns.',
    content: 'Portfolio diversification is a crucial investment strategy that helps manage risk...',
    author: 'David Rodriguez',
    views: '12.3K',
    category: 'Investing',
    rating: 4.9,
    tags: ['portfolio', 'diversification', 'risk management'],
    isBookmarked: false
  },
  {
    id: 4,
    title: "Tax Optimization Techniques for High Earners",
    type: 'article',
    duration: '12 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced tax strategies to legally minimize your tax burden and maximize your wealth.',
    content: 'Tax optimization is a sophisticated approach to managing your tax liability...',
    fullContent: `For high earners, taxes are often the single largest annual expense. Effective optimization is not about evasion—it is about legally aligning your income, investments, and business structure with the incentives built into the tax code. The goal is to preserve capital for productive use while remaining fully compliant.

Begin by choosing the right entity for your work. If you operate a business or earn substantial freelance income, compare sole proprietorship, limited liability company, and corporation frameworks. The optimal choice balances liability protection, payroll flexibility, retirement plan options, and pass-through deductions. Consider whether electing S-corp status could reduce self-employment taxes by paying a reasonable salary and taking remaining profit as distributions.

Maximize retirement contributions. High earners should prioritize tax-advantaged accounts: employer 401(k) or 403(b), backdoor Roth IRA strategies when eligible, and defined benefit or cash balance plans for entrepreneurs with consistent profits. These vehicles defer or eliminate taxes on growth and help diversify future taxable and tax-free income streams.

Harvest losses and locate assets smartly. Use tax-loss harvesting in brokerage accounts to offset capital gains and up to a limited amount of ordinary income. Place income-generating assets (bonds, REITs) in tax-deferred accounts and hold tax-efficient stock index funds in taxable accounts. When donating, contribute appreciated securities rather than cash to avoid capital gains while claiming charitable deductions.

Leverage employer benefits. Health Savings Accounts (HSAs) offer triple tax advantages when paired with high-deductible plans: deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses. Dependent care FSA, commuter benefits, and group legal plans can also reduce taxable income. Document everything meticulously.

For real estate investors, evaluate cost segregation studies to accelerate depreciation, consider 1031 exchanges to defer gains when swapping properties, and keep excellent records of improvements that adjust basis. If you or your spouse qualify as a real estate professional under the rules, certain passive losses may offset active income.

International exposure requires special care: foreign tax credits, treaty considerations, and controlled foreign corporation rules can materially affect liabilities. Always coordinate with a qualified tax professional when your footprint crosses borders.

Finally, plan multi-year. Income bunching, timing of bonuses, charitable lumping via donor-advised funds, and the sequence of exercising stock options can change your bracket outcomes. Tax optimization is not a once-a-year scramble; it is a strategic rhythm. Build a calendar, run projections, and revisit after major life events.

The outcome of diligent planning is flexibility: more capital compounding for your goals and fewer surprises each April. Compliance plus strategy equals advantage.`,
    author: 'Emily Watson',
    views: '9.8K',
    category: 'Tax Planning',
    rating: 4.7,
    tags: ['tax optimization', 'high earners', 'wealth management'],
    isBookmarked: false
  },
  {
    id: 5,
    title: "Real Estate Investment for Beginners",
    type: 'video',
    duration: '28 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Everything you need to know to start investing in real estate and building passive income.',
    content: 'Real estate investment can be one of the most reliable paths to building wealth...',
    author: 'James Thompson',
    views: '18.5K',
    category: 'Real Estate',
    rating: 4.5,
    tags: ['real estate', 'passive income', 'property investment'],
    isBookmarked: false
  }
];

const allItems: EducationItem[] = [
  ...featuredItems,
  {
    id: 6,
    title: "Budgeting Mastery: The 50/30/20 Rule",
    type: 'article',
    duration: '6 min read',
    difficulty: 'Article',
    progress: 75,
    thumbnail: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master your finances with the proven 50/30/20 budgeting method.',
    content: 'The 50/30/20 rule is a simple yet effective budgeting framework...',
    author: 'Lisa Park',
    views: '22.1K',
    category: 'Budgeting',
    rating: 4.4,
    tags: ['budgeting', '50/30/20 rule', 'personal finance'],
    isBookmarked: false
  },
  {
    id: 7,
    title: "Understanding Stock Market Fundamentals",
    type: 'video',
    duration: '45 min',
    difficulty: 'Video',
    progress: 30,
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Deep dive into stock market basics, analysis techniques, and investment strategies.',
    content: 'The stock market can seem intimidating, but understanding the fundamentals...',
    author: 'Robert Kim',
    views: '31.4K',
    category: 'Stock Market',
    rating: 4.8,
    tags: ['stock market', 'fundamentals', 'analysis'],
    isBookmarked: false
  },
  {
    id: 8,
    title: "Retirement Planning in Your 20s and 30s",
    type: 'article',
    duration: '10 min read',
    difficulty: 'Article',
    progress: 100,
    thumbnail: 'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Start planning for retirement early and secure your financial future.',
    content: 'Starting retirement planning in your 20s and 30s gives you a huge advantage...',
    author: 'Amanda Foster',
    views: '16.7K',
    category: 'Retirement',
    rating: 4.6,
    tags: ['retirement', 'early planning', 'financial future'],
    isBookmarked: false
  },
  {
    id: 9,
    title: "Credit Score Optimization Guide",
    type: 'video',
    duration: '20 min',
    difficulty: 'Video',
    progress: 60,
    thumbnail: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn how to improve and maintain an excellent credit score for better financial opportunities.',
    content: 'Your credit score is one of the most important financial metrics...',
    author: 'Mark Stevens',
    views: '13.9K',
    category: 'Credit',
    rating: 4.5,
    tags: ['credit score', 'credit optimization', 'financial health'],
    isBookmarked: false
  },
  {
    id: 10,
    title: "Options Trading Strategies for Beginners",
    type: 'article',
    duration: '15 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore basic options trading strategies and risk management techniques.',
    content: 'Options trading can be a powerful tool for generating income and managing risk...',
    fullContent: `Options are flexible contracts that provide the right, but not the obligation, to buy or sell an asset at a fixed price before a certain date. For beginners, the key is to treat options as structured risk tools—not lottery tickets. Understanding mechanics and position sizing is more important than chasing quick wins.

Start with calls and puts. A call option gains value when the underlying price rises; a put gains when the price falls. The strike price, expiration, and premiums define your payoff. Beginners should first master long calls and long puts on liquid, large-cap names, risking only small amounts while learning.

Covered calls are a conservative income strategy: you own 100 shares and sell a call against them, earning premium while capping upside beyond the strike. This works well in sideways or modestly bullish markets and can be repeated monthly. Cash-secured puts are the mirror image: you set aside cash to potentially buy shares at a discount, earning premium for agreeing to do so.

Spreads introduce defined risk. A vertical spread—buying one option and selling another at a different strike—limits both potential gain and loss, making it suitable for accounts that prioritize risk control. Credit spreads, such as bull put spreads or bear call spreads, profit from time decay and moderate price movement, but require disciplined exit rules.

Greeks—delta, theta, vega, and gamma—measure sensitivity to price, time, and volatility. Theta decay means options lose value as expiration approaches; selling strategies benefit from this, while buyers must be right on timing. Volatility matters; buying when implied volatility is low and selling when it is high improves odds over many trades.

Risk management is non-negotiable. Position size each trade so a single loss cannot derail your portfolio—many traders cap risk at 1–2% of equity per position. Set exit triggers: take profits when 50–75% of premium is captured, and cut losses quickly if the thesis fails. Avoid holding positions into major binary events unless that is the intention.

Finally, keep a journal. Document setup, rationale, entry, exit, and what you learned. Over dozens of trades, patterns emerge. Options trading can complement long-term investing when approached with humility and process. Simplicity, defined risk, and consistency are your advantages.`,
    author: 'Jennifer Liu',
    views: '7.2K',
    category: 'Options Trading',
    rating: 4.3,
    tags: ['options trading', 'strategies', 'risk management'],
    isBookmarked: false
  },
  {
    id: 11,
    title: "Personal Finance Apps and Tools Review",
    type: 'video',
    duration: '18 min',
    difficulty: 'Video',
    progress: 45,
    thumbnail: 'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive review of the best personal finance apps and digital tools.',
    content: 'Managing your finances has never been easier with these digital tools...',
    author: 'Alex Turner',
    views: '11.8K',
    category: 'Technology',
    rating: 4.7,
    tags: ['apps', 'tools', 'digital finance'],
    isBookmarked: false
  },
  {
    id: 12,
    title: "Insurance Essentials: Protecting Your Wealth",
    type: 'article',
    duration: '9 min read',
    difficulty: 'Article',
    progress: 20,
    thumbnail: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Understanding different types of insurance and how they protect your financial future.',
    content: 'Insurance is a critical component of a comprehensive financial plan...',
    fullContent: `Insurance converts a large, unpredictable loss into a small, predictable premium. It is the safety net that keeps a single event from undoing years of savings. The challenge is determining which policies you truly need, how much coverage is appropriate, and how to avoid paying for overlapping or unnecessary features.

Start with health insurance—it is foundational. A serious illness or injury can produce bills that overwhelm any emergency fund. Understand your deductible, out-of-pocket maximum, and network rules. If available, pair a high-deductible plan with a Health Savings Account to gain tax advantages.

Next, protect your income. Disability insurance replaces a portion of your paycheck if you cannot work due to illness or injury. Prioritize own-occupation definitions and consider supplemental coverage if employer plans are limited. Life insurance is essential for anyone with dependents or debts that would burden others. Term insurance offers the best value for pure protection; match the term to your obligations, such as the years until children are independent or the mortgage is paid off.

Property and liability insurance shield your assets. Homeowners or renters policies cover personal property and provide liability protection if someone is injured on your premises. Auto insurance should include adequate liability limits and, when appropriate, comprehensive and collision coverage. An umbrella policy sits on top of these and can be surprisingly inexpensive for the additional protection it offers.

For entrepreneurs, consider business interruption, professional liability, and cyber risk policies. Evaluate key person insurance if the company relies heavily on a founder’s skills. Review policy exclusions carefully; the fine print matters most on the worst day.

Buy intelligently. Shop quotes from multiple carriers, raise deductibles to reduce premiums, and bundle policies when discounts make sense. Keep an organized record of valuables with photos and receipts to streamline claims. Reassess annually, especially after life changes, purchases, or renovations.

Insurance is not about pessimism; it is about resilience. By transferring catastrophic risks to an insurer, you preserve your capital for growth and goals. Done right, insurance quietly supports your financial plan, allowing you to focus on building wealth rather than worrying about losing it.`,
    author: 'Rachel Green',
    views: '14.5K',
    category: 'Insurance',
    rating: 4.4,
    tags: ['insurance', 'wealth protection', 'risk mitigation'],
    isBookmarked: false
  },
  {
    id: 13,
    title: "Smart Budget Planning: Zero-Based Budgeting Method",
    type: 'video',
    duration: '22 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master the zero-based budgeting technique to take complete control of your finances.',
    content: 'Zero-based budgeting is a powerful method where every dollar has a specific purpose...',
    author: 'Maria Santos',
    views: '19.3K',
    category: 'Budget Planning',
    rating: 4.7,
    tags: ['zero-based budgeting', 'budget planning', 'financial control'],
    isBookmarked: false
  },
  {
    id: 14,
    title: "Investment Fundamentals: Building Your First Portfolio",
    type: 'video',
    duration: '35 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn the essential principles of investing and how to build your first investment portfolio.',
    content: 'Building your first investment portfolio can seem overwhelming, but with the right foundation...',
    author: 'Kevin Zhang',
    views: '25.8K',
    category: 'Investment',
    rating: 4.9,
    tags: ['investment fundamentals', 'portfolio building', 'first-time investors'],
    isBookmarked: false
  },
  {
    id: 15,
    title: "Personal Finance Management: From Debt to Wealth",
    type: 'article',
    duration: '12 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Transform your financial situation by mastering personal finance management techniques.',
    content: 'Personal finance management is the foundation of building wealth and achieving financial freedom...',
    fullContent: `Transforming finances begins with clarity. List every account, debt, bill, and subscription. Calculate net worth: assets minus liabilities. Track spending for 30 days to reveal patterns. Awareness precedes change. With data in hand, create a zero-based budget where every rupiah is assigned a job: essentials, goals, and joy. Automate fixed bills and savings to reduce decision fatigue.

Attack debt using a structured method. The avalanche prioritizes highest interest rates to minimize cost; the snowball emphasizes quick wins by paying the smallest balances first. Choose the method that keeps you motivated. Negotiate rates, refinance where prudent, and avoid new debt while you are in payoff mode. Celebrate milestones; momentum compounds.

Build buffers. A starter emergency fund of one month’s expenses protects your plan from derailing at the first surprise. Then expand toward three to six months. Simultaneously, capture employer retirement matches—it is a guaranteed return. As debt falls and savings rise, redirect cash flow to diversified investments aligned with your risk profile and time horizon.

Increase income deliberately. Upskill through courses, request responsibility that leads to raises, freelance, or build a small business. Direct every new rupiah toward goals rather than lifestyle creep. Periodically review insurance, taxes, and banking fees to eliminate leaks.

Design systems that make good behavior easy. Use separate accounts for bills, spending, and savings. Schedule a weekly money date to review transactions and a monthly review to adjust goals. Visual dashboards or habit trackers reinforce progress and make finances feel rewarding.

Finally, align money with meaning. Define the life you want—freedom to travel, time with family, or launching a venture—and let those values guide your allocations. Wealth is not just a number; it is the capacity to live intentionally. With consistency and a clear plan, the journey from debt to wealth becomes not only possible but predictable.`,
    author: 'Sarah Williams',
    views: '16.2K',
    category: 'Personal Finance',
    rating: 4.6,
    tags: ['personal finance', 'debt management', 'wealth building'],
    isBookmarked: false
  },
  {
    id: 16,
    title: "Advanced Budgeting: Envelope System and Cash Flow Management",
    type: 'video',
    duration: '28 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the envelope system and advanced cash flow management strategies.',
    content: 'The envelope system is a time-tested method for managing discretionary spending...',
    author: 'David Chen',
    views: '13.7K',
    category: 'Budget Planning',
    rating: 4.5,
    tags: ['envelope system', 'cash flow', 'spending control'],
    isBookmarked: false
  },
  {
    id: 17,
    title: "Investment Strategies: Value vs Growth Investing",
    type: 'article',
    duration: '15 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Compare value and growth investing strategies to find your perfect investment approach.',
    content: 'Understanding the difference between value and growth investing is crucial for building a successful portfolio...',
    author: 'Michael Rodriguez',
    views: '11.9K',
    category: 'Investment',
    rating: 4.8,
    tags: ['value investing', 'growth investing', 'investment strategies'],
    isBookmarked: false
  },
  {
    id: 18,
    title: "Financial Goal Setting: Creating Your Roadmap to Success",
    type: 'video',
    duration: '20 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn how to set and achieve your financial goals with proven planning techniques.',
    content: 'Setting clear financial goals is the first step toward achieving financial success...',
    author: 'Lisa Thompson',
    views: '18.4K',
    category: 'Personal Finance',
    rating: 4.7,
    tags: ['goal setting', 'financial planning', 'success roadmap'],
    isBookmarked: false
  },
  {
    id: 19,
    title: "Passive Income Strategies: Building Multiple Revenue Streams",
    type: 'article',
    duration: '14 min read',
    difficulty: 'Article',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore various passive income strategies to build sustainable wealth over time.',
    content: 'Passive income is the key to financial freedom and building long-term wealth...',
    author: 'Alex Johnson',
    views: '22.6K',
    category: 'Investment',
    rating: 4.9,
    tags: ['passive income', 'revenue streams', 'wealth building'],
    isBookmarked: false
  },
  {
    id: 20,
    title: "Money Mindset: Psychology of Personal Finance",
    type: 'video',
    duration: '25 min',
    difficulty: 'Video',
    progress: 0,
    thumbnail: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Understand the psychology behind financial decisions and develop a healthy money mindset.',
    content: 'Your relationship with money is deeply psychological and affects every financial decision you make...',
    author: 'Dr. Emily Chen',
    views: '14.8K',
    category: 'Personal Finance',
    rating: 4.6,
    tags: ['money mindset', 'financial psychology', 'behavioral finance'],
    isBookmarked: false
  }
];

export default function FinancialEducationPage() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);
  const [userProgress, setUserProgress] = useState<{ [key: number]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  const [sharePopup, setSharePopup] = useState<{ show: boolean; item: EducationItem | null }>({ show: false, item: null });
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', ...Array.from(new Set(allItems.map(item => item.category)))];
  const difficulties = ['All', 'Video', 'Article'];

  useEffect(() => {
    // Initialize user progress from localStorage or default values
    const savedProgress = localStorage.getItem('financial-education-progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    } else {
      const initialProgress = allItems.reduce((acc, item) => {
        acc[item.id] = item.progress;
        return acc;
      }, {} as { [key: number]: number });
      setUserProgress(initialProgress);
    }

    // Load bookmarked items
    const savedBookmarks = localStorage.getItem('financial-education-bookmarks');
    if (savedBookmarks) {
      setBookmarkedItems(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    // Save progress to localStorage whenever it changes
    localStorage.setItem('financial-education-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    // Save bookmarks to localStorage whenever it changes
    localStorage.setItem('financial-education-bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closeModal();
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedItem]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  // Auto-advance carousel with 5-second intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]); // Reset timer when currentSlide changes

  const openModal = (item: EducationItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const updateProgress = (itemId: number, progress: number) => {
    setUserProgress(prev => ({
      ...prev,
      [itemId]: progress
    }));
  };

  const toggleBookmark = (itemId: number) => {
    setBookmarkedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const openSharePopup = (item: EducationItem) => {
    setSharePopup({ show: true, item });
  };

  const closeSharePopup = () => {
    setSharePopup({ show: false, item: null });
  };

  const shareContent = (platform: string) => {
    const item = sharePopup.item;
    if (!item) return;

    const url = window.location.href;
    const text = `Check out this amazing course: ${item.title}`;
    const hashtags = item.tags.join(',');

    let shareUrl = '';
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, show message
        alert('To share on Instagram, copy the link and paste it in your Instagram story or post!');
        return;
      case 'tiktok':
        // TikTok doesn't support direct sharing via URL, show message
        alert('To share on TikTok, copy the link and paste it in your TikTok video description!');
        return;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    closeSharePopup();
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-gray-200 dark:bg-gray-700';
    if (progress < 50) return 'bg-yellow-400 dark:bg-yellow-500';
    if (progress < 100) return 'bg-blue-500 dark:bg-blue-400';
    return 'bg-green-500 dark:bg-green-400';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Video': return 'bg-black text-white';
      case 'Article': return 'bg-blue-600 text-white';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Reset visible count when filters/search change
  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const averageProgress = Math.round(Object.values(userProgress).reduce((acc, curr) => acc + curr, 0) / Object.keys(userProgress).length);

  return (
    <div className={`min-h-screen bg-background theme-transition ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Header */}
      <Header className="pt-4 sm:pt-6 md:pt-8" />

      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 dark:bg-blue-500/8 bg-blue-500/4 rounded-full blur-3xl animate-pulse decorative-element"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 dark:bg-cyan-500/6 bg-cyan-500/3 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 dark:bg-purple-500/4 bg-purple-500/2 rounded-full blur-3xl animate-pulse decorative-element" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="w-full relative z-10 px-3">
          {/* Carousel */}
          <div className="relative dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden dark:border-slate-700/50 border-gray-200/50 mt-[120px] mb-[200px]">
            <div className="relative h-[550px] sm:h-[650px] md:h-[750px] lg:h-[850px] xl:h-[900px]">
              {featuredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8 !text-white">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                          <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight !text-white">
                          {item.title}
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl leading-relaxed !text-white">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center space-x-2">
                            {item.type === 'video' ? <Play className="w-5 h-5 !text-white" /> : <BookOpen className="w-5 h-5 !text-white" />}
                            <span className="!text-white">{item.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 !text-white" />
                            <span className="!text-white">{item.views} views</span>
                          </div>
                        </div>
                        <button
                          onClick={() => openModal(item)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
                        >
                          Start Learning →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Heading and Search Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-900 mb-6">
              Master Your <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Financial Future</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the latest insights, strategies, and tools to build wealth and achieve financial independence
            </p>
          </div>
        </div>
      </section>

                {/* Content Grid Section */}

      {/* Content Grid Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div>
              <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-2">All Educational Content</h2>
              <p className="dark:text-gray-300 text-gray-600">Expand your financial knowledge with our comprehensive library</p>
            </div>   
            <div className="flex items-center space-x-4">
              <div className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm dark:border-slate-700/50 border-gray-200/50">
                <span className="text-sm dark:text-gray-400 text-gray-600">Progress: </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {averageProgress}%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'dark:bg-blue-500/20 bg-blue-100 text-blue-600 dark:text-blue-400' : 'dark:text-gray-400 text-gray-500 hover:dark:text-gray-300 hover:text-gray-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'dark:bg-blue-500/20 bg-blue-100 text-blue-600 dark:text-blue-400' : 'dark:text-gray-400 text-gray-500 hover:dark:text-gray-300 hover:text-gray-700'}`}
                >
                  <List className="w-5 h-5 " />
                </button>
              </div>
            </div>
          </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 w-full mb-8">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 dark:text-gray-300 text-gray-600 z-10" />
                <input
                  type="text"
                  placeholder="Search courses, articles, and topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 rounded-xl dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg"
                />
              </div>
              
              {/* Filters */}
              <div className="flex gap-4 lg:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 px-4 pr-8 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg min-w-[140px]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm dark:border-slate-700/50 border-gray-200/50 dark:text-white text-gray-900 px-4 pr-8 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg min-w-[140px]"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>

          {/* Content Grid */}
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredItems.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className={`dark:bg-slate-800/50 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden dark:border-slate-700/50 border-gray-200/50 ${viewMode === 'list' ? 'flex' : ''}`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`${viewMode === 'list' ? 'h-full' : 'h-48'} w-full object-cover group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {item.type === 'video' ? (
                      <div className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                        <Play className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(item.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        bookmarkedItems.includes(item.id)
                          ? 'bg-yellow-500/80 text-white'
                          : 'bg-black/50 text-white hover:bg-yellow-500/80'
                      }`}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  {userProgress[item.id] === 100 && (
                    <div className="absolute bottom-4 right-4">
                      <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold dark:text-white text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm dark:text-gray-400 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium dark:text-gray-300 text-gray-700">Progress</span>
                      <span className="text-sm dark:text-gray-400 text-gray-500">{userProgress[item.id] || 0}%</span>
                    </div>
                    <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(userProgress[item.id] || 0)}`}
                        style={{ width: `${userProgress[item.id] || 0}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm dark:text-gray-400 text-gray-500">
                      By {item.author}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openSharePopup(item);
                        }}
                        className="p-1 dark:text-gray-400 text-gray-500 hover:dark:text-blue-400 hover:text-blue-600 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(visibleCount < filteredItems.length || visibleCount > 6) && (
            <div className="flex justify-center mt-8 gap-3">
              {visibleCount < filteredItems.length && (
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredItems.length))}
                  className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-lg"
                >
                  More...
                </button>
              )}
              {visibleCount > 6 && (
                <button
                  onClick={() => setVisibleCount(prev => Math.max(6, prev - 6))}
                  className="px-6 py-3 rounded-lg font-semibold dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900 hover:dark:bg-white/20 hover:bg-gray-200 transition-colors border dark:border-white/20 border-gray-300"
                >
                  Show less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div 
            className="dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl dark:border-slate-700/50 border-gray-200/50 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedItem.type === 'video' ? (
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/EJHPltmAULA?si=qlqi0Vd2tRkk4FxG"
                    title="YouTube video player"
                    className="w-full h-full rounded-none"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </AspectRatio>
              ) : (
                <img
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                {selectedItem.type === 'video' ? (
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Play className="w-4 h-4" />
                    <span>Video</span>
                  </div>
                ) : (
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Article</span>
                  </div>
                )}
                <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            <div className="p-8 max-h-96 overflow-y-auto">
              <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                {selectedItem.title}
              </h2>
              
              <div className="flex items-center space-x-6 mb-6 text-sm dark:text-gray-400 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedItem.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{selectedItem.views} views</span>
                </div>
                <span>By {selectedItem.author}</span>
              </div>

              <p className="dark:text-gray-300 text-gray-700 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 text-white dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Content Preview</h3>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                  {selectedItem.content}
                </p>
              </div>

              {selectedItem.type === 'article' && selectedItem.fullContent && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Full Article</h3>
                  <div className="prose dark:prose-invert max-w-none dark:text-gray-200 text-gray-800 leading-relaxed whitespace-pre-line">
                    {selectedItem.fullContent}
                  </div>
                </div>
              )}

              {/* Progress Section */}
              <div className="border-t dark:border-slate-700/50 border-gray-200/50 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold dark:text-white text-gray-900">Your Progress</h4>
                  <span className="text-sm dark:text-gray-400 text-gray-500">{userProgress[selectedItem.id] || 0}%</span>
                </div>
                <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(userProgress[selectedItem.id] || 0)}`}
                    style={{ width: `${userProgress[selectedItem.id] || 0}%` }}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[25, 50, 75, 100].map((progress) => (
                    <button
                      key={progress}
                      onClick={() => updateProgress(selectedItem.id, progress)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        userProgress[selectedItem.id] >= progress
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-200 dark:border-green-700'
                          : 'dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-600 hover:dark:bg-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Mark {progress}% Complete
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  {selectedItem.type === 'video' ? 'Watch Now' : 'Read Article'}
                </button>
                <button className="px-6 py-3 border-2 dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Popup Modal */}
      {sharePopup.show && sharePopup.item && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeSharePopup}
        >
          <div 
            className="dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm rounded-2xl max-w-md w-full p-6 shadow-2xl dark:border-slate-700/50 border-gray-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold dark:text-white text-gray-900">Share Course</h3>
              <button
                onClick={closeSharePopup}
                className="p-2 bg-black/50 text-white hover:bg-black/70 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm dark:text-gray-300 text-gray-600 mb-6">
              Share "{sharePopup.item.title}" with others
            </p>

            <div className="grid grid-cols-4 gap-4">
              <button
                onClick={() => shareContent('whatsapp')}
                className="flex flex-col items-center p-4 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6 mb-2" />
                <span className="text-xs">WhatsApp</span>
              </button>
              
              <button
                onClick={() => shareContent('email')}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <Mail className="w-6 h-6 mb-2" />
                <span className="text-xs">Email</span>
              </button>
              
              <button
                onClick={() => shareContent('twitter')}
                className="flex flex-col items-center p-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white transition-colors"
              >
                <Twitter className="w-6 h-6 mb-2" />
                <span className="text-xs">Twitter</span>
              </button>
              
              <button
                onClick={() => shareContent('facebook')}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <Facebook className="w-6 h-6 mb-2" />
                <span className="text-xs">Facebook</span>
              </button>
              
              <button
                onClick={() => shareContent('linkedin')}
                className="flex flex-col items-center p-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition-colors"
              >
                <Linkedin className="w-6 h-6 mb-2" />
                <span className="text-xs">LinkedIn</span>
              </button>
              
              <button
                onClick={() => shareContent('instagram')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-colors"
              >
                <Instagram className="w-6 h-6 mb-2" />
                <span className="text-xs">Instagram</span>
              </button>
              
              <button
                onClick={() => shareContent('tiktok')}
                className="flex flex-col items-center p-4 rounded-xl bg-black hover:bg-gray-800 text-white transition-colors"
              >
                <div className="w-6 h-6 mb-2 flex items-center justify-center">
                  <span className="text-xs font-bold">TikTok</span>
                </div>
                <span className="text-xs">TikTok</span>
              </button>
              
              <button
                onClick={() => shareContent('copy')}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-500 hover:bg-gray-600 text-white transition-colors"
              >
                <div className="w-6 h-6 mb-2 flex items-center justify-center">
                  <span className="text-xs">📋</span>
                </div>
                <span className="text-xs">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auto-advance carousel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setInterval(() => {
              if (!document.querySelector('[data-modal-open]')) {
                const event = new CustomEvent('carousel-next');
                window.dispatchEvent(event);
              }
            }, 5000);
          `
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}