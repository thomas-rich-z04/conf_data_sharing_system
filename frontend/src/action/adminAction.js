import fetch from "isomorphic-fetch";
import { API } from "../config/config";

export const getReceiversWithCards = () => {
  return fetch(`${API}/confidential/receiversWithCards`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
