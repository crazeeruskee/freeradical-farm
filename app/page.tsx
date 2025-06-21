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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-4 font-mono tracking-wider">
            freeradical.farm
          </h1>
          <p className="text-xl md:text-2xl text-green-300 mb-2 font-mono">
            precision microgreens cultivation
          </p>
          <p className="text-sm md:text-base text-green-500 font-mono">
            &gt; from freeradical.tech
          </p>
        </div>

        {/* Microgreens Photo */}
        <div className="mb-8 relative">
          <div className="relative w-full rounded-lg overflow-hidden border-2 border-green-400/30 shadow-2xl">
            <Image 
              src="/microgreens-hero.jpg" 
              alt="Fresh microgreens from freeradical.farm"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover brightness-105 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-400/90 text-black px-3 py-1 rounded font-mono text-sm">
            batch_001.jpg
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-lg shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
            &gt; system.status: developing
          </h2>
          <p className="text-lg text-green-200 mb-6 font-mono leading-relaxed">
            Building automated cultivation systems.<br/>
            Online ordering & subscriptions coming soon.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-green-300 mb-4 font-mono">
              &gt; join beta program
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-400/20 border border-green-400 text-green-300 px-4 py-3 rounded font-mono">
                &gt; email registered. standby for updates.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@domain.com"
                  required
                  className="flex-1 px-4 py-2 bg-slate-900/50 border border-green-400/50 rounded text-green-300 placeholder-green-500/50 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 font-mono"
                />
                <button
                  type="submit"
                  className="bg-green-400 text-black px-6 py-2 rounded hover:bg-green-300 transition-colors font-mono font-bold"
                >
                  &gt; EXEC
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Farmers Market Info */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            &gt; current_location: farmers_market
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-green-300 mb-2 font-mono">&gt; schedule.active</h3>
              <p className="text-green-200 font-mono leading-relaxed">
                saturdays: 08:00 - 13:00<br />
                local_farmers_market<br />
                [update with your coordinates]
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300 mb-2 font-mono">&gt; inventory.current</h3>
              <p className="text-green-200 font-mono leading-relaxed">
                • microgreens.fresh<br />
                • vegetables.seasonal<br />
                • herbs.specialty
              </p>
            </div>
          </div>
          
          {/* Tech Connection */}
          <div className="mt-6 pt-6 border-t border-green-400/30">
            <p className="text-green-400/80 font-mono text-sm">
              &gt; powered by automation research @ 
              <a href="https://freeradical.tech" className="text-green-300 hover:text-green-200 ml-1">
                freeradical.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}