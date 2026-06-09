import React from "react";
import { Col } from "react-bootstrap";

function SkillCard({ emoji, title, description, colSm = 6, descriptionStyle }) {
  return (
    <Col sm={colSm}>
      <div className="skill-card">
        {emoji} <strong>{title}</strong>
        <span style={descriptionStyle}>{description}</span>
      </div>
    </Col>
  );
}

export default SkillCard;
