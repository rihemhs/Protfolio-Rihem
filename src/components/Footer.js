import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SocialLinks from "./shared/SocialLinks";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("designedBy")}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>{t("copyright", { year })}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <SocialLinks className="social-icons" style={{ color: "white" }} />
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
