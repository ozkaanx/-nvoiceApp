import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { ProductProvider } from "./Context/ProductContex";

function App() {
  return (
    <div className="section">
      <Header />
      <ProductProvider>
      <Main />
              
      </ProductProvider>
    </div>
  );
}

export default App;
