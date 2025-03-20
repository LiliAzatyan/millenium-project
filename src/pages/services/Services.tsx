import React, { useState } from "react";
import "./services.css";

const services = [
  {
    id: 1,
    title: "Շինարարություն",
    shortDescription: "Մենք առաջարկում ենք բարձրորակ շինարարական աշխատանքներ:",
    fullDescription: "Մենք իրականացնում ենք բնակելի, առևտրային և արդյունաբերական շինարարություն` օգտագործելով նորագույն տեխնոլոգիաները:",
  },
  {
    id: 2,
    title: "Դիզայն և պլանավորում",
    shortDescription: "Հատուկ նախագծման և պլանավորման ծառայություններ",
    fullDescription: "Մեր փորձառու ճարտարապետները և դիզայներները կօգնեն ձեզ ստեղծել իդեալական շինության նախագիծ:",
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Ծառայություններ</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.shortDescription}</p>
            <button className="see-more-btn" onClick={() => setSelectedService(service)}>
              Տեսնել ավելին
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="popup-overlay active" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>&times;</button>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
