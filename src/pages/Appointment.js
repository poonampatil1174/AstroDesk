import React from "react";

function Appointment() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#ff8800" }}>
        Book Your Appointment
      </h2>

      <form className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" placeholder="Enter your phone number" />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Service</label>
          <select className="form-select">
            <option>Kundali Milan</option>
            <option>Remedies</option>
            <option>Horoscope</option>
            <option>Career Advice</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Date & Time</label>
          <input type="datetime-local" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Any Questions or Notes</label>
          <textarea className="form-control" rows="3" placeholder="Type here..."></textarea>
        </div>

        <button type="submit" className="btn" style={{ backgroundColor: "#ff8800", color: "#fff" }}>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
