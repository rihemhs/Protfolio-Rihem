
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
function AboutCard() {
      const { t } = useTranslation();
  return (
    <Card className="about-card-pro">
      <Card.Body>
        <p style={{color:"black"}}>
         {t("salutation")}<span>Rihem Hassouna</span>,  {t("a")} <strong>{t(" position")}</strong>
         {t("decriptionposition")}
        </p>

        <ul className="about-list">
          <li style={{color:"#1A1818"}}> {t("list1")}</li>
          <li style={{color:"#1A1818"}}> {t("list2")}</li>
          <li style={{color:"#1A1818"}}> {t("list3")}</li>
          <li style={{color:"#1A1818"}}>  {t("list4")}</li>
          <li style={{color:"#1A1818"}}>{t("list5")}</li>
        </ul>

        <p className="quote">“{t("result")}”</p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
