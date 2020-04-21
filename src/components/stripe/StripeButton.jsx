import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/refine-logo.png';

const StripeButton = ({ price }) => {
  const priceInCent = price * 100;
  const publishableKey = 'pk_test_2dS6LunL71FlSuRqeJU14RuF00TF6VuBIA';

  // handler for token callback - to process actual payment, pass this to the backend
  const handleToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
      currency='CAD'
      stripeKey={publishableKey}
      //   email='info@vidhub.co'
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      zipCode={false}
      alipay // accept Alipay (default false)
      bitcoin // accept Bitcoins (default false)
      allowRememberMe // "Remember Me" option (default true)
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
