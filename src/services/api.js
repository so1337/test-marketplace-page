
import request from 'request-promise';
// because on provided API url there was missing CORS header - I'll use proxy
const apiBase = 'https://cors-anywhere.herokuapp.com/https://1880276d-e839-4ad5-b23f-195232ef296d.mock.pstmn.io/api/v2/';
const rp = request.defaults({
  baseUrl: apiBase,
  timeout: 10000,
  json: true,
});

export function getItems() { return rp('influencers/campaigns'); }
