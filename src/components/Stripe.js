// import React, { Component } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import stripe from './stripeKey';
// import axios from 'axios';
// import Stripe from './Stripe.css'




// class Stripe extends Component {
//   onToken = (token) => {
//     token.card = void 0;
//     console.log('token', token);
//     axios.post('http://localhost:3005/api/payment', { token, amount: 100 } ).then(response => {
//       alert('we are in business')
//     });
//   }

//   render() {
//     return (
//       <div className="stripe">
//         <StripeCheckout
//           token={this.onToken}
//           stripeKey={ stripe.pub_key }
//           amount={1000}
//         />
//       </div>
//     );
//   }
// }

// export default Stripe;