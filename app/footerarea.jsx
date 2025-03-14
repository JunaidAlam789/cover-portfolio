export default function FooterArea() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a 
              className="inline-flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors" 
              href="tel:+923335500019"
              aria-label="Phone"
            >
              <i className="fa fa-phone"></i>
            </a>
            <a 
              className="inline-flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-blue-600 transition-colors" 
              href="#"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a 
              className="inline-flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-blue-800 transition-colors" 
              href="https://linkedin.com/in/muhammad-junaid-alam-kvobjesoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a 
              className="inline-flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition-colors" 
              href="https://github.com/JunaidAlam789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa fa-github"></i>
            </a>
            <a 
              className="inline-flex justify-center items-center w-12 h-12 bg-gray-700 text-white rounded-full hover:bg-blue-700 transition-colors" 
              href="mailto:alammuhammadjunaid@yahoo.com"
              aria-label="Email"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          
          <div className="text-center">
            <p>Muhammad Junaid Alam | Full Stack Developer</p>
            <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} KvobjeSoft. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}