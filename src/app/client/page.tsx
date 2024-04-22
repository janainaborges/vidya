"use client";
import ButtonCart from "@/components/Buttons/ButtonCart";
import InputSearch from "@/components/Inputs/InputSearch";
import ModalInfo from "@/components/Modal/ModalInfo";
import ClienteForm from "@/components/features/client/clientForm";
import ClientList from "@/components/features/client/clientList";

import { useAppSelector } from "@/hooks/useStore";
import { RootState } from "@/redux/store";
import { ChangeEvent, Fragment, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Container, Header } from "../styles";
import { GoPlus } from "react-icons/go";
import CardListClient from "@/components/Cards/CardListClient";

export default function Client() {
  const client = useAppSelector((state: RootState) => state.client.clients);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  console.log(isOpenForm);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredClients = client.filter((client) =>
    client.user.toLowerCase().includes(search.toLowerCase())
  );

  const children = {
    form: <ClienteForm />,
    list: <ClientList />,
  };

  return (
    <Fragment>
      <Container>
        <Header>
          <InputSearch
            endIcon={<CiSearch />}
            inputValue={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSearchChange(e)
            }
            placeholder="Pesquisar"
            size={"large"}
          />
          <ButtonCart
            onClick={() => setIsOpenForm(!isOpenForm)}
            icon={GoPlus}
            type="button"
            text={"Novo Cliente"}
            filter={false}
            size={"large"}
          />
        </Header>
        <CardListClient
          data={filteredClients}
          onCardClick={() => setIsOpenList(!isOpenList)}
        />
      </Container>

      <div>
        <ModalInfo isOpen={isOpenForm} onClick={() => setIsOpenForm(false)} title="Cadastrar Cliente">
          {children.form}
        </ModalInfo>
        <ModalInfo isOpen={isOpenList} onClick={() => setIsOpenList(false)}>
          {children.list}
        </ModalInfo>
      </div>
    </Fragment>
  );
}
