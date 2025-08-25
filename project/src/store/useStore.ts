import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  kycStatus: 'pending' | 'verified' | 'rejected'
  walletAddress: string
}

interface Token {
  id: string
  symbol: string
  name: string
  balance: number
  value: number
  price: number
}

interface Transaction {
  id: string
  type: 'sent' | 'received' | 'minted'
  amount: number
  token: string
  timestamp: string
  status: 'pending' | 'completed' | 'failed'
  hash: string
}

interface Store {
  user: User | null
  tokens: Token[]
  transactions: Transaction[]
  setUser: (user: User) => void
  addToken: (token: Token) => void
  addTransaction: (transaction: Transaction) => void
  updateTokenBalance: (tokenId: string, newBalance: number) => void
}

export const useStore = create<Store>((set) => ({
  user: null,
  tokens: [],
  transactions: [],
  
  setUser: (user) => set({ user }),
  
  addToken: (token) => set((state) => ({
    tokens: [...state.tokens, token]
  })),
  
  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions]
  })),
  
  updateTokenBalance: (tokenId, newBalance) => set((state) => ({
    tokens: state.tokens.map(token =>
      token.id === tokenId ? { ...token, balance: newBalance } : token
    )
  }))
}))