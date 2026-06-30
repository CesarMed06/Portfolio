import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')
  const toggle = () => setLang(l => (l === 'es' ? 'en' : 'es'))
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
