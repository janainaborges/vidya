import ApiFetchCEP from "./api";

async function zipCode(code: any) {
  const { data } = await ApiFetchCEP.get(`/ws/${code}/json/`);

  return data;
}

export { zipCode };