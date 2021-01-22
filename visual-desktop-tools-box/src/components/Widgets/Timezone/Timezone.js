import React, { useState, useEffect, useRef } from 'react';
import './Timezone.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../NavBar/NavBar';

var ezlocalTime = require('ez-local-time');

export default function Timezone() {

const[nyTime, setNYTime] = useState();
const[laTime, setLATime] = useState();
const[londonTime, setLondonTime] = useState();
const[moscowTime, setMoscowTime] = useState();
const[hongkongTime, setHongKongTime] = useState();
const[tokyoTime, setTokyoTime] = useState();
const[sydneyTime, setSydneyTime] = useState();

// const[frominputTime, setfromInputTime] = useState();
// const[fromtimezoneOption, setfromTimezoneOption] = useState();
// const[toinputTime, settoInputTime] = useState();
// const[totimezoneOption, settoTimezoneOption] = useState();

// const makeCalculations = (currentTime, from, to) => {
//     if(from == 'Eastern' && to == 'Central'){
//         console.log(currentTime);
//     }

// }

// useEffect(() => {
//     setfromTimezoneOption(usTimeZones[0]);
//     settoTimezoneOption(usTimeZones[2]); 
//     }, [])


const[estTime, setESTTime] = useState();
const[cstTime, setCSTTime] = useState();
const[pstTime, setPSTTime] = useState();
const[akTime, setAKTime] = useState();
const[mstTime, setMSTTime] = useState();

useEffect(() => { //Current Location
    const interval = setInterval(() => {
    const updated = ezlocalTime('eastern');
    setESTTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Central
    const interval = setInterval(() => {
    const updated = ezlocalTime('central');
    setCSTTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Pacific
    const interval = setInterval(() => {
    const updated = ezlocalTime('pacific');
    setPSTTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Alaskan
    const interval = setInterval(() => {
    const updated = ezlocalTime('alaska');
    setAKTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => { //Mountain
    const interval = setInterval(() => {
    const updated = ezlocalTime('mountain6');
    setMSTTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);






useEffect(() => { //New York
    const interval = setInterval(() => {
    const updated = ezlocalTime('America/New_York');
      setNYTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Los Angeles
    const interval = setInterval(() => {
    const updated = ezlocalTime('America/Los_Angeles');
      setLATime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

useEffect(() => { //London
    const interval = setInterval(() => {
    const updated = ezlocalTime('Europe/London');
      setLondonTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Moscow
    const interval = setInterval(() => {
    const updated = ezlocalTime('Europe/Moscow');
      setMoscowTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => { //Hong Kong
    const interval = setInterval(() => {
    const updated = ezlocalTime('Asia/Hong_Kong');
      setHongKongTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Tokyo
    const interval = setInterval(() => {
    const updated = ezlocalTime('Asia/Tokyo');
      setTokyoTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { //Sydney
    const interval = setInterval(() => {
    const updated = ezlocalTime('Australia/Sydney');
      setSydneyTime(updated.time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);



    return (
        <div>
            <NavBar />
            <Container className="Interface">
            <div>
                {/* <h1 className="title">Timezone Converter</h1>
                <input type="time" value={frominputTime || ''} onChange={e => {setfromInputTime(e.target.value); makeCalculations(e.target.value, fromtimezoneOption, totimezoneOption)}}></input>
                <select value={fromtimezoneOption} onChange={e => {setfromTimezoneOption(e.target.value); makeCalculations(frominputTime, e.target.value, totimezoneOption)}}>
                        {usTimeZones.map(option => (
                            <option>{option}</option>
                        ))}
                </select>
                </div>

                <div>
                <input type="time" value={toinputTime || ''} disabled={true}></input>
                <select value={totimezoneOption} onChange={e => {settoTimezoneOption(e.target.value); makeCalculations(frominputTime, fromtimezoneOption, e.target.value) }}>
                        {usTimeZones.map(option => (
                            <option>{option}</option>
                        ))}
                </select> */}
                
                <h1 className="title">US Time Zones</h1>
                <h2 className="color">Eastern</h2>
                <input value={estTime} disabled={true}></input>

                <h2 className="color">Central</h2>
                <input value={cstTime} disabled={true}></input>

                <h2 className="color">Pacific</h2>
                <input value={pstTime} disabled={true}></input>

                <h2 className="color">Alaskan</h2>
                <input value={akTime} disabled={true}></input>

                <h2 className="color">Mountain</h2>
                <input value={mstTime} disabled={true}></input>

            </div>

            </Container>
            <Container className="Interface">
                <h1 className="title">World Clock</h1>
                <h2 className="color">New York</h2>
                <input value={nyTime} disabled={true}></input>

                <h2 className="color">Los Angeles</h2>
                <input value={laTime} disabled={true}></input>
                            
                <h2 className="color">London</h2>
                <input value={londonTime} disabled={true}></input>

                <h2 className="color">Moscow</h2>
                <input value={moscowTime} disabled={true}></input>

                <h2 className="color">Hong Kong</h2>
                <input value={hongkongTime} disabled={true}></input>

                <h2 className="color">Tokyo</h2>
                <input value={tokyoTime} disabled={true}></input>

                <h2 className="color">Sydney</h2>
                <input value={sydneyTime} disabled={true}></input>

            </Container>
        </div>

    )
}