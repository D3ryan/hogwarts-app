import { api } from "./axiosSetup";
const API_URL = "/students";
// CADA QUE SE LOGUEA O SE REGISTRA UN NUEVO USUARIO, SE DEBE REFRESCAR EL TOKEN Y GUARDARLO EN EL LOCALSTORAGE COMO 'x-access-token'

const StudentService = {
  getStudents: function () {
    const url = API_URL;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return api.get(url, config);
  },
};

export default StudentService;
