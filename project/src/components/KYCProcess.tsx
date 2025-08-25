'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, FileText, Camera, CheckCircle, AlertCircle, Upload, User, Car as IdCard, Eye, EyeOff } from 'lucide-react'

export default function KYCProcess() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    panNumber: '',
    aadhaarNumber: ''
  })
  const [uploadedDocuments, setUploadedDocuments] = useState({
    aadhaar: null,
    pan: null,
    selfie: null
  })
  const [showAadhaar, setShowAadhaar] = useState(false)

  const steps = [
    { id: 1, title: 'Personal Information', icon: User },
    { id: 2, title: 'Document Upload', icon: FileText },
    { id: 3, title: 'Biometric Verification', icon: Camera },
    { id: 4, title: 'Verification Complete', icon: CheckCircle }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = (documentType: string, file: File) => {
    setUploadedDocuments({
      ...uploadedDocuments,
      [documentType]: file
    })
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-neutral-900 mb-2"
        >
          KYC Verification
        </motion.h1>
        <p className="text-neutral-600">
          Complete your identity verification to start trading carbon credits securely.
        </p>
      </div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mb-8"
      >
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                currentStep >= step.id 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-neutral-200 text-neutral-600'
              }`}>
                <step.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className={`font-medium ${
                  currentStep >= step.id ? 'text-emerald-700' : 'text-neutral-600'
                }`}>
                  {step.title}
                </h3>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-4 ${
                  currentStep > step.id ? 'bg-emerald-500' : 'bg-neutral-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="card"
      >
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your complete address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="ABCDE1234F"
                  maxLength={10}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Aadhaar Number
                </label>
                <div className="relative">
                  <input
                    type={showAadhaar ? "text" : "password"}
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleInputChange}
                    className="input-field pr-10"
                    placeholder="1234 5678 9012"
                    maxLength={12}
                  />
                  <button
                    type="button"
                    onClick={() => setShowAadhaar(!showAadhaar)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showAadhaar ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Document Upload</h2>
            <div className="space-y-6">
              {/* Aadhaar Upload */}
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <IdCard className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="font-medium text-neutral-900">Aadhaar Card (XML File)</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4">
                  Upload the offline XML file downloaded from UIDAI website
                </p>
                <input
                  type="file"
                  accept=".xml,.zip"
                  onChange={(e) => e.target.files && handleFileUpload('aadhaar', e.target.files[0])}
                  className="hidden"
                  id="aadhaar-upload"
                />
                <label htmlFor="aadhaar-upload" className="btn-secondary cursor-pointer inline-flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </label>
                {uploadedDocuments.aadhaar && (
                  <div className="mt-2 flex items-center text-emerald-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">File uploaded successfully</span>
                  </div>
                )}
              </div>

              {/* PAN Upload */}
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-purple-500 mr-2" />
                  <h3 className="font-medium text-neutral-900">PAN Card</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4">
                  Upload a clear image of your PAN card
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileUpload('pan', e.target.files[0])}
                  className="hidden"
                  id="pan-upload"
                />
                <label htmlFor="pan-upload" className="btn-secondary cursor-pointer inline-flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </label>
                {uploadedDocuments.pan && (
                  <div className="mt-2 flex items-center text-emerald-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">File uploaded successfully</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Biometric Verification</h2>
            <div className="text-center">
              <div className="w-32 h-32 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-16 h-16 text-neutral-400" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Take a Selfie</h3>
              <p className="text-neutral-600 mb-6">
                We'll use this to verify your identity against your documents
              </p>
              <button className="btn-primary mb-4">
                <Camera className="w-5 h-5 mr-2" />
                Capture Photo
              </button>
              <p className="text-sm text-neutral-500">
                Make sure your face is clearly visible and well-lit
              </p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Verification Complete!</h2>
            <p className="text-neutral-600 mb-8">
              Your KYC verification has been successfully completed. You can now access all platform features.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-emerald-800 font-medium">Account Verified</span>
              </div>
            </div>
            <button className="btn-primary">
              Continue to Dashboard
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'text-neutral-400 cursor-not-allowed'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="btn-primary"
            >
              {currentStep === 3 ? 'Complete Verification' : 'Next'}
            </button>
          </div>
        )}
      </motion.div>

      {/* Legal Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
      >
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Privacy & Compliance</p>
            <p>
              Your data is encrypted and processed in compliance with India's DPDP Act 2023. 
              We only use your information for identity verification and regulatory compliance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}