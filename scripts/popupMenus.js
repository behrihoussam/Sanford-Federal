const logisticsContainer = document.querySelector(".logistics-container");
const cyberSecurityContainer = document.querySelector(".cyber_security-container");
const dataTechnologiesContainer = document.querySelector(".data_technologies-container");
const healthCareServicesContainer = document.querySelector(".healthcare_services-container");
const operationalSupportContainer = document.querySelector(".operational_support-container");
const programManagementContainer = document.querySelector(".program_management-container");

const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelectorAll(".close_button");

const logisticsPopup = document.querySelector(".logistics_popup");
const cyberSecurityPopup = document.querySelector(".Cyber-security_popup");
const dataTechnologiesPopup = document.querySelector(".Data-Technologies_popup");
const healthCareServicesPopup = document.querySelector(".Healthcare-Services_popup");
const operationalSupportPopup = document.querySelector(".Operational-Support_popup");
const programManagementPopup = document.querySelector(".Program-Management_popup");

const openPopup = (container, popup) => {
    container.addEventListener("click", () => {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
        popup.style.transform = "translateY(0)";
        backdrop.style.visibility = "visible";
        backdrop.style.opacity = "1";
        document.body.style.overflowY = "hidden";
    });
}
const closePopup = (popup) => {
    closeButton.forEach((button) => {
        button.addEventListener("click", () => {
            popup.style.visibility = "hidden";
            popup.style.opacity = "0";
            popup.style.transform = "translateY(150px)";
            backdrop.style.visibility = "hidden";
            backdrop.style.opacity = "0";
            document.body.style.overflowY = "auto";
        })
    });
    backdrop.addEventListener("click", () => {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
        popup.style.transform = "translateY(150px)";
        backdrop.style.visibility = "hidden";
        backdrop.style.opacity = "0";
        document.body.style.overflowY = "auto";
    });
}
openPopup(logisticsContainer, logisticsPopup);
closePopup(logisticsPopup);

openPopup(cyberSecurityContainer, cyberSecurityPopup);
closePopup(cyberSecurityPopup);

openPopup(dataTechnologiesContainer, dataTechnologiesPopup);
closePopup(dataTechnologiesPopup);

openPopup(healthCareServicesContainer, healthCareServicesPopup);
closePopup(healthCareServicesPopup);

openPopup(operationalSupportContainer, operationalSupportPopup);
closePopup(operationalSupportPopup);

openPopup(programManagementContainer, programManagementPopup);
closePopup(programManagementPopup);