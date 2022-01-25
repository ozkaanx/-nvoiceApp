import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../Context/ProductContex";

function FormTable() {
  const [items, setItems] = useContext(ProductContext);
  var [total, setTotal] = useState(0);

  useEffect(() => {
    if (items.length <= 0) {
      return null;
    } else {
      let priceTotal = items.map((x) => x.productPrice);
      total = priceTotal.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });
      setTotal(total);
    }
  }, [items]);

  return (
    <div className="form-table">
      <table className="table">
        <thead className="table-head">
          <tr className="head-tr">
            <th>Ürün İsmi</th>
            <th>Ürün Fiyatı</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {items.map((x, _index) => (
            <tr className="body-tr" key={_index}>
              <td>{x.productName}</td>
              <td>{x.productPrice} TL</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="price-box">
        <label>
          Toplam Fiyat <strong>{total} </strong>
        </label>
      </div>
    </div>
  );
}

export default FormTable;
