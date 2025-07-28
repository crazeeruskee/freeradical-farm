'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Don't hide nav at the very top of the page
      if (currentScrollY < 10) {
        setIsNavVisible(true)
        setLastScrollY(currentScrollY)
        return
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide nav
        setIsNavVisible(false)
        setMobileMenuOpen(false) // Close mobile menu when hiding
      } else {
        // Scrolling up - show nav
        setIsNavVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <div style={{ backgroundColor: '#fefbf3' }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderBottom: '2px solid #bbf7d0',
        boxShadow: '0 2px 0px rgba(34, 197, 94, 0.1)',
        zIndex: 50,
        transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '64px',
            gap: '16px'
          }}>
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#2d5a3d',
                textShadow: '1px 1px 0px #4a7c59',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              FREE RADICAL FARM
            </button>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div style={{ 
                display: 'flex', 
                gap: '32px'
              }}>
                <button 
                  onClick={() => scrollToSection('about')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('microgreens')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  Our Microgreens
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-buy')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  How to Buy
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  Contact
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  color: '#15803d',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                }}
              >
                {/* Hamburger Icon */}
                <div style={{
                  width: '24px',
                  height: '18px',
                  position: 'relative',
                  transform: mobileMenuOpen ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '24px',
                    height: '3px',
                    backgroundColor: '#15803d',
                    borderRadius: '2px',
                    transform: mobileMenuOpen ? 'rotate(90deg) translateX(7px)' : 'none',
                    transition: 'transform 0.2s'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '7px',
                    left: '0px',
                    width: '24px',
                    height: '3px',
                    backgroundColor: '#15803d',
                    borderRadius: '2px',
                    opacity: mobileMenuOpen ? 0 : 1,
                    transition: 'opacity 0.2s'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '0px',
                    width: '24px',
                    height: '3px',
                    backgroundColor: '#15803d',
                    borderRadius: '2px',
                    transform: mobileMenuOpen ? 'translateY(-7px)' : 'none',
                    transition: 'transform 0.2s'
                  }}></div>
                </div>
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobile && mobileMenuOpen && (
            <div style={{
              borderTop: '1px solid #bbf7d0',
              paddingTop: '16px',
              paddingBottom: '16px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  onClick={() => scrollToSection('about')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('microgreens')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  Our Microgreens
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-buy')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  How to Buy
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{
                    color: '#15803d',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#15803d'
                    e.target.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#15803d'
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="text-center max-w-2xl">
          
          {/* Farm Name */}
          <h1 className="mb-8" 
              style={{ 
                fontFamily: 'Courier New, monospace',
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                fontWeight: 'bold',
                color: '#2d5a3d',
                textShadow: '3px 3px 0px #4a7c59',
                lineHeight: '1.1'
              }}>
            FREE RADICAL FARM
          </h1>

          {/* Market Information */}
          <p className="text-xl text-green-700 mb-6 leading-relaxed">
            Catch us at the Springdale General Lone Star Farmers Market,<br />
            every Sunday 10am-2pm
          </p>

          {/* Instagram Link */}
          <div className="mb-8">
            <a 
              href="https://www.instagram.com/freeradicalfarm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 text-lg underline transition-colors"
            >
              Follow us on Instagram
            </a>
          </div>

          {/* Construction Message */}
          <p className="text-green-600 text-lg mb-8">
            Website under construction, more coming soon! 🚧
          </p>

          {/* Email Signup */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-6" 
               style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Get notified when online ordering launches!
            </h3>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2 border-2 border-green-300 rounded text-green-800 placeholder-green-500 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors font-medium"
                style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-mono"
              style={{ textShadow: '2px 2px 0px #4a7c59' }}>
            About Free Radical Farm
          </h2>
          <div className="bg-white border-2 border-green-200 rounded-lg p-8" 
               style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.2)' }}>
            <p className="text-lg text-green-700 leading-relaxed mb-6">
              We're passionate about growing the freshest, most nutritious microgreens using precision cultivation techniques. 
              Every batch is carefully monitored and harvested at peak freshness to deliver maximum flavor and nutrition to your table.
            </p>
            <p className="text-lg text-green-700 leading-relaxed">
              From our technical background at <a href="https://freeradical.tech" className="underline text-green-800 hover:text-green-900">freeradical.tech</a>, 
              we're developing automated growing systems that ensure consistent quality while supporting sustainable, local food production.
            </p>
          </div>
        </div>
      </section>

      {/* Our Microgreens Section */}
      <section id="microgreens" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-mono"
              style={{ textShadow: '2px 2px 0px #4a7c59' }}>
            Our Microgreens
          </h2>
          <div className="bg-white border-2 border-green-200 rounded-lg p-8" 
               style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.2)' }}>
            <p className="text-lg text-green-700 mb-8">
              Follow our Instagram for the latest harvest photos and variety updates!
            </p>
            <div className="text-center">
              <a 
                href="https://www.instagram.com/freeradicalfarm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
              >
                View Our Instagram Gallery
              </a>
            </div>
            
            {/* Current Varieties */}
            <div className="mt-8 pt-8 border-t border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Current Varieties</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-green-700">
                <div>Triton Radish</div>
                <div>Waltham Broccoli</div>
                <div>Red Rambo Radish</div>
                <div>Swiss Chard</div>
                <div>Arugula</div>
                <div>Cilantro</div>
                <div>Purple Kohlrabi</div>
                <div>...and more!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-mono"
              style={{ textShadow: '2px 2px 0px #4a7c59' }}>
            How to Buy
          </h2>
          <div className="bg-white border-2 border-green-200 rounded-lg p-8" 
               style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.2)' }}>
            
            {/* Farmers Market */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Visit Us at the Market</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6"
                   style={{ boxShadow: '3px 3px 0px rgba(34, 197, 94, 0.1)' }}>
                <p className="text-lg text-green-700 mb-2">
                  <strong>Lone Star Farmer's Market</strong><br />
                  at Springdale General
                </p>
                <p className="text-green-600">
                  Every Sunday, 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            {/* Coming Soon */}
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Online Ordering - Coming Soon!</h3>
              <p className="text-lg text-green-700 mb-4">
                We're working on home delivery and subscription services. 
                Sign up above to be notified when we launch!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-mono"
              style={{ textShadow: '2px 2px 0px #4a7c59' }}>
            Get in Touch
          </h2>
          <div className="bg-white border-2 border-green-200 rounded-lg p-8" 
               style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.2)' }}>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Phone</h3>
                <a href="tel:2012946434" 
                   className="text-lg text-green-700 hover:text-green-800 underline">
                  (201) 294-6434
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Email</h3>
                <a href="mailto:lucas@freeradical.farm" 
                   className="text-lg text-green-700 hover:text-green-800 underline">
                  lucas@freeradical.farm
                </a>
              </div>

              {/* Instagram */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Follow Us</h3>
                <a href="https://www.instagram.com/freeradicalfarm/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-lg text-green-700 hover:text-green-800 underline">
                  @freeradicalfarm
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-green-200">
              <p className="text-green-600 text-sm font-mono">
                Powered by precision growing technology from{' '}
                <a href="https://freeradical.tech" className="text-green-700 hover:text-green-800 underline">
                  freeradical.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}