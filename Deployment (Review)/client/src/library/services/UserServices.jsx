import { paymentAxios, userAxios } from "../axios/Axios";

class UserAxios {

    createUser(user) {
        return  userAxios.post("create", user, {
            headers: { "Content-Type": "application/json", },
        });
    }

    getAllUsers() {
        return userAxios.get("all");
    }

    getAllPayments() {
        return paymentAxios.get("all");
    }

    getUserById(cid){
        return userAxios.get(`get/${cid}`);
    }

    updateUser(cid,shortfact){
        return userAxios.put(`update/${cid}`,shortfact);
    }

    deleteUser(cid){
        return userAxios.delete(`delete/${cid}`);
    }
}

const UserServices = new UserAxios();
export {
    UserServices,
};