import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Contact extends Component {
  deleteHandler = () => {
    this.props.deleteHandler(this.props.id);
  };

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
        <td>
          <button
            className="button is-danger is-small"
            onClick={this.deleteHandler}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

export default Contact;
