import React, { useEffect, useState } from 'react';
import { useFunctions } from '../../../../library/Function/Function';
import { CourseServices } from '../../../../library/services/CourseServices';
import { useNavigate, useParams } from 'react-router-dom';
import './View.scss';
import { PaymentServices } from '../../../../library/services/PaymentServices';
import {razorpayConfig} from '../../../../PaymentConfig'
function View() {
    const { course, setCourse, url, payment, setPayment } = useFunctions();
    const navigate = useNavigate();
    const { id } = useParams();

    const [image, setImage] = useState(null);
    const [amount, setAmount] = useState(0);
    const [pay, setPay] = useState(true);
    const [mes, setMes] = useState("Payment Need to be done");
    const makePay = () =>{
        const options = {
            key: razorpayConfig.key,
            key_secret: razorpayConfig.key_secret,
            amount: course.amount * 100,
            currency: razorpayConfig.currency,
            name: razorpayConfig.name,
            handler: (res) => {
                console.log(res.razorpay_payment_id);
                setPayment({
                    courseId: id,
                    studentId: localStorage.getItem('uid'),
                    amount: 0,
                    mode:"Gpay",
                    status: "completed",
                })
                console.log(payment);
                PaymentServices.createPayment({
                    status: "COMPLETED",
                    amount: amount,
                    mode: "upi",
                    studentId: localStorage.getItem('uid'),
                    courseId: id
                })
                .then((res) =>{
                    console.log(res.data);
                    setMes("Payment done with the id: " + res.data.pid);
                })
            },
            prefill: {
                name: "Paranthaman L",
                email: "paranthamanl2004@gmail.com",
                contact: 9626474259
            },
            notes: {
                address: "",
            },
            theme: {
                color: '#183837'
            }
        };
        const pay = new window.Razorpay(options);
        pay.open();
    }
    const handlePay = () =>{
        setPay(!pay);
    }
    useEffect(() => {
        if (id) {
            CourseServices.getCourseById(id)
                .then((res) => {
                    console.log(res.data);
                    setCourse(res.data);
                    setImage(res.data.image);
                    setAmount(res.data.amount)
                })
                .catch((error) => {
                    console.error('Error fetching course details:', error);
                });
        }
    }, [id, pay]);

    return (
        <>
            <div className="add-form view-form">
            <div className="image">
                    {url ? <img src={image} alt="Preview" /> : <img src={`https://lh3.googleusercontent.com/d/${course.image}`} alt={course.name} />
                }
                        {/* <div className='select'>
                            {url ? null : <p>PLEASE SELECT YOUR IMAGE</p>}
                        </div> */}
                        {/* <div className='hint'>
                            {url ? null : <p>The Image is not uploaded Yet</p>}
                        </div> */}
                </div>
                {pay ?
                    <div className="texts">
                        <div className='text view-text'>
                            <label>Name of the Course:</label>
                            <div>{course.name}</div>
                        </div>
                        <div className='text view-text description-text'>
                            <label>Description:</label>
                            <div>{course.description}</div>
                        </div>
                        <div className='text view-text'>
                            <label>Genre:</label>
                            <div>{course.genre}</div>
                        </div>
                        <div className='text view-text'>
                            <label>Amount for the Course:</label>
                            <div>{course.amount}</div>
                        </div>
                        <div className='text view-text'>
                            <label>Duration Of The Course:</label>
                            <div>{course.duration}</div>
                        </div>
                        <div className='text view-text'>
                            <label>Instructor Of The Course:</label>
                            <div>{course.instructor}</div>
                        </div>
                        <div className='submit'>
                            <button onClick={()=>{handlePay()}}>APPLY</button>
                        </div>
                    </div>
                    :
                    <div className="texts">
                        <div className='text view-text'>
                            <label>Amount to be Paid:</label>
                            <div>{course.amount}</div>
                        </div>
                        <div className='submit'>
                            <button onClick={()=>{makePay()}}>PAY NOW</button>
                        </div>
                        <div className='submit'>
                            <button onClick={()=>{handlePay()}}>BACK</button>
                        </div>
                        <div className='text view-text'>
                            <label>Payment Status:</label>
                            <div>{mes}</div>
                        </div>
                    </div>
                    }
                </div>
        </>
    );
}

export default View;