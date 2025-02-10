import { useState } from 'react' // Importing useState hook from React for state management
import TranslatorStart from './Components/TranslatorStart' // Importing TranslatorStart component
import TranslatorApp from './Components/TranslatorApp' // Importing TranslatorApp component

const App = () => {
  // Initial commit: No state or rendering logic yet
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#DA98C9] to-[#3d5585] flex justify-center items-center">
      {/* Main wrapper div with full width and height, center-aligned flexbox, and gradient background */}
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#003044] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {/* Future components will be rendered here */}
      </div>
    </div>
  )
}

export default App // Exporting the App component as the default export
