import React from "react";

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      creditcard: '',
      expiration: '',
      CVV: '',
      billingZipCode: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);
    this.setState(
      {
        creditcard: event.target[0].value,
        expiration: event.target[1].value,
        CVV: event.target[2].value,
        billingZipCode: event.target[3].value,
        isDisplayed: !this.state.isDisplayed
      }
    );
  }

  render() {
    let isDisplayed = this.state.isDisplayed;
    let output;
    if (!isDisplayed) {
      output =
        <form onSubmit={this.onSubmit}>
          Credit card:
          <input type="text" placeholder="ex: 12345678912345"></input>
          Expiration date:
          <input type="text" placeholder="ex: 03/22 "></input>
          CVV:
          <input type="text" placeholder="ex: 987"></input>
          Billing zip-code:
          <input type="text" placeholder="ex: 94112"></input>
          <input type="submit" value="submit"/>
        </form>
    } else {
      output =
      <div>
        Billing Information Submitted!
      </div>
    }

    return(
      <div>
        <h2>Billing</h2>
        {output}
      </div>
    )

  }
}


export default Billing;