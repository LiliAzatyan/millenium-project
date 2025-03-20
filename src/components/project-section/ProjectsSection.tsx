import React from "react";
import "./ProjectsSection.css";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectsCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Բնակելի Շենք 1",
      description: "Շինարարական ամենաբարձր որակով իրականացված բնակելի շենք:",
      imageUrl: "./images/shenq.jpg",
    },
    {
      title: "Առևտրային Տարածք 2",
      description: "Իրականացված առևտրային տարածք:",
      imageUrl: "../images/shenq.jpg",
    },
    {
      title: "Առևտրի Կենտրոն 3",
      description: "Հագեցված առևտրային կենտրոն:",
      imageUrl: "../images/shenq.jpg",
    },
    {
      title: "Բնակարանային Կոմպլեքս 4",
      description: "Բազմաբնակարանային համալիր",
      imageUrl: "../images/shenq.jpg",
    },
  ];

  return (
    <div className="general-content">
      <div className="product-section-wrapper">
        <div className="product-section">
          {projects.map((product, index) => (
            <ProjectsCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
