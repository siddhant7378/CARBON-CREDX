import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Leaf, 
  Home, 
  LayoutDashboard, 
  Upload, 
  Shield, 
  Wallet, 
  Search, 
  TrendingUp,
  Building,
  Zap,
  Menu,
  X,
  Bell,
  Settings
} from 'lucide-react'

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'kyc', label: 'KYC', icon: Shield },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'explorer', label: 'Explorer', icon: Search },
    { id: 'market', label: 'Market', icon: TrendingUp }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200/50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-3 group-hover:shadow-lg transition-shadow">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              CarbonCredX
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`relative flex items-center px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  currentSection === item.id
                    ? 'text-emerald-700 bg-emerald-100 shadow-lg'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
                {currentSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-100 rounded-2xl -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              className="relative p-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-xl transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </motion.button>
            <motion.button 
              className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-xl transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Settings className="w-5 h-5" />
            </motion.button>
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-bold">U</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-80 h-full bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-3">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                      CarbonCredX
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setCurrentSection(item.id)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full flex items-center px-4 py-4 rounded-2xl text-left transition-all duration-200 ${
                        currentSection === item.id
                          ? 'bg-emerald-100 text-emerald-700 shadow-lg'
                          : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-4" />
                      <span className="font-semibold">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold">U</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">User Account</p>
                      <p className="text-sm text-slate-600">KYC Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}