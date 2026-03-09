import './Hero.scss'

function Hero({ translations }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__image">
        <img
          src="https://images.pexels.com/photos/7679457/pexels-photo-7679457.jpeg?auto=compress&cs=tinysrgb&w=7680&h=4320"
          alt="Professional tailoring workspace"
          loading="eager"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{translations.hero.title}</h1>
        <h2 className="hero__subtitle">{translations.hero.subtitle}</h2>
        <p className="hero__description">{translations.hero.description}</p>
        <button className="hero__cta" onClick={scrollToContact}>
          {translations.hero.cta}
        </button>
      </div>
    </section>
  )
}

export default Hero
