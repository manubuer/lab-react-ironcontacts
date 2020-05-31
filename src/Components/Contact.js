import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Contact extends Component {

  render() {
    return (
      <tr>
        <td>
          <figure className="image is-4by5">
            <img src={this.props.picture} />
          </figure>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={this.deleteHandler} id={this.props.id}>DELETE</button></td>
      </tr>
    );
  }
}

export default Contact;
