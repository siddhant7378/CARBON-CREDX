'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  Leaf, 
  Users,
  TrendingUp,
  Filter,
  Copy,
  Eye
} from 'lucide-react'

export default function TokenExplorer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const tokens = [
    {
      id: 'CCX-001',
      name: 'Amazon Rainforest Conservation',
      type: 'Forest Conservation',
      totalCredits: 2500,
      price: 18.40,
      location: 'Amazon Basin, Brazil',
      verificationDate: '2024-01-15',
      issuer: 'Green Planet Initiative',
      status: 'Active',
      carbonSequestered: 2500,
      projectArea: '1,250 hectares',
      certificationBody: 'VERRA',
      owners: 142,
      image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg'
    },
    {
      id: 'REDD-002',
      name: 'Mangrove Restoration Project',
      type: 'REDD+',
      totalCredits: 1800,
      price: 22.75,
      location: 'Sundarbans, Bangladesh',
      verificationDate: '2024-02-03',
      issuer: 'Coastal Restoration Fund',
      status: 'Active',
      carbonSequestered: 1800,
      projectArea: '850 hectares',
      certificationBody: 'Gold Standard',
      owners: 89,
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg'
    },
    {
      id: 'AFFOR-003',
      name: 'Community Afforestation Initiative',
      type: 'Afforestation',
      totalCredits: 950,
      price: 15.20,
      location: 'Karnataka, India',
      verificationDate: '2024-01-28',
      issuer: 'Rural Development Corp',
      status: 'Pending',
      carbonSequestered: 950,
      projectArea: '475 hectares',
      certificationBody: 'CDM',
      owners: 67,
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg'
    }
  ]

  const filteredTokens = tokens.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         token.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         token.location.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (selectedFilter === 'all') return matchesSearch
    return matchesSearch && token.type.toLowerCase().includes(selectedFilter.toLowerCase())
  })

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'forest', label: 'Forest Conservation' },
    { id: 'redd', label: 'REDD+' },
    { id: 'afforestation', label: 'Afforestation' }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-neutral-900 mb-2"
        >
          Token Explorer
        </motion.h1>
        <p className="text-neutral-600">
          Explore verified carbon credit tokens, their projects, and ownership details.
        </p>
      </div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by token ID, project name, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-neutral-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {filters.map(filter => (
                <option key={filter.id} value={filter.id}>{filter.label}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="card text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">5,250</p>
          <p className="text-sm text-neutral-600">Total Credits</p>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">₹19.85</p>
          <p className="text-sm text-neutral-600">Avg. Price</p>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">298</p>
          <p className="text-sm text-neutral-600">Token Holders</p>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Eye className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-neutral-900">3</p>
          <p className="text-sm text-neutral-600">Active Projects</p>
        </div>
      </motion.div>

      {/* Token Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTokens.map((token, index) => (
          <motion.div
            key={token.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="card hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative mb-4">
              <img
                src={token.image}
                alt={token.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  token.status === 'Active' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {token.status}
                </span>
              </div>
            </div>

            {/* Token Info */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-neutral-900">{token.name}</h3>
                <button
                  onClick={() => copyToClipboard(token.id)}
                  className="flex items-center text-sm text-neutral-500 hover:text-emerald-600 transition-colors"
                >
                  {token.id}
                  <Copy className="w-3 h-3 ml-1" />
                </button>
              </div>
              
              <div className="flex items-center text-sm text-neutral-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {token.location}
              </div>
              
              <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(token.verificationDate).toLocaleDateString()}
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {token.certificationBody}
                </span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-neutral-50 rounded-lg">
              <div>
                <p className="text-xs text-neutral-600">Total Credits</p>
                <p className="font-semibold text-neutral-900">{token.totalCredits.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Current Price</p>
                <p className="font-semibold text-emerald-600">₹{token.price}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Project Area</p>
                <p className="font-semibold text-neutral-900">{token.projectArea}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Holders</p>
                <p className="font-semibold text-neutral-900">{token.owners}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-primary text-sm py-2">
                View Details
              </button>
              <button className="px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                <ExternalLink className="w-4 h-4 text-neutral-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredTokens.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 mb-2">No tokens found</h3>
          <p className="text-neutral-600">Try adjusting your search criteria or filters.</p>
        </motion.div>
      )}
    </div>
  )
}