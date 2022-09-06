import React from "react";
import ProductList from "../components/ProductList";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const products = [
    {
      title: "Product1",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "Product2",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "Product3",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    }
  ];
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
