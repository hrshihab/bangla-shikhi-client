import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
import { AuthContext } from '../../contexts/AuthProvider';

const stripePromise = loadStripe('pk_test_51NbdOwIDOdOy4zdVSU6MsIXsrfhmLBcOpd3MF6vgptXlbjBkiI8e7VdZVjcaWHx9guOPUL8UkRbgoADrgQsU99Ap00Jp2dqBEi');
console.log(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const {user} = useContext(AuthContext)
    const [amount, setAmount] = useState(5);
    console.log(user);

    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (

    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Please support us with a small donation today! </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Every dollar counts and brings us closer to our fundraising goal..</p>
      </div>
   
 
      <p className="text-xl">
        Select Amount :  <strong>
          <select value={amount} onChange={handleAmountChange}>
            <option selected value="5">$5</option>
            <option value="10">$10</option>
            <option value="20">$20</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
          </select>
          
        </strong>
      </p>
      

            <div className='w-full my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                       amount={amount}
                       user={user}
                    />
                </Elements>
            </div>
        </div>
</section>
    );
};

export default Payment;