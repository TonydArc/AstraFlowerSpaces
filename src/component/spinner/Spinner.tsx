import React from "react";

const Spinner: React.FC = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          background:
            "linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))",
          objectFit: "cover",
        }}
      >
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border"
                  role="status"
                  style={{
                    width: "75px",  // Adjust width
                    height: "75px", // Adjust height
                    borderWidth: "5px", // Adjust border thickness
                  }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
