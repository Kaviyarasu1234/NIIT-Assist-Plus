import { authAxios } from "../axios/Axios";

class AuthAxios {

    signup(user) {
        return  authAxios.post("register", user, {
            headers: { "Content-Type": "application/json", },
        });
    }

    login(user) {
        return  authAxios.post("login", user, {
            headers: { "Content-Type": "application/json", },
        });
    }

}

const AuthServices = new AuthAxios();
export {
    AuthServices,
};