import axios from "axios";
// this base url will fetch 30 randomly generated users in one request using the results parameter.
const BASEURL = "https://randomuser.me/api/?results=30";

// Export an object containing methods we'll use for accessing the Random User API
export default {
  getEmployees: function () {
    return axios.get(BASEURL);
  },
};
