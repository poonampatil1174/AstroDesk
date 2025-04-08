import React from "react";
import "../App.css";

function Appointment() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book Your Appointment</h2>

      <form className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" name="gender" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" name="dob" required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Time of Birth</label>
            <input type="time" className="form-control" name="tob" required />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Place of Birth</label>
            <input type="text" className="form-control" name="pob" placeholder="Enter place" required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" placeholder="name@example.com" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" name="phone" placeholder="Enter your phone number" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Appointment Type</label>
          <select className="form-select" name="appointmentType" required>
            <option value="">Select Type</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Home Visit</option>
            <option>Regular Visit</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Select Service</label>
          <select className="form-select" name="service" required>
            <option>Kundali Milan</option>
            <option>Remedies</option>
            <option>Horoscope</option>
            <option>Career Advice</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Date & Time</label>
          <input type="datetime-local" className="form-control" name="appointmentDateTime" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Any Questions or Notes</label>
          <textarea className="form-control" name="question" rows="3" placeholder="Type here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Document (if any)</label>
          <input type="file" className="form-control" name="document" accept=".jpg,.png,.pdf" />
        </div>

        <div className="btn-center text-center">
          <button type="submit" className="btn  px-4">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
