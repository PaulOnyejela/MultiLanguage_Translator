import { useState } from 'react' // Importing useState hook from React
import TranslatorStart from './Components/TranslatorStart' // Importing the TranslatorStart component
import TranslatorApp from './Components/TranslatorApp' // Importing the TranslatorApp component

// The main App component
const App = () => {
  // useState hook to manage whether TranslatorApp is shown or not
  const [showTranslatorApp, setShowTranslatorApp] = useState(false)

  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#DA98C9] to-[#3d5585] flex justify-center items-center">
      {/* This div serves as a container with full screen height, a gradient background, and centers its content */}
      
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#003044] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {/* This inner div is used as the main container for the app, with responsive width, height, and styling */}
        
        {showTranslatorApp ? (
          // If showTranslatorApp is true, display the TranslatorApp component and pass an onClose prop
          <TranslatorApp onClose={() => setShowTranslatorApp(false)} />
        ) : (
          // If showTranslatorApp is false, display the TranslatorStart component and pass an onStart prop
          <TranslatorStart onStart={() => setShowTranslatorApp(true)} />
        )}
      </div>
    </div>
  )
}

export default App // Exporting the App component as the default export
