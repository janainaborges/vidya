import React from "react";

import {
  Container,
  BoxCenter,
  Title,
  Subtitle,
  CardText,
  Box,
  Main,
  BoxImage,
  Column,
  Row,
} from "./CardList.styles";
import { useDispatch } from "react-redux";
import { setSelectedProductId } from "@/redux/reducers/selectors/selectProductSlice";
import { IProduct } from "@/types/product.types";
import imageFake from "../../assets/png/rectangle.png";

interface CardData {
  data: IProduct[];
  onCardClick: () => void;
}

const CardListProduct = ({ data, onCardClick }: CardData) => {
  const dispatch = useDispatch();

  const handleCardClick = (Product: string) => {
    onCardClick();
    dispatch(setSelectedProductId(Product));
  };

  return (
    <Main>
      <Box>
        {data.map((product: IProduct) => (
          <Column key={product.id} onClick={() => handleCardClick(product.id)}>
            <BoxImage bg={product.productImage || imageFake} />
            <Row>
                <Title>{product.productName}</Title>
                <Subtitle>{product.productValue}</Subtitle>
            </Row>
          </Column>
        ))}
      </Box>
    </Main>
  );
};

export default CardListProduct;
