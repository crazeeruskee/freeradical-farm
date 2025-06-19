import { Leaf, MapPin, Clock, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <Leaf className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-2xl font-bold text-green-800">Free Radical Farm</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-800 mb-6">
            Fresh Microgreens
            <span className="block text-3xl text-green-600 mt-2">Coming Soon</span>
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Locally grown, nutrient-packed microgreens delivered fresh to your door. 
            We're preparing something amazing for you!
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative mb-12">
          <div className="bg-green-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
            <div className="text-center">
              <Leaf className="h-24 w-24 text-green-600 mx-auto mb-4" />
              <p className="text-green-700 text-lg">Beautiful microgreens photo coming soon</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <MapPin className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Local Farmers Market</h3>
            <p className="text-green-600">Find us at your neighborhood farmers market every weekend</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Fresh & Organic</h3>
            <p className="text-green-600">Grown with care using sustainable, organic practices</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <Clock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Harvest to Table</h3>
            <p className="text-green-600">Delivered within hours of harvest for maximum freshness</p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Get Notified When We Launch</h3>
          <p className="text-green-600 mb-6">Be the first to know when fresh microgreens are available for delivery</p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-green-600">
        <p>&copy; 2025 Free Radical Farm. Growing fresh, growing local.</p>
      </footer>
    </div>
  )
}