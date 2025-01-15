import React from "react";
import ProductCard from "../projects-card/ProjectsCard";
import "./product-section.css";

const ProjectSection: React.FC = () => {
  const products = [
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard
              key={products.length + index}
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

export default ProjectSection;
