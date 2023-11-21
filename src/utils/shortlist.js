import axios from "axios";

const shortlist = (id) => {
  const reqURL = import.meta.env.VITE_BACKEND_URL + "/shortlisted/" + id;
  return axios
    .post(reqURL)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data.satus);
        return res.data.satus;
      }
    })
    .catch((el) => {
      console.log(el);
      return undefined;
    });
};

export default shortlist;