import { useState } from 'react' // Importing useState hook from React for state management
import TranslatorStart from './Components/TranslatorStart' // Importing TranslatorStart component
import TranslatorApp from './Components/TranslatorApp' // Importing TranslatorApp component

const App = () => {
  // State to track whether the TranslatorApp should be shown or not
  const [showTranslatorApp, setShowTranslatorApp] = useState(false)

  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#DA98C9] to-[#3d5585] flex justify-center items-center">
      {/* Main wrapper div with full width and height, center-aligned flexbox, and gradient background */}
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#003044] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {/* Conditional rendering based on showTranslatorApp state */}
        {showTranslatorApp ? (
          // If true, render the TranslatorApp component and pass onClose as a prop
          <TranslatorApp onClose={() => setShowTranslatorApp(false)} />
        ) : (
          // If false, render the TranslatorStart component and pass onStart as a prop
          <TranslatorStart onStart={() => setShowTranslatorApp(true)} />
        )}
      </div>
    </div>
  )
}

export default App // Exporting the App component as the default export
