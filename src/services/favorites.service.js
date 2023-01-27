import { api } from "./axiosSetup";
const API_URL = "/favorites";

const FavoritesService = {
  getFavorites: function () {
    const url = API_URL;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return api.get(url, config);
  },

  AddFavorite: function (character) {
    const url = API_URL;
    const data = character;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return api.post(url, data, config);
  },

  DeleteFavorite: function (characterId) {
    const url = API_URL + "/" + characterId;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return api.delete(url, config);
  },
};

export default FavoritesService;
