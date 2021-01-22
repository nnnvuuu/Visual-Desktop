import React, { useState, useEffect,Fragment } from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import storage from 'local-storage-fallback'
import './NavBar.css';
import guitar1 from './tones/guitar1.mp3'
import guitar2 from './tones/guitar2.mp3'
import Parasite from './tones/Parasite_Ringtone_Jessica.mp3'
// import 'react-open-weather/lib/css/ReactWeather.css';
import weather from 'weather-js'
// import { dark } from '@material-ui/core/styles/createPalette';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import storage from 'local-storage-fallback'
// import { Global } from '@emotion/core';
import GlobalStyle from '../Widgets/Settings/ToggleDark'
import Clock from '../Widgets/Clock-NavBar/Clock'
import Logout from '../Logout/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Timer } from 'react-countdown-clock-timer';
import useSound from 'use-sound';
import { Disable } from 'react-disable';


const componentOptions = [
  { value: '/', label: 'Home' },
  { value: '/ToDoList', label: 'To-Do List' },
  { value: '/Calculator', label: 'Calculator' },
  { value: '/Notepad', label: 'Notepad' },
  { value: '/Calendar', label: 'Calendar' },
  { value: '/Countdown', label: 'Countdown' },
  { value: '/Stopwatch', label: 'Stopwatch' },
  { value: '/Stocks', label: 'Stocks' },
  { value: '/News', label: 'News' },
  { value: '/Timezone', label: 'Timezone' },
  { value: '/UnitConverter', label: 'Unit Converter' },
  { value: '/WPMTest', label: 'WPM Test' },
  { value: '/Cat', label: 'Cat' },
  { value: '/DrawingBoard', label: 'Drawing Board' },
  { value: '/Currency', label: 'Currency' },
  { value: '/Tictac', label: 'Tic-Tac-Toe' },
  { value: '/Radio', label: 'Radio' },
  { value: '/Weather', label: 'Weather' },
  { value: '/LyricFinder', label: 'Lyric Finder'},
];

function loadSavedTime() {
  const savedTime = storage.getItem('time')
  return savedTime ? JSON.parse(savedTime) : 2700;
}

function loadChime() {
  const savedChime = storage.getItem('chime')
  return savedChime ? JSON.parse(savedChime) : guitar1;
}

function loadSavedAlarm() {
  const savedAlarm = storage.getItem("disableAlarm")
  return savedAlarm ? JSON.parse(savedAlarm) : { disableAlarm: true }
}

function loadPauseStatus() {
  const savedPauseStatus = storage.getItem("pauseStatus")
  return savedPauseStatus ? JSON.parse(savedPauseStatus) : { pauseStatus: false }
}

