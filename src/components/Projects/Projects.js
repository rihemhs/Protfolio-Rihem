
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/glocal.PNG";
import soforthandelsregister from "../../Assets/Projects/handless.PNG";
import suicide from "../../Assets/Projects/suicide.png";
import sddmprojet from "../../Assets/Projects/sddmprojet.PNG";
import TicketProm from "../../Assets/Projects/TicketProm.PNG";
import glovax from "../../Assets/Projects/glovax.PNG";
import hanshafish from "../../Assets/Projects/hanshafish.jpeg";
import New from "../../Assets/Projects/NewoFNewCommerce.jpeg";
import supplyDashboard from "../../Assets/SupplyChainProject/ProcurementDashbrd.PNG";
import supplyAddItems from "../../Assets/SupplyChainProject/additemsprocureent.PNG";
import supplyPaymentRequest from "../../Assets/SupplyChainProject/addpaymmentofficerequest.PNG";
import supplyPurchaseRequisition from "../../Assets/SupplyChainProject/addpurchaserequisition.PNG";
import supplyApproved from "../../Assets/SupplyChainProject/approcedbod.PNG";
import supplyAsset from "../../Assets/SupplyChainProject/asset.PNG";
import supplyAssetReceive from "../../Assets/SupplyChainProject/assetreceive.PNG";
import supplyAssetLocation from "../../Assets/SupplyChainProject/asssetlocation.PNG";
import supplyConsumablePurchase from "../../Assets/SupplyChainProject/consommablePurchase.PNG";
import supplyConsumableItem from "../../Assets/SupplyChainProject/consumabeitem.PNG";
import supplyConsumableNcr from "../../Assets/SupplyChainProject/consumableNCR.PNG";
import supplyConsumable from "../../Assets/SupplyChainProject/consumanle.PNG";
import supplyMaterialDashboard from "../../Assets/SupplyChainProject/Dasbord matreil.PNG";
import supplyEvaluation from "../../Assets/SupplyChainProject/Evaluation.PNG";
import supplyInstallation from "../../Assets/SupplyChainProject/InstallationTracking.PNG";
import supplyLogin from "../../Assets/SupplyChainProject/login.PNG";
import supplyOfficeDraft from "../../Assets/SupplyChainProject/officedraftpayment.PNG";
import supplyOfficePayment from "../../Assets/SupplyChainProject/officepayment.PNG";
import supplyOfficePackage from "../../Assets/SupplyChainProject/pakageoffice.PNG";
import supplyProcurementProject from "../../Assets/SupplyChainProject/procurementprojet.PNG";
import supplyPurchaseRequest from "../../Assets/SupplyChainProject/purchaserequest.PNG";
import supplyQuoteAdd from "../../Assets/SupplyChainProject/quoteadd.PNG";
import supplyQuoteDisplay from "../../Assets/SupplyChainProject/quoteafficge.PNG";
import supplyTendering from "../../Assets/SupplyChainProject/tendringproject.PNG";
import logisticDashboard from "../../Assets/LogisticProject/logisticDasbord.PNG";
import logisticEquipment from "../../Assets/LogisticProject/addequipemet.PNG";
import logisticAllProjects from "../../Assets/LogisticProject/AllProjects.PNG";
import logisticChecklists from "../../Assets/LogisticProject/ChecklistLists.PNG";
import logisticCreateChecklist from "../../Assets/LogisticProject/CreateInspectionChecklist.PNG";
import logisticEquipmentRequest from "../../Assets/LogisticProject/EquipementRequest.PNG";
import logisticFuel from "../../Assets/LogisticProject/FuelManegement.PNG";
import logisticManualInspection from "../../Assets/LogisticProject/ManuelleInspectionShedule.PNG";
import logisticMobilization from "../../Assets/LogisticProject/MobilizationEquipement.PNG";
import logisticPaySubcontract from "../../Assets/LogisticProject/PaySubcontract.PNG";
import logisticSchedule from "../../Assets/LogisticProject/SheduleInspection.PNG";
import logisticSubcontract from "../../Assets/LogisticProject/SubcontractList.PNG";
import logisticTimesheets from "../../Assets/LogisticProject/TimeSheets.PNG";
import logisticWarehouse from "../../Assets/LogisticProject/warehouseEquipment.PNG";
//Finance
import financeoverview from "../../Assets/FinanceProject/financeoverview.PNG";
import financeorderpayment from "../../Assets/FinanceProject/financeorderpayment.PNG";
import financeorderpaymentRequest from "../../Assets/FinanceProject/financeorderpaymentRequest.PNG";
import supplyperchaserequest from "../../Assets/SupplyChainProject/purchaserequest.PNG";
import BankTransferValidation from "../../Assets/FinanceProject/BankTransferValidation.PNG";
import CheckRegister from "../../Assets/FinanceProject/CheckRegister.PNG";
import PayrollOverview from "../../Assets/FinanceProject/PayrollOverview.PNG";
import Createsalary from "../../Assets/FinanceProject/Createsalary.PNG";
import MonthlyExpense from "../../Assets/FinanceProject/MonthlyExpense.PNG";
import Invoices from "../../Assets/FinanceProject/Invoices.PNG";
import PayrollReport from "../../Assets/FinanceProject/PayrollReport.PNG";
import ProjectFinancial from "../../Assets/FinanceProject/ProjectFinancial.PNG";
import AddNewInvoices from "../../Assets/FinanceProject/AddNewInvoices.PNG";
import SalaryCalculate from "../../Assets/FinanceProject/SalaryCalculate.PNG";
import CashAdvance from "../../Assets/FinanceProject/CashAdvance.PNG";
//HR
import ManifestLogistic from "../../Assets/HRProject/ManifestLogistic.PNG";
import MissionAssignement from "../../Assets/HRProject/MissionAssignement.PNG";
import MyInterview from "../../Assets/HRProject/MyInterview.PNG";
import NewInterview from "../../Assets/HRProject/NewInterview.PNG";
import orgChartHr from "../../Assets/HRProject/orgChartHr.PNG";
import PositionPad from "../../Assets/HRProject/PositionPad.PNG";
import SiteAssignement from "../../Assets/HRProject/SiteAssignement.PNG";
import siteKclerk from "../../Assets/HRProject/siteKclerk.PNG";
import openRecuitementt from "../../Assets/HRProject/openRecuitementt.PNG";
import listInterview from "../../Assets/HRProject/listInterview.PNG";
import listRecruitement from "../../Assets/HRProject/listRecruitement.PNG";
import listsiteassignemetExtention from "../../Assets/HRProject/listsiteassignemetExtention.PNG";
import HRPerformance from "../../Assets/HRProject/HRPerformance.PNG";
import hrrecuitement from "../../Assets/HRProject/hrrecuitement.PNG";
import DetailsInterview from "../../Assets/HRProject/DetailsInterview.PNG";
import Demobilizationlist from "../../Assets/HRProject/Demobilizationlist.PNG";
import CreatePaymentRequet from "../../Assets/HRProject/CreatePaymentRequet.PNG";
import Createsiteassignement from "../../Assets/HRProject/Createsiteassignement.PNG";
import AddSiteAssignementExtention from "../../Assets/HRProject/AddSiteAssignementExtention.PNG";
import OfficeTimeSheet from "../../Assets/HRProject/OfficeTimeSheet.PNG";
import dasbordLeave from "../../Assets/HRProject/dasbordLeave.PNG";
import AddIntershipRequest from "../../Assets/HRProject/AddIntershipRequest.PNG";
import AddLeave from "../../Assets/HRProject/AddLeave.PNG";
import leaveusagesummary from "../../Assets/HRProject/leaveusagesummary.PNG";
import TeleworkingDasboad from "../../Assets/HRProject/TeleworkingDasboad.PNG";
import Teleworking from "../../Assets/HRProject/Teleworking.PNG";
import AddMission from "../../Assets/HRProject/AddMission.PNG";
import { useState } from "react";
import { useTranslation } from "react-i18next";


