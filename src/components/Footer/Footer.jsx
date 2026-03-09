import './Footer.scss'

function Footer({ translations }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__tagline">{translations.footer.tagline}</p>
        <p className="footer__copyright">{translations.footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
