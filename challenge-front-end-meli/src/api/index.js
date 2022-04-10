import axios from "axios";
import {API_URL_DEVELOP} from '../environment'

export function getItems(search) {
  return axios.get(`${API_URL_DEVELOP}/items`, {params: {q: search}});
}

export function getItemDetails(id) {
  return axios.get(`${API_URL_DEVELOP}/items/${id}`);
}
