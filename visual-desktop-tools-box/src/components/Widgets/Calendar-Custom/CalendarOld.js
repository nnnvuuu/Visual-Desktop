import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios';
import * as dateFns from 'date-fns';
import './Calendar.css';

// Frontend adapted from: https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728

// TODO: THIS ONLY RENDERS CUSTOM DATES FOR THE CURRENT MONTH

export default class CalendarWidget extends Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      username: '',
      newUser: '',
      dates: {}, /* "dd": "text" */
      userToDates: {}, /* user: dates */
      users: [],
      ids: []
    };
    for(let i=1;i<32;i++) { this.state.dates[i] = '-'; } // Initialize dates


    this.renderCells = this.renderCells.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSaveDates = this.onSaveDates.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
    this.onSubmitnewUser = this.onSubmitnewUser.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        if(response.data.length > 0){
          // Scuffed
          response.data.map(i => {
            var d = {}
            if(i.dates.length === 0 ) {
              Array.from("-".repeat(31)).forEach((j, idx) => { d[idx] = j } )
            } else {
              i.dates.forEach((j, idx) => { d[idx] = j })
            }
            this.state.userToDates[i.username] = d;
          });
          // --
          // console.log(this.state.userToDates)
          this.setState({
            users: response.data.map(user=>user.username),
            ids: response.data.map(id=>id._id),
            username: response.data[0].username,
            dates: this.state.userToDates["[None]"]
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderUserList() {
    return(
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
    );
  }

  renderHeader() {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>chevron_left</div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "iiii";
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth, {weekStartsOn: 1});
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderInput(v) {
    return (
      <input type="text"
      value={v}
      onChange={this.onChangeDate}></input>
    );
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn: 1});
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              ! dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
            id={formattedDate}
          >
            <h6> > </h6>
            {dateFns.isSameMonth(day, monthStart) ? this.renderInput(this.state.dates[formattedDate]) : ""}
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onChangeDate(e) {
    const day = this.state.selectedDate;
    this.state.dates[dateFns.format(day, "d")] = e.target.value;
    this.onDateClick(day); // Need to call to refresh
    // console.log(this.state.dates[dateFns.format(day, "d")]);
  }

  onChangeUsername(e) {
    // console.log(e.target.value);
    // console.log(this.state.userToDates[e.target.value]);
    this.setState({
      dates: this.state.userToDates[e.target.value],
      username: e.target.value
    })
  }

  onChangeNewUsername(e) {
    this.setState({
      newUser: e.target.value
    });
  }

  onSubmitnewUser(e){
    e.preventDefault();
    const user = { username: this.state.newUser }
    axios.post('/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/Calendar';
  }

  onDateClick = day => {
    // console.log(dateFns.format(day, "d"));
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  onSaveDates(e) {
    e.preventDefault();
    if(this.state.username !== '[None]') {
      // this is ugly
      var tmp = [];
      let date = this.state.userToDates[this.state.username];
      for(var i=0;i<31;i++){tmp.push(date[i]);}
      //

      const user = {
        dates: tmp
      }
      console.log(user);
      const idIdx = this.state.users.indexOf(this.state.username);
      const id = this.state.ids[idIdx];
      // console.log("ID is " + id + " for username " + this.state.username);
      // console.log("With IDs " + this.state.ids);

      axios.post('/users/update/dates/' + id, user)
        .then(res => console.log(res.data));
    }

    window.location = '/Calendar';
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

        <div className="calendar">
          {this.renderHeader()}
          {this.renderUserList()}
          {this.renderDays()}
          {this.renderCells()}
        </div>

        <div class="card card-body">
          <form onSubmit={this.onSaveDates}>
            <div className="form-group">
              <input type="submit" value="Save" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
