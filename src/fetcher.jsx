const apikey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJud2R4ZHVqZ3pyemd0Zmt5c215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjUxMDIsImV4cCI6MjA0MTgwMTEwMn0.D0nuB2PYrkIVuIsz3R2JqJLJYHmr8gXChAiZrTGMiHk";

const BASE_URL = "https://bnwdxdujgzrzgtfkysmy.supabase.co/rest/v1/";

export function get(endpoint) {
    return fetch(BASE_URL + endpoint, {
        headers: {
            apikey,
        },
    }).then((response) => response.json());
}

export function callApi(method, endpoint, data) {
    return fetch(BASE_URL + endpoint, {
        method,
        headers: {
            apikey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}
