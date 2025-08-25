import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Coins,
  BarChart3,
  Percent,
  Lock
} from 'lucide-react'

export default function DeFiHub() {
  const [selectedStrategy, setSelectedStrategy] = useState('staking')

  const defiOpportunities = [
    {
      id: 'staking',
      title: 'Carbon Credit Staking',
      apy: '8.5%',
      risk: 'Low',
      tvl: '₹45.2M',
      description: 'Stake your CCX tokens and earn rewards while supporting carbon projects',
      minAmount: '100 CCX',
      lockPeriod: '30 days',
      rewards: 'Daily',
      icon: Lock,
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 'liquidity',
      title: 'CCX/USDC Liquidity Pool',
      apy: '12.3%',
      risk: 'Medium',
      tvl: '₹28.7M',
      description: 'Provide liquidity and earn trading fees plus LP rewards',
      minAmount: '50 CCX + 920 USDC',
      lockPeriod: 'Flexible',
      rewards: 'Real-time',
      icon: Coins,
      color: 'blue',
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'lending',
      title: 'Lending Protocol',
      apy: '6.2%',
      risk: 'Low',
      tvl: '₹67.8M',
      description: 'Lend your stablecoins and earn interest with instant withdrawals',
      minAmount: '1000 USDC',
      lockPeriod: 'None',
      rewards: 'Continuous',
      icon: DollarSign,
      color: 'purple',
      bgGradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'farming',
      title: 'Yield Farming',
      apy: '15.7%',
      risk: 'High',
      tvl: '₹19.4M',
      description: 'Farm multiple tokens with auto-compounding strategies',
      minAmount: '200 CCX',
      lockPeriod: '7 days',
      rewards: 'Weekly',
      icon: Target,
      color: 'orange',
      bgGradient: 'from-orange-500 to-red-500'
    }
  ]

  const portfolioStats = [
    { label: 'Total Staked', value: '5,420 CCX', change: '+12.5%', icon: Lock },
    { label: 'Earned Rewards', value: '₹8,750', change: '+₹450', icon: TrendingUp },
    { label: 'Active Positions', value: '3', change: '+1', icon: BarChart3 },
    { label: 'APY Average', value: '9.2%', change: '+0.8%', icon: Percent }
  ]

  const activePositions = [
    {
      protocol: 'CCX Staking',
      amount: '2,500 CCX',
      value: '₹46,125',
      apy: '8.5%',
      earned: '₹3,920',
      status: 'Active',
      timeLeft: '18 days'
    },
    {
      protocol: 'CCX/USDC LP',
      amount: '1,200 CCX + 22,140 USDC',
      value: '₹44,280',
      apy: '12.3%',
      earned: '₹2,840',
      status: 'Active',
      timeLeft: 'Flexible'
    },
    {
      protocol: 'USDC Lending',
      amount: '50,000 USDC',
      value: '₹41,500',
      apy: '6.2%',
      earned: '₹1,990',
      status: 'Active',
      timeLeft: 'None'
    }
  ]

  const riskLevels = {
    Low: { color: 'emerald', bg: 'bg-emerald-100', text: 'text-emerald-800' },
    Medium: { color: 'orange', bg: 'bg-orange-100', text: 'text-orange-800' },
    High: { color: 'red', bg: 'bg-red-100', text: 'text-red-800' }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900 mb-2"
        >
          DeFi Hub 🚀
        </motion.h1>
        <p className="text-slate-600 text-lg">Maximize your returns with secure DeFi strategies and RWA protocols</p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {portfolioStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-emerald-600 text-sm font-semibold">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
            <p className="text-slate-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* DeFi Opportunities */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Opportunities</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {defiOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedStrategy(opportunity.id)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${opportunity.bgGradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <opportunity.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{opportunity.apy}</div>
                        <div className="text-sm text-slate-600">APY</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{opportunity.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{opportunity.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Min Amount:</span>
                        <span className="font-semibold text-slate-900">{opportunity.minAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Lock Period:</span>
                        <span className="font-semibold text-slate-900">{opportunity.lockPeriod}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">TVL:</span>
                        <span className="font-semibold text-slate-900">{opportunity.tvl}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${riskLevels[opportunity.risk as keyof typeof riskLevels].bg} ${riskLevels[opportunity.risk as keyof typeof riskLevels].text}`}>
                        {opportunity.risk} Risk
                      </span>
                      <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                        Start Earning
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Risk Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Risk Analysis</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="font-semibold text-emerald-800">Low Risk Strategies</span>
              </div>
              <p className="text-emerald-700 text-sm">Staking and lending protocols with proven track records and insurance coverage.</p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                <span className="font-semibold text-orange-800">Medium Risk</span>
              </div>
              <p className="text-orange-700 text-sm">Liquidity pools subject to impermanent loss but with higher rewards.</p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-2xl border border-red-200">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                <span className="font-semibold text-red-800">High Risk</span>
              </div>
              <p className="text-red-700 text-sm">Yield farming with smart contract risks and high volatility.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 rounded-2xl">
            <h3 className="font-semibold text-slate-900 mb-2">💡 Pro Tips</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Diversify across multiple protocols</li>
              <li>• Start with low-risk strategies</li>
              <li>• Never invest more than you can afford to lose</li>
              <li>• Monitor positions regularly</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Active Positions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Active Positions</h2>
          <button className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">
            Manage All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Protocol</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Amount</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Value</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">APY</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Earned</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {activePositions.map((position, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-slate-900">{position.protocol}</div>
                      <div className="text-sm text-slate-600">{position.timeLeft !== 'None' && position.timeLeft !== 'Flexible' ? `${position.timeLeft} left` : position.timeLeft}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-semibold text-slate-900">{position.amount}</div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-semibold text-slate-900">{position.value}</div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-semibold text-emerald-600">{position.apy}</div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-semibold text-emerald-600">{position.earned}</div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {position.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}