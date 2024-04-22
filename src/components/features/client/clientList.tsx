import React from "react";

import { Column, Form, Label, Row } from "../styles";
import { useClientSelect } from "@/hooks/useClientSelect";

const ClientList: React.FC = () => {
  const client = useClientSelect();

  if (!client) {
    return
  }

  return (
    <Form>
      <Row>
        <Column>
          <Label>CNPJ:</Label> {client.cnpj}
        </Column>
        <Column>
          <Label>Telefone:</Label> {client.telefone}
        </Column>
        <Column>
          <Label>CEP:</Label> {client.cep}
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>Estado:</Label> {client.estado}
        </Column>
        <Column>
          <Label>Cidade:</Label> {client.cidade}
        </Column>
        <Column>
          <Label>Bairro:</Label> {client.bairro}
        </Column>
      </Row>
      
      <Row>
        <Column>
          <Label>Endereço:</Label> {client.endereco}
        </Column>
        <Column>
          <Label>Número:</Label> {client.numero}
        </Column>
      </Row>
    </Form>
  );
};

export default ClientList;
