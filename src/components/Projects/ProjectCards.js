import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight, FiImage, FiX } from "react-icons/fi";
import { MdOutlineCode } from "react-icons/md";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useTranslation();
  const galleryImages = props.gallery?.length ? props.gallery : [props.imgPath];

  const openGallery = () => {
    setActiveImageIndex(0);
    setShowGallery(true);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <Card 
      className={`project-card-view ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <button type="button" className="image-gallery-trigger" onClick={openGallery} aria-label={`${t("viewGallery")} ${props.title}`}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title}
            className="project-image"
          />
          <span className="gallery-overlay">
            <FiImage />
            <span>{t("viewGallery")}</span>
          </span>
        </button>
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
      <Modal show={showGallery} onHide={() => setShowGallery(false)} centered size="xl" className="project-gallery-modal">
        <Modal.Body>
          <button type="button" className="gallery-close" onClick={() => setShowGallery(false)} aria-label={t("close")}>
            <FiX />
          </button>
          <img src={galleryImages[activeImageIndex]} alt={`${props.title} ${activeImageIndex + 1}`} className="gallery-main-image" />
          {galleryImages.length > 1 && (
            <>
              <button type="button" className="gallery-navigation gallery-previous" onClick={showPreviousImage} aria-label={t("previousImage")}>
                <FiChevronLeft />
              </button>
              <button type="button" className="gallery-navigation gallery-next" onClick={showNextImage} aria-label={t("nextImage")}>
                <FiChevronRight />
              </button>
              <div className="gallery-counter">{activeImageIndex + 1} / {galleryImages.length}</div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default ProjectCards;