import { ChangeEvent, Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Footer, Form, RowList } from "../styles";
import ButtonCart from "@/components/Buttons/ButtonCart";
import { RootState } from "@/redux/store";
import { addOrder } from "@/redux/reducers/slice/orderSlice";
import SelectSimple from "@/components/Inputs/SelectSimple";
import InputSearch from "@/components/Inputs/InputSearch";
import { CiSearch } from "react-icons/ci";
import CardValue from "@/components/Cards/CardValue";
import { Main } from "@/components/Cards/CardList.styles";

const schema = Yup.object().shape({
  client: Yup.string().required("Cliente é obrigatório"),
});

const OrderForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state: RootState) => state.client.clients);
  const product = useAppSelector((state: RootState) => state.product.products);

  const [search, setSearch] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("oie", data);
    dispatch(addOrder(data));
  };

  const filteredProducts = product.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RowList>
          <Controller
            name="client"
            control={control}
            render={({ field }) => (
              <SelectSimple
                {...field}
                options={clients.map((client: any) => ({
                  value: client.id,
                  label: client.user,
                }))}
                placeholder="Selecionar um cliente"
              />
            )}
          />
          {errors.client && <span>{errors.client.message}</span>}
        </RowList>
        <RowList>
          <InputSearch
            endIcon={<CiSearch />}
            inputValue={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSearchChange(e)
            }
            placeholder="Pesquisar"
            size={"large"}
          />
        </RowList>
        <RowList>
          <CardValue data={filteredProducts} onCardClick={() => search} />
        </RowList>
        <Footer>
          <ButtonCart
            type="submit"
            size="large"
            text={"Salvar"}
            filter={false}
          />
        </Footer>
      </Form>
    </Main>
  );
};

export default OrderForm;
