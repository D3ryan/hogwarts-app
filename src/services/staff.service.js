import { api } from "./axiosSetup";
const API_URL = "/staff";

const StaffService = {
  getStaff: function () {
    const url = API_URL;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return api.get(url, config);
  },
  addStaff: async function (character) {
    try {
      const url = API_URL;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await api.get("/last-id", config);
      const nextId = response.data.id + 1;
      await api.post("/last-id", {id: nextId}, config);
      character.id = nextId;
      const data = character;

      return api.post(url, data, config)
    } catch (error) {
      throw error
    }
  }
};

export default StaffService;
