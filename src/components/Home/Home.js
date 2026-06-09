import { useEffect } from "react";
import { Container, Row, Col, Button, Alert, Modal } from "react-bootstrap";
import homeLogo from "../../Assets/developer.jfif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import cvEnglais from "../../Assets/CV-RIHEMHASSOUNA.pdf";
import cvFrancais from "../../Assets/CV-RIHEM HASSOUNA.pdf";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function Home() {
  const { t, i18n } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  const confirmDownload = () => {
    const isFrench = i18n.language === "fr";

    const fileUrl = isFrench ? cvFrancais : cvEnglais;
    const fileName = isFrench
      ? "CV-RIHEM HASSOUNA.pdf"
      : "CV-RIHEM-HASSOUNA.pdf";

    setShowAlert(false);

    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Download failed (status ${response.status})`);
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
        window.URL.revokeObjectURL(fileURL);
      })
      .catch((error) => {
        console.error("CV download error:", error);
        alert(
          isFrench
            ? "Erreur lors du téléchargement du CV. Veuillez réessayer."
            : "Failed to download CV. Please try again."
        );
      });
  };


  const cancelDownload = () => {
    setShowAlert(false);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="home-section">
      <Particle />

      <Container className="home-content">
        <Row className="align-items-center">

          {/* Texte */}
          <Col md={7} className="home-header fade-in-up">
            <div className="greeting-container">
              <h1 className="heading">
                <span className="wave">👋🏻</span>{t('Bonjour')}
              </h1>

              <h1 className="heading-name">
                {t('Auth')}  <span className="main-name">Rihem Hassouna</span>
              </h1>

              <div className="typewriter-container">
                <Type />
              </div>

              <div className="cta-buttons">
                <Button className="btn-download" onClick={handleDownload}>
                 
                  {t('CV')}
                </Button>

                <Button
                  as="a"
                  href="mailto:rihemhassounanjim90@gmail.com
    ?subject=Contact%20from%20Portfolio
    &body=Hello%20Rihem,%0D%0A%0D%0AI%20would%20like%20to%20contact%20you."
                  variant="outline-light"
                  className="btn-contact" >

                  {t('contacter')}
                </Button>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col md={5} className="home-image-col fade-in-scale">
            <div className="image-container">
              <div className="profile-image-wrapper">
                <img
                  src={homeLogo}
                  alt="Rihem Hassouna"
                  className="profile-image"
                />

                <div className="floating-elements">
                  <div className="floating-element element-1">💻</div>
                  <div className="floating-element element-2">🚀</div>
                  <div className="floating-element element-3">✨</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator bounce"
          onClick={scrollToNextSection}
          role="button"
          tabIndex={0}
        >
          <AiOutlineArrowDown className="scroll-icon" />
          <span className="scroll-text">

            {t('Découvrir')}</span>
        </div>
        <Modal
          show={showAlert}
          onHide={cancelDownload}
          centered
          className="download-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {i18n.language === 'fr' ? 'Télécharger le CV' : 'Download CV'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {i18n.language === 'fr'
              ? 'Voulez-vous télécharger le CV de Rihem Hassouna ?'
              : 'Do you want to download Rihem Hassouna\'s CV?'}
            <br />
            <small className="text-muted">
              {i18n.language === 'fr'
                ? 'Nom du fichier: CV-RIHEM_HASSOUNA.pdf'
                : 'File name: CV-RIHEMHASSOUNA.pdf'}
            </small>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDownload}>
              {i18n.language === 'fr' ? 'Annuler' : 'Cancel'}
            </Button>
            <Button variant="primary" onClick={confirmDownload}>
              {i18n.language === 'fr' ? 'Télécharger' : 'Download'}
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
