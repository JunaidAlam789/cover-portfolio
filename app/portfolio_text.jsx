export default function Portfolio_Text() {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
            Muhammad Junaid Alam
          </h1>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            Hello, world! I am a <span className="text-blue-400 font-semibold">Full Stack Web Application Developer</span>.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            I create responsive Web Apps using HTML, CSS, TailwindCSS, React and NodeJS.
          </p>
          
          <div className="mt-10">
            <a 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    );
  }