'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Wallet, 
  TrendingUp, 
  Send, 
  QrCode, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Copy,
  ExternalLink,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react'

export default function WalletInterface() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  const walletData = {
    totalBalance: 12847,
    totalValue: 234567,
    tokens: [
      { symbol: 'CCX', name: 'Carbon Credit Token', balance: 8500, value: 156780, change: '+12.5%', changeType: 'increase' },
      { symbol: 'REDD', name: 'REDD+ Forest Token', balance: 2200, value: 45600, change: '+8.2%', changeType: 'increase' },
      { symbol: 'AFFOR', name: 'Afforestation Token', balance: 2147, value: 32187, change: '-2.1%', changeType: 'decrease' }
    ]
  }

  const transactions = [
    {
      id: 1,
      type: 'received',
      token: 'CCX',
      amount: 150,
      value: 2760,
      from: 'Forest Conservation Ltd.',
      timestamp: '2 hours ago',
      hash: '0x1234...5678'
    },
    {
      id: 2,
      type: 'sent',
      token: 'CCX',
      amount: 75,
      value: 1380,
      to: 'GreenTech Solutions',
      timestamp: '1 day ago',
      hash: '0x8765...4321'
    },
    {
      id: 3,
      type: 'minted',
      token: 'REDD',
      amount: 500,
      value: 10350,
      project: 'Amazon Reforestation',
      timestamp: '3 days ago',
      hash: '0x2468...1357'
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-neutral-900 mb-2"
        >
          Carbon Credit Wallet
        </motion.h1>
        <p className="text-neutral-600">
          Manage your carbon credit tokens with real-time pricing and secure transactions.
        </p>
      </div>

      {/* Wallet Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="gradient-bg rounded-2xl p-8 text-white mb-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center mb-2">
              <h2 className="text-lg font-medium opacity-90">Total Portfolio Value</h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="ml-3 p-1 hover:bg-white/20 rounded transition-colors"
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-4xl font-bold mb-2">
              {showBalance ? `₹${walletData.totalValue.toLocaleString()}` : '••••••'}
            </div>
            <div className="flex items-center text-emerald-200">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+15.3% from last month</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-75 mb-1">Total Tokens</div>
            <div className="text-2xl font-semibold">
              {showBalance ? walletData.totalBalance.toLocaleString() : '••••••'}
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
            <Send className="w-5 h-5 mr-2" />
            Send
          </button>
          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
            <ArrowDownRight className="w-5 h-5 mr-2" />
            Receive
          </button>
          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
            <QrCode className="w-5 h-5 mr-2" />
            QR Code
          </button>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8">
            {['overview', 'transactions', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Token Holdings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Token Holdings</h2>
              <button className="text-emerald-600 hover:text-emerald-700">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {walletData.tokens.map((token, index) => (
                <div key={token.symbol} className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-emerald-700 text-sm">{token.symbol}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900">{token.name}</h3>
                      <p className="text-sm text-neutral-600">
                        {showBalance ? token.balance.toLocaleString() : '••••••'} {token.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-neutral-900">
                      {showBalance ? `₹${token.value.toLocaleString()}` : '••••••'}
                    </p>
                    <p className={`text-sm flex items-center justify-end ${
                      token.changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {token.changeType === 'increase' ? (
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                      )}
                      {token.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              <button className="w-full p-4 border-2 border-dashed border-neutral-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 rounded-lg flex items-center justify-center mr-4 transition-colors">
                    <Plus className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-neutral-900">Buy Carbon Credits</h3>
                    <p className="text-sm text-neutral-600">Purchase verified carbon credits from marketplace</p>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4 transition-colors">
                    <Send className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-neutral-900">Transfer Tokens</h3>
                    <p className="text-sm text-neutral-600">Send tokens to another wallet address</p>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center mr-4 transition-colors">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-neutral-900">Trade Tokens</h3>
                    <p className="text-sm text-neutral-600">Exchange tokens on the marketplace</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Wallet Address */}
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Wallet Address</p>
                  <p className="font-mono text-sm text-neutral-900">0x742d35...C90A8</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard('0x742d35Cc4Ca0bC90A8')}
                    className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Transaction History</h2>
          
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    transaction.type === 'received' ? 'bg-emerald-100' :
                    transaction.type === 'sent' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    {transaction.type === 'received' ? (
                      <ArrowDownRight className={`w-5 h-5 text-emerald-600`} />
                    ) : transaction.type === 'sent' ? (
                      <ArrowUpRight className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-neutral-900 mr-2">
                        {transaction.amount} {transaction.token}
                      </p>
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                        {transaction.token}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {transaction.type === 'received' ? `From ${transaction.from}` :
                       transaction.type === 'sent' ? `To ${transaction.to}` :
                       `Minted from ${transaction.project}`}
                    </p>
                    <p className="text-xs text-neutral-500 font-mono">{transaction.hash}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-neutral-900">₹{transaction.value.toLocaleString()}</p>
                  <p className="text-sm text-neutral-600">{transaction.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'settings' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Wallet Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-neutral-900">Balance Visibility</h3>
                  <p className="text-sm text-neutral-600">Show/hide wallet balances</p>
                </div>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showBalance ? 'bg-emerald-600' : 'bg-neutral-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showBalance ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Security</h2>
            <div className="space-y-4">
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                <h3 className="font-medium text-neutral-900">Backup Wallet</h3>
                <p className="text-sm text-neutral-600">Export your wallet for backup</p>
              </button>
              <button className="w-full text-left p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                <h3 className="font-medium text-neutral-900">Change PIN</h3>
                <p className="text-sm text-neutral-600">Update your wallet PIN</p>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}