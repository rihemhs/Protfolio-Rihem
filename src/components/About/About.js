import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import aboutImg from "../../Assets/about.png";
import { useTranslation } from "react-i18next";
function About() {
    const { t } = useTranslation();
  return (
    <section className="about-section-pro" id="about">
      <Particle />
      <Container>
        <Row className="align-items-center gy-5">
          <Col md={7}>
            <h2 className="section-title">
                 {t("aboutTitle")} 
            </h2>

            <AboutCard />

            <Row className="skills-cards mt-4">
              <Col sm={6}>
                <div className="skill-card">
                  💻 <strong>Frontend</strong>
                  <span>React.js, Next.js, TypeScript, JavaScript, Tailwind, HTML5, CSS3, Ant Design</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  ⚙️ <strong>Backend</strong>
                  <span>Java, Spring Boot, Node.js, REST APIs, JWT, Spring Security, PHP</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  🗄️ <strong> {t("DB")} </strong>
                  <span>PostgreSQL, MySQL, Oracle, SQL Server</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  🛠️ <strong> {t("DevOps")}</strong>
                  <span>Git, Docker, Postman, Swagger, Jira, Agile/Scrum</span>
                </div>
              </Col>
              <Col sm={6}>
                <div className="skill-card">
                  📱 <strong>{t("Mobile")}</strong>
                  <span>React Native, Android</span>
                </div>
              </Col>
            </Row>

          </Col>

          <Col md={5} className="text-center">
            <img src={aboutImg} alt="Rihem Hassouna" className="about-illustration" />
          </Col>
        </Row>

        <h2 className="section-subtitle">{t("tools")}</h2>
        <Toolstack />
      </Container>
    </section>
  );
}

export default About;