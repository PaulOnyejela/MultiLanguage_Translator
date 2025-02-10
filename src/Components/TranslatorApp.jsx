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


