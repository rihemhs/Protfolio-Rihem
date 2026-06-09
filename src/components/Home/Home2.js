import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import myImg from "../../Assets/rihem.jpg";
import { AiFillGithub, AiOutlineMail, AiFillFolderOpen } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home2() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook pour la navigation

  const handleViewProjects = () => {
    navigate("/project");
  };

  // Fonction pour ouvrir l'email
  const handleEmailClick = () => {
    window.location.href = "mailto:rihemhassounanjim90@gmail.com?subject=Contact%20from%20Portfolio";
  };

  return (
    <section className="home-about-pro" id="about">
      <Container>
        <Row className="align-items-center gy-5">

          {/* LEFT CONTENT */}
          <Col md={7}>
            <Badge bg="primary" className="mb-3 badge-soft">
              {t("FullStack")}
            </Badge>

            <h1 className="hero-title">
              Rihem <span>Hassouna</span>
            </h1>

            <p className="hero-subtitle">
              {t("discription")}
            </p>

            <div className="info-list">
              <div className="info-item">
                <HiOutlineLocationMarker /> <strong>{t("Residence")}:</strong> Tunisie
              </div>
              <div className="info-item">
                <HiOutlineLocationMarker /> <strong>{t("Address")}:</strong> Sfax, Tunisie
              </div>
              <div className="info-item">
                <AiOutlineMail /> <strong>Email:</strong> rihemhassounanjim90@gmail.com
              </div>
              <div className="info-item">
                📞 <strong>{t("Phone")}:</strong> +216 52 113 008
              </div>
            </div>

            <Row className="skills-cards mt-4">
              <Col sm={6}>
                <div className="skill-card">
                  💻 <strong>{t("Frontend")}</strong>
                  <span>React, Next.js, HTML, CSS, JavaScript</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  ⚙️ <strong>{t("Backend")}</strong>
                  <span>Node.js, Spring Boot, PHP, Java</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  🧩 <strong>{t("CMS")}</strong>
                  <span>WordPress, Plugins, Themes</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  🚀 <strong>{t("Performance")}</strong>
                  <span>{t("PerformanceDesc")}</span>
                </div>
              </Col>
            </Row>

            <div className="cta-buttons mt-4">

              {/* Bouton pour aller à la page /project - CORRIGÉ */}
              <Button
                as={Link}
                to="/project"
                variant="primary"
                className="me-3"
              >
                <AiFillFolderOpen className="me-2" />
                {t("viewProjects")}
              </Button>


              {/* Bouton pour ouvrir email - CORRIGÉ */}
              <Button
                as="a"
                href="mailto:rihemhassounanjim90@gmail.com
    ?subject=Contact%20from%20Portfolio
    &body=Hello%20Rihem,%0D%0A%0D%0AI%20would%20like%20to%20contact%20you."
                variant="outline-light"
              >
                <AiOutlineMail className="me-2" />
                {t("contactMe")}
              </Button>

            </div>

            <div className="social-links-pro mt-4">
              <a href="https://github.com/rihemhs" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rihem-hassouna-a17254179/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>

          </Col>

          {/* RIGHT IMAGE */}
          <Col md={5} className="text-center">
            <div className="avatar-pro">
              <img src={myImg} alt="Rihem Hassouna" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Home2;