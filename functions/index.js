const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HX72EEAWfO2Idpg93yhYrZoU5CNyEKQOpLZfTEeCRAbik76Rhb7W5ojzhBKrpqBNB47oMt78ql8DvLM7ALYsvCn00AiEVTmCY"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Success"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "IDR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// Test
// http://localhost:5001/app-ed93a/us-central1/api
