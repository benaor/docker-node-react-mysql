import axios from "axios";

function findAll() {
  return axios
    .get("http://localhost:8080/products")
    .then((response) => response.data.result);
}

export default {
  findAll
}
  
