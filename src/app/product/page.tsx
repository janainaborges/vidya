"use client";

import { ChangeEvent, Fragment, useState } from "react";
import { Container, Header } from "../styles";
import InputSearch from "@/components/Inputs/InputSearch";
import { CiSearch } from "react-icons/ci";
import ButtonCart from "@/components/Buttons/ButtonCart";
import ModalInfo from "@/components/Modal/ModalInfo";
import { GoPlus } from "react-icons/go";
import ProductForm from "@/components/features/product/productForm";
import CardListProduct from "@/components/Cards/CardListProduct";
import { useAppSelector } from "@/hooks/useStore";
import { RootState } from "@/redux/store";
import ProductList from "@/components/features/product/productList";

export default function Product() {
  const product = useAppSelector((state: RootState) => state.product.products);
  const [search, setSearch] = useState("");

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  const children = {
    form: <ProductForm />,
    list: <ProductList/>,
  };

  const filteredProducts = product.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );
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
        <CardListProduct
          data={filteredProducts}
          onCardClick={() => setIsOpenList(!isOpenList)}
        />
      </Container>
      <div>
        <ModalInfo
          isOpen={isOpenForm}
          onClick={() => setIsOpenForm(false)}
          title="Cadastrar produto"
        >
          {children.form}
        </ModalInfo>
        <ModalInfo  title="Detalhes do produto" isOpen={isOpenList} onClick={() => setIsOpenList(false)}>
          {children.list}
        </ModalInfo>
      </div>
    </Fragment>
  );
}
