import React, { Component, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Button, ToggleButtonGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

export default class NotePad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      text: '',
      newUser: '',
      users: [],
      texts: [],
      chosenColors: [],
      fontSizes: [],
      ids:[]
    }

    this.colors = [
      {name: 'plain',       value: '#FFFFFF'},
      {name: 'vanilla',       value: '#f3e5ab'},
      {name: 'mint',        value: '#98ff98'},
      {name: 'watermelon',  value: '#fc6c85'},
      {name: 'banana',      value: '#ffe65f'}
    ];

    this.color = this.colors[0].value;
    this.fontSize = 16;

    // Changing backend states
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitnewUser = this.onSubmitnewUser.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);

    // Changing color states
    this.onChangeColor = this.onChangeColor.bind(this);

    // Changing font states
    this.onDecreaseFont = this.onDecreaseFont.bind(this);
    this.onIncreaseFont = this.onIncreaseFont.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            users: response.data.map(user=>user.username),
            texts: response.data.map(text=>text.text),
            ids: response.data.map(id=>id._id),
            username: response.data[0].username,
            text: response.data[0].text,
            chosenColors: response.data.map(color=>color.color),
            fontSizes: response.data.map(fontSize=>fontSize.fontSize)
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // When user changes via. user drop-down, the notepad text also changes.
  onChangeUsername(e) {
    const userIdx = this.state.users.indexOf(e.target.value);
    this.color = this.state.chosenColors[userIdx];
    this.fontSize = this.state.fontSizes[userIdx];
    console.log(this.fontSize);
    this.setState({
      username: e.target.value,
      text: this.state.texts[userIdx]
    });
  }

  // When a new user changes its value via the input menu
  onChangeNewUsername(e) {
    this.setState({
      newUser: e.target.value
    });
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmitnewUser(e){
    e.preventDefault();

    const user = { username: this.state.newUser }

    axios.post('/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/Notepad';
  }

  onSubmitNote(e) {
    e.preventDefault();
    if(this.state.username !== '[None]') {
      const idIdx = this.state.users.indexOf(this.state.username);
      const id = this.state.ids[idIdx];

      const user = {
        text: this.state.text,
        color: this.color,
        fontSize: this.fontSize
      }

      axios.post('/users/update/' + id, user)
        .then(res => console.log(res.data));
    }

    window.location = '/Notepad';
  }

  onChangeColor(color) {
    this.color = color;
    this.setState({}); // I do not like how this works
  }

  onIncreaseFont() {
    if(this.fontSize <= 64) this.fontSize++;
    this.setState({});
  }

  onDecreaseFont() {
    if(this.fontSize > 11) this.fontSize--;
    this.setState({});
  }

  renderColorOptions() {
    let res = [];
    this.colors.map((color, idx) => {
      res.push(
        <Button variant="light"
        style={{
          backgroundColor: color.value
        }}
        onClick={() => this.onChangeColor(color.value)}>{color.name}</Button>
      )
    })
    return (
      res
    );
  }

  renderFontUI() {
    return (
      <div>

        <div class="col-lg-1 row-centered">Font Size:</div>

        <div class="row">
        <Button onClick={ this.onDecreaseFont }>-</Button>
          <input type="text" value={this.fontSize}></input>
        <Button onClick={ this.onIncreaseFont }>+</Button>
        </div>

      </div>
    );
  }

  render() {
    return (
      <div>
        <NavBar/>

        <div class="card card-body">
          <form onSubmit={this.onSubmitnewUser}>
            <div class="form-group">
              <label>New User?</label>
              <input type="text" className="form-control" value={this.state.newUser} onChange={this.onChangeNewUsername} placeholder="Enter a username"></input>
            </div>
            <button type="submit" class="btn btn-secondary">Create User</button>
          </form>
        </div>

        <div class="card card-body">
          <h3>Notepad</h3>
          <div className="form-group">
            <label>User: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
            </select>
          </div>

          {this.renderColorOptions()}
          {this.renderFontUI()}

          <form onSubmit={this.onSubmitNote}>
            <div className="form-group">
              <label>Text:</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextArea1"
                rows="10"
                value={this.state.text}
                onChange={this.onChangeText}
                placeholder="Enter something."
                style={{
                  backgroundColor: this.color,
                  fontSize: this.fontSize
                }}>
              </textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Save" className="btn btn-success" />
            </div>
          </form>
        </div>

      </div>
    );
  }
}
