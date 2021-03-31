import logo from "./logo.svg";
import "./App.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function App() {
  async function showRazorpay() {
    const loaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!loaded) return alert("razorpay failed to load");

    const options = {
      key: "rzp_test_3WbPzeexWFf3Wx",
      amount: "1000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: logo,
      order_id: "order_Gt79aawsKHDM8r",
      callback_url: "http://localhost:8000/post-payment",
      prefill: {
        contact: "7981348615",
        email: "tvidyadhari22@gmail.com"
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={showRazorpay}>Pay Now</button>
      </header>
    </div>
  );
}

export default App;
