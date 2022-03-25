import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
    }
    this.edit = this.edit.bind(this);
  }

  edit(event) {
    event.preventDefault();
    let name = this.state.name;
    let nameUpdate = event.target[0].value;
    let descriptionUpdate = event.target[1].value;

    let query = {name: name,
      nameUpdate: nameUpdate,
      descriptionUpdate: descriptionUpdate};

    this.setState({name: nameUpdate, description: descriptionUpdate});
    this.props.onClick(query);
  }

  render() {
    return(
      <div>
        <div> {this.state.name} : {this.state.description} </div>
        <form onSubmit={this.edit}>
          <input type="text" placeholder="Edit the word"/>
          <input type="text" placeholder="Edit the description"/>
          <input type="submit" value="Edit" />
          <button name={this.state.name} onClick={this.props.onDelete}>Delete</button>
        </form>
      </div>
    )
  }
}

export default Edit;