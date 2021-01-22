import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../../NavBar/NavBar';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./WPMTest.css"

export default function WPMTest() {

    // function disableBackspace(e){
    //     if(e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 17){
    //         e.preventDefault();
    //     }
    // }
    //onCut={(e)=> e.preventDefault()} onContextMenu={(e)=> e.preventDefault()} onKeyDown={e => disableBackspace(e)}

    const [quoteLength, setQuoteLength] = useState(0);
    const [countdown, setCountdown] = useState(5);
    // let [accuracy, setAccuracy] = useState(10);
    let accuracy = (quoteLength / quoteLength);
    let accuracyPer = (accuracy * 100).toFixed(2)
    // let accuracy = 0;
    const [WPMTimer, setWPMTimer] = useState(0);
    const [disableStatus, setDisableStatus] = useState(true);
    // const [complete, setComplete] = useState(false);
    const [wpm, setWPM] = useState(0);

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    useEffect(() => {
        const url = 'https://baconipsum.com/api/?type=meat-and-filler&sentences=2&paras=1&format=json';
        fetch(url)
        .then(response => response.json())
        .then(data => {setBaconQuote(data[0]); setQuoteLength(String(data[0]).length)})
    }, [])


    useEffect(() => {
        if (countdown === 0) {
            setDisableStatus(false);
            return;
        }
        const getReady = setInterval(() => {
            setCountdown(countdown => countdown - 1);
        }, 1000);
        return () => clearInterval(getReady);
    }, [countdown]);

    const timeRef = useRef(WPMTimer);
    timeRef.current = WPMTimer;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown) {
              return;
            }
            const counting = setInterval(() => {
                setWPMTimer(timeRef.current + 1);
            }, 1000);
            return () => clearInterval(counting);
            }, 5000);
        return () => clearTimeout(timer);
      }, [countdown]);
    
    const [baconQuote, setBaconQuote] = useState();
    const [userInput, setUserInput] = useState("");
    
    const sampleQuote = String(baconQuote);
    const text = sampleQuote.split("");

    const makeAssessment = (e) => {
        setUserInput(e.target.value);
        const userString = String(e.target.value)
        if(userString.length === sampleQuote.length){
            //if(userString === sampleQuote){
                // setComplete(true);
                setDisableStatus(true);
                const wordCount = sampleQuote.split(" ").length;
                setWPM((wordCount/(WPMTimer/60)).toFixed(2));
            //}
        }
    }


    return (
        <div>
            <NavBar />
            <Container className="display">
                <h3 className="quote">{     
                    text.map((character, index) => {
                        let highlight;
                        if(index < userInput.length){
                            highlight = character === userInput[index] ? '#2ECC71' : '#FF4D4D';
                            accuracy = character === userInput[index] ? accuracy : (accuracy - (1 / quoteLength));    
                            accuracyPer = (accuracy * 100).toFixed(2)
                        }
                        
                        return (
                            <span key={index} style={{backgroundColor: highlight, userSelect: "none"}}>{character}</span>
                        )
                    })
                }
                </h3>
                <textarea type="text" disabled={disableStatus} ref={inputRef} value={userInput} onChange={e => makeAssessment(e)} className="userInput" />
                <div>
                {/* <h5 className="redQuote">Backspacing is DISABLED</h5> */}
                <h3 className="quote"> Your WPM is <strong>{wpm}</strong></h3>
                <h4 className="quote"> Your Current Accuracy is <strong>{accuracyPer}%</strong></h4>
                <h5 className="quote">The test starts in <strong>{countdown}</strong> seconds!</h5>
                {/* <h4 className="quote">Time Elapsed: {WPMTimer} seconds</h4> */}
                <Button className="refresh" variant="success" onClick={() => window.location.reload(false)} >Try Again!</Button>
                </div>
            
            </Container>
        </div>
    );
}