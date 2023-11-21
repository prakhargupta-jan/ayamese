import axios from "axios";

const shortlist = (id) => {
  const reqURL = import.meta.env.VITE_BACKEND_URL + "/shortlisted/" + id;
  return axios
    .post(reqURL)
    .then((res) => {
      if (res.status === 200) {
        return res.data.satus;
      }
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};

export default shortlist;
