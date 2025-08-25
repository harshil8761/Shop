import React from "react";
import './ErrorPage.css'
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-section">
      <h1 className="error-child" >404</h1>
      <p className="errorMsg" >Oops! The page you are looking for could not be found.</p>
      <Link to='/' ><p className="homeError" >🏠 Go Back Home</p></Link>
    </div>
  );
};

export default ErrorPage;