function  NavBar (props){


  const [temp,setTemp] = useState('');

  // weather.find({degreeType: 'F',search: ''}, function(err, result) {
  //   if(err) console.log(err);
  //   //console.log(result[0].current.feelslike)
  
  //   var x = result[0].current.temperature
  //   setTemp(x)
  //   //console.log(x)
  // });
  
  //console.log(temp)

  const [disableAlarm, setDisableAlarm] = React.useState(loadSavedAlarm);
  const toggleAlarm = () => setDisableAlarm(d => !d);
  useEffect(
    () => {
        storage.setItem("disableAlarm", JSON.stringify(disableAlarm));
    },
    [disableAlarm]
    );

    const [pauseStatus, setPauseStatus] = React.useState(loadPauseStatus);
    useEffect(
      () => {
          storage.setItem("pauseStatus", JSON.stringify(pauseStatus));
      },
      [pauseStatus]
      );
    

  const [time, setTime] = useState(loadSavedTime);
  useEffect(
    () => {
        storage.setItem('time', JSON.stringify(time));
    },
    [time]
  );
  
  const [chime, setChime] = useState(loadChime);
  useEffect(
    () => {
        storage.setItem('chime', JSON.stringify(chime));
    },
    [chime]
  );


  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(pauseStatus === false){
      setTime(time => time - 1)
      return () => clearInterval(interval);
      }
      else {
        return;
      }
    }, 1000);
    // return () => clearInterval(interval);
  }, []);

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCompOption, setSelectedCompOption] = useState('');

  const {isAuthenticated,user } =  props.auth;


  // const {username} = user;
  
  const authLinks = (
    <Fragment>
      <NavItem className="px-3 " style={{marginTop:"0.4em"} }>
        <strong className="fontSize4" >{user?`Welcome, ${user.username}`: '' }</strong>
      </NavItem>
      <Nav.Item>
         <Logout/>
       </Nav.Item>
    </Fragment>
  )
  // {user?`Welcome, ${user.username}`: '' }
  const guestLinks = (
    <Fragment>
      <Nav.Link  as={NavLink} to= '/Login' className={"px-3"}>
         <h4 className={"fontSize4"}>Login / Sign Up</h4>
      </Nav.Link>
    </Fragment>
  )
  
  const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: "9999 !important" })
  };

  const [userNumber, setUserNumber] = useState(0);

  const operatePause = () => {
    setPauseStatus(!pauseStatus);
    console.log(pauseStatus);
  }

  const [play] = useSound(
    chime,
    { volume: 0.5 }
  );

  
  const handleReset = () => {
    if(userNumber !== ""){
      setTime(parseInt(userNumber, 10))
    }
  }


    return(
      <div>

      <style type="text/css">
        {`
          .mr-auto h3{
            font-size: .85em;
            margin: .5em;
          }
        `}
      </style>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand as={NavLink} to= '/' className={"px-3"}>
           <h4 className={"fontSize4"}>Home</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Tools" className={"px-3 h3"} id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to= '/Calculator'>
                  < h3 className={"fontSize3"}>Calculator</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Countdown'>
                  < h3 className={"fontSize3"}>Countdown</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Stopwatch'>
                  < h3 className={"fontSize3"}>Stopwatch</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Notepad'>
                  <h3 className={"fontSize3"}>Notepad</h3>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <h3 className={"fontSize3"} onClick={handleShow}>Clock</h3>
                    <Modal show={show} centered size="lg" onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Time</Modal.Title>
                      </Modal.Header>
                      <Clock/>
                    </Modal>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Calendar'>
                  <h3 className={"fontSize3"}>Calendar</h3>
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to= '/ToDoList'>
                   <h3 className={"fontSize3"}>To-Do List</h3>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={NavLink} to= '/Weather'>
                  <h3 className={"fontSize3"}>Weather</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Stocks'>
                  <h3 className={"fontSize3"}>Stocks</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/UnitConverter'>
                  <h3 className={"fontSize3"}>Unit Converter</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Currency'>
                  <h3 className={"fontSize3"}>Currency</h3>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to= '/News'>
                  <h3 className={"fontSize3"}>News</h3>
                  </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Tictac'>
                  <h3 className={"fontSize3"}>Tic-Tac-Toe</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/WPMTest'>
                  <h3 className={"fontSize3"}>WPM Test</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/DrawingBoard'>
                  <h3 className={"fontSize3"}>Drawing Board</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Radio'>
                  <h3 className={"fontSize3"}>Radio</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Cat'>
                  <h3 className={"fontSize3"}>Cat</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/LyricFinder'>
                  <h3 className={"fontSize3"}>Lyric Finder</h3>
                </NavDropdown.Item>

               </NavDropdown>
               <div className="searchbar">

              <Select
                styles={selectStyles}
                menuPlacement="auto"
                menuPosition="absolute"
                defaultValue={selectedCompOption}
                onChange={setSelectedCompOption}
                options={componentOptions}/>
              </div>

              <Link className="searchBtn" to={selectedCompOption.value}>Search</Link>
              <GlobalStyle />
              </Nav>

              <Nav>
                {isAuthenticated ? authLinks : guestLinks}
              <Nav.Link as={NavLink} to= '/AboutUs' className={"px-3"} >
                 <h4 className={"fontSize4"}>About us</h4>
              </Nav.Link>
              <Navbar.Text>
              <Disable disabled={disableAlarm}>
              <h3 className={"fontSize0"}><Timer
                durationInSeconds={time}
                formatted={true}
                isPaused={pauseStatus}
                onFinish = {()=> {
                  play();
                  alert('Time is up!');
                  setTime(2700);  
                }}
                /></h3>
                </Disable>
                <input type="number" min="0" placeholder="Seconds" value={userNumber} onChange={e => setUserNumber(e.target.value)}/>
                <button className="btn" onClick={() => handleReset()}>Reset</button>
                <button className="btn" onClick={() => {toggleAlarm(); operatePause(); window.location.reload(false)} }>Toggle Timer</button>

                <button className="btn" onClick={handleShow1}>Chime Settings</button>
                  <Modal show={show1} centered size="lg" onHide={handleClose1}>
                      <Modal.Header closeButton>
                        <Modal.Title>Chime Settings</Modal.Title>
                      </Modal.Header>
                      <button className="btnSpace" onClick={() => { setChime(guitar1); handleClose1() }}>Guitar 1</button>
                      <button className="btnSpace" onClick={() => { setChime(guitar2); handleClose1() }}>Guitar 2</button>
                      <button className="btnSpace" onClick={() => { setChime(Parasite); handleClose1() }}>Parasite</button>
                  </Modal>
                  
              </Navbar.Text>
              </Nav>
           </Navbar.Collapse>
         </Navbar>

      </div>
    );

}


NavBar.propTypes = {
  auth: PropTypes.object.isRequired

}

const mapStateToProps = state  =>({
  auth: state.auth
});

export default connect(mapStateToProps,null)(NavBar);