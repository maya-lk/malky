import axios from 'axios';

export default axios.create({
  baseURL: `https://www.watersedge.lk/wp-json/edge_func/v2/`//Rest API URL
});