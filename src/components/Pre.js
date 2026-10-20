import profileImage from "../Assets/rihem.jpg";

function Pre({ load }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      className="portfolio-preloader"
      role="status"
      aria-label="Chargement du portfolio"
      aria-hidden={!load}
    >
      <div className="preloader-content">
        <div className="preloader-avatar-ring">
          <img
            className="preloader-avatar"
            src={profileImage}
            alt=""
            aria-hidden="true"
          />
        </div>
        <span className="preloader-name">RIHEM HS</span>
        <span className="preloader-caption">Portfolio</span>
      </div>
    </div>
  );
}

export default Pre;
