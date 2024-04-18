'use client'

import React from "react";

import { useAppSelector } from "@/hooks/useStore";
import { RootState } from "@/redux/store";
import { Cliente } from "@/types/cliente";


const ClientList = () => {
  const clientes = useAppSelector((state: RootState) => state?.cliente.clientes);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
  {clientes.map((cliente: Cliente) => (
    <li key={cliente.id}>
      <p><strong>Nome:</strong> {cliente.nome}</p>
      <p><strong>CNPJ:</strong> {cliente.cnpj}</p>
      <p><strong>Telefone:</strong> {cliente.telefone}</p>
      <p><strong>CEP:</strong> {cliente.cep}</p>
      <p><strong>Estado:</strong> {cliente.estado}</p>
      <p><strong>Cidade:</strong> {cliente.cidade}</p>
      <p><strong>Bairro:</strong> {cliente.bairro}</p>
      <p><strong>Endereço:</strong> {cliente.endereco}</p>
      <p><strong>Número:</strong> {cliente.numero}</p>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ClientList;
