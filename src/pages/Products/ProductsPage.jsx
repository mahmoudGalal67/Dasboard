import React from "react";
import HeaderComponent from './component/HeaderComponent';
import ProductHead from './component/ProductHead';
import ProductList from './component/Products';

const ProductsPage = (props) => {
  return (
    <>
      <div className="headerComponent">
        <HeaderComponent />
        <ProductHead/>
        <ProductList />

      </div>
    </>
  );
};

export default ProductsPage;
