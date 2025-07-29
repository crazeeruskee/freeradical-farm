'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

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
              onMouseOver={(e) => (e.target as HTMLElement).style.opacity = '0.8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.opacity = '1'}
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                  (e.target as HTMLElement).style.backgroundColor = '#f0fdf4';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#15803d';
                    target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#15803d';
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-mono text-center"
              style={{ textShadow: '2px 2px 0px #4a7c59' }}>
            Our Microgreens
          </h2>
          
          {/* DEBUG: Forced 3-column grid with explicit styling */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            
            {/* Triton Radish */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '2px solid #bbf7d0',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)',
                transition: 'all 0.2s'
              }}
              onClick={() => {
                console.log('Triton clicked!')
                setExpandedCard(expandedCard === 'triton' ? null : 'triton')
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#4ade80'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#bbf7d0'}
            >
              <div style={{ 
                aspectRatio: '1/1', 
                overflow: 'hidden',
                background: 'linear-gradient(to bottom right, #e9d5ff, #bbf7d0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image 
                  src="/triton_radish.png"
                  alt="Triton Radish Microgreens"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              </div>
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534' }}>Triton Radish</h3>
              </div>
            </div>

            {/* Waltham Broccoli */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '2px solid #bbf7d0',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)',
                transition: 'all 0.2s'
              }}
              onClick={() => {
                console.log('Broccoli clicked!')
                setExpandedCard(expandedCard === 'broccoli' ? null : 'broccoli')
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#4ade80'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#bbf7d0'}
            >
              <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image 
                  src="/broccoli_internet_placeholder.jpg"
                  alt="Waltham Broccoli Microgreens"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534' }}>Waltham Broccoli</h3>
              </div>
            </div>

            {/* Red Rambo Radish */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '2px solid #bbf7d0',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)',
                transition: 'all 0.2s'
              }}
              onClick={() => {
                console.log('Red Rambo clicked!')
                setExpandedCard(expandedCard === 'rambo' ? null : 'rambo')
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#4ade80'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#bbf7d0'}
            >
              <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image 
                  src="/red_rambo_radish.png"
                  alt="Red Rambo Radish"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534' }}>Red Rambo Radish</h3>
              </div>
            </div>

            {/* Swiss Chard */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '2px solid #bbf7d0',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)',
                transition: 'all 0.2s'
              }}
              onClick={() => {
                console.log('Swiss Chard clicked!')
                setExpandedCard(expandedCard === 'chard' ? null : 'chard')
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = '#4ade80'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = '#bbf7d0'}
            >
              <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image 
                  src="/swisschard_internet_placeholder.jpg"
                  alt="Ruby Red Swiss Chard"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534' }}>Ruby Red Swis Chard</h3>
              </div>
            </div>

            {/* Arugula */}
            <div 
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer hover:border-green-400 transition-all duration-200"
              style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
              onClick={() => setExpandedCard(expandedCard === 'arugula' ? null : 'arugula')}
            >
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-lime-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥬</div>
                    <p className="text-green-700 font-mono text-sm">Add your photo</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-800">Arugula</h3>
              </div>
            </div>

            {/* Cilantro */}
            <div 
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer hover:border-green-400 transition-all duration-200"
              style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
              onClick={() => setExpandedCard(expandedCard === 'cilantro' ? null : 'cilantro')}
            >
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌿</div>
                    <p className="text-green-700 font-mono text-sm">Add your photo</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-800">Cilantro</h3>
              </div>
            </div>

            {/* Purple Kohlrabi */}
            <div 
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer hover:border-green-400 transition-all duration-200"
              style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
              onClick={() => setExpandedCard(expandedCard === 'kohlrabi' ? null : 'kohlrabi')}
            >
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-violet-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💜</div>
                    <p className="text-green-700 font-mono text-sm">Add your photo</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-800">Purple Kohlrabi</h3>
              </div>
            </div>

            {/* Add 2 more placeholder cards to make a nice 3x3 grid */}
            <div 
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden opacity-50"
              style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
            >
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    <p className="text-green-700 font-mono text-sm">More varieties<br />coming soon!</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-600">More Varieties</h3>
              </div>
            </div>

            <div 
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden opacity-50"
              style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
            >
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌿</div>
                    <p className="text-green-700 font-mono text-sm">Special<br />seasonal crops</p>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-green-600">Seasonal Specials</h3>
              </div>
            </div>
          </div>

          {/* Expanded Details - Shows Below Grid */}
          {expandedCard && (
            <div className="bg-white border-2 border-green-400 rounded-lg p-8 mb-8 animate-in slide-in-from-top duration-300"
                 style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.3)' }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-green-800">
                  {expandedCard === 'triton' && 'Triton Radish Microgreens'}
                  {expandedCard === 'broccoli' && 'Waltham Broccoli Microgreens'}
                  {expandedCard === 'rambo' && 'Red Rambo Radish Microgreens'}
                  {expandedCard === 'chard' && 'Swiss Chard Microgreens'}
                  {expandedCard === 'arugula' && 'Arugula Microgreens'}
                  {expandedCard === 'cilantro' && 'Cilantro Microgreens'}
                  {expandedCard === 'kohlrabi' && 'Purple Kohlrabi Microgreens'}
                </h3>
                <button 
                  onClick={() => setExpandedCard(null)}
                  className="text-green-600 hover:text-green-800 text-3xl font-bold leading-none"
                >
                  ×
                </button>
              </div>
              
              {/* Content for each variety */}
              {expandedCard === 'triton' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                    <p className="text-green-600 mb-4">Intense peppery kick with a clean, crisp finish. The purple stems add visual appeal while delivering a bold radish flavor that's more concentrated than mature radishes.</p>
                    
                    <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                    <ul className="text-green-600 space-y-1">
                      <li>• High in vitamin C and antioxidants</li>
                      <li>• Contains glucosinolates for immune support</li>
                      <li>• Rich in folate and vitamin K</li>
                      <li>• Natural detoxification properties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                    <ul className="text-green-600 space-y-1">
                      <li>• Perfect for salad garnishes</li>
                      <li>• Adds punch to sandwiches and wraps</li>
                      <li>• Beautiful topping for soups</li>
                      <li>• Elevates avocado toast</li>
                      <li>• Great in grain bowls</li>
                    </ul>
                    
                    <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                    <p className="text-green-600">Keep refrigerated in container. Best consumed within 7-10 days for optimal flavor and nutrition.</p>
                  </div>
                </div>
              )}

              {expandedCard === 'broccoli' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                    <p className="text-green-600 mb-4">Mild, fresh broccoli flavor with tender leaves and stems. Less intense than mature broccoli, making it perfect for those new to microgreens.</p>
                    
                    <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                    <ul className="text-green-600 space-y-1">
                      <li>• Extremely high in sulforaphane</li>
                      <li>• Powerful cancer-fighting compounds</li>
                      <li>• Rich in vitamins A, C, and K</li>
                      <li>• Supports heart health</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                    <ul className="text-green-600 space-y-1">
                      <li>• Excellent in smoothies</li>
                      <li>• Perfect for cooking and sautéing</li>
                      <li>• Great in omelets and scrambles</li>
                      <li>• Adds nutrition to pasta dishes</li>
                      <li>• Beautiful pizza topping</li>
                    </ul>
                    
                    <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                    <p className="text-green-600">Refrigerate immediately. Can last up to 2 weeks with proper storage. Rinse gently before use.</p>
                  </div>
                </div>
              )}

              {/* Add other variety details here as needed */}
            </div>
          )}

          {/* Instagram CTA */}
          <div className="text-center">
            <p className="text-lg text-green-700 mb-4">
              See these beauties growing fresh daily on our Instagram!
            </p>
            <a 
              href="https://www.instagram.com/freeradicalfarm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
            >
              Follow @freeradicalfarm
            </a>
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