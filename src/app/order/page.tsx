"use client"
import ModalInfo from "@/components/Modal/ModalInfo";
import { ChangeEvent, Fragment, useState } from "react";
import { Container, Header } from "../styles";
import InputSearch from "@/components/Inputs/InputSearch";
import { CiSearch } from "react-icons/ci";
import ButtonCart from "@/components/Buttons/ButtonCart";
import { GoPlus } from "react-icons/go";
import OrderForm from "@/components/features/order/orderForm";

export default function Order(){
    const [search, setSearch] = useState("");
  
    const [isOpenForm, setIsOpenForm] = useState(false);
  
    const children = {
      form: <OrderForm/>,
    };
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
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
              text={"Novo Produto"}
              filter={false}
              size={"large"}
            />
          </Header>
        </Container>
        <div>
          <ModalInfo
            isOpen={isOpenForm}
            onClick={() => setIsOpenForm(false)}
            title="Cadrastro de pedido"
          >
            {children.form}
          </ModalInfo>
       
        </div>
      </Fragment>
    );
  }
  