import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { translations } from './utils/translations'

function App() {
  const [language, setLanguage] = useState('fi')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fi' : 'en')
  }

  const t = translations[language]

  return (
    <div className="app">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        translations={t}
      />
      <main>
        <Hero translations={t} />
        <Services translations={t} />
        <Contact translations={t} />
      </main>
      <Footer translations={t} />
    </div>
  )
}

export default App
