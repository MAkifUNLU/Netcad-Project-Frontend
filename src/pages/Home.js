import React from "react";
import ProductList from "../components/ProductList";
//state kullan
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
    },
    {
      title: "Product4",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "Product5",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
  ];
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

// import { Button, Card } from "antd";
// import React, { useEffect, useState } from "react";
// //import ProductCard from "./ProductCard";

// function ProductList() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("https://localhost:7068/api/Product")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <>
//        <Card title="Products">{}</Card>
//        <Button>Add</Button>
//      </>
//     );
//   }
// }

// export default ProductList;









// /* eslint-disable import/no-anonymous-default-export */
// import React, { useState} from "react";
// import ProductList from "../components/ProductList";

// export default () => {

//   const [products, setProducts] = useState(
//     {
//       title: "Product1",
//       src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     },
//     {
//       title: "Product2",
//       src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     },
//     {
//       title: "Product3",
//       src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     },
//     {
//       title: "Product4",
//       src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     },
//     {
//       title: "Product5",
//       src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     },
//   );

//   return (
//     <>
//       <ProductList products={products} />
//     </>
//   );
// };

