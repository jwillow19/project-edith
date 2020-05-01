const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SK_TEST);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // enable cross-origin-requests from server to client

// Serve build if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('/', (req, res) => {
  console.log(process.env.NODE_ENV);
  res.send(`API Running loaded`);
});

// // @REST    get request to all routes - send index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// @REST    post request to payment route
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'cad',
  };
  // respond to client based on StripeAPI res or err
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr }); // payment error
    } else {
      res.status(200).send({ succes: stripeRes }); //payment success
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
