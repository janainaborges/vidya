import axios from "axios";

const apiUrl = 'https://viacep.com.br'
const ApiFetchCEP = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
  },
//   timeout: 100 
});

export default ApiFetchCEP;