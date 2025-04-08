import React from "react";

function Profile() {
  const user = {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91-9876543210",
    dob: "1995-07-20",
    gender: "Female",
    location: "Delhi, India",
    image: "/images/profile.jpg", // keep this in public/images
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Your Profile 
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <div className="text-center mb-3">
              <img
                src={user.image}
                alt="User"
                className="rounded-circle"
                width="120"
                height="120"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h5 className="text-center">{user.name}</h5>
            <p className="text-center text-muted mb-4">{user.email}</p>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong> Phone:</strong> {user.phone}
              </li>
              <li className="list-group-item">
                <strong>Date of Birth:</strong> {user.dob}
              </li>
              <li className="list-group-item">
                <strong> Gender:</strong> {user.gender}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {user.location}
              </li>
            </ul>

            <div className="text-center mt-4">
              <button className="btn">Edit Profile </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
