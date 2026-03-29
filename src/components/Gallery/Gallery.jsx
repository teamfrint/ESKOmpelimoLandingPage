import "./Gallery.scss";

function Gallery({ translations }) {
  const { gallery } = translations;

  if (!gallery) return null;

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <h2 className="gallery__title">{gallery.title}</h2>
          <p className="gallery__subtitle">{gallery.subtitle}</p>
        </div>
        <div className="gallery__grid">
          {gallery.items.map((item) => (
            <div key={item.id} className="gallery__item">
              <div className="gallery__image-wrapper">
                <img src={item.image} alt={item.title} className="gallery__image" loading="lazy" />
                <div className="gallery__overlay">
                  <div className="gallery__overlay-content">

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
