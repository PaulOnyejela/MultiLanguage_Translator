import { languages } from '../languagesData' // Importing the list of supported languages from external data file
import { useState, useRef, useEffect } from 'react' // Importing necessary React hooks

// The TranslatorApp component
const TranslatorApp = ({ onClose }) => {
  // State variables to manage language selection, input text, and translated text
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState('en') // Default 'from' language is English
  const [selectedLanguageTo, setSelectedLanguageTo] = useState('en') // Default 'to' language is English
  const [showLanguages, setShowLanguages] = useState(false) // State to toggle the language selection dropdown
  const [currentLanguageSelection, setCurrentLanguageSelection] = useState(null) // State to track which language is being selected (from or to)
  const [inputText, setInputText] = useState('') // State to store the input text
  const [translatedText, setTranslatedText] = useState('') // State to store the translated text
  const [charCount, setCharCount] = useState(0) // State to track character count in the input text
  const maxChars = 200 // Max character limit for the input text
  const dropdownRef = useRef(null) // Ref to track the language selection dropdown element

  // Function to handle clicks outside the dropdown to close it
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowLanguages(false) // Close the dropdown when clicking outside
    }
  }

  // useEffect hook to handle adding/removing event listener for clicks outside the dropdown
  useEffect(() => {
    if (showLanguages) {
      document.addEventListener('mousedown', handleClickOutside) // Add event listener when dropdown is shown
    } else {
      document.removeEventListener('mousedown', handleClickOutside) // Remove event listener when dropdown is hidden
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside) // Cleanup on unmount
    }
  }, [showLanguages]) // Dependency array makes sure the effect runs whenever 'showLanguages' changes

  // Function to handle the click event on language selection buttons (from/to)
  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type) // Set which language ('from' or 'to') is being selected
    setShowLanguages(true) // Show the language dropdown
  }

  // Function to handle selecting a language from the dropdown
  const handleLanguagesSelect = (languageCode) => {
    if (currentLanguageSelection === 'from') {
      setSelectedLanguageFrom(languageCode) // Set the selected 'from' language
    } else {
      setSelectedLanguageTo(languageCode) // Set the selected 'to' language
    }

    setShowLanguages(false) // Hide the dropdown after selecting a language
  }

  // Function to swap 'from' and 'to' languages
  const handleSwapLanguages = () => {
    setSelectedLanguageFrom(selectedLanguageTo) // Swap 'from' language with 'to' language
    setSelectedLanguageTo(selectedLanguageFrom) // Swap 'to' language with 'from' language
  }

  // Function to handle changes in the input text area
  const handleInputChange = (e) => {
    const value = e.target.value
    if (value.length <= maxChars) { // Ensure the input text doesn't exceed maxChars limit
      setInputText(value) // Set the input text state
      setCharCount(value.length) // Update the character count
    }
  }

  // Function to handle translation by calling an external API (MyMemory translation service)
  const handleTranslate = async () => {
    if (!inputText.trim()) { // If the input text is empty or just spaces, don't proceed
      setTranslatedText('') // Clear the translated text
      return
    }

    // Make an API request to translate the input text
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText,
      )}&langpair=${selectedLanguageFrom}|${selectedLanguageTo}`,
    )

    const data = await response.json() // Parse the API response to JSON

    setTranslatedText(data.responseData.translatedText) // Set the translated text in the state
  }

  // Function to handle the Enter key press for triggering translation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevent the default behavior (new line)
      handleTranslate() // Trigger translation when Enter is pressed
    }
  }

  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-6 relative">
      {/* Close button that triggers the onClose prop to close the translator app */}
      <button className="absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-xl text-gray-300" onClick={onClose}></i>
      </button>

      {/* Language selection section */}
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg">
        {/* 'From' language selection */}
        <div className="language" onClick={() => handleLanguageClick('from')}>
          {languages[selectedLanguageFrom] || 'English'}
        </div>

        {/* Language swap button */}
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={handleSwapLanguages}
        ></i>

        {/* 'To' language selection */}
        <div className="language" onClick={() => handleLanguageClick('to')}>
          {languages[selectedLanguageTo] || 'English'}
        </div>
      </div>

      {/* Language dropdown list */}
      {showLanguages && (
        <div
          className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide"
          ref={dropdownRef}
        >
          <ul>
            {Object.entries(languages).map(([code, name]) => (
              <li
                className="cursor-pointer hover:bg-[#10646b] transition duration-200 p-2 rounded"
                key={code}
                onClick={() => handleLanguagesSelect(code)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Input text area */}
      <div className="w-full relative">
        <textarea
          className="textarea text-gray-200"
          value={inputText || ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        {/* Display character count */}
        <div className="absolute bottom-2 right-4 text-gray-400">
          {charCount}/{maxChars}
        </div>
      </div>

      {/* Translate button */}
      <button
        className="w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 flex justify-center items-center active:translate-y-[1px]"
        onClick={handleTranslate}
      >
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      {/* Display the translated text */}
      <div className="w-full">
        <textarea
          className="textarea text-[#b6f492]"
          value={translatedText || ''}
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default TranslatorApp
