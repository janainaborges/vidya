"use client";
import ButtonCart from "@/components/Buttons/ButtonCart";
import CardBody from "@/components/Cards/CardBody";
import ModalInfo from "@/components/Modal/ModalInfo";

import ClientList from "@/features/clientes/clienteList";
import { useAppSelector } from "@/hooks/useStore";
import { RootState } from "@/redux/store";
import { useState } from "react";

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
  const clientes = useAppSelector((state: RootState) => state.cliente.clientes);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <ButtonCart
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          text={"Modal"}
          filter={false}
        />
        {/* <InputSearch
            startIcon={<SlLocationPin style={{ color: "blue" }} />}
            endIcon={<CiSearch onClick={() => setSearchTerm("")} />}
            inputValue={inputValue}
            onChange={() => handleSearchChange}
            placeholder="Busque por atração"
          /> */}

        {/* <ClienteForm /> */}
        <CardBody data={data || clientes} />
        <ClientList />
      </div>

      <div>
        <ModalInfo
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          // eslint-disable-next-line react/no-children-prop
          children={"oie"}
        />
      </div>
    </>
  );
}
