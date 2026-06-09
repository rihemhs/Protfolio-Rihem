
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/glocal.PNG";
import telice from "../../Assets/Projects/telice.PNG";
import soforthandelsregister from "../../Assets/Projects/handless.PNG";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import sddmprojet from "../../Assets/Projects/sddmprojet.PNG";
import ERPGETS from "../../Assets/Projects/ERPGETS.jpeg";
import TicketProm from "../../Assets/Projects/TicketProm.PNG";
import glovax from "../../Assets/Projects/glovax.PNG";
import hanshafish from "../../Assets/Projects/hanshafish.jpeg";
import New from "../../Assets/Projects/NewoFNewCommerce.jpeg";
import { useTranslation } from "react-i18next";
import { MAILTO_URL } from "../../constants/contactInfo";


function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      imgPath: ERPGETS,
      title: t("ERP"),
      demoLink: "https://arkus.gets-company.com/signin",
      description: t("descriptionERP"),
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "ERP", "HR", "Finance", "Payroll", "Logistic"]
    },

    {
      imgPath: sddmprojet,
      title: t("SDDM"),
      description: t("descriptionSDDM"),
      tech: ["React", "Stripe", "GraphQL", "E-commerce"]
    },
    {
      imgPath: soforthandelsregister,
      title: t("SofortHandelsregister"),
      description: t("descriptionSofortHandelsregister"),
      demoLink: "https://sofort-handelsregister.com",
      tech: ["React", "API", "E-commerce"]
    },

    {
      imgPath: leaf,
      title: t("GLOCAL"),
      description: t("descriptionGlocal"),
      demoLink: "https://glocal-it-solutions.com/",
      tech: ["React", "Responsive", "Corporate"]
    },
    {
      imgPath: TicketProm,
      title: t("TicketPromo"),
      description: t("descriptionTicketPromo"),
      demoLink: "ticket-promo.com",
      tech: ["React", "php", "LocalStorage", "Components"]
    },
    {
      imgPath: suicide,
      title: t("ECommerceSite"),
      description: t("ECommerceSiteDescription"),
      tech: ["React", "E-commerce", "Sport",]
    },
    {
      imgPath: glovax,
      title: t("CompanySite"),
      description: t("CompanySiteDescription"),
      demoLink: "https://globivax.com/",
      tech: ["wordpress", "php", "phpMyAdmin", "Freelance", "HTML", "CSS"]
    },
    {
      imgPath: hanshafish,
      title: t("MobileApp"),
      description: t("MobileAppDescription"),
      demoLink: "https://play.google.com/store/apps/details?id=com.hanchiafish.app&hl=fr",
      tech: ["React Native", "Freelance"]
    },
    {
      imgPath: New,
      title: t("MobileAppNewOfNewCommerce"),
      description: t("MobileAppNewOfNewCommerceDescription"),
      demoLink: "",
      tech: ["React Native", "Freelance"]
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-container">
        <div className="project-header">
          <h1 className="project-heading">
            <span className="purple-gradient">{t("projets")} </span>
          </h1>
          <p className="project-subtitle">
            {t("projectsSubtitle")}
          </p>
        </div>

        <Row className="projects-grid">
          {projects.map((project, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={4}
              className="project-card-col"
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.tech}
              />
            </Col>
          ))}
        </Row>

        <div className="cta-section">
          <p className="cta-text">
            {t("InterestedText")}

          </p>
          <a
            href={MAILTO_URL}
            className="cta-button">
            {t("contacter")}
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;