'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [expandedCard, setExpandedCard] = useState(null)

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
          
          {/* Varieties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Triton Radish */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'triton' ? null : 'triton')}>
              <div className="h-48 bg-gradient-to-br from-purple-200 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌱</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Triton Radish</h3>
                <p className="text-green-600 text-sm">Peppery • Purple stems • Bold flavor</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Waltham Broccoli */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'broccoli' ? null : 'broccoli')}>
              <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥦</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Waltham Broccoli</h3>
                <p className="text-green-600 text-sm">Mild • Tender • Nutritious</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Red Rambo Radish */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'rambo' ? null : 'rambo')}>
              <div className="h-48 bg-gradient-to-br from-red-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌶️</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Red Rambo Radish</h3>
                <p className="text-green-600 text-sm">Spicy • Red stems • Intense heat</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Swiss Chard */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'chard' ? null : 'chard')}>
              <div className="h-48 bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍃</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Swiss Chard</h3>
                <p className="text-green-600 text-sm">Earthy • Colorful • Sweet</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Arugula */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'arugula' ? null : 'arugula')}>
              <div className="h-48 bg-gradient-to-br from-green-200 to-lime-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥬</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Arugula</h3>
                <p className="text-green-600 text-sm">Peppery • Sophisticated • Classic</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Cilantro */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'cilantro' ? null : 'cilantro')}>
              <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Cilantro</h3>
                <p className="text-green-600 text-sm">Fresh • Bright • Herbal</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>

            {/* Purple Kohlrabi */}
            <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden cursor-pointer"
                 style={{ boxShadow: '4px 4px 0px rgba(34, 197, 94, 0.15)' }}
                 onClick={() => setExpandedCard(expandedCard === 'kohlrabi' ? null : 'kohlrabi')}>
              <div className="h-48 bg-gradient-to-br from-purple-200 to-violet-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💜</div>
                  <p className="text-green-700 font-mono">Add your photo here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Purple Kohlrabi</h3>
                <p className="text-green-600 text-sm">Mild • Purple-tinted • Unique</p>
                <p className="text-green-500 text-xs mt-2">Click to learn more →</p>
              </div>
            </div>
          </div>

          {/* Expanded Card Details */}
          {expandedCard && (
            <div className="bg-white border-2 border-green-200 rounded-lg p-8 mb-8"
                 style={{ boxShadow: '6px 6px 0px rgba(34, 197, 94, 0.2)' }}>
              <button 
                onClick={() => setExpandedCard(null)}
                className="float-right text-green-600 hover:text-green-800 text-2xl"
              >
                ×
              </button>
              
              {expandedCard === 'triton' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Triton Radish Microgreens</h3>
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
                </div>
              )}

              {expandedCard === 'broccoli' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Waltham Broccoli Microgreens</h3>
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
                </div>
              )}

              {/* Add other variety details... */}
              {expandedCard === 'rambo' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Red Rambo Radish Microgreens</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                      <p className="text-green-600 mb-4">Fiery hot with beautiful red stems. The most intense variety we grow - a little goes a long way!</p>
                      
                      <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• High in anthocyanins (red pigments)</li>
                        <li>• Powerful anti-inflammatory properties</li>
                        <li>• Supports cardiovascular health</li>
                        <li>• Rich in vitamin C</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Stunning salad accent</li>
                        <li>• Spicy taco garnish</li>
                        <li>• Adds heat to bloody marys</li>
                        <li>• Beautiful cocktail garnish</li>
                        <li>• Elevates cheese plates</li>
                      </ul>
                      
                      <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                      <p className="text-green-600">Best consumed fresh. Store refrigerated and use within 5-7 days for peak color and heat.</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedCard === 'chard' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Swiss Chard Microgreens</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                      <p className="text-green-600 mb-4">Earthy and slightly sweet with colorful stems ranging from white to pink to yellow. Mild enough for children yet complex for gourmet dishes.</p>
                      
                      <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Extremely high in vitamin K</li>
                        <li>• Rich in magnesium and potassium</li>
                        <li>• Contains betalains for detox support</li>
                        <li>• High in iron and calcium</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Beautiful in mixed salads</li>
                        <li>• Perfect for kids' meals</li>
                        <li>• Great in grain bowls</li>
                        <li>• Adds color to omelets</li>
                        <li>• Lovely soup garnish</li>
                      </ul>
                      
                      <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                      <p className="text-green-600">Hardy variety that stores well. Refrigerate and use within 10-14 days. Colors may intensify over time.</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedCard === 'arugula' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Arugula Microgreens</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                      <p className="text-green-600 mb-4">Classic peppery bite with nutty undertones. The sophisticated choice for restaurant-quality dishes. Less intense than mature arugula.</p>
                      
                      <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• High in calcium and vitamin K</li>
                        <li>• Rich in folate and vitamin A</li>
                        <li>• Contains glucosinolates</li>
                        <li>• Natural source of nitrates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Classic Caesar salad upgrade</li>
                        <li>• Perfect pizza topping</li>
                        <li>• Elevates pasta dishes</li>
                        <li>• Beautiful on flatbreads</li>
                        <li>• Essential for Italian cuisine</li>
                      </ul>
                      
                      <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                      <p className="text-green-600">Store in refrigerator. Best used within 7-10 days. May become more peppery with age.</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedCard === 'cilantro' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Cilantro Microgreens</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                      <p className="text-green-600 mb-4">Fresh, bright cilantro flavor that's more concentrated than mature leaves. Perfect for those who love cilantro or want to try it in a milder form.</p>
                      
                      <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Natural detoxification properties</li>
                        <li>• Rich in vitamins A, C, and K</li>
                        <li>• Contains antioxidants</li>
                        <li>• May help with heavy metal removal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Perfect for Mexican dishes</li>
                        <li>• Essential for Asian cuisine</li>
                        <li>• Great in salsas and guacamole</li>
                        <li>• Beautiful curry garnish</li>
                        <li>• Adds freshness to soups</li>
                      </ul>
                      
                      <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                      <p className="text-green-600">Best used fresh for maximum flavor. Refrigerate and use within 5-7 days. Flavor diminishes quickly.</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedCard === 'kohlrabi' && (
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Purple Kohlrabi Microgreens</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flavor Profile</h4>
                      <p className="text-green-600 mb-4">Mild, sweet cabbage-like flavor with stunning purple-tinted leaves. One of our most unique and visually striking varieties.</p>
                      
                      <h4 className="font-semibold text-green-700 mb-2">Health Benefits</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• High in vitamin C and fiber</li>
                        <li>• Contains anthocyanins</li>
                        <li>• Rich in potassium</li>
                        <li>• Natural source of antioxidants</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Culinary Uses</h4>
                      <ul className="text-green-600 space-y-1">
                        <li>• Stunning salad centerpiece</li>
                        <li>• Beautiful garnish for white plates</li>
                        <li>• Perfect for photography</li>
                        <li>• Great in slaws and wraps</li>
                        <li>• Adds color to sandwiches</li>
                      </ul>
                      
                      <h4 className="font-semibold text-green-700 mb-2 mt-4">Storage</h4>
                      <p className="text-green-600">Purple color is most vibrant when fresh. Refrigerate and use within 7-10 days for best appearance.</p>
                    </div>
                  </div>
                </div>
              )}
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