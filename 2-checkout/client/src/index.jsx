import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Shipping from "./components/Shipping.jsx";
import Billing from "./components/Billing.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedOut: false,
      isLoginFormNext: false,
      isShippingFormNext: false,
      isBillingFormNext: false,
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleLoginFormNext = this.handleLoginFormNext.bind(this);
    this.handleShippingFormNext = this.handleShippingFormNext.bind(this);
    this.handleBillingFormNext = this.handleBillingFormNext.bind(this);
  }

  handleCheckoutClick() {
    this.setState({isCheckedOut: !this.state.isCheckedOut});
    // console.log(this.state.isCheckedOut);
  }

  //TODO TOMORROW
  //all three funcs below should "lift state up" to App, so when the
  //last 'next' button is clicked the summary page renders with all the previous info
  //When purchase button is clicked, it should send a post request to the server
  //in server, it will check if the db has the session_id already
    //if not - it will add the info to the database
    //if yes - it will not add the info to the database and will send back a response
              //to the client saying 'heyo, u already got a session_id here bro'

  handleLoginFormNext() {
    this.setState({isLoginFormNext: !this.state.isLoginFormNext});
  }

  handleShippingFormNext() {
    this.setState({isShippingFormNext: !this.state.isShippingFormNext});
  }


  handleBillingFormNext() {
    this.setState({isBillingFormNext: !this.state.isBillingFormNext});
  }

  render() {
    // CLICK CHECKOUT - LOGIN FORM
    let isCheckedOut = this.state.isCheckedOut;
    let loginForm;
    if (isCheckedOut) {
      loginForm = <Login/>;
    }

    //CLICK NEXT ON LOGIN FORM - SHIPPING ADDRESS FORM
    let isLoginFormNext = this.state.isLoginFormNext;
    let shippingAddressForm;
    if (isLoginFormNext) {
      shippingAddressForm = <Shipping/>
    }

    //CLICK NEXT ON SHIPPING FORM - BILLING FORM
    let isShippingFormNext = this.state.isShippingFormNext;
    let billingForm;
    if (isShippingFormNext) {
      billingForm = <Billing/>
    }

    //CLICK NEXT ON BILLING FORM - CHECKOUTPAGE
    let isBillingFormNext = this.state.isBillingFormNext;
    let lastCheckoutPage;
    if (isBillingFormNext) {
      lastCheckoutPage =
      <div>
        <h2> CHECKOUT PAGE - SUMMARY </h2>
      </div>
    }

    return (

      <div>
        <h1>Amazon</h1>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
        <button onClick={this.handleCheckoutClick}>Checkout</button>
        {loginForm}
        <button onClick={this.handleLoginFormNext}>Next</button>
        {shippingAddressForm}
        <button onClick={this.handleShippingFormNext}>Next</button>
        {billingForm}
        <button onClick={this.handleBillingFormNext}>Next</button>
        {lastCheckoutPage}
        <button>Purchase</button>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
