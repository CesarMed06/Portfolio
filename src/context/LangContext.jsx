import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext()

const initialLang = () => {
  const saved = localStorage.getItem('lang')
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const toggle = () => setLang(l => (l === 'es' ? 'en' : 'es'))

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
