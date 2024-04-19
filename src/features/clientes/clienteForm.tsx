'use client'

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { setClient } from "@/redux/reducers/clienteSlice";
import useZipCode from "@/hooks/useZipCode";
import { useAppDispatch } from "@/hooks/useStore";
import { formatCnpjMask, formatZipCode } from "@/utils/masks";


const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  cnpj: Yup.string().required("CNPJ é obrigatório"),
  telefone: Yup.string().required("Telefone é obrigatório"),
  cep: Yup.string().required("CEP é obrigatório"),
  estado: Yup.string().required("Estado é obrigatório"),
  cidade: Yup.string().required("Cidade é obrigatória"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  endereco: Yup.string().required("Endereço é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
});


const ClienteForm: React.FC = () => {
  
  const dispatch = useAppDispatch()

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
    console.log("cnpj", mask)
    setValue("cnpj", mask) 
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>CNPJ:</label>
        <Controller
          name="cnpj"
          control={control}
          defaultValue=""
          render={({ field }) => 
          <input {...field} 
          onChange={(e) => {handleCpfMask(e)}}
          />}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>CEP:</label>
        <Controller
          name="cep"
          control={control}
          defaultValue=""
          render={({ field }) => <input 
          {...field} 
          onBlur={(e) => handleInputChange(e)}
          />}
        />
      </div>
      <div>
        <label>Estado:</label>
        <Controller
          name="estado"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Cidade:</label>
        <Controller
          name="cidade"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Bairro:</label>
        <Controller
          name="bairro"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Endereço:</label>
        <Controller
          name="endereco"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Número:</label>
        <Controller
          name="numero"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
};

export default ClienteForm;
function setValue(arg0: string, uf: any) {
  throw new Error("Function not implemented.");
}

function initializeProduct(product: any): any {
  throw new Error("Function not implemented.");
}

