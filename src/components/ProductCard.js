import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React, { useState } from "react";
import { Checkbox } from "antd";
const { Meta } = Card;

export const ProductCard = (props) => {
  const [checked, setChecked] = useState(false);
  const { productTitle, imgSrc, description, id } = props;
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
    if(checked===false){
      setChecked(true);
    } else {
      setChecked(false);
    }
    
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={imgSrc} height="200" />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <Checkbox checked={checked} onChange={onChange} key={"checkbox"} id={id}>
          Add to cart
        </Checkbox>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={productTitle}
        description={description}
        style={{
          padding: 25,
          margin: 0,
          minHeight: 15,
          textAlign: "center",
        }}
      />
    </Card>
  );
};

export default ProductCard;

