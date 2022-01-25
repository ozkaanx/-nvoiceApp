import React, { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import "./style.scss";

function MainBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mainBtn">
        <button onClick={() => setOpen(!open)}>Ürün Ekle</button>
      </div>
      {open ? <AddProduct open={open} setOpen={setOpen} /> : null}
    </>
  );
}

export default MainBtn;
