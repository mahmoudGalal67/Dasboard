import React, { useState } from "react";
import HeaderComponent from './component/HeaderComponent';
import ProductHead from './component/ProductHead';
import ProductList from './component/Products';
import ProductListRow from './component/ProductsListRow';
import './ProductPage.css';

const ProductsPage = (props) => {
  const [isProductListVisible, setProductListVisible] = useState(true);

  const showProductList = () => {
    setProductListVisible(true);
  };

  const hideProductList = () => {
    setProductListVisible(false);
  };
  return (
    <>
      <div className="headerComponent">
        <HeaderComponent />
        <ProductHead 
          showProductList={showProductList} 
          hideProductList={hideProductList} 
        />
        {isProductListVisible ? <ProductList /> : <ProductListRow />}

      </div>
    </>
  );
};

export default ProductsPage;
