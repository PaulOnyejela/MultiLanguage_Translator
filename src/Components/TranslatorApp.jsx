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
