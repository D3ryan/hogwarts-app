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
};

export default StaffService;
