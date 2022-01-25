import React from "react";
import FormLogo from "./Formlogo/FormLogo";
import FormDate from "./FormDate/FormDate";

// Import Style
import "./style.scss";
const Header = () => {
  return (
    <div className="header">
      <FormLogo />
      <FormDate />
    </div>
  );
};

export default Header;
