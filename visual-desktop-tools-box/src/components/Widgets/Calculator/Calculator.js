import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Calculator.css';
import NavBar from '../../NavBar/NavBar';
import * as math from 'mathjs';

export default function Calculator(props) {
    const [input, setInput] = useState('');

    // flag that user enter value again when they have the result already
    const [reStartChecker, setReStartChecker] = useState(false);

    // detect any input
    const handleInput = (props) => {
        // console.log(props);
        setInput(input + props);
        console.log(input);
        if (reStartChecker && isNaN(props)) {
            setReStartChecker(false);
        } else if (reStartChecker && !isNaN(parseInt(props, 10))) {
            setInput(props);
            setReStartChecker(false);
        }
    };
    // detect equal
    const handleEqual = () => {
        try {
            setInput(math.evaluate(input));
        } catch (error) {}
        setReStartChecker(true);
    };

    const handleSinCos = (func) => {
        try {
            if (func === 'sin') {
                setInput((input) => math.sin(math.unit(input, 'deg')).toFixed(2));
            } else if (func === 'cos') {
                setInput((input) => math.cos(math.unit(input, 'deg')).toFixed(2));
            }
        } catch (error) {}
        setReStartChecker(true);
    };

    // clear screen
    const handleClear = (props) => {
        setInput('');
    };

    return (
        <div>
            <NavBar />
            <div className={'outerContainer'}>
                <Row>
                    <Col>
                        <h1 className={'outputFont'}>{input}</h1>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleClear()}>
                                {' '}
                                C
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('-')}>
                                -
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('%')}>
                                %
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('/')}>
                                /
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('7')}>
                                7
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('8')}>
                                8
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('9')}>
                                9
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('*')}>
                                *
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('4')}>
                                4
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('5')}>
                                5
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('6')}>
                                6
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('-')}>
                                -
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('1')}>
                                1
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('2')}>
                                2
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('3')}>
                                3
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('+')}>
                                +
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('0')}>
                                0
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleInput('-')}>
                                -
                            </h2>
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            <h2 className={'buttonFont row'} onClick={() => handleEqual('=')}>
                                =
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <h2 className={'buttonFont row'} onClick={() => handleSinCos('sin')}>
                                SIN
                            </h2>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <h2 className={'buttonFont row'} onClick={() => handleSinCos('cos')}>
                                COS
                            </h2>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
