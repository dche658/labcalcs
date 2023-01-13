import axios from "axios";

function getBaseURL() {
  var host = window.location.host;
  return "http://"+host+"/koios3/api"
}

export default axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-type": "application/json"
  }
});
