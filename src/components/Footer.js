import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Designed & Developed BY 🙇‍♀️ {" "}
              <a  href="https://piyush-mani.netlify.app/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Piyush Mani Chaubey</a>
            </p>
            <a className="text-dark fs-4" href="https://www.linkedin.com/in/piyush-mani-chaubey-42b338a3/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
