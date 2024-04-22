import React from "react";

import {
  Container,
  BoxCenter,
  Title,
  Subtitle,
  Box,
  Main,
  BoxImages,
  Row,
} from "./CardList.styles";
import { useDispatch } from "react-redux";
import { setSelectedProductId } from "@/redux/reducers/selectors/selectProductSlice";
import { IProduct } from "@/types/product.types";
import imageFake from "../../assets/png/rectangle.png";
import { Form } from "../features/styles";

interface CardData {
  data: IProduct[];
  onCardClick: () => void;
}

const CardValue = ({ data, onCardClick }: CardData) => {
  const dispatch = useDispatch();

  const handleCardClick = (Product: string) => {
    onCardClick();
    dispatch(setSelectedProductId(Product));
  };

  return (
      <Main>
        {data.map((product: IProduct) => (
          <Container key={product.id} onClick={() => handleCardClick(product.id)}>
            <BoxImages bg={product.productImage || imageFake} />
            <Row>
              <BoxCenter>
                <Title>{product.productName}</Title>
                <Subtitle>{product.productValue}</Subtitle>
              </BoxCenter>
            </Row>
          </Container>
        ))}
      </Main>
  );
};

export default CardValue;
