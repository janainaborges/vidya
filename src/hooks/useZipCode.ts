import { zipCode } from "@/services/zipCode";
import { SetStateAction, useEffect, useState } from "react";

const useZipCode = () => {
  const [streetName, setStreetName] = useState("");
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchZipCode = async () => {
      try {
        resetStates();
        const data = await zipCode(streetName);
        if (data && data.cep) {
          setResults(data);
        } else {
          setError("Não foi possível encontrar um CEP para esta rua.");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setError("Erro ao buscar CEP");
      }
    };

    if (streetName) {
      fetchZipCode();
    }
  }, [streetName]);

  const resetStates = () => {
    setResults([]);
    setError("");
  };

  const searchByZipCode = (code: SetStateAction<string>) => {
    setStreetName(code);
  };

  return {
    searchByZipCode,
    results,
    error,
  };
};

export default useZipCode;
