import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding Your Birth Chart",
    date: "April 3, 2025",
    image: "/images/blog1.jpg",
    snippet: "Discover the secrets hidden in your natal chart. What do planets and houses reveal about you?",
  },
  {
    id: 2,
    title: "Top 5 Remedies for Rahu Dosh",
    date: "March 28, 2025",
    image: "/images/blog2.jpg",
    snippet: "Simple Vedic astrology remedies to minimize the impact of Rahu in your horoscope.",
  },
  {
    id: 3,
    title: "Importance of Muhurat in Marriage",
    date: "March 20, 2025",
    image: "/images/blog3.jpg",
    snippet: "Choosing the right muhurat can impact your married life. Here's why it matters.",
  },
];

function Blogs() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff8800" }}>
        Astrology Blogs 📚
      </h2>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <small className="text-muted">{blog.date}</small>
                <p className="card-text mt-2">{blog.snippet}</p>
                <div className="mt-auto">
                  <button className="btn btn-warning btn-sm">Read More →</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
