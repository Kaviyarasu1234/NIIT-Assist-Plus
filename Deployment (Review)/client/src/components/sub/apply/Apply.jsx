// Apply.jsx
import { useParams } from 'react-router-dom';
import './Apply.scss';
import { CourseServices } from '../../../library/services/CourseServices';
import { useEffect, useState } from 'react';

import { razorpayConfig } from '../../../PaymentConfig'
function Apply() {
    const { id } = useParams();
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            CourseServices.getCourseById(id)
                .then((res) => {
                    setAmount(res.data.amount);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching course details:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending the amount to a payment gateway
        console.log('Amount to pay:', amount);
        // Example: You can redirect to a payment gateway or trigger a payment process
        
    }
return (
    <div className="apply-container">
        <h2>Apply for Course</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount to Pay:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={() => { }}
                        disabled
                        required
                    />
                </div>
                <button type="submit">Pay Now</button>
            </form>
        )}
    </div>
);

}

export default Apply;
