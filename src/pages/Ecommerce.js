import React from "react";

const products = [
  {
    id: 1,
    name: "Shree Yantra",
    price: "₹799",
    image: "/images/shree-yantra.jpg",
    description: "Attract wealth and positivity into your home.",
  },
  {
    id: 2,
    name: "Yellow Sapphire",
    price: "₹5,999",
    image: "/images/yellow-sapphire.jpg",
    description: "Powerful gemstone for Jupiter’s blessings.",
  },
  {
    id: 3,
    name: "Navgrah Puja Kit",
    price: "₹1,499",
    image: "/images/puja-kit.jpg",
    description: "Complete puja set for Navgrah Shanti.",
  },
];

function ECommerce() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" >
        AstroShop 
      </h2>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <h6 className="mt-auto">{item.price}</h6>
                <div className="mt-3 d-flex justify-content-between">
                  <button className="btn  btn-sm">View Details</button>
                  <button className="btn  btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ECommerce;
