import React, { useState } from "react";

function KundliMilan() {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: API call ya logic
    setResult({
      score: 28,
      verdict: "Good Compatibility 🔔",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff8800" }}>
        Kundli Milan (Matchmaking)
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <h5>Boy's Details</h5>
          <div className="col-md-4 mb-3">
            <label>Date of Birth</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label>Time of Birth</label>
            <input type="time" className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label>Place of Birth</label>
            <input type="text" className="form-control" placeholder="e.g. Delhi" required />
          </div>
        </div>

        <div className="row mb-4">
          <h5>Girl's Details</h5>
          <div className="col-md-4 mb-3">
            <label>Date of Birth</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label>Time of Birth</label>
            <input type="time" className="form-control" required />
          </div>
          <div className="col-md-4 mb-3">
            <label>Place of Birth</label>
            <input type="text" className="form-control" placeholder="e.g. Mumbai" required />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning px-4">
            Match Kundli 🔮
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-5 text-center">
          <h4>Gun Milan Score: {result.score}/36</h4>
          <p style={{ fontSize: "18px", color: "green" }}>{result.verdict}</p>
        </div>
      )}
    </div>
  );
}

export default KundliMilan;
