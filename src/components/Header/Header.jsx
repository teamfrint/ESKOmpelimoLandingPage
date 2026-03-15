import { useState } from "react";
import "./Header.scss";

function Header({ language, toggleLanguage, translations, activeSection, setActiveSection }) {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setShowServicesMenu(false);
  };

  const handleSubNavClick = (itemId) => {
    setActiveSection(`services-${itemId}`);
    setShowServicesMenu(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <button
          className="header__logo"
          onClick={() => handleNavClick("hero")}
        >
          <span className="header__logo-text">ESK Ompelimo</span>
        </button>

        <nav className="header__nav">
          <button
            className={`header__nav-link ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => handleNavClick("profile")}
          >
            {translations.nav.profile}
          </button>
          <div className="header__services-wrapper">
            <button
              className={`header__nav-link ${activeSection.startsWith('services') && activeSection !== 'services' ? 'active' : ''}`}
              onClick={() => setShowServicesMenu(!showServicesMenu)}
            >
              {translations.nav.services}
              <span
                className={`header__dropdown-arrow ${showServicesMenu ? "active" : ""}`}
              >
                ▼
              </span>
            </button>
            {showServicesMenu && (
              <div className="header__services-menu">
                {translations.servicesMenu.items.map((item, index) => (
                  <button
                    key={index}
                    className={`header__services-item ${activeSection === `services-${item.id}` ? 'active' : ''}`}
                    onClick={() => handleSubNavClick(item.id)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className={`header__nav-link ${activeSection === 'priceList' ? 'active' : ''}`}
            onClick={() => handleNavClick("priceList")}
          >
            {translations.nav.priceList}
          </button>
          <button
            className={`header__nav-link ${activeSection === 'location' ? 'active' : ''}`}
            onClick={() => handleNavClick("location")}
          >
            {translations.nav.location}
          </button>
          <button
            className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick("contact")}
          >
            {translations.nav.contact}
          </button>

          <button
            className="header__language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className={language === "en" ? "active" : ""}>EN</span>
            <span className="separator">/</span>
            <span className={language === "fi" ? "active" : ""}>FI</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
