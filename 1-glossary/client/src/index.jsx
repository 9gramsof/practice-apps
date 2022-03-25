import React from "react";
import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import Add from './components/Add.jsx';
import Edit from './components/Edit.jsx';
import Search from './components/Search.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
    this.search = this.search.bind(this);
    // this.edit = this.edit.bind(this);
  }
  //render all glossary terms when app initializes
  componentDidMount() {
    axios.get('/terms')
    .then((res) => {
      this.setState({glossary: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //submit a new term with definition -> post req with a get req
  submit(term) {
    axios({
      method: 'post',
      url: '/terms',
      data: {
        name: term.name,
        description: term.description
      }
    })
    .then((res) => {
      axios.get('/terms').then((res) => {this.setState({glossary: res.data})}).catch((err) => {console.log(err);})})
    .catch((err) => {
      console.log(err);
    })
  }

  //send a delete request
  delete(event) {

    console.log("this word ", event.target.name, "is a ", typeof event.target.name);
    let name = event.target.name;
    axios({
      method: 'delete',
      url: '/terms',
      data: {
        name: name
      }
    }).then((res) => {
      axios.get('/terms').then((res) => {this.setState({glossary: res.data})}).catch((err) => {console.log(err);})
    }).catch((err) => {
      console.log(err);
    })

  }

  //make a PUT request
  edit (query) {
    console.log(query);
    axios({
      method: 'put',
      url: '/terms',
      data: query
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
  }

  //search for a word
  search(name) {
    axios({
      method: 'get',
      url: '/terms/search/' + name,
    })
    .then((res) => {console.log(res);
      this.setState({glossary: res.data});
    })
    .catch((err) => {console.log(err)})
  }


  render() {
    return(
      <div>
      <h1>Glossary!</h1>
      <div className="search">
        <Search onSearch={this.search}/>
      </div>
      <div className="add-terms">
        <Add onSubmit={this.submit}/>
      </div>
      <div className="glossary-list">
        <ul>
          {this.state.glossary.map(term => (
            <li>
              <Edit name={term.name} description={term.description} onClick={this.edit} onDelete={this.delete}/>
              {/* <button name={term.name} onClick={this.delete}>Delete</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));