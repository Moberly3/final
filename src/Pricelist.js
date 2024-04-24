import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

const services = [
  {
    category: "Facial Treatments",
    imagePath: "/images/photo10.jpg",
    items: [
      { name: "Basic Facial", price: "900 CZK", duration: "60 min" },
      { name: "Acne Treatment", price: "1,100 CZK", duration: "75 min" },
      { name: "Anti-Aging Facial", price: "1,300 CZK", duration: "90 min" },
    ],
  },
  {
    category: "Advanced Treatments",
    imagePath: "/images/photo7.jpg",
    items: [
      { name: "Chemical Peel", price: "1,500 CZK", duration: "60 min" },
      { name: "Microdermabrasion", price: "1,200 CZK", duration: "45 min" },
      { name: "Laser Therapy", price: "from 2,000 CZK", duration: "Varies" },
    ],
  },
  {
    category: "Additional Services",
    imagePath: "/images/photo9.jpg",
    items: [
      { name: "Eyebrow Shaping", price: "300 CZK", duration: "30 min" },
      { name: "Eyelash Extensions", price: "1,500 CZK", duration: "120 min" },
      { name: "Face Massage", price: "700 CZK", duration: "45 min" },
    ],
  }
];

const Pricing = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Service Pricing</h1>
        {services.map((category, index) => (
          <div key={index}>
            <h2 className="subtitle has-text-weight-semibold">{category.category}</h2>
            <figure className="image is-4by3">
              <img src={category.imagePath} alt={`${category.category}`} />
            </figure>
            <div className="columns is-multiline">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="column is-4">
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-4">{item.name}</p>
                      <p className="subtitle is-6"><strong>Duration:</strong> {item.duration}</p>
                      <p className="title is-5 has-text-weight-bold has-text-primary">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
