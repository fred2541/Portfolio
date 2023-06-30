import {
  useHeaderGetSize,
  useHeaderUpdate,
} from "../Components/Hooks/HeaderSize";

function Contact() {
  const headerHeight = useHeaderGetSize();
  useHeaderUpdate(headerHeight);

  return (
    <div>
    <div className="hero contact">
      <div className="background contact"></div>
        <section>
        <div className="card">
          <img
            src="/Assets/Images/Logo/Logo_Aile.png"
            alt="aile"
            className="cardBackground"
          ></img>
          <div>
            <div>
              <img
                src="/Assets/Images/profile.webp"
                alt="Profile"
                className="card-img"
              ></img>
            </div>
            <div>
              <h1 className="card-name">Frederic Bourigault</h1>
              <h2 className="card-title">Développeur Web</h2>
            </div>
          </div>
          <div className="card-contacts">
            <p>
              <i className="contacts envelope"></i> fredionze@free.fr
            </p>
            <p>
              <i className="contacts phone"></i> 06.20.24.66.00
            </p>
            <p>
              <i className="contacts pos"></i> France > Occitanie > Gard
            </p>
          </div>
        </div>
        </section>
    </div>
    </div>
  );
}

export default Contact;
