import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
  }
  render() {
    return(
      <div>
      <p>Glossary!</p>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));