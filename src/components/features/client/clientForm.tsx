"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { setClient } from "@/redux/reducers/slice/clientSlice";
import useZipCode from "@/hooks/useZipCode";
import { useAppDispatch } from "@/hooks/useStore";
import { formatCnpjMask, formatPhone, formatZipCode } from "@/utils/masks";
import { Column, Footer, Form, Label, Row } from "../styles";
import ButtonCart from "@/components/Buttons/ButtonCart";
import InputFieldComponent from "@/components/Inputs/InputFieldComponent";

const schema = Yup.object().shape({
  user: Yup.string().required("Nome é obrigatório"),
  cnpj: Yup.string()
    .required("CNPJ é obrigatório")
    .matches(/^\d{14}$/, "CNPJ deve ter 14 dígitos"),
  telefone: Yup.string()
    .required("Telefone é obrigatório")
    .matches(/^\d{10,11}$/, "Telefone deve ter entre 10 e 11 dígitos"),
  cep: Yup.string().required("CEP é obrigatório"),
  estado: Yup.string().required("Estado é obrigatório"),
  cidade: Yup.string().required("Cidade é obrigatória"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  endereco: Yup.string().required("Endereço é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
});


const ClienteForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { searchByZipCode, results } = useZipCode();

  const onSubmit = (data: any) => {
    dispatch(setClient(data));
  };

  const handleCpfMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mask = formatCnpjMask(event.target.value);
    setValue("cnpj", mask);
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mask = formatPhone(event.target.value);
    setValue("telefone", mask);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatZipCode(event.target.value);
    searchByZipCode(formattedValue);
  };

  if (results) {
      setValue("estado", results.uf);
      setValue("cidade", results.localidade);
      setValue("bairro", results.bairro);
      setValue("endereco", results.logradouro);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <Label>Nome</Label>
          <Controller
            name="user"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>
        <Column>
          <Label>CNPJ</Label>
          <Controller
            name="cnpj"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputFieldComponent
                {...field}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleCpfMask(e);
                }}
              />
            )}
          />
        </Column>
        <Column>
          <Label>Telefone</Label>
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePhone(e)
            }
            />}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>CEP</Label>
          <Controller
            name="cep"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputFieldComponent
                {...field}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
              />
            )}
          />
        </Column>
        <Column>
          <Label>Estado</Label>
          <Controller
            name="estado"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>
        <Column>
          <Label>Cidade</Label>
          <Controller
            name="cidade"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Bairro</Label>
          <Controller
            name="bairro"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>
        <Column>

        <Label>Endereço</Label>
        <Controller
          name="endereco"
          control={control}
          defaultValue=""
          render={({ field }) => <InputFieldComponent {...field} />}
        />
        </Column>

        <Column>
          <Label>Número</Label>
          <Controller
            name="numero"
            control={control}
            defaultValue=""
            render={({ field }) => <InputFieldComponent {...field} />}
          />
        </Column>
      </Row>
      <Footer>
      <ButtonCart type="submit" size="large" text={"Salvar"} filter={false} />
      </Footer>
    </Form>
  );
};

export default ClienteForm;
