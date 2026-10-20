import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import homeLogo from "../../Assets/rihem.jpg";
import Particle from "../Particle";
import Type from "./Type";
import cvEnglais from "../../Assets/CV-RIHEMHASSOUNA.pdf";
import cvFrancais from "../../Assets/CV-RIHEM HASSOUNA.pdf";
import {
  AiOutlineArrowDown,
  AiOutlineBook,
  AiOutlineCheckCircle,
  AiOutlineEnvironment,
  AiOutlineGlobal,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineProject,
  AiOutlineTeam
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const experience = [
  {
    company: "experienceGetsCompany",
    role: "experienceGetsRole",
    period: "experienceGetsPeriod",
    location: "experienceGetsLocation",
    current: true,
    achievements: [
      "experienceGetsAchievementOne",
      "experienceGetsAchievementTwo",
      "experienceGetsAchievementThree",
      "experienceGetsAchievementFour",
      "experienceGetsAchievementFive",
      "experienceGetsAchievementSix",
      "experienceGetsAchievementSeven",
      "experienceGetsAchievementEight"
    ]
  },
  {
    company: "experienceGlocalCompany",
    role: "experienceGlocalRole",
    period: "experienceGlocalPeriod",
    location: "experienceGlocalLocation",
    achievements: [
      "experienceGlocalAchievementOne",
      "experienceGlocalAchievementTwo",
      "experienceGlocalAchievementThree",
      "experienceGlocalAchievementFour",
      "experienceGlocalAchievementFive"
    ]
  },
  {
    company: "experienceFreelanceCompany",
    role: "experienceFreelanceRole",
    period: "experienceFreelancePeriod",
    location: "experienceFreelanceLocation",
    achievements: [
      "experienceFreelanceAchievementOne",
      "experienceFreelanceAchievementTwo",
      "experienceFreelanceAchievementThree",
      "experienceFreelanceAchievementFour"
    ]
  }
];

const skillGroups = [
  { title: "skillFrontend", skills: "skillsFrontend" },
  { title: "skillBackend", skills: "skillsBackend" },
  { title: "skillArchitecture", skills: "skillsArchitecture" },
  { title: "skillApiSecurity", skills: "skillsApiSecurity" },
  { title: "skillDatabases", skills: "skillsDatabases" },
  { title: "skillMobile", skills: "skillsMobile" },
  { title: "skillDevops", skills: "skillsDevops" },
  { title: "skillMethodology", skills: "skillsMethodology" }
];

const projects = [
  {
    icon: AiOutlineProject,
    title: "projectErpTitle",
    stack: "projectErpStack",
    description: "projectErpDescription",
    result: "projectErpResult"
  },
  {
    icon: AiOutlineMobile,
    title: "projectMobileTitle",
    stack: "projectMobileStack",
    description: "projectMobileDescription",
    result: "projectMobileResult"
  },
  {
    icon: AiOutlineGlobal,
    title: "projectWordPressTitle",
    stack: "projectWordPressStack",
    description: "projectWordPressDescription",
    result: "projectWordPressResult"
  }
];

const languages = [
  { code: "AR", name: "languageArabicName", level: "languageArabicLevel" },
  { code: "FR", name: "languageFrenchName", level: "languageProfessionalLevel" },
  { code: "EN", name: "languageEnglishName", level: "languageProfessionalLevel" }
];

function Home() {
  const { t, i18n } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  const confirmDownload = () => {
    const isFrench = i18n.language === "fr";
    const fileUrl = isFrench ? cvFrancais : cvEnglais;
    const fileName = isFrench
      ? "CV-RIHEM HASSOUNA.pdf"
      : "CV-RIHEM-HASSOUNA.pdf";

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
        window.URL.revokeObjectURL(fileURL);
      })
      .catch((error) => {
        console.error("Erreur de téléchargement :", error);
      });

    setShowAlert(false);
  };

  const outlookComposeUrl =
    "https://outlook.office.com/mail/deeplink/compose" +
    "?to=rihemhassounanjim90%40gmail.com" +
    "&subject=Contact%20from%20portfolio" +
    "&body=Hello%20Rihem%2C%0D%0A%0D%0AI%20would%20like%20to%20contact%20you.";

  const scrollToJourney = () => {
    document.getElementById("career-journey")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <main className="home-page">
      <section className="home-section home-hero">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header home-intro">
              <p className="home-eyebrow">
                <span className="home-status-dot" />
                {t("FullStack")}
              </p>
              <p className="heading home-greeting">
                <span className="wave" aria-hidden="true">👋🏻</span>
                {t("Bonjour")}
              </p>
              <h1 className="heading-name home-name">
                Rihem <span className="main-name">Hassouna</span>
              </h1>
              <div className="typewriter-container">
                <Type />
              </div>
              <p className="home-intro-copy">{t("homeIntro")}</p>

              <div className="home-facts">
                <span className="home-fact">
                  <AiOutlineEnvironment aria-hidden="true" />
                  Sfax, Tunisie
                </span>
                <span className="home-fact home-experience">
                  <strong>7+</strong>
                  {t("experience")}
                </span>
              </div>

              <div className="home-contact-details">
                <a href="tel:+21652113008">
                  <AiOutlinePhone aria-hidden="true" />
                  +216 52 113 008
                </a>
                <a href="mailto:rihemhassounanjim90@gmail.com">
                  <AiOutlineMail aria-hidden="true" />
                  rihemhassounanjim90@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/rihem-hassouna/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://protfolio-rihem.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGlobal aria-hidden="true" />
                  my-portfolio
                </a>
              </div>
              <p className="home-mobility-note">
                <AiOutlineGlobal aria-hidden="true" />
                {t("mobilityInternational")}
              </p>

              <div className="cta-buttons home-actions">
                <Button className="btn-download" onClick={() => setShowAlert(true)}>
                  {t("CV")}
                  <AiOutlineArrowDown aria-hidden="true" />
                </Button>
                <Button
                  as="a"
                  href={outlookComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-light"
                  className="btn-contact"
                >
                  <AiOutlineMail aria-hidden="true" />
                  {t("contacter")}
                </Button>
              </div>
            </Col>

            <Col md={5} className="home-image-col home-portrait-column">
              <div className="home-profile-card">
                <div className="home-image-frame">
                  <img
                    src={homeLogo}
                    alt="Rihem Hassouna"
                    className="profile-image"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="home-profile-caption">
                  <span className="home-profile-mark">RH</span>
                  <div>
                    <strong>Rihem Hassouna</strong>
                    <span>{t("FullStack")}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <button
            type="button"
            className="home-scroll-link"
            onClick={scrollToJourney}
            aria-label={t("journeyTitle")}
          >
            <AiOutlineArrowDown aria-hidden="true" />
            <span>{t("journeyEyebrow")}</span>
          </button>
        </Container>
      </section>

      <section className="career-section" id="career-journey">
        <Container className="career-container">
          <div className="career-heading">
            <p className="career-eyebrow">{t("journeyEyebrow")}</p>
            <h2>{t("journeyTitle")}</h2>
            <p>{t("journeyDescription")}</p>
          </div>
          <ol className="career-timeline">
            {experience.map((job, index) => (
              <li className="career-step" key={job.company}>
                <span className="career-step-marker" aria-hidden="true">{index + 1}</span>
                <div className="career-step-content">
                  <div className="career-card-heading">
                    <span className="career-step-number">
                      {job.current ? t("currentPosition") : t("pastPosition")}
                    </span>
                    <span className="career-period">{t(job.period)}</span>
                  </div>
                  <h3>{t(job.role)}</h3>
                  <h4>{t(job.company)}</h4>
                  <p className="career-location">
                    <AiOutlineEnvironment aria-hidden="true" />
                    {t(job.location)}
                  </p>
                  <ul className="career-achievements">
                    {job.achievements.map((achievement) => (
                      <li key={achievement}>
                        <AiOutlineCheckCircle aria-hidden="true" />
                        <span>{t(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="cv-details-section">
        <Container className="career-container">
          <div className="career-heading">
            <p className="career-eyebrow">{t("cvDetailsEyebrow")}</p>
            <h2>{t("cvDetailsTitle")}</h2>
            <p>{t("cvDetailsDescription")}</p>
          </div>

          <div className="cv-details-grid">
            <section className="cv-panel education-panel">
              <div className="cv-panel-heading">
                <span className="cv-panel-icon"><AiOutlineBook /></span>
                <div>
                  <p className="career-eyebrow">{t("educationEyebrow")}</p>
                  <h3>{t("educationTitle")}</h3>
                </div>
              </div>
              <article className="education-item">
                <span className="education-period">{t("educationEngineeringPeriod")}</span>
                <h4>{t("educationEngineeringDegree")}</h4>
                <p>{t("educationEngineeringSchool")}</p>
                <span className="education-speciality">{t("educationEngineeringSpeciality")}</span>
              </article>
              <article className="education-item">
                <span className="education-period">{t("educationPreparatoryPeriod")}</span>
                <h4>{t("educationPreparatoryDegree")}</h4>
                <p>{t("educationPreparatorySchool")}</p>
              </article>
            </section>

            <section className="cv-panel skills-panel">
              <div className="cv-panel-heading">
                <span className="cv-panel-icon"><AiOutlineTeam /></span>
                <div>
                  <p className="career-eyebrow">{t("skillsEyebrow")}</p>
                  <h3>{t("skillsTitle")}</h3>
                </div>
              </div>
              <div className="skill-group-list">
                {skillGroups.map(({ title, skills }) => (
                  <div className="skill-group" key={title}>
                    <h4>{t(title)}</h4>
                    <p>{t(skills)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="featured-projects">
            <div className="cv-section-heading">
              <p className="career-eyebrow">{t("projectsEyebrow")}</p>
              <h3>{t("projectsTitle")}</h3>
            </div>
            <div className="featured-project-grid">
              {projects.map(({ icon: Icon, title, stack, description, result }) => (
                <article className="featured-project-card" key={title}>
                  <span className="featured-project-icon"><Icon /></span>
                  <h4>{t(title)}</h4>
                  <p className="featured-project-stack">{t(stack)}</p>
                  <p className="featured-project-description">{t(description)}</p>
                  <p className="featured-project-result">{t(result)}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="cv-bottom-grid">
            <section className="cv-panel">
              <div className="cv-section-heading compact">
                <p className="career-eyebrow">{t("languagesEyebrow")}</p>
                <h3>{t("languagesTitle")}</h3>
              </div>
              <div className="language-cards">
                {languages.map(({ code, name, level }) => (
                  <article className="language-card" key={code}>
                    <span className="language-code" aria-hidden="true">{code}</span>
                    <div className="language-details">
                      <h4>{t(name)}</h4>
                      <span>{t(level)}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="cv-panel">
              <div className="cv-section-heading compact">
                <p className="career-eyebrow">{t("qualitiesEyebrow")}</p>
                <h3>{t("qualitiesTitle")}</h3>
              </div>
              <ul className="quality-list">
                {[
                  "qualityAnalysis",
                  "qualityCommunication",
                  "qualityAutonomy",
                  "qualityAdaptability",
                  "qualityRigor"
                ].map((quality) => <li key={quality}>{t(quality)}</li>)}
              </ul>
            </section>

            <section className="cv-panel mobility-panel">
              <div className="cv-section-heading compact">
                <p className="career-eyebrow">{t("mobilityEyebrow")}</p>
                <h3>{t("mobilityTitle")}</h3>
              </div>
              <ul className="quality-list">
                {[
                  "mobilityInternational",
                  "mobilityWorkStyle",
                  "mobilityRegions",
                  "mobilityDriving"
                ].map((item) => <li key={item}>{t(item)}</li>)}
              </ul>
            </section>
          </div>

          <p className="references-note">{t("referencesNote")}</p>
        </Container>
      </section>

      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        centered
        className="download-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {i18n.language === "fr" ? "Télécharger le CV" : "Download CV"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {i18n.language === "fr"
            ? "Voulez-vous télécharger le CV de Rihem Hassouna ?"
            : "Do you want to download Rihem Hassouna's CV?"}
          <br />
          <small className="text-muted">
            {i18n.language === "fr"
              ? "Nom du fichier : CV-RIHEM_HASSOUNA.pdf"
              : "File name: CV-RIHEMHASSOUNA.pdf"}
          </small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            {i18n.language === "fr" ? "Annuler" : "Cancel"}
          </Button>
          <Button variant="primary" onClick={confirmDownload}>
            {i18n.language === "fr" ? "Télécharger" : "Download"}
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default Home;
