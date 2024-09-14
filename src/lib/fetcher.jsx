const BASE_URL = "https://bnwdxdujgzrzgtfkysmy.supabase.co/rest/v1/";

const apitoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJud2R4ZHVqZ3pyemd0Zmt5c215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjUxMDIsImV4cCI6MjA0MTgwMTEwMn0.D0nuB2PYrkIVuIsz3R2JqJLJYHmr8gXChAiZrTGMiHk";

export function get(endpoint) {
  return fetch(BASE_URL + endpoint, {
    headers: {
      apikey: apitoken,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function callApi(method, endpoint, data) {
  return fetch(BASE_URL + endpoint, {
    method: method,
    headers: {
      apikey: apitoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
