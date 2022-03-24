import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();
    let name = event.target[0].value;
    // console.log(term);
    this.setState({name: name});
    this.props.onSearch(name);
    // this.props.onSearch(term);
  }

  render() {
    return(
      <form onSubmit={this.search}>
        <input type="text" placeholder="search a word..."/>
        <input type="submit" value="Search"/>
      </form>

    )
  }
}

export default Search;