import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Token Calculator — Budget Planner, Cost Estimator & ROI Calculator | AICalc',
  description: 'Free AI token calculator for GPT-4, Claude, Gemini. Calculate costs, estimate budgets, and measure ROI for AI automation. Compare pricing across providers.',
  keywords: [
    'ai token calculator',
    'gpt-4 cost calculator',
    'claude token pricing',
    'ai cost estimator',
    'openai pricing calculator',
    'anthropic pricing',
    'ai budget planner',
    'ai roi calculator',
    'token counter',
    'llm cost comparison'
  ],
  openGraph: {
    title: 'AI Token Calculator — Budget & Cost Estimator',
    description: 'Calculate AI costs, estimate budgets, and measure ROI. Free tool for GPT-4, Claude, and Gemini pricing.',
    type: 'website',
    url: 'https://aicalc.tools/tools/token-calculator',
    siteName: 'AICalc Tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Token Calculator — Budget & ROI',
    description: 'Free calculator for GPT-4, Claude, Gemini costs and ROI.',
  },
  alternates: {
    canonical: 'https://aicalc.tools/tools/token-calculator'
  }
};

export default function TokenCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
