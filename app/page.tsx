'use client'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
         style={{ backgroundColor: '#fefbf3' }}>

      {/* Main Content Container - ensures everything is perfectly centered */}
      <div className="text-center max-w-2xl">

        {/* Farm Name - Using inline styles for precise control */}
        <h1 className="mb-8"
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)', // Responsive sizing
              fontWeight: 'bold',
              color: '#2d5a3d',
              textShadow: '3px 3px 0px #4a7c5980',
              lineHeight: '.05'
            }}>
          FREE RADICAL FARM
        </h1>

        <p> Fresh Microgreens, Grown Locally in East Austin</p>

        {/* Construction Message */}
        <p className="text-green-600 text-lg"
            style={{
              fontFamily: 'Roboto, monospace',
              fontSize: 'clamp(2rem, 5vw, 1.5rem)', // Responsive sizing
              //fontWeight: 'bold',
              color: '#FFAA55',
              textShadow: '3px 3px 0px #BB992240',
              lineHeight: '1.1'
            }}>
           🚧 Website under construction - more coming soon! 🚧
        </p>


        {/* Market Information */}
        <h1 className="text-xl text-green-700 mb-6 leading-relaxed"
           style={{
              fontFamily: 'Sans Serrif, monospace',
              fontSize: 'clamp(.8rem, 3vw, 1rem)', // Responsive sizing
              //fontWeight: 'bold',
              color: '#FF55CC',
              textShadow: '3px 3px 0px #BB229920',
              lineHeight: '1.1'
            }}>
          Catch us at the Springdale General Lone Star Farmers Market, every Sunday 10am-2pm
        </h1>

        {/* Contact Info */}
        <div className="mb-8">
          <h1>Let's get in touch!</h1>
          <h3>Email: lucas@freeradical.farm</h3>
          <h3>Phone/Text: 201-294-6434</h3>
        </div>

        {/* Instagram Link */}
        <div className="mb-8"
          style={{
              fontFamily: 'Roboto, monospace',
              fontSize: 'clamp(1.5rem, 5vw, 1.5rem)', // Responsive sizing
              //fontWeight: 'bold',
              color: '#FFAA55',
              textShadow: '3px 3px 0px #BB992280',
              lineHeight: '1.1'
            }}>
          <a
            href="https://www.instagram.com/freeradicalfarm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-800 text-lg underline transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
