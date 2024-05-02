import axios from "axios";

const baseURL = 'http://52.66.131.80:8080/niit/';

const authAxios = axios.create({
    baseURL: `${baseURL}auth`
});

const couresAxios = axios.create({
    baseURL: `${baseURL}course`
});

const paymentAxios = axios.create({
    baseURL: `${baseURL}payment`
});

const userAxios = axios.create({
    baseURL: `${baseURL}user`
});

const getToken = () => {
    return localStorage.getItem('token');
};

const token = getToken();
if (token) {
    couresAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    userAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    paymentAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export {
    couresAxios,
    userAxios,
    authAxios,
    paymentAxios,
};
