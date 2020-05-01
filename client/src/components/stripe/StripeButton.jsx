import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/refine-logo.png';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceInCent = price * 100;
  const publishableKey = 'pk_test_2dS6LunL71FlSuRqeJU14RuF00TF6VuBIA';
  console.log(typeof priceInCent);
  // @handler handleToken send payment post-req to backend
  const handleToken = (token) => {
    console.log(token);
    // axios post-req to backend with payment information
    axios({
      url: 'http://localhost:5000/payment',
      method: 'post',
      data: {
        amount: priceInCent,
        token,
      },
    })
      .then((respsonse) => {
        alert('Payment Success');
      })
      .catch((error) => {
        console.log('Payment Error: ', error.response);
        alert(`Issue with payment.`);
      });
  };

  return (
    <StripeCheckout
      name='Edith Eyewear Ltd.' // the pop-in header title
      description={`Your total is $${price}`} // the pop-in header subtitle
      image={logo} // the pop-in header image (default none)
      //   ComponentClass='div'
      label='Pay Now'
      panelLabel='Pay Now' // prepended to the amount in the bottom pay button
      amount={priceInCent} // cents
      stripeKey={publishableKey}
      //   email='info@vidhub.co'
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      token={handleToken} // submit callback
      //   opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
      //   closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      reconfigureOnUpdate={false}
      triggerEvent='onClick'
    />
  );
};

export default StripeButton;
