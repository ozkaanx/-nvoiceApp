import React from "react";
import FormTable from "./Table/FormTable";
// Import style
import "./style.scss";
import MainBtn from "./MainBtn/MainBtn";
import SaveBtn from "./SaveBtn/SaveBtn";

function Main() {
  return (
    <div className="form-main">
      <FormTable />
      <MainBtn />
      <SaveBtn />
    </div>
  );
}

export default Main;
