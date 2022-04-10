const axios = require('axios');
require('dotenv').config()

const API_URL_MELI = process.env.API_URL_MELI;
const instance = axios.create({ baseURL: API_URL_MELI});
instance.defaults.withCredentials = false;
module.exports = instance;