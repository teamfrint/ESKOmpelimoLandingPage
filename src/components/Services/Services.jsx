import './Services.scss'

function Services({ translations }) {
  const serviceImages = [
    'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=7680&h=4320',
    'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=7680&h=4320',
    'https://images.pexels.com/photos/5560018/pexels-photo-5560018.jpeg?auto=compress&cs=tinysrgb&w=7680&h=4320',
    'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=7680&h=4320'
  ]

  const getServiceId = (text) => {
    return text.toLowerCase().replace(/[\s/]/g, '-').replace(/[äöå]/g, (c) => {
      const map = { 'ä': 'a', 'ö': 'o', 'å': 'a' }
      return map[c] || c
    })
  }

  return (
    <>
      <section className="services" id="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">{translations.services.title}</h2>
            <p className="services__subtitle">{translations.services.subtitle}</p>
          </div>

          <div className="services__grid">
            {translations.services.items.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card__image">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-detail">
        <div className="services-detail__container">
          {translations.servicesMenu.items.map((item, index) => (
            <div key={index} id={getServiceId(item)} className="service-subsection">
              <div className="service-subsection__content">
                <h3 className="service-subsection__title">{item}</h3>
                <p className="service-subsection__description">
                  Professional {item.toLowerCase()} service tailored to your needs with expert craftsmanship and attention to detail.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
