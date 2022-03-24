import React from "react";
import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import Add from './components/Add.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    axios.get('/terms')
    .then((res) => {
      this.setState({glossary: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  submit(term) {
    // console.log('submitted term: ' , JSON.stringify(term));
    // console.log(term.name);
    // console.log(term.description);
    axios({
      method: 'post',
      url: '/terms',
      data: {
        name: term.name,
        description: term.description
      }
    })
    .then((res) => {
      axios.get('/terms')
      .then((res) => {
        this.setState({glossary: res.data})
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
      <p>Glossary!</p>
      <div className="add-terms">
      <Add onSubmit={this.submit}/>
      </div>

      <div className="glossary-list">
        <ul>
          {this.state.glossary.map(term => (
            <li>
              {term.name} : {term.description}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));