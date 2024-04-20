"use client";
import ButtonCart from "@/components/Buttons/ButtonCart";
import CardBody from "@/components/Cards/CardBody";
import InputSearch from "@/components/Inputs/InputSearch";
import ModalInfo from "@/components/Modal/ModalInfo";
import ClienteForm from "@/features/clientes/clienteForm";
import ClientList from "@/features/clientes/clienteList";

import { useAppSelector } from "@/hooks/useStore";
import { RootState } from "@/redux/store";
import { ChangeEvent, Fragment, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { Container, Header } from "./styles";
import { GoPlus } from "react-icons/go";

const data = [
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
  { string: "JS", name: "vydia", cnpj: "0000.0.00" },
];
export default function Client() {
  const client = useAppSelector((state: RootState) => state.client.clients);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  console.log(isOpenForm)

  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredClients = client.filter((client) =>
    client.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <Container>
        <Header>
          <InputSearch
            endIcon={<CiSearch />}
            inputValue={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchChange(e)}
            placeholder="Pesquisar"
            size={"large"}
          />
          <ButtonCart
            onClick={() => setIsOpenForm(!isOpenForm)}
            icon={GoPlus}
            type="button"
            text={"Novo Pedido"}
            filter={false}
            size={"large"}
          />
        </Header>
        <CardBody
          data={filteredClients}
          onCardClick={() => setIsOpenList(!isOpenList)}
        />
      </Container>

      <div>
        <ModalInfo
          isOpen={isOpenForm}
          onClick={() => setIsOpenForm(false)}
          // eslint-disable-next-line react/no-children-prop
          children={<ClienteForm />}
        />
        <ModalInfo
          isOpen={isOpenList}
          onClick={() => setIsOpenList(false)}
          // eslint-disable-next-line react/no-children-prop
          children={<ClientList />}
        />
      </div>
    </Fragment>
  );
}
