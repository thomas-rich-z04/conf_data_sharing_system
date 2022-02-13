import fetch from "isomorphic-fetch";
import { API } from "../config/config";

export const uploadCard = (card) => {
  return fetch(`${API}/confidential/uploadCard`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};


export const getReceivers = () => {
  return fetch(`${API}/confidential/receivers`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};