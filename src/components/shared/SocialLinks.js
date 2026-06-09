import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CONTACT } from "../../constants/contactInfo";

function SocialLinks({ className = "", style }) {
  const links = [
    { href: CONTACT.github, icon: <AiFillGithub />, label: "GitHub" },
    { href: CONTACT.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
  ];

  return (
    <>
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={className}
        >
          {icon}
        </a>
      ))}
    </>
  );
}

export default SocialLinks;
