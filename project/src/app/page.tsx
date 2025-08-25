'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Shield, 
  Wallet, 
  TrendingUp, 
  Search,
  Upload,
  CheckCircle,
  Users,
  Globe,
  ArrowRight,
  Play
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Dashboard from '@/components/Dashboard'
import DocumentUpload from '@/components/DocumentUpload'
import KYCProcess from '@/components/KYCProcess'
import WalletInterface from '@/components/WalletInterface'
import TokenExplorer from '@/components/TokenExplorer'
import MarketPlace from '@/components/MarketPlace'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')

  const features = [
    {
      icon: Upload,
      title: 'AI-Powered Verification',
      description: 'Upload carbon credit certifications and get instant AI-powered verification with OCR and NLP technology'
    },
    {
      icon: Shield,
      title: 'Secure KYC Process',
      description: 'Complete KYC verification using Aadhaar, PAN, and biometric authentication for maximum security'
    },
    {
      icon: Leaf,
      title: 'Token Generation',
      description: 'Automatically mint carbon credit tokens on blockchain with verified project metadata'
    },
    {
      icon: Wallet,
      title: 'Digital Wallet',
      description: 'Manage your carbon tokens with a PhonePe-style wallet interface and real-time valuations'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Pricing',
      description: 'Track carbon credit prices with live market data and detailed analytics'
    },
    {
      icon: Search,
      title: 'Token Explorer',
      description: 'Explore token ownership, project details, and transfer history with our blockchain explorer'
    }
  ]

  const stats = [
    { label: 'Carbon Credits Verified', value: '2.4M+', icon: CheckCircle },
    { label: 'Tokens Generated', value: '1.8M+', icon: Leaf },
    { label: 'Verified Users', value: '15K+', icon: Users },
    { label: 'Countries Supported', value: '25+', icon: Globe }
  ]

  if (currentSection !== 'home') {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <div className="pt-20">
          {currentSection === 'dashboard' && <Dashboard />}
          {currentSection === 'upload' && <DocumentUpload />}
          {currentSection === 'kyc' && <KYCProcess />}
          {currentSection === 'wallet' && <WalletInterface />}
          {currentSection === 'explorer' && <TokenExplorer />}
          {currentSection === 'market' && <MarketPlace />}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Leaf className="w-4 h-4 mr-2" />
              Blockchain-Powered Carbon Trading
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8"
            >
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                CarbonCredX
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              The world's most advanced carbon credit tokenization platform. 
              Verify, tokenize, and trade carbon credits with AI-powered verification, 
              secure KYC, and blockchain technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => setCurrentSection('dashboard')}
                className="btn-primary flex items-center text-lg px-8 py-4"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary flex items-center text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              Everything you need to verify, tokenize, and trade carbon credits 
              in one comprehensive platform
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to Tokenize Your Carbon Credits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of users who trust CarbonCredX for secure, 
            verified carbon credit tokenization and trading
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setCurrentSection('dashboard')}
            className="bg-white text-emerald-600 hover:bg-neutral-50 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-emerald-500 mr-3" />
              <span className="text-2xl font-bold">CarbonCredX</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Building the future of carbon credit trading with blockchain technology
            </p>
            <div className="text-sm text-neutral-500">
              © 2025 CarbonCredX. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}