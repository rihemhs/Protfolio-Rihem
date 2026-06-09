import React from "react";
import { Button } from "react-bootstrap";
import { MAILTO_URL } from "../../constants/contactInfo";

function MailtoButton({ variant = "outline-light", className = "", children }) {
  return (
    <Button
      as="a"
      href={MAILTO_URL}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}

export default MailtoButton;
