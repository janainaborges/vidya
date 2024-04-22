"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Column, Footer, Form, Label, Row } from "../styles";
import { useAppDispatch } from "@/hooks/useStore";
import { setProduct } from "@/redux/reducers/slice/productSlice";
import InputFieldComponent from "@/components/Inputs/InputFieldComponent";
import InputAreaCompoment from "@/components/Inputs/InputAreaComponent";
import InputImages from "@/components/Inputs/InputImages";
import ButtonCart from "@/components/Buttons/ButtonCart";

const schema = Yup.object().shape({
  productName: Yup.string().required("Nome é obrigatório"),
  productValue: Yup.string().required("Nome é obrigatório"),
  productImage: Yup.string().required("Nome é obrigatório"),
  productDescript: Yup.string().required("Nome é obrigatório"),
});
const ProductForm = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setProduct(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <Label>Nome do Produto</Label>
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>

        {/* {errors.productName && <span>Nome do Produto é obrigatório</span>} */}
        <Column>
          <Label>Valor do Produto</Label>
          <Controller
            name="productValue"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent type="number"{...field} />}
          />
        </Column>
      </Row>

      {/* {errors.productValue && <span>Valor do Produto é obrigatório</span>} */}
      <Column>
        <Label>Descrição:</Label>
        <Controller
          name="productDescript"
          control={control}
          defaultValue=""
          render={({ field }) => <InputAreaCompoment {...field} />}
        />
      </Column>

      <Column>
        <Label>Imagem do Produto:</Label>
        <Controller
          name="productImage"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type={"file"} {...field} />
          )}
        />
      </Column>

      {/* {errors.productImage && <span>Imagem do Produto é obrigatória</span>} */}
      <Footer>
      <ButtonCart type="submit" size="large" text={"Salvar"} filter={false} />
      </Footer>
    </Form>
  );
};

export default ProductForm;
