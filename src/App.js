import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import contacts from './contacts.json';
import _ from 'lodash';
import Contact from './Components/Contact';

class App extends Component {
 
  state = {
    myContacts: _.slice(contacts, 0, 5)
  };

  randomContactHandler = () => {
    let randomContact = _.sample(contacts);

    this.setState({
      myContacts: _.concat(this.state.myContacts, randomContact),
    });
  };

  sortyByHandler = (crit) => {
    this.setState({
      myContacts: _.sortBy(this.state.myContacts, crit),
    });
  };

  deleteHandler = (id) => {
    this.setState({
      myContacts: this.state.myContacts.filter((con) => con.id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="section">
          <h1 className="title column">IRON CONTACTS</h1>

          <div className="buttons column">
            <button
              className="button is-primary"
              onClick={this.randomContactHandler}
            >
              Add random Contact
            </button>
            <button
              className="button is-info"
              onClick={() => this.sortyByHandler('name')}
            >
              Sort by name
            </button>
            <button
              className="button is-info"
              onClick={() => this.sortyByHandler('popularity')}
            >
              Sort by popularity
            </button>
          </div>

          <div className="column">
            <table className="table container is-bordered is-hoverable">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="is-vcentered">
                {this.state.myContacts.map((con) => (
                  <Contact
                    key={con.id}
                    picture={con.pictureUrl}
                    name={con.name}
                    popularity={con.popularity}
                    deleteHandler={this.deleteHandler}
                    id={con.id}
                  ></Contact>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
