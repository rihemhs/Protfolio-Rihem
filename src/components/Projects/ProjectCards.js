import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineCode } from "react-icons/md";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  return (
    <Card 
      className={`project-card-view ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt={props.title}
          className="project-image"
        />
        <div className="card-overlay">
          {props.demoLink && (
            <a 
              href={props.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="overlay-link"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
      
      <Card.Body className="card-body-content">
        <div className="project-header">
          <Card.Title className="project-title">
            {props.title}
          </Card.Title>
          {props.technologies && (
            <div className="tech-stack">
              {props.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        
        <div className="card-actions">
          {props.ghLink && (
            <Button
              variant="outline-primary"
              href={props.ghLink}
              target="_blank"
              className="action-button"
            >
              <BsGithub /> <span>Code</span>
            </Button>
          )}
          
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="action-button demo-button"
            >
              <CgWebsite /> <span>{t("voirproject")}</span>
            </Button>
          )}
          
          {!props.demoLink && props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="action-button"
            >
              <MdOutlineCode /> <span>{t("explorer")}</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;