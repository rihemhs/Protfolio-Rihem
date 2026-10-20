import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { i18n } = useTranslation();
  const roles = i18n.language === "fr"
    ? [
      "Développeuse Full-Stack",
      "Ingénieure logiciel",
      "Spring Boot · React · TypeScript"
    ]
    : [
      "Full-Stack Developer",
      "Software Engineer",
      "Spring Boot · React · TypeScript"
    ];

  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
