import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);
    // console.log(event.target[4].value);
    // console.log(event.target[5].value);

    this.setState({
      line1: event.target[0].value,
      line2: event.target[1].value,
      city: event.target[2].value,
      state: event.target[3].value,
      zip: event.target[4].value,
      phone: event.target[5].value,
      isDisplayed: !this.state.isDisplayed
    })
  }

  render() {
    let isDisplayed = this.state.isDisplayed;
    let output;
    if (!isDisplayed) {
      output =
          <form onSubmit={this.onSubmit}>
            line 1:
            <input type="text" placeholder="ex: 1234 Mission St"></input>
            line 2:
            <input type="text" placeholder="ex: APT 1"></input>
            City:
            <input type="text" placeholder="ex: San Francisco"></input>
            State:
            <input type="text" placeholder="ex: California"></input>
            Zip-code:
            <input type="text" placeholder="ex: 94112"></input>
            Phone Number:
            <input type="text" placeholder="ex: (415) 123-4567"></input>
            <input type="submit" value="submit"/>
          </form>

    } else {
      output =
      <div>
        Shipping Address Submitted!
      </div>
    }

    return(
      <div>
        <h2>Shipping</h2>
        {output}
      </div>
    )

  }
}

export default Shipping;