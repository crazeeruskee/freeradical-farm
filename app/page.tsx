'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success message
    // Later you'll connect this to your email service
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4 font-mono tracking-wide">
            FREE RADICAL FARM
          </h1>
          <p className="text-2xl md:text-3xl text-green-700 mb-2 font-light">
            Fresh Microgreens, Grown Locally
          </p>
          <p className="text-lg md:text-xl text-green-600 italic">
            precision cultivation meets neighborhood freshness
          </p>
        </div>

        {/* Microgreens Photo */}
        <div className="mb-8 relative">
          <div className="relative w-full rounded-xl overflow-hidden border-4 border-white shadow-xl bg-white p-2">
            <Image 
              src="/microgreens-hero.jpg" 
              alt="Fresh microgreens from Free Radical Farm"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white/95 text-green-800 px-4 py-2 rounded-lg font-mono text-sm border border-green-200">
              Fresh Daily Harvest
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            🌱 Coming Soon to Your Kitchen
          </h2>
          <p className="text-lg text-green-700 mb-6 leading-relaxed">
            We're growing something special! Online ordering and home delivery 
            subscriptions for the freshest microgreens will be available soon.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Get notified when we launch online
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-100 border-2 border-green-300 text-green-800 px-6 py-4 rounded-lg">
                🎉 Thanks! We'll let you know when fresh delivery is ready.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-white border-2 border-green-300 rounded-lg text-green-800 placeholder-green-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Farmers Market Info */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            🏪 Find Us at the Farmers Market
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-3 text-lg">📅 When & Where</h3>
              <p className="text-green-700 leading-relaxed">
                <strong>Saturdays:</strong> 8:00 AM - 1:00 PM<br />
                Your Local Farmers Market<br />
                <span className="text-sm italic">[Location details coming soon]</span>
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-3 text-lg">🥬 What We Grow</h3>
              <p className="text-green-700 leading-relaxed">
                • Fresh microgreens<br />
                • Seasonal vegetables<br />
                • Specialty herbs & crops
              </p>
            </div>
          </div>
          
          {/* Tech Connection */}
          <div className="mt-8 pt-6 border-t border-green-200">
            <p className="text-green-600 text-sm font-mono">
              Powered by precision growing technology from{' '}
              <a href="https://freeradical.tech" className="text-green-700 hover:text-green-800 underline font-medium">
                freeradical.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}