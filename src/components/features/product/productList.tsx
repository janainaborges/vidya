import React from "react";

import {
  Box,
  Column,
  Form,
  Label,
  ListOrdeOne,
  ListOrdeTwo,
  ListOrden,
  Row,
  RowProduct,
  Title,
  TitleDescription,
  TitleValue,
} from "../styles";

import imagesFake from "@/assets/svg/images.svg";
import { useProductSelected } from "@/hooks/useProductSelect";
const ProductList: React.FC = () => {
  const product = useProductSelected();

  if (!product) {
    return;
  }

  return (
      <RowProduct>
        <ListOrden>
          <ListOrdeOne>
            <Box bg={imagesFake} />
          </ListOrdeOne>

          <ListOrdeTwo>
            <Column>
            <Title>{product.productDescript}</Title> 
            <TitleValue>{product.productValue}</TitleValue> 
            <TitleDescription>{product.productName}</TitleDescription> 
            </Column>
          </ListOrdeTwo>
        </ListOrden>
      </RowProduct>
  );
};

export default ProductList;
