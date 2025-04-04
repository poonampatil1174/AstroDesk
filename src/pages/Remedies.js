import React from "react";

const remediesData = [
  {
    id: 1,
    title: "Pitra Dosh Nivaran",
    image: "/images/pitra-dosh.jfif", 
    description: "Special pooja to remove ancestral doshas.",
  },
  {
    id: 2,
    title: "Shani Dosh Shanti",
    image: "/images/shani.jpg",
    description: "Pacify Shani with this powerful remedy.",
  },
  {
    id: 3,
    title: "Mangal Dosh Nivaran",
    image: "/images/mangal.jfif",
    description: "Effective solutions for Mangal Dosh.",
  },
];

function Remedies() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff8800" }}>
        Astrological Remedies
      </h2>
      <div className="row">
        {remediesData.map((remedy) => (
          <div key={remedy.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={remedy.image}
                className="card-img-top"
                alt={remedy.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{remedy.title}</h5>
                <p className="card-text">{remedy.description}</p>
                <button className="btn" style={{ backgroundColor: "#ff8800", color: "#fff" }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Remedies;
