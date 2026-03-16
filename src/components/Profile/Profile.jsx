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
              src="/profile.jpeg"
              alt="Ali Reza - Professional Tailor"
              className="profile__image"
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
