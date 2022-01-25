import React, { useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../Context/ProductContex";
import "./style.scss";

function SaveBtn() {
  const [items, setItems] = useContext(ProductContext);
  async function sendItem() {
    try {
      await axios
        .post("http://localhost:3001/product", {
          saveItem: items,
        })
        .then((res) => console.log(res));
      setItems([]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="saveBtn">
      {items.length <= 0 ? null : (
        <button onClick={sendItem}>Ürünleri Kaydet</button>
      )}
    </div>
  );
}

export default SaveBtn;
