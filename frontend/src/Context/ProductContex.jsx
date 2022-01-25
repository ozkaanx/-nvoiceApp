import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [items, setItems] = useState([]);

  return (
    <ProductContext.Provider value={[items, setItems]}>
      {props.children}
    </ProductContext.Provider>
  );
}
