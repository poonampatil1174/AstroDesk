import React, { useState } from "react";

function KundliCreation() {
  const [kundli, setKundli] = useState({
    name: "",
    gender: "",
    dob: "",
    tob: "",
    pob: ""
  });

  const handleChange = (e) => {
    setKundli({ ...kundli, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Kundli Details Submitted");
    console.log(kundli);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Kundli Creation 
      </h2>

      <form onSubmit={handleSubmit} className="p-4 shadow bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={kundli.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            value={kundli.gender}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={kundli.dob}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time of Birth</label>
          <input
            type="time"
            name="tob"
            value={kundli.tob}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Place of Birth</label>
          <input
            type="text"
            name="pob"
            value={kundli.pob}
            onChange={handleChange}
            className="form-control"
            placeholder="City, State"
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn ">
            Generate Kundli 
          </button>
        </div>
      </form>
    </div>
  );
}

export default KundliCreation;
