import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import {toast} from 'react-toastify'
function Checkout({roundedTotalCost, indItem}) {
    let total = roundedTotalCost
    toast.configure()
  async  function handleToken(token,addresses){
        // console.log(token,addresses)

     const response =  await axios.post('http://localhost:3000/charges',{
            token,
            indItem,
            total
        });
       const {status} = response
       if (status === 204){
            toast('Success! Check email for details!'
            //{type:'success'}
            )
       }else{
        toast('Something went wrong',
        // {type: 'error'}
        )
       }
    }

    return (
        <div className = "checkout">
            {indItem}<br></br>
            Total Cost:${roundedTotalCost}
            <br></br>
            <br></br>
            <StripeCheckout 
            stripeKey= "pk_test_51IaO1jGHXlKuOp6FfPCXYzUhqWF3xQAFL5WCdsfCM6wmwxUHhznNNXcUxqxs6OvYyUWiyHUyHlm0IV0OG1HQsHke00NnsUNTfD"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={roundedTotalCost * 100}
            name = {indItem}
            />
        </div>
    )
}

export default Checkout
