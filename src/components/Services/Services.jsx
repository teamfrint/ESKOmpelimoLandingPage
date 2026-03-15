import { useEffect } from "react";
import "./Services.scss";

function Services({ translations, activeSubSection }) {
  const serviceImages = [
    "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5560018/pexels-photo-5560018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const subServiceImages = {
    "custom-work": "/ompelimo.png",
    "clothing-alterations": "https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "zipper-replacement": "/zipper.jpeg",
    "shortening": "https://images.pexels.com/photos/6348105/pexels-photo-6348105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "alteration-services": "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "boat-upholstery": "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "furniture-upholstery": "/shofa.png"
  };

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">{translations.services.title}</h2>
          <p className="services__subtitle">
            {translations.services.subtitle}
          </p>
        </div>

        <div className="services__grid">
          {translations.servicesMenu.items.map((item, index) => (
            <div 
              className="service-card" 
              key={item.id}
            >
              <div className="service-card__image">
                <img
                  src={subServiceImages[item.id] || serviceImages[index % serviceImages.length]}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = serviceImages[index % serviceImages.length];
                  }}
                />
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
