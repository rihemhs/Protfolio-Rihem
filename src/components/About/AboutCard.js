
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
function AboutCard() {
      const { t } = useTranslation();
  return (
    <Card className="about-card-pro">
      <Card.Body>
        <p>
         {t("salutation")}<span>Rihem Hassouna</span>,  {t("a")} <strong>{t(" position")}</strong>
         {t("decriptionposition")}
        </p>

        <ul className="about-list">
          <li>{t("list1")}</li>
          <li>{t("list2")}</li>
          <li>{t("list3")}</li>
          <li>{t("list4")}</li>
          <li>{t("list5")}</li>
        </ul>

        <p className="quote">“{t("result")}”</p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
