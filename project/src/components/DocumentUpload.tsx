'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Loader, 
  Eye,
  Download,
  Trash2
} from 'lucide-react'

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [verificationStatus, setVerificationStatus] = useState<string>('')
  const [isVerifying, setIsVerifying] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    
    files.forEach(file => {
      const newFile = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploaded',
        uploadedAt: new Date().toISOString()
      }
      
      setUploadedFiles(prev => [...prev, newFile])
      
      // Simulate AI verification
      setTimeout(() => {
        setIsVerifying(true)
        setVerificationStatus('Processing document with AI...')
        
        setTimeout(() => {
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === newFile.id 
                ? { ...f, status: 'verified', carbonCredits: Math.floor(Math.random() * 1000) + 100 }
                : f
            )
          )
          setIsVerifying(false)
          setVerificationStatus('Document verified successfully!')
        }, 3000)
      }, 1000)
    })
  }

  const removeFile = (fileId: number) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const verificationSteps = [
    { step: 1, title: 'Document Upload', description: 'PDF or image file uploaded', completed: uploadedFiles.length > 0 },
    { step: 2, title: 'OCR Processing', description: 'Extracting text and data from document', completed: isVerifying || uploadedFiles.some(f => f.status === 'verified') },
    { step: 3, title: 'AI Validation', description: 'Verifying carbon credit authenticity', completed: uploadedFiles.some(f => f.status === 'verified') },
    { step: 4, title: 'Token Generation', description: 'Creating blockchain tokens', completed: false }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-neutral-900 mb-2"
        >
          Document Upload & Verification
        </motion.h1>
        <p className="text-neutral-600">
          Upload your carbon credit certifications for AI-powered verification and tokenization.
        </p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mb-8"
      >
        <div className="border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center hover:border-emerald-400 transition-colors">
          <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Upload Carbon Credit Documents
          </h3>
          <p className="text-neutral-600 mb-6">
            Drag and drop your files here, or click to browse
          </p>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="btn-primary cursor-pointer inline-block"
          >
            Select Files
          </label>
          <p className="text-sm text-neutral-500 mt-4">
            Supported formats: PDF, JPG, PNG (Max 10MB per file)
          </p>
        </div>
      </motion.div>

      {/* Verification Steps */}
      {uploadedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Verification Process</h2>
          <div className="space-y-4">
            {verificationSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  step.completed ? 'bg-emerald-500' : 'bg-neutral-300'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-sm font-medium text-white">{step.step}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${step.completed ? 'text-emerald-700' : 'text-neutral-600'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{step.description}</p>
                </div>
                {isVerifying && index === 1 && (
                  <Loader className="w-5 h-5 text-emerald-500 animate-spin" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Uploaded Documents</h2>
          <div className="space-y-4">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-medium text-neutral-900">{file.name}</h3>
                    <p className="text-sm text-neutral-600">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • 
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                    {file.status === 'verified' && file.carbonCredits && (
                      <p className="text-sm text-emerald-600 font-medium">
                        ✓ Verified • {file.carbonCredits} Carbon Credits Identified
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {file.status === 'verified' ? (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      <span className="text-sm text-emerald-600 font-medium">Verified</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Loader className="w-5 h-5 text-blue-500 animate-spin mr-2" />
                      <span className="text-sm text-blue-600">Processing...</span>
                    </div>
                  )}
                  
                  <button className="p-2 text-neutral-400 hover:text-blue-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-neutral-400 hover:text-emerald-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => removeFile(file.id)}
                    className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Status Message */}
      {verificationStatus && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-lg flex items-center ${
            verificationStatus.includes('successfully') 
              ? 'bg-emerald-100 text-emerald-800' 
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {verificationStatus.includes('successfully') ? (
            <CheckCircle className="w-5 h-5 mr-2" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2" />
          )}
          {verificationStatus}
        </motion.div>
      )}
    </div>
  )
}