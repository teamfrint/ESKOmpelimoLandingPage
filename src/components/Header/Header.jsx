import { useState } from "react";
import "./Header.scss";

function Header({ language, toggleLanguage, translations }) {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const getServiceId = (text) => {
    return text
      .toLowerCase()
      .replace(/[\s/]/g, "-")
      .replace(/[äöå]/g, (c) => {
        const map = { ä: "a", ö: "o", å: "a" };
        return map[c] || c;
      });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowServicesMenu(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <button
          className="header__logo"
          onClick={() => scrollToSection("hero")}
        >
          <span className="header__logo-text">ESK Ompelimo</span>
        </button>

        <nav className="header__nav">
          <button
            className="header__nav-link"
            onClick={() => scrollToSection("hero")}
          >
            {translations.nav.profile}
          </button>
          <div className="header__services-wrapper">
            <button
              className="header__nav-link"
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
                    className="header__services-item"
                    onClick={() => scrollToSection(getServiceId(item.title))}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection("priceList")}
          >
            {translations.nav.priceList}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection("location")}
          >
            {translations.nav.location}
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection("contact")}
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
