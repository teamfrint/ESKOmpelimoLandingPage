import './Profile.scss';

function Profile({ translations }) {
  return (
    <section className="profile" id="profile">
      <div className="profile__container">
        <div className="profile__header">
          <h2 className="profile__title">{translations.nav.profile}</h2>
        </div>

        <div className="profile__content">
          <div className="profile__image-wrapper">
            {/* Fallback image if local image not found */}
            <img
              src="/profile-image.png"
              alt="Ali Reza - Professional Tailor"
              className="profile__image"
              onError={(e) => {
                e.target.src = "https://images.pexels.com/photos/6766247/pexels-photo-6766247.jpeg?_gl=1*1v2g5h3*_ga*MTQ0NTE3NTk4NS4xNzczNTYwMDg2*_ga_8JE65Q40S6*czE3NzM1NjAwODUkbzEkZzEkdDE3NzM1NjAxNDIkajMkbDAkaDA.";
              }}
            />
          </div>

          <div className="profile__text">
            {translations.profileText.map((paragraph, index) => (
              <p key={index} className="profile__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
