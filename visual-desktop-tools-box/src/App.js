import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Provider} from 'react-redux';
// import store from './redux/stores/store';
// import { loadUser } from './redux/actions/authAction';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";

import MainPage from './components/MainPage/MainPage';
import Calculator from './components/Widgets/Calculator/Calculator';
import Countdown from './components/Widgets/Countdown';
import Stopwatch from './components/Widgets/Stopwatch';
import Cat from './components/Widgets/Cat/Quote';
import NotePad from './components/Widgets/NotePad';
import Radio from './components/Widgets/Radio/Radio';
import Classical from './components/Widgets/Radio/Classical';
import Jazz from './components/Widgets/Radio/Jazz';
import Piano from './components/Widgets/Radio/Piano';
import Lofi from './components/Widgets/Radio/Lofi';
import CalendarWidget from './components/Widgets/Calendar-Custom/Calendar';
import Stocks from './components/Widgets/Stocks/Stocks';
import News from './components/Widgets/News/News';
import Currency from './components/Widgets/Currency/Currency'
import Tictac from './components/Widgets/Tic-Tac/App';
import WPMTest from './components/Widgets/WPMTest/WPMTest'
import UnitConverter from './components/Widgets/UnitConverter/UnitConverter';
import Timezone from './components/Widgets/Timezone/Timezone';
import ToggleDark from './components/Widgets/Settings/ToggleDark'
import DrawingBoard from './components/Widgets/DrawingBoard/DrawingBoard';
// import GlobalStyle from './components/Widgets/Settings/toggleDark'
import Weather from './components/Widgets/Weather/Weather';
import {Provider} from 'react-redux';
import store from './redux/stores/store';
import { loadUser } from './redux/actions/authAction';
import ToDoList from './components/Widgets/ToDoList/ToDoList';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import NavBar from './components/NavBar/NavBar';
import LyricFinder from './components/Widgets/LyricFinder/src/App';
import AboutUs from './components/AboutUs/AboutUs';

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
    
}

  render(){
  return (

  <Fragment>
     <Provider store = {store}>
       <BrowserRouter>
         <Switch>

          <Route path = "/" exact component = {MainPage}/>

          <Route path = "/Calculator" exact component = {Calculator}/>

          <Route path = "/Countdown" exact component = {Countdown}/>

          <Route path = "/Stopwatch" exact component = {Stopwatch}/>


          <Route path = "/Notepad" exact component = {NotePad}/>

          <Route path = "/Cat" exact component = {Cat}/>

          <Route path = "/Radio" exact component = {Radio}/>

          <Route path = "/Classical" exact component = {Classical}/>

          <Route path = "/Jazz" exact component = {Jazz}/>

          <Route path = "/Lofi" exact component = {Lofi}/>

          <Route path = "/Piano" exact component = {Piano}/>

          <Route path = "/Calendar" exact component = {CalendarWidget}/>

          <Route path = "/Stocks" exact component = {Stocks}/>

          <Route path = "/UnitConverter" exact component = {UnitConverter}/>

          <Route path = "/Timezone" exact component = {Timezone}/>

          <Route path ="/News" exact component = {News}/>

          <Route path = "/Currency" exact component = {Currency}/>

          <Route path = "/Tictac" exact component = {Tictac}/>

          <Route path = "/Weather" exact component = {Weather}/>

          <Route path = "/WPMTest" exact component = {WPMTest}/>

          <Route path = "/ToggleDark" exact component = {ToggleDark}/>

          <Route path = "/DrawingBoard" exact component = {DrawingBoard}/>

          <Route path = "/Login" exact component = {LoginPage}/>

          <Route path = "/SignUp" exact component = {SignUpPage}/>

          <Route path = "/ToDoList" exact component = {ToDoList}/>
          
          <Route path="/LyricFinder" exact component={LyricFinder} />
          
          <Route path = "/AboutUs" > 
                 <NavBar/>  
                 <AboutUs/>
           </Route>
         
         
       </Switch>
     </BrowserRouter>
     {/* <GlobalStyle /> */}
     </Provider>
  </Fragment>
  );
}
}

export default App;
