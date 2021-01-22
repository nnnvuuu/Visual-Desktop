import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import "./UnitConverter.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../NavBar/NavBar';

var convert = require('convert-units');

var massOptions = convert().possibilities('mass');
var lengthOptions = convert().possibilities('length');

export default function ToDoList() {

    const[fromMassValue, setFromMassValue] = useState()
    const[toMassValue, setToMassValue] = useState()
    const[fromMassUnit, setFromMassUnit] = useState()
    const[toMassUnit, setToMassUnit] = useState()

    const[fromLengthValue, setFromLengthValue] = useState()
    const[toLengthValue, setToLengthValue] = useState()
    const[fromLengthUnit, setFromLengthUnit] = useState()
    const[toLengthUnit, setToLengthUnit] = useState()

    const calculateMass = (e, f, g) => {
        setToMassValue(convert(e).from(f).to(g));
        // console.log(e);
        // console.log(f);
        // console.log(g);
    }

    const calculateLength = (j, k, l) => {
        setToLengthValue(convert(j).from(k).to(l));
        // console.log(j);
        // console.log(k);
        // console.log(l);
    }

    useEffect(() => {
        setFromMassUnit(massOptions[6]); //pound
        setToMassUnit(massOptions[5]); //ounce
        setFromLengthUnit(lengthOptions[7]); //feet
        setToLengthUnit(lengthOptions[2]); //meter
    }, [])

    return (
        <div>
            <NavBar />
            <Container className="Interface">
                <h1 className="title">Unit Converter</h1>

                    <h2 className="color">Mass</h2>
                    <input type="number" value={fromMassValue|| ''} onChange={e => { setFromMassValue(e.target.value); calculateMass(e.target.value, fromMassUnit, toMassUnit)}}></input>

                    <select value={fromMassUnit} onChange={e => { setFromMassUnit(e.target.value); calculateMass(fromMassValue, e.target.value, toMassUnit)}}>
                        {massOptions.map(option => (
                            <option>{option}</option>
                        ))}
                    </select>
                    <h3 className="inline">is equivalent to</h3>
                    
                    <input type="number" disabled={true} value={toMassValue || ''}></input>

                    <select value={toMassUnit} onChange={e => { setToMassUnit(e.target.value); calculateMass(fromMassValue, fromMassUnit, e.target.value)}}>
                        {massOptions.map(option => (
                            <option>{option}</option>
                        ))}
                    </select>



                    <h2 className="color">Length</h2>
                    <input type="number" value={fromLengthValue || ''} onChange={e => { setFromLengthValue(e.target.value); calculateLength(e.target.value, fromLengthUnit, toLengthUnit)}}></input>

                    <select value={fromLengthUnit} onChange={e => { setFromLengthUnit(e.target.value);
                         calculateLength(fromLengthValue, e.target.value, toLengthUnit)}}>
                        {lengthOptions.map(option => (
                            <option>{option}</option>
                        ))}
                    </select>
                    <h3 className="inline">is equivalent to</h3>
                    
                    <input type="number" disabled={true} value={toLengthValue || ''}></input>

                    <select value={toLengthUnit} onChange={e => { setToLengthUnit(e.target.value); calculateLength(fromLengthValue, fromLengthUnit, e.target.value)}}>
                        {lengthOptions.map(option => (
                            <option>{option}</option>
                        ))}
                    </select>
                    
            </Container>
        </div>
    )
}