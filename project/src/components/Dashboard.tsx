import React from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  FileCheck, 
  Wallet,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Target,
  Award,
  Zap,
  Globe,
  BarChart3,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Sparkles
} from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Carbon Tokens',
      value: '12,847',
      change: '+15.3%',
      changeType: 'increase',
      icon: Leaf,
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Portfolio Value',
      value: '₹2,34,567',
      change: '+8.7%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'blue',
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Verified Projects',
      value: '23',
      change: '+2',
      changeType: 'increase',
      icon: FileCheck,
      color: 'purple',
      bgGradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Trades',
      value: '7',
      change: '-1',
      changeType: 'decrease',
      icon: Activity,
      color: 'orange',
      bgGradient: 'from-orange-500 to-red-500'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      type: 'received',
      amount: '150 CCX',
      from: 'Forest Conservation Ltd.',
      timestamp: '2 hours ago',
      status: 'completed',
      value: '₹2,760'
    },
    {
      id: 2,
      type: 'sent',
      amount: '75 CCX',
      to: 'GreenTech Solutions',
      timestamp: '1 day ago',
      status: 'completed',
      value: '₹1,380'
    },
    {
      id: 3,
      type: 'minted',
      amount: '500 CCX',
      project: 'Amazon Reforestation',
      timestamp: '3 days ago',
      status: 'verified',
      value: '₹9,200'
    },
    {
      id: 4,
      type: 'received',
      amount: '200 REDD',
      from: 'Coastal Restoration Fund',
      timestamp: '5 days ago',
      status: 'completed',
      value: '₹4,550'
    }
  ]

  const quickActions = [
    { 
      label: 'Upload Document', 
      icon: Plus, 
      action: 'upload',
      color: 'emerald',
      description: 'Verify new carbon credits'
    },
    { 
      label: 'Complete KYC', 
      icon: Users, 
      action: 'kyc',
      color: 'blue',
      description: 'Secure your account'
    },
    { 
      label: 'View Wallet', 
      icon: Wallet, 
      action: 'wallet',
      color: 'purple',
      description: 'Manage your tokens'
    },
    { 
      label: 'Explore Market', 
      icon: BarChart3, 
      action: 'market',
      color: 'orange',
      description: 'Trade carbon credits'
    }
  ]

  const achievements = [
    { icon: Award, title: 'First Verification', desc: 'Completed your first carbon credit verification', earned: true },
    { icon: Target, title: 'Portfolio Builder', desc: 'Reached 10,000+ carbon tokens', earned: true },
    { icon: Zap, title: 'Active Trader', desc: 'Completed 50+ transactions', earned: false },
    { icon: Globe, title: 'Global Impact', desc: 'Contributed to 5+ countries', earned: false }
  ]

  const marketInsights = [
    { label: 'Market Cap', value: '₹142.9M', change: '+8.7%', icon: DollarSign },
    { label: '24h Volume', value: '₹7.7M', change: '+12.3%', icon: Activity },
    { label: 'Active Projects', value: '156', change: '+5', icon: FileCheck },
    { label: 'Avg. Price', value: '₹18.45', change: '+2.1%', icon: TrendingUp }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-slate-600 text-lg">Here's your carbon credit portfolio overview</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              KYC Verified
            </div>
            <div className="flex items-center text-slate-600">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: 2 min ago
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.bgGradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`flex items-center text-sm font-semibold ${
                  stat.changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-2 font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Recent Transactions</h2>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <motion.div 
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    transaction.type === 'received' ? 'bg-gradient-to-br from-emerald-100 to-green-100' :
                    transaction.type === 'sent' ? 'bg-gradient-to-br from-blue-100 to-cyan-100' : 
                    'bg-gradient-to-br from-purple-100 to-pink-100'
                  }`}>
                    {transaction.type === 'received' ? (
                      <ArrowDownRight className="w-6 h-6 text-emerald-600" />
                    ) : transaction.type === 'sent' ? (
                      <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">{transaction.amount}</p>
                    <p className="text-sm text-slate-600">
                      {transaction.type === 'received' ? `From ${transaction.from}` :
                       transaction.type === 'sent' ? `To ${transaction.to}` :
                       `Minted from ${transaction.project}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 text-lg">{transaction.value}</p>
                  <p className="text-sm text-slate-500">{transaction.timestamp}</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                    transaction.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>
          </div>
          
          <div className="space-y-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-slate-50 to-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${action.color}-100 to-${action.color}-200 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className={`w-6 h-6 text-${action.color}-600`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 text-lg group-hover:text-slate-700 transition-colors">
                      {action.label}
                    </h3>
                    <p className="text-sm text-slate-600">{action.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Market Insights</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {marketInsights.map((insight, index) => (
              <div key={insight.label} className="p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <insight.icon className="w-5 h-5 text-slate-600" />
                  <span className="text-emerald-600 text-sm font-semibold">{insight.change}</span>
                </div>
                <p className="text-2xl font-bold text-slate-900">{insight.value}</p>
                <p className="text-sm text-slate-600">{insight.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
        >
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Achievements</h2>
          </div>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className={`flex items-center p-4 rounded-2xl transition-all duration-200 ${
                achievement.earned ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50 border border-slate-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                  achievement.earned ? 'bg-emerald-500' : 'bg-slate-300'
                }`}>
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${achievement.earned ? 'text-emerald-900' : 'text-slate-600'}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.earned ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {achievement.desc}
                  </p>
                </div>
                {achievement.earned && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}