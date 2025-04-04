import React from "react";

function Support() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff8800" }}>
        Need Help? 🔮 Contact Support
      </h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h5>📞 Contact Details</h5>
            <p><strong>Email:</strong> support@astrodesk.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>Timings:</strong> 10 AM - 6 PM (Mon - Sat)</p>
            <p><strong>Address:</strong> Astrological Lane, Varanasi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded bg-light">
            <h5>📬 Send Us a Message</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" rows="4" placeholder="Type your message here..."></textarea>
              </div>

              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
