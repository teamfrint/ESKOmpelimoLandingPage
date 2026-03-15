import './Footer.scss'

function Footer({ translations, setActiveSection }) {
  const handleServiceClick = (itemId) => {
    if (setActiveSection) {
      setActiveSection(`services-${itemId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__columns">
          {/* Column 1: Services */}
          <div className="footer__column">
            <h3 className="footer__column-title">{translations.footer.columns.services}</h3>
            <ul className="footer__services-list">
              {translations.servicesMenu.items.map((item, index) => (
                <li key={index}>
                  <button onClick={() => handleServiceClick(item.id)} className="footer__link">
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Details */}
          <div className="footer__column">
            <h3 className="footer__column-title">{translations.footer.columns.contact}</h3>
            <div className="footer__contact-info">
              <p><strong>{translations.contact.address}:</strong><br/> {translations.contact.addressValue}</p>
              <p><strong>{translations.contact.phone}:</strong><br/> {translations.contact.phoneValue}</p>
              <p><strong>{translations.contact.email}:</strong><br/> {translations.contact.emailValue}</p>
            </div>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="footer__column footer__column--social">
            <h3 className="footer__column-title">{translations.footer.columns.social}</h3>
            <div className="footer__social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.74-1.78 1.35-4.14 1.83-6.27 1.25-2.13-.58-3.92-2.1-4.83-4.06-1.1-2.45-.63-5.51 1.07-7.51 1.74-2.06 4.67-2.94 7.23-2.22V14c-1.84-.66-4.08-.1-5.18 1.57-.89 1.34-1.01 3.23-.19 4.66.83 1.45 2.65 2.21 4.26 1.83 1.62-.38 2.82-1.77 2.91-3.41.11-4.09.04-8.19.09-12.28 0-.15.01-.3 0-.45.03-3.11-.06-6.23.06-9.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__tagline">{translations.footer.tagline}</p>
          <p className="footer__copyright">{translations.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
