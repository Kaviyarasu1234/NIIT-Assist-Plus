import { paymentAxios } from "../axios/Axios";

class PaymentAxios {

    createPayment(payment) {
        return  paymentAxios.post("create", payment, {
            headers: { "Content-Type": "application/json", },
        });
    }

    getAllPayments() {
        return paymentAxios.get("get/all");
    }

    getPaymentById(cid){
        return paymentAxios.get(`get/${cid}`);
    }

}

const PaymentServices = new PaymentAxios();
export {
    PaymentServices,
};