import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Building, 
  Coins, 
  TrendingUp,
  MapPin,
  Calendar,
  Shield,
  ExternalLink,
  Eye,
  Download,
  BarChart3,
  PieChart,
  Globe,
  Award,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function RWAPortfolio() {
  const [selectedAsset, setSelectedAsset] = useState('carbon')
  const [viewMode, setViewMode] = useState('grid')

  const rwaAssets = [
    {
      id: 'carbon-amazon',
      type: 'carbon',
      name: 'Amazon Rainforest Conservation',
      symbol: 'CCX-AMZ',
      tokens: 2500,
      value: 46125,
      price: 18.45,
      change: '+12.5%',
      changeType: 'increase',
      location: 'Amazon Basin, Brazil',
      area: '1,250 hectares',
      co2Sequestered: '2,500 tonnes/year',
      certificationBody: 'VERRA',
      projectStart: '2023-01-15',
      status: 'Active',
      riskLevel: 'Low',
      image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
      documents: ['Verification Report', 'Project Design', 'Monitoring Plan'],
      nextVerification: '2024-06-15'
    },
    {
      id: 'carbon-mangrove',
      type: 'carbon',
      name: 'Mangrove Restoration Project',
      symbol: 'REDD-MNG',
      tokens: 1800,
      value: 40950,
      price: 22.75,
      change: '+8.2%',
      changeType: 'increase',
      location: 'Sundarbans, Bangladesh',
      area: '850 hectares',
      co2Sequestered: '1,800 tonnes/year',
      certificationBody: 'Gold Standard',
      projectStart: '2023-03-20',
      status: 'Active',
      riskLevel: 'Medium',
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
      documents: ['REDD+ Validation', 'Community Agreement', 'Baseline Study'],
      nextVerification: '2024-09-20'
    },
    {
      id: 'real-estate',
      type: 'realestate',
      name: 'Mumbai Commercial Complex',
      symbol: 'RE-MUM',
      tokens: 50,
      value: 125000,
      price: 2500,
      change: '+5.7%',
      changeType: 'increase',
      location: 'Bandra-Kurla Complex, Mumbai',
      area: '10,000 sq ft',
      occupancy: '95%',
      certificationBody: 'RERA',
      projectStart: '2022-08-10',
      status: 'Operational',
      riskLevel: 'Medium',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      documents: ['Property Deed', 'Valuation Report', 'Rental Agreement'],
      nextVerification: '2024-08-10'
    },
    {
      id: 'gold',
      type: 'commodity',
      name: 'Physical Gold Reserves',
      symbol: 'GOLD-PHY',
      tokens: 25,
      value: 187500,
      price: 7500,
      change: '+3.2%',
      changeType: 'increase',
      location: 'Secured Vault, Singapore',
      purity: '99.99%',
      weight: '25 grams',
      certificationBody: 'LBMA',
      projectStart: '2023-05-12',
      status: 'Stored',
      riskLevel: 'Low',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      documents: ['Assay Certificate', 'Storage Receipt', 'Insurance Policy'],
      nextVerification: '2024-11-12'
    }
  ]

  const portfolioSummary = {
    totalValue: 399575,
    totalTokens: 4375,
    monthlyChange: '+9.8%',
    diversification: {
      carbon: 65,
      realestate: 20,
      commodity: 15
    }
  }

  const assetTypes = [
    { id: 'all', label: 'All Assets', icon: PieChart, count: 4 },
    { id: 'carbon', label: 'Carbon Credits', icon: Leaf, count: 2 },
    { id: 'realestate', label: 'Real Estate', icon: Building, count: 1 },
    { id: 'commodity', label: 'Commodities', icon: Coins, count: 1 }
  ]

  const filteredAssets = selectedAsset === 'all' 
    ? rwaAssets 
    : rwaAssets.filter(asset => asset.type === selectedAsset)

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-emerald-100 text-emerald-800'
      case 'Medium': return 'bg-orange-100 text-orange-800'
      case 'High': return 'bg-red-100 text-red-800'
      default: return 'bg-slate-100 text-slate-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-800'
      case 'Operational': return 'bg-blue-100 text-blue-800'
      case 'Stored': return 'bg-purple-100 text-purple-800'
      default: return 'bg-slate-100 text-slate-800'
    }
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
          RWA Portfolio 🏛️
        </motion.h1>
        <p className="text-slate-600 text-lg">Manage your tokenized real-world assets with complete transparency</p>
      </div>

      {/* Portfolio Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-medium opacity-90 mb-2">Total Portfolio Value</h2>
              <div className="text-4xl font-bold mb-2">₹{portfolioSummary.totalValue.toLocaleString()}</div>
              <div className="flex items-center text-emerald-200">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{portfolioSummary.monthlyChange} this month</span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium opacity-90 mb-2">Total Tokens</h2>
              <div className="text-4xl font-bold mb-2">{portfolioSummary.totalTokens.toLocaleString()}</div>
              <div className="text-white/80">Across 4 asset types</div>
            </div>
            <div>
              <h2 className="text-lg font-medium opacity-90 mb-4">Asset Allocation</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Carbon Credits</span>
                  <span className="font-semibold">{portfolioSummary.diversification.carbon}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Real Estate</span>
                  <span className="font-semibold">{portfolioSummary.diversification.realestate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Commodities</span>
                  <span className="font-semibold">{portfolioSummary.diversification.commodity}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Asset Type Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 mb-8"
      >
        <div className="flex flex-wrap gap-4">
          {assetTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedAsset(type.id)}
              className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                selectedAsset === type.id
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <type.icon className="w-5 h-5 mr-2" />
              {type.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedAsset === type.id ? 'bg-white/20' : 'bg-slate-200'
              }`}>
                {type.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Assets Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredAssets.map((asset, index) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Asset Image */}
            <div className="relative h-48">
              <img
                src={asset.image}
                alt={asset.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(asset.riskLevel)}`}>
                  {asset.riskLevel} Risk
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(asset.status)}`}>
                  {asset.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
                {asset.symbol}
              </div>
            </div>

            {/* Asset Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{asset.name}</h3>
                  <div className="flex items-center text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {asset.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">₹{asset.value.toLocaleString()}</div>
                  <div className={`text-sm font-semibold ${
                    asset.changeType === 'increase' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {asset.change}
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-2xl">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Tokens Owned</p>
                  <p className="font-bold text-slate-900">{asset.tokens.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Price per Token</p>
                  <p className="font-bold text-slate-900">₹{asset.price.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">
                    {asset.type === 'carbon' ? 'Area' : asset.type === 'realestate' ? 'Size' : 'Weight'}
                  </p>
                  <p className="font-bold text-slate-900">
                    {asset.type === 'carbon' ? asset.area : 
                     asset.type === 'realestate' ? asset.area :
                     asset.weight}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Certification</p>
                  <p className="font-bold text-slate-900">{asset.certificationBody}</p>
                </div>
              </div>

              {/* Special Metrics */}
              {asset.type === 'carbon' && (
                <div className="mb-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="flex items-center mb-2">
                    <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold text-emerald-800">Environmental Impact</span>
                  </div>
                  <p className="text-emerald-700 text-sm">
                    <strong>{asset.co2Sequestered}</strong> CO₂ sequestered annually
                  </p>
                </div>
              )}

              {asset.type === 'realestate' && (
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-2">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">Property Details</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    <strong>{asset.occupancy}</strong> occupancy rate
                  </p>
                </div>
              )}

              {asset.type === 'commodity' && (
                <div className="mb-6 p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="font-semibold text-purple-800">Quality Assurance</span>
                  </div>
                  <p className="text-purple-700 text-sm">
                    <strong>{asset.purity}</strong> purity guaranteed
                  </p>
                </div>
              )}

              {/* Verification Status */}
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold text-slate-900">Verified Asset</span>
                  </div>
                  <span className="text-xs text-slate-600">
                    Next: {new Date(asset.nextVerification).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  Project started: {new Date(asset.projectStart).toLocaleDateString()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-200">
                  Trade Asset
                </button>
                <button className="px-4 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <Eye className="w-5 h-5 text-slate-600" />
                </button>
                <button className="px-4 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <Download className="w-5 h-5 text-slate-600" />
                </button>
                <button className="px-4 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <ExternalLink className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compliance Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl"
      >
        <div className="flex items-start">
          <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Regulatory Compliance</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              All RWA tokens are compliant with local regulations and international standards. 
              Asset verification is conducted by certified third parties, and all transactions 
              are recorded on blockchain for complete transparency and auditability.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}