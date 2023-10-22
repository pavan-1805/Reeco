import React from "react";
import Header from "./containers/Header";
import ProductTable from "./containers/ProductTable";
import SecondaryHeading from "./containers/SecondaryHeading";
import SupplierAndShipping from "./containers/SupplierAndShippingDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <SecondaryHeading />
      <SupplierAndShipping />
      <ProductTable />
    </div>
  );
}

export default App;
