import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "\" — Spring Boot | React | Next.js | TypeScript",
          "Engineer",
          "Front end Developer",
           "Web Development",
           "Web Designing"
     
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
