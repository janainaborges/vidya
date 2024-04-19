import React from "react";

import {
  Container,
  BoxCenter,
  Title,
  Subtitle,
  CardText,
  Box,
} from "./CardBody.styled";
import { Cliente } from "@/types/cliente";
import { useDispatch } from "react-redux";
import { setSelectedClientId } from "@/redux/reducers/selectedClientIdSlice";

interface CardData {
  data: Cliente[];
  onCardClick: ()=> void
}

const CardBody = ({ data, onCardClick }: CardData) => {
  const dispatch = useDispatch();

  const handleCardClick = (clientId: string) => {
    onCardClick()
    dispatch(setSelectedClientId(clientId));
  };

  return (
    <Box>
      {data.map((client: Cliente) => (
        <Container key={client.id} onClick={() => handleCardClick(client.id)}>
          <CardText>VY</CardText>
          <BoxCenter>
            <Title>{client.nome}</Title>
            <Subtitle>{client.cnpj}</Subtitle>
          </BoxCenter>
        </Container>
      ))}
    </Box>
  );
};

export default CardBody;