function Projects() {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({ web: false, mobile: false });
  const initialProjectCount = 5;

  const webProjects = [
        {
      title: t("ERPHR"),
      demoLink: "https://dev-hr.gets-company.com/",
      description: t("descriptionERPHR"),
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "HR"],
      imgPath: listRecruitement,
      gallery: [
        ManifestLogistic,
        MissionAssignement,
        MyInterview,
        NewInterview,
        orgChartHr,
        PositionPad,
        SiteAssignement,
        siteKclerk,
        openRecuitementt,
        listInterview,
        listRecruitement,
        listsiteassignemetExtention,
        HRPerformance,
        hrrecuitement,
        DetailsInterview,
        Demobilizationlist,
        CreatePaymentRequet,
        Createsiteassignement,
        AddSiteAssignementExtention,
        AddMission

      ]



    },
  
    {
      title: t("ERPFinance"),
      demoLink: "https://dev-daf.gets-company.com/",
      description: t("descriptionERPFinance"),
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "Finance"],
      imgPath: financeoverview,
      gallery: [
        financeorderpayment,
        financeorderpaymentRequest,
        supplyperchaserequest,
        BankTransferValidation,
        CheckRegister,
        PayrollOverview,
        Createsalary,
        MonthlyExpense,
        Invoices,
        PayrollReport,
        ProjectFinancial,
        AddNewInvoices,
        SalaryCalculate,
        CashAdvance,
        AddNewInvoices,
        OfficeTimeSheet,
        dasbordLeave,
        AddIntershipRequest,
        AddLeave,
        leaveusagesummary,
        TeleworkingDasboad,
        Teleworking

      ]
    },
  {
      title: t("ERPSupply"),
      demoLink: "https://supply.gets-company.com/SupplyChain/dashboards",
      description: t("descriptionERPSupply"),
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "Supply"],
      imgPath: supplyDashboard,
      gallery: [
        supplyDashboard,
        supplyLogin,
        supplyProcurementProject,
        supplyAddItems,
        supplyPurchaseRequisition,
        supplyPurchaseRequest,
        supplyQuoteAdd,
        supplyQuoteDisplay,
        supplyTendering,
        supplyPaymentRequest,
        supplyOfficeDraft,
        supplyOfficePayment,
        supplyOfficePackage,
        supplyApproved,
        supplyMaterialDashboard,
        supplyAsset,
        supplyAssetReceive,
        supplyAssetLocation,
        supplyConsumablePurchase,
        supplyConsumableItem,
        supplyConsumableNcr,
        supplyConsumable,
        supplyEvaluation,
        supplyInstallation
      ]
    },
    {
      imgPath: logisticDashboard,
      title: t("ERPLogistic"),
      demoLink: "https://supply.gets-company.com/SupplyChain/dashboards",
      description: t("descriptionERPLogistic"),
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "Logistics"],
      gallery: [
        logisticDashboard,
        logisticEquipment,
        logisticAllProjects,
        logisticChecklists,
        logisticCreateChecklist,
        logisticEquipmentRequest,
        logisticFuel,
        logisticManualInspection,
        logisticMobilization,
        logisticPaySubcontract,
        logisticSchedule,
        logisticSubcontract,
        logisticTimesheets,
        logisticWarehouse
      ]
    },

    {
      imgPath: sddmprojet,
      title: t("SDDM"),
      description: t("descriptionSDDM"),
      tech: ["React", "Stripe", "GraphQL", "E-commerce"]
    },
    {
      imgPath: soforthandelsregister,
      title: t("SofortHandelsregister"),
      description: t("descriptionSofortHandelsregister"),
      demoLink: "https://sofort-handelsregister.com",
      tech: ["React", "API", "E-commerce"]
    },
    {
      imgPath: leaf,
      title: t("GLOCAL"),
      description: t("descriptionGlocal"),
      demoLink: "https://glocal-it-solutions.com/",
      tech: ["React", "Responsive", "Corporate"]
    },
    {
      imgPath: TicketProm,
      title: t("TicketPromo"),
      description: t("descriptionTicketPromo"),
      demoLink: "https://ticket-promo.com",
      tech: ["React", "php", "LocalStorage", "Components"]
    },
    {
      imgPath: suicide,
      title: t("ECommerceSite"),
      description: t("ECommerceSiteDescription"),
      tech: ["React", "E-commerce", "Sport"]
    },
    {
      imgPath: glovax,
      title: t("CompanySite"),
      description: t("CompanySiteDescription"),
      demoLink: "https://globivax.com/",
      tech: ["wordpress", "php", "phpMyAdmin", "Freelance", "HTML", "CSS"]
    }
  ];

  const mobileProjects = [
    {
      imgPath: hanshafish,
      title: t("MobileApp"),
      description: t("MobileAppDescription"),
      demoLink: "https://play.google.com/store/apps/details?id=com.hanchiafish.app&hl=fr",
      tech: ["React Native", "Freelance"]
    },
    {
      imgPath: New,
      title: t("MobileAppNewOfNewCommerce"),
      description: t("MobileAppNewOfNewCommerceDescription"),
      demoLink: "",
      tech: ["React Native", "Freelance"]
    }
  ];

  const renderProjectGrid = (items, section) => {
    const isExpanded = expandedSections[section];
    const visibleItems = isExpanded ? items : items.slice(0, initialProjectCount);
    const hasMoreItems = items.length > initialProjectCount;

    return (
      <>
        <Row className="projects-grid">
          {visibleItems.map((project, index) => (
            <Col key={`${project.title}-${index}`} xs={12} sm={6} lg={4} className="project-card-col">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.tech}
                modules={project.modules}
                gallery={project.gallery}
              />
            </Col>
          ))}
        </Row>
        {hasMoreItems && (
          <button
            type="button"
            className="projects-toggle"
            onClick={() => setExpandedSections((current) => ({
              ...current,
              [section]: !current[section]
            }))}
          >
            {isExpanded ? t("showLess") : t("seeAll")}
          </button>
        )}
      </>
    );
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-container">
        <div className="project-header">
          <h1 className="project-heading">
            <span className="purple-gradient">{t("projets")}</span>
          </h1>
          <p className="project-subtitle">
            {t("projectsSubtitle")}
          </p>
        </div>

        <div className="project-category-block">
          <div className="category-label">Web Projects</div>
          {renderProjectGrid(webProjects, "web")}
        </div>

        <div className="project-category-block mobile-block">
          <div className="category-label">Mobile Projects</div>
          {renderProjectGrid(mobileProjects, "mobile")}
        </div>

        <div className="cta-section">
          <p className="cta-text">
            {t("InterestedText")}
          </p>
          <a
            href="mailto:rihemhassounanjim90@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Rihem,%0D%0A%0D%0AI%20would%20like%20to%20contact%20you."
            className="cta-button"
          >
            {t("contacter")}
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;