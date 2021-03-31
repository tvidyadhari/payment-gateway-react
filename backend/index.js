const express = require("express")
const app = express();
const path = require("path");
const Razorpay = require("razorpay");

app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_3WbPzeexWFf3Wx",
  key_secret: "rmqFwXefGDhqePUbLLjIBRtL",
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.svg"));
});

app.post("/post-payment", (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, "index.html"))
})


app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 6969;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: "asdhaskhd",
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => console.log("listening on 8000"));

async function getOrder() {
  try {
    const __response = await fetch("");
    const response = await _response.json();
  } catch (err) {
    console.log(err);
  }
}
