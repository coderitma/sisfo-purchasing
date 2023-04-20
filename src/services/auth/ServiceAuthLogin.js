import ServiceBaseAPI from "../base/ServiceBaseAPI";

const ServiceAuthLogin = (user) => {
  return new Promise((resolve, reject) => {
    ServiceBaseAPI.post(user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        resolve(response.data.token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default ServiceAuthLogin;
