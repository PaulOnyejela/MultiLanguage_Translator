import { useState } from 'react'
import TranslatorStart from './Components/TranslatorStart'
import TranslatorApp from './Components/TranslatorApp'

const App = () => {
  const [showTranslatorApp, setShowTranslatorApp] = useState(false)

  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#DA98C9] to-[#3d5585] flex justify-center items-center">
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#003044] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {showTranslatorApp ? (
          <TranslatorApp onClose={() => setShowTranslatorApp(false)} />
        ) : (
          <TranslatorStart onStart={() => setShowTranslatorApp(true)} />
        )}
      </div>
    </div>
  )
}

export default App
