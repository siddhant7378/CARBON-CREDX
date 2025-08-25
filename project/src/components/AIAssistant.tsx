import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Loader,
  Minimize2,
  Maximize2
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
  actions?: Array<{
    label: string
    action: string
    type: 'primary' | 'secondary' | 'warning'
  }>
}

interface AIAssistantProps {
  isOpen: boolean
  onToggle: () => void
}

export default function AIAssistant({ isOpen, onToggle }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "👋 Hello! I'm your AI-powered RWA & DeFi assistant. I can help you with wallet management, carbon credit trading, DeFi strategies, and security guidance. What would you like to explore today?",
      timestamp: new Date(),
      actions: [
        { label: 'Check Portfolio', action: 'portfolio', type: 'primary' },
        { label: 'Carbon Credits', action: 'carbon', type: 'secondary' },
        { label: 'DeFi Opportunities', action: 'defi', type: 'secondary' }
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const aiResponses = {
    portfolio: {
      content: "📊 **Portfolio Analysis:**\n\n• **Total Value:** ₹2,34,567 (+15.3%)\n• **Carbon Credits:** 12,847 CCX tokens\n• **Risk Level:** Low-Medium\n• **Diversification:** Good across 3 RWA types\n\n**Recommendations:**\n✅ Consider staking 20% for 8% APY\n⚠️ Monitor carbon credit prices (volatile)\n💡 Add stablecoins for stability",
      actions: [
        { label: 'Stake Tokens', action: 'stake', type: 'primary' },
        { label: 'View Details', action: 'details', type: 'secondary' }
      ]
    },
    carbon: {
      content: "🌱 **Carbon Credits Overview:**\n\n• **Current Holdings:** 12,847 CCX tokens\n• **Market Price:** ₹18.45 per credit (+12.5%)\n• **Verified Projects:** Amazon Rainforest, Mangrove Restoration\n• **Retirement Status:** 0 credits retired\n\n**Market Insights:**\n📈 Strong demand from corporate buyers\n🔒 All credits verified via blockchain\n⚡ Instant trading available",
      actions: [
        { label: 'Trade Credits', action: 'trade', type: 'primary' },
        { label: 'Retire Credits', action: 'retire', type: 'warning' },
        { label: 'Market Analysis', action: 'market', type: 'secondary' }
      ]
    },
    defi: {
      content: "🚀 **DeFi Opportunities:**\n\n**High Yield Options:**\n• **Staking CCX:** 8.5% APY (Low Risk)\n• **Liquidity Pool:** CCX/USDC 12% APY (Medium Risk)\n• **Lending:** Supply USDC for 6% APY (Low Risk)\n\n**⚠️ Risk Assessment:**\n• Smart contract risks exist\n• Impermanent loss possible in LPs\n• Always DYOR before investing",
      actions: [
        { label: 'Start Staking', action: 'stake', type: 'primary' },
        { label: 'Join LP', action: 'liquidity', type: 'secondary' },
        { label: 'Risk Analysis', action: 'risk', type: 'warning' }
      ]
    },
    security: {
      content: "🔐 **Security Best Practices:**\n\n**✅ Your Wallet Security:**\n• KYC Verified ✓\n• 2FA Enabled ✓\n• Hardware wallet recommended\n\n**🚨 Stay Safe:**\n• Never share private keys\n• Verify transaction details\n• Use official websites only\n• Enable transaction limits",
      actions: [
        { label: 'Security Settings', action: 'settings', type: 'primary' },
        { label: 'Learn More', action: 'learn', type: 'secondary' }
      ]
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI processing
    setTimeout(() => {
      const response = generateAIResponse(inputValue)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.content,
        timestamp: new Date(),
        actions: response.actions
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('portfolio') || lowerInput.includes('balance')) {
      return aiResponses.portfolio
    } else if (lowerInput.includes('carbon') || lowerInput.includes('credit')) {
      return aiResponses.carbon
    } else if (lowerInput.includes('defi') || lowerInput.includes('stake') || lowerInput.includes('yield')) {
      return aiResponses.defi
    } else if (lowerInput.includes('security') || lowerInput.includes('safe')) {
      return aiResponses.security
    } else if (lowerInput.includes('price') || lowerInput.includes('market')) {
      return {
        content: "📈 **Live Market Data:**\n\n• **CCX Token:** ₹18.45 (+12.5%)\n• **24h Volume:** ₹7.7M\n• **Market Cap:** ₹142.9M\n• **Global Carbon Price:** $85/tonne\n\n**Trend Analysis:**\n🔥 Strong bullish momentum\n📊 Above 50-day moving average\n⚡ High trading volume",
        actions: [
          { label: 'View Charts', action: 'charts', type: 'primary' },
          { label: 'Set Alerts', action: 'alerts', type: 'secondary' }
        ]
      }
    } else {
      return {
        content: "I can help you with:\n\n🔹 **Wallet Management** - Check balances, send/receive tokens\n🔹 **Carbon Credits** - Trade, retire, or analyze your RWA tokens\n🔹 **DeFi Strategies** - Staking, lending, yield farming\n🔹 **Security Guidance** - Best practices and risk analysis\n🔹 **Market Insights** - Live prices and trend analysis\n\nWhat specific area interests you?",
        actions: [
          { label: 'Portfolio Review', action: 'portfolio', type: 'primary' },
          { label: 'Security Check', action: 'security', type: 'secondary' }
        ]
      }
    }
  }

  const handleActionClick = (action: string) => {
    const actionMessages = {
      portfolio: "Show me my complete portfolio analysis",
      carbon: "Tell me about my carbon credits",
      defi: "What DeFi opportunities are available?",
      stake: "How can I stake my tokens safely?",
      security: "Review my wallet security"
    }

    const message = actionMessages[action as keyof typeof actionMessages] || `Execute ${action}`
    setInputValue(message)
    handleSendMessage()
  }

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-3xl transition-all duration-300"
      >
        <Bot className="w-8 h-8 text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={`fixed bottom-6 right-6 bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-t-3xl">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-3">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">AI Assistant</h3>
            <p className="text-xs text-slate-600">RWA & DeFi Guide</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                      : 'bg-slate-100 text-slate-900'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {message.content}
                  </div>
                  {message.actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleActionClick(action.action)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                            action.type === 'primary'
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : action.type === 'warning'
                              ? 'bg-orange-500 text-white hover:bg-orange-600'
                              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl p-4 flex items-center space-x-2">
                  <Loader className="w-4 h-4 animate-spin text-emerald-500" />
                  <span className="text-sm text-slate-600">AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about your portfolio, DeFi, or security..."
                className="flex-1 px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}