// import React, {useState,Component} from 'react';
// import {CardElement, injectStripe} from 'react-stripe-elements';

// function Payment2({totalCost}) {
//     const [name,setName] = useState("")
//     const [complete, setComplete] = useState(false)
//     const [amount, setAmount] = useState(totalCost)

//     function handleChange (e){
//         setName(e.target.value)
//     }

//     async function handleSubmit(e)  {
//         e.preventDefault()
  
//         let token = await this.props.stripe.createToken({name:name})
//         let charge = {
//             token: token.token.id
//         }
//         let response = await fetch('', {
//         method: 'POST',
//         headers: {
//           "Content-Type": "text/plain"
//         },
//         body: token.id + "&" + amount
//       })
//       if (response.ok){ console.log("Purchase complete!")
//       setComplete(true)
//     }
//     }

//     return (
//         <main>
//         <form onSubmit={(e) => handleSubmit(e) }>
//           <input
//             type="text"
//             value={name}
//             name="name"
//             placeholder="Full Name"
//             onChange={(e) => handleChange(e)}
//           />
//         {/* <CardElement className="cardElement" /> */}
//           <input type="submit" value="Purchase" className="btn-item"/>
//         </form>
//       </main>

    
//     )
// }

// export default (Payment2)
