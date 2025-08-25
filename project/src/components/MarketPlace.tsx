'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { 
  TrendingUp, 
  TrendingDown,
  Activity,
  DollarSign,
  BarChart3,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function MarketPlace() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h')
  const [marketData, setMarketData] = useState<any>(null)

  const tokens = [
    {
      symbol: 'CCX',
      name: 'Carbon Credit Token',
      price: 18.45,
      change24h: 12.5,
      changeType: 'increase',
      volume: 2450000,
      marketCap: 45600000,
      supply: 2500000
    },
    {
      symbol: 'REDD',
      name: 'REDD+ Forest Token',
      price: 22.75,
      change24h: 8.2,
      changeType: 'increase',
      volume: 1200000,
      marketCap: 25000000,
      supply: 1100000
    },
    {
      symbol: 'AFFOR',
      name: 'Afforestation Token',
      price: 15.20,
      change24h: -2.1,
      changeType: 'decrease',
      volume: 850000,
      marketCap: 14500000,
      supply: 950000
    },
    {
      symbol: 'SOLAR',
      name: 'Solar Energy Credit',
      price: 28.90,
      change24h: 15.7,
      changeType: 'increase',
      volume: 3200000,
      marketCap: 57800000,
      supply: 2000000
    }
  ]

  const generateChartData = () => {
    const labels = []
    const data = []
    const basePrice = 18.45
    
    for (let i = 23; i >= 0; i--) {
      labels.push(`${i}h ago`)
      data.push(basePrice + (Math.random() - 0.5) * 4)
    }
    
    return {
      labels,
      datasets: [
        {
          label: 'CCX Price',
          data,
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    }
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }

  useEffect(() => {
    setMarketData(generateChartData())
  }, [selectedTimeframe])

  const timeframes = ['1h', '24h', '7d', '30d', '1y']

  const marketStats = [
    {
      title: 'Total Market Cap',
      value: '₹142.9M',
      change: '+8.7%',
      changeType: 'increase',
      icon: BarChart3
    },
    {
      title: '24h Volume',
      value: '₹7.7M',
      change: '+12.3%',
      changeType: 'increase',
      icon: Activity
    },
    {
      title: 'Active Tokens',
      value: '4',
      change: '+1',
      changeType: 'increase',
      icon: DollarSign
    },
    {
      title: 'Avg Price Change',
      value: '+8.6%',
      change: '+2.1%',
      changeType: 'increase',
      icon: TrendingUp
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-neutral-900 mb-2"
        >
          Carbon Credit Market
        </motion.h1>
        <p className="text-neutral-600">
          Real-time carbon credit token prices, charts, and market analytics.
        </p>
      </div>

      {/* Market Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {marketStats.map((stat, index) => (
          <div key={stat.title} className="card">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-8 h-8 text-emerald-600" />
              <div className={`flex items-center text-sm ${
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
            <p className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</p>
            <p className="text-sm text-neutral-600">{stat.title}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Price Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 card"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">CCX Price Chart</h2>
              <div className="flex items-center mt-2">
                <span className="text-2xl font-bold text-neutral-900 mr-3">₹18.45</span>
                <span className="flex items-center text-emerald-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex border border-neutral-200 rounded-lg">
                {timeframes.map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${
                      selectedTimeframe === timeframe
                        ? 'bg-emerald-500 text-white'
                        : 'text-neutral-600 hover:text-emerald-600'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
              <button className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="h-64">
            {marketData && <Line data={marketData} options={chartOptions} />}
          </div>
        </motion.div>

        {/* Top Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Top Tokens</h2>
          
          <div className="space-y-4">
            {tokens.slice(0, 3).map((token, index) => (
              <div key={token.symbol} className="flex items-center justify-between p-3 border border-neutral-100 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-emerald-700">{token.symbol}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 text-sm">{token.symbol}</h3>
                    <p className="text-xs text-neutral-600">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-neutral-900 text-sm">₹{token.price}</p>
                  <p className={`text-xs flex items-center ${
                    token.changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {token.changeType === 'increase' ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {token.change24h}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Token List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card mt-8"
      >
        <h2 className="text-xl font-semibold text-neutral-900 mb-6">All Carbon Credit Tokens</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-600">Token</th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">Price</th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">24h Change</th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">Volume</th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">Market Cap</th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">Supply</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <tr key={token.symbol} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-emerald-700">{token.symbol}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-neutral-900">{token.symbol}</h3>
                        <p className="text-sm text-neutral-600">{token.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-neutral-900">
                    ₹{token.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={`flex items-center justify-end ${
                      token.changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {token.changeType === 'increase' ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {token.change24h}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-neutral-900">
                    ₹{(token.volume / 1000000).toFixed(1)}M
                  </td>
                  <td className="py-4 px-4 text-right text-neutral-900">
                    ₹{(token.marketCap / 1000000).toFixed(1)}M
                  </td>
                  <td className="py-4 px-4 text-right text-neutral-600">
                    {(token.supply / 1000000).toFixed(1)}M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}