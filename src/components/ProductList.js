// import { Button, Card } from "antd";
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";

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
import { Button, Card } from "antd";
import React from "react";
import ProductCard from "./ProductCard";

const gridStyle = {
  width: "33%",
  textAlign: "center",
};

export const ProductList = (props) => {
  const { products } = props;

  const createProducts = () => {
    const productList = [];

    for (let i = 0; i < 3; i++) {
      console.log(products?.[i].title);
      productList.push(
        <Card.Grid style={gridStyle}>
          <ProductCard
            productTitle={products?.[i].title}
            imgSrc={products?.[i].src}
            key={i}
            description={products?.[i].description}
            id={products?.[i].id}
          />
        </Card.Grid>
      );
    }
    return productList;
  };
  return (
    <>
      <Card title="Products">{createProducts()}</Card>
      <Button>Add</Button>
    </>
  );
};

export default ProductList;
