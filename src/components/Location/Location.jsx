import './Location.scss';

function Location({ translations }) {
  const mapLink = "https://www.google.com/maps/place/Kotikyl%C3%A4ntie+4,+02770+Espoo,+Finland";
  
  return (
    <section className="location" id="location">
      <div className="location__container">
        <div className="location__header">
          <h2 className="location__title">{translations.location.title}</h2>
        </div>

        <div className="location__content">
          <div className="location__address-card">
            <h3 className="location__address-title">{translations.location.addressLabel}</h3>
            <p className="location__address-text">
              Kotikyläntie 4<br />
              02770 Espoo
            </p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="location__directions-btn">
              {translations.location.getDirections}
            </a>
          </div>

          <div className="location__map">
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <img 
                src="/location-map.png" 
                alt="Google Map showing Location at Kotikyläntie 4, Espoo" 
                className="location__map-image"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
