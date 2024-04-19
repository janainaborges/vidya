import React, { Fragment } from "react";

import {
  Container,
  BoxCenter,
  Title,
  Subtitle,
  CardText,
  Box,
} from "./CardBody.styled";

interface CardData {
  data: {
    string: string;
    name: string;
    cnpj: string;
  }[];
}

const CardBody = ({ data }: CardData) => {
  return (
    <Box>
      {data.map((e, index) => (
        <Container key={index}>
          <CardText>{e.string}</CardText>
          <BoxCenter>
            <Title>{e.name}</Title>
            <Subtitle>{e.cnpj}</Subtitle>
          </BoxCenter>
        </Container>
      ))}
    </Box>
  );
};

export default CardBody;
