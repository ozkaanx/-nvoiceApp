import React, { useContext, useState } from "react";
import "./style.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ProductContext } from "../../../Context/ProductContex";

function AddProduct({ setOpen, open }) {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [items, setItems] = useContext(ProductContext);

  function addPr() {
    setItems([...items, { productName, productPrice }]);
    setproductName([]);
    setproductPrice([]);
  }
  return (
    <div className="popUpMenu">
      <div className="product-group">
        <label htmlFor="">Ürün Adı</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />
        <label htmlFor="">Ürün Fiyat</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setproductPrice(e.target.valueAsNumber)}
        />
      </div>
      <span onClick={() => setOpen(false)}>
        <AiOutlineCloseCircle />
      </span>
      <button className="addBtn" onClick={addPr}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
