import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import contacts from './contacts.json';
import _ from 'lodash';
import Contact from './Components/Contact';

class App extends Component {

  state = {
    myContacts: [
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        "name": "Monica Bellucci",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        "popularity": 16.096436,
        "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
      },
      {
        "name": "Gal Gadot",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
        "popularity": 10.049256,
        "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
      },
      {
        "name": "Ian McKellen",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
        "popularity": 10.070132,
        "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
      }
    ],
  };

  randomContactHandler = () => {

    let randomContact = _.sample(contacts)

    this.setState({
      myContacts: _.concat(this.state.myContacts, randomContact)
    })
  }

  sortyByHandler = (crit) => {

    this.setState({
      myContacts: _.sortBy(this.state.myContacts, crit)
    })

  }

  deleteHandler = (id) => {

    this.setState({
      myContacts: _.without(this.state.myContacts)
    })
  }

  render() {
    return (
      <div className="App">
      <h1 className="title">IRON CONTACTS</h1>
      <button className="button" onClick={this.randomContactHandler}>Add random Contact</button>
      <button className="button" onClick={ () => this.sortyByHandler("name")} >Sort by name</button>
      <button className="button" onClick={ () => this.sortyByHandler("popularity")} >Sort by popularity</button>

        <table className="table container">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myContacts.map((con) => (
              <Contact
                key={con.id}
                picture={con.pictureUrl}
                name={con.name}
                popularity={con.popularity}
                deleteHandler={this.deleteHandler}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
