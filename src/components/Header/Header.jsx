import './Header.scss'

function Header({ language, toggleLanguage, translations }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-text">ESK Ompelimo</span>
        </div>

        <nav className="header__nav">
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('profile')}
          >
            {translations.nav.profile}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('services')}
          >
            {translations.nav.services}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('priceList')}
          >
            {translations.nav.priceList}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('location')}
          >
            {translations.nav.location}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('contact')}
          >
            {translations.nav.contact}
          </button>

          <button
            className="header__language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'active' : ''}>EN</span>
            <span className="separator">/</span>
            <span className={language === 'fi' ? 'active' : ''}>FI</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
