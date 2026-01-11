import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../Assets/logo-Rihem.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineGlobal
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

// Import i18next
import { useTranslation } from "react-i18next";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  
  // Utiliser i18next
  const { t, i18n } = useTranslation();
  
  // Utiliser le contexte du thème
  const { theme, toggleTheme } = useTheme();

  function scrollHandler() {
    if (window.scrollY >= 80) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    updateExpanded(false);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={`nav-bar ${navColour ? "nav-sticky" : ""}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          <div className="logo-container">
            <img src={logo} className="nav-logo" alt="Rihem Logo" />
            <span className="brand-name">RIHEM Hs</span>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="nav-toggle"
          onClick={() => updateExpanded(!expand)}
        >
          {expand ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Navbar.Toggle>

        {/* Navigation Menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => handleNavLinkClick("home")}
              >
                <AiOutlineHome className="nav-icon" />
                <span className="nav-text">{t('home')}</span>
                <div className="nav-indicator"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                onClick={() => handleNavLinkClick("about")}
              >
                <AiOutlineUser className="nav-icon" />
                <span className="nav-text">{t('about')}</span>
                <div className="nav-indicator"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
                onClick={() => handleNavLinkClick("projects")}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">{t('projects')}</span>
                <div className="nav-indicator"></div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              {/* <Nav.Link
                as={Link}
                to="/contact"
                className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleNavLinkClick("contact")}
              >
                <AiOutlinePhone className="nav-icon" />
                <span className="nav-text">{t('contact')}</span>
                <div className="nav-indicator"></div>
              </Nav.Link> */}
            </Nav.Item>

            {/* Sélecteur de langue avec i18next */}
            <Nav.Item className="nav-language-item">
              <Dropdown>
                <Dropdown.Toggle variant="link" id="language-dropdown" className="nav-language-toggle">
                  <AiOutlineGlobal className="nav-icon" />
                  <span className="nav-text">{t('language')}</span>
                  <FiChevronDown className="ms-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-language-menu">
                  <Dropdown.Item 
                    onClick={() => handleLanguageChange("fr")}
                    className={`nav-language-option ${i18n.language === "fr" ? "active" : ""}`}
                  >
                    <span className={`language-flag me-2`}>🇫🇷</span>
                    Français
                    {i18n.language === "fr" && <span className="ms-2">✓</span>}
                  </Dropdown.Item>
                  <Dropdown.Item 
                    onClick={() => handleLanguageChange("en")}
                    className={`nav-language-option ${i18n.language === "en" ? "active" : ""}`}
                  >
                    <span className={`language-flag me-2`}>🇬🇧</span>
                    English
                    {i18n.language === "en" && <span className="ms-2">✓</span>}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

            {/* Bouton de bascule du thème */}
            <Nav.Item className="nav-theme-item">
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <BsSun className="theme-icon" />
                ) : (
                  <BsMoon className="theme-icon" />
                )}
              </button>
            </Nav.Item>

            {/* CTA Button */}
            <Nav.Item className="nav-cta-item">
              <a
                href="mailto:rihemhassounanjim90@gmail.com"
                className="nav-cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t('hireMe')}</span>
                <FiChevronDown className="cta-arrow" />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;