import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import Services from './components/Services/Services'
import PriceList from './components/PriceList/PriceList'
import Location from './components/Location/Location'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { translations } from './utils/translations'

function App() {
  const [language, setLanguage] = useState('fi')
  const [activeSection, setActiveSection] = useState('profile')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fi' : 'en')
  }

  // Effect to scroll to top whenever the section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const t = translations[language]

  const renderSection = () => {
    if (activeSection.startsWith('services-')) {
      return <Services translations={t} activeSubSection={activeSection.replace('services-', '')} />
    }
    switch (activeSection) {
      case 'hero':
        return <Hero translations={t} setActiveSection={setActiveSection} />
      case 'profile':
        return <Profile translations={t} />
      case 'services':
        return <Services translations={t} />
      case 'priceList':
        return <PriceList translations={t} />
      case 'location':
        return <Location translations={t} />
      case 'contact':
        return <Contact translations={t} />
      default:
        return <Profile translations={t} />
    }
  }

  return (
    <div className="app">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        translations={t}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 150px)' }}>
        {renderSection()}
      </main>
      <Footer translations={t} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App
