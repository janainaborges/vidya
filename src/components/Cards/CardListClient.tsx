import React from "react";

import {
  Container,
  BoxCenter,
  Title,
  Subtitle,
  CardText,
  Box,
  Main,
} from "./CardList.styles";
import { IClient } from "@/types/client.types";
import { useDispatch } from "react-redux";
import { setSelectedClientId } from "@/redux/reducers/selectors/selectedClientSlice";

interface CardData {
  data: IClient[];
  onCardClick: () => void;
}

const CardListClient = ({ data, onCardClick }: CardData) => {
  const dispatch = useDispatch();

  const handleCardClick = (clientId: string) => {
    onCardClick();
    dispatch(setSelectedClientId(clientId));
  };

  return (
    <Main>
      <Box>
        {data.map((client: IClient) => (
          <Container key={client.id} onClick={() => handleCardClick(client.id)}>
            <CardText>VY</CardText>
            <BoxCenter>
              <Title>{client.user}</Title>
              <Subtitle>{client.cnpj}</Subtitle>
            </BoxCenter>
          </Container>
        ))}
      </Box>
    </Main>
  );
};

export default CardListClient;
