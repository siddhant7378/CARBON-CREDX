import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Play,
  Sparkles,
  Award,
  Target
} from 'lucide-react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import DocumentUpload from './components/DocumentUpload'
import KYCProcess from './components/KYCProcess'
import WalletInterface from './components/WalletInterface'
import TokenExplorer from './components/TokenExplorer'
import MarketPlace from './components/MarketPlace'
import DeFiHub from './components/DeFiHub'
import RWAPortfolio from './components/RWAPortfolio'
import AIAssistant from './components/AIAssistant'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isAIOpen, setIsAIOpen] = useState(false)

  const features = [
    {
      icon: Upload,
      title: 'AI-Powered Verification',
      description: 'Upload carbon credit certifications and get instant AI-powered verification with OCR and NLP technology',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Secure KYC Process',
      description: 'Complete KYC verification using Aadhaar, PAN, and biometric authentication for maximum security',
      color: 'blue'
    },
    {
      icon: Leaf,
      title: 'Token Generation',
      description: 'Automatically mint carbon credit tokens on blockchain with verified project metadata',
      color: 'green'
    },
    {
      icon: Wallet,
      title: 'Digital Wallet',
      description: 'Manage your carbon tokens with a PhonePe-style wallet interface and real-time valuations',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Pricing',
      description: 'Track carbon credit prices with live market data and detailed analytics',
      color: 'orange'
    },
    {
      icon: Search,
      title: 'Token Explorer',
      description: 'Explore token ownership, project details, and transfer history with our blockchain explorer',
      color: 'indigo'
    }
  ]

  const stats = [
    { label: 'Carbon Credits Verified', value: '2.4M+', icon: CheckCircle, color: 'emerald' },
    { label: 'Tokens Generated', value: '1.8M+', icon: Leaf, color: 'green' },
    { label: 'Verified Users', value: '15K+', icon: Users, color: 'blue' },
    { label: 'Countries Supported', value: '25+', icon: Globe, color: 'purple' }
  ]

  const achievements = [
    { icon: Award, title: 'ISO 27001 Certified', desc: 'Information Security' },
    { icon: Shield, title: 'SEBI Compliant', desc: 'Regulatory Approved' },
    { icon: Target, title: '99.9% Uptime', desc: 'Enterprise Grade' }
  ]

  if (currentSection !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <div className="pt-20">
          <AnimatePresence mode="wait">
            {currentSection === 'dashboard' && <Dashboard key="dashboard" />}
            {currentSection === 'upload' && <DocumentUpload key="upload" />}
            {currentSection === 'kyc' && <KYCProcess key="kyc" />}
            {currentSection === 'wallet' && <WalletInterface key="wallet" />}
            {currentSection === 'explorer' && <TokenExplorer key="explorer" />}
            {currentSection === 'market' && <MarketPlace key="market" />}
            {currentSection === 'defi' && <DeFiHub key="defi" />}
            {currentSection === 'rwa' && <RWAPortfolio key="rwa" />}
          </AnimatePresence>
        </div>
        <AIAssistant isOpen={isAIOpen} onToggle={() => setIsAIOpen(!isAIOpen)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Blockchain-Powered Carbon Trading Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                CarbonCredX
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              The world's most advanced carbon credit tokenization platform. 
              Verify, tokenize, and trade carbon credits with AI-powered verification, 
              secure KYC, and blockchain technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button 
                onClick={() => setCurrentSection('dashboard')}
                className="group relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-semibold text-lg px-10 py-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
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
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Trusted & Certified
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Ready to Tokenize Your Carbon Credits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
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
            className="bg-white text-emerald-600 hover:bg-slate-50 font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-bold">CarbonCredX</span>
            </div>
            <p className="text-slate-400 mb-8 text-lg">
              Building the future of carbon credit trading with blockchain technology
            </p>
            <div className="text-sm text-slate-500">
              © 2025 CarbonCredX. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App