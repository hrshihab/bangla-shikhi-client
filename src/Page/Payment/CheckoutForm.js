import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ amount,user }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

 console.log(user);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ amount }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                amount,
                transactionId: paymentIntent.id,
                email:user?.email
               
            }
            fetch('http://localhost:5000/donates', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    //authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);


    }
    <div class="space-y-8 lg:grid    lg:space-y-0">
    {/* <!-- Pricing Card --> */}


</div>

    return (
      <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      
      <div class="flex justify-left items-baseline my-4">
          <span class="mr-2 text-xl ">Payment Details: </span>
      </div>
      {/* <!-- List --> */}
     
  
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#808080'
                                ,
                                '::placeholder': {
                                    color: '#707070',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='text-white bg-primary-600 w-full my-5 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
       </div>
    );
};

export default CheckoutForm;