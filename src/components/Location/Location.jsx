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
            <div className="location__info">
              <p className="location__info-text">{translations.location.walkingDist}</p>
              <p className="location__info-text">{translations.location.parking}</p>
            </div>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="location__directions-btn">
              {translations.location.getDirections}
            </a>
          </div>

          <div className="location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.330364136423!2d24.664448377465355!3d60.211051574972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df2462e92c481%3A0xe9c8fbc4c4f3488d!2sKotikyl%C3%A4ntie%204%2C%2002770%20Espoo%2C%20Finland!5e0!3m2!1sen!2sfi!4v1710517000000!5m2!1sen!2sfi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
