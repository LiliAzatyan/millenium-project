import Landing from "./landing.png";
import React from "react";
import "./main.css";

const Main: React.FC = () => {
  return (
    <div className="landing-container">
      <img src={Landing} alt="Landing picture" className="landing-picture" />
      <div className="landing-text">
        <h1>
          <strong>Ձեր երազանքների տունը</strong> կառուցեք մեզ հետ
        </h1>
        <p>
          Մենք առաջարկում ենք <strong>բարձրորակ շինարարական լուծումներ</strong>, որոնք համապատասխան են ձեր պատկերացումներին և պահանջներին: Մեր փորձառու թիմը աշխատում է <strong>լավագույն նյութերով</strong> և ապացուցված տեխնոլոգիաներով՝ ստեղծելու ներդաշնակ և ամուր տարածքներ, որոնք կդառնան ձեր իսկական տունը։ <strong>Հեշտություն, որակ և վստահություն</strong>՝ յուրաքանչյուր նախագծի հիմքում։
        </p>
      </div>
    </div>
  );
}

export default Main;
