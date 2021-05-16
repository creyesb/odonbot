import { basePath, apiVersion } from "./config";
//import {} from "./auth";
export function createChatAPI(data) {
  const url = `${basePath}/${apiVersion}/createChat`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.chat) {
        return {
          status: 200,
          message: "Chat creado con éxito",
        };
      }
      return {
        ok: false,
        message: result.message,
      };
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}
