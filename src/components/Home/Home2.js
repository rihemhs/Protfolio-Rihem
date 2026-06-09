import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import myImg from "../../Assets/rihem.jpg";
import { AiOutlineMail, AiFillFolderOpen } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CONTACT } from "../../constants/contactInfo";
import SocialLinks from "../shared/SocialLinks";
import SkillCard from "../shared/SkillCard";
import MailtoButton from "../shared/MailtoButton";

function Home2() {
  const { t } = useTranslation();

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
                <AiOutlineMail /> <strong>Email:</strong> {CONTACT.email}
              </div>
              <div className="info-item">
                📞 <strong>{t("Phone")}:</strong> {CONTACT.phone}
              </div>
            </div>

            <Row className="skills-cards mt-4">
              <SkillCard emoji="💻" title={t("Frontend")} description="React, Next.js, HTML, CSS, JavaScript" />
              <SkillCard emoji="⚙️" title={t("Backend")} description="Node.js, Spring Boot, PHP, Java" />
              <SkillCard emoji="🧩" title={t("CMS")} description="WordPress, Plugins, Themes" />
              <SkillCard emoji="🚀" title={t("Performance")} description={t("PerformanceDesc")} />
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


              {/* Bouton pour ouvrir email */}
              <MailtoButton>
                <AiOutlineMail className="me-2" />
                {t("contactMe")}
              </MailtoButton>

            </div>

            <div className="social-links-pro mt-4">
              <SocialLinks />
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