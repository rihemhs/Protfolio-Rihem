import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import aboutImg from "../../Assets/about.png";
import { useTranslation } from "react-i18next";
import SkillCard from "../shared/SkillCard";

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
              <SkillCard emoji="💻" title="Frontend" description="React.js, Next.js, TypeScript, JavaScript, Tailwind, HTML5, CSS3, Ant Design" descriptionStyle={{color:"black"}} />
              <SkillCard emoji="⚙️" title="Backend" description="Java, Spring Boot, Node.js, REST APIs, JWT, Spring Security, PHP" />
              <SkillCard emoji="🗄️" title={t("DB")} description="PostgreSQL, MySQL, Oracle, SQL Server" />
              <SkillCard emoji="🛠️" title={t("DevOps")} description="Git, Docker, Postman, Swagger, Jira, Agile/Scrum" />
              <SkillCard emoji="📱" title={t("Mobile")} description="React Native, Android" />
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