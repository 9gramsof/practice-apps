import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: {
        name: '',
        description: ''
      }
    }
    this.submit = this.submit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    let name = event.target[0].value;
    let description = event.target[1].value;
    let term = {name, description};
    // console.log(term);
    this.setState({term: term});
    this.props.onSubmit(term);
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="add a term"/>
        <input type="text" placeholder="add a definition"/>
        <input type="submit" text="Submit" />
      </form>
    )
  }
}

export default Add;