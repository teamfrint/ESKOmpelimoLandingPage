import "./Hero.scss";

function Hero({ translations, setActiveSection }) {
  const goToServices = () => {
    if (setActiveSection) {
      setActiveSection("services");
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay"></div>
      <div className="hero__image">
        <img
          src="public/heroImage.png"
          alt="Professional tailoring workspace - ESK Ompelimo"
          loading="eager"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{translations.hero.title.toUpperCase()}</h1>
        <h2 className="hero__subtitle">{translations.hero.subtitle}</h2>
        <p className="hero__description">{translations.hero.description}</p>
        <button className="hero__cta" onClick={goToServices}>
          {translations.hero.cta}
        </button>
      </div>
    </section>
  );
}

export default Hero;
