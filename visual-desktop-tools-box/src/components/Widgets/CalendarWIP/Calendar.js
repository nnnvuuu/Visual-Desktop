import React, { useState, useEffect } from 'react';
import { set, get } from 'idb-keyval';
import RCalendar from 'react-calendar';
import './Calendar.css';
import theme from './Calendar.module.css';

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [calEventsMap, setCalEventsMap] = useState({});
    const [calEvent, setCalEvent] = useState(['', '']);
    let holidays = {
        '27-10-2020': ['Thanksgiving', 'One more'], //dd-mm-yyyy
    };

    useEffect(() => {
        get('calEventMap').then((val) => {
            if (val) setCalEventsMap(val);
        });
        return () => {
            set('calEventMap', calEventsMap);
        };
    }, []);

    // for (let i = 10; i <= 22; i++) {
    //     const date = `${i}-9-2020`;
    //     holidays[date] = ['holiday1'];
    // }

    function getFullDate(dateObj) {
        const fullDate = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
        return fullDate;
    }

    function removeEvent(index) {
        const fullDate = getFullDate(date);
        const eventList = calEventsMap[fullDate];
        eventList.splice(index, 1);
        setCalEventsMap((eMap) => {
            const newMap = { ...eMap };
            newMap[fullDate] = eventList;
            set('calEventMap', newMap);
            return newMap;
        });
    }

    return (
        <div className={theme.container}>
            <RCalendar
                value={date}
                calendarType="US"
                onChange={(date) => {
                    setDate(date);
                    console.log(date);
                }}
            />
            <div className={theme.eventContainer}>
                {holidays[getFullDate(date)] ? (
                    <div className={theme.eventListContainer}>
                        <h5>Holidays:</h5>
                        <ul className={theme.eventList}>
                            {holidays[getFullDate(date)].map((holiday, index) => (
                                <li className={theme.eventListItem} key={index}>
                                    <h6 className={theme.eventTitle}>{holiday}</h6>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
                <div className={theme.eventListContainer}>
                    {calEventsMap[getFullDate(date)] ? (
                        <>
                            <h5>Events for today: </h5>
                            <ul className={theme.eventList}>
                                {calEventsMap[getFullDate(date)].map((e, index) => (
                                    <li className={theme.eventListItem} key={index}>
                                        <button onClick={() => removeEvent(index)} className={theme.removeButton}>
                                            &#10005;
                                        </button>
                                        <div>
                                            <h6 className={theme.eventTitle}>{e.title}</h6>
                                            <p className={theme.eventDetails}>{e.details}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <h5>No events present for today</h5>
                    )}
                </div>
                <div className={theme.eventInputContainer}>
                    <h5>Add an event:</h5>
                    <div className={theme.inputContainer}>
                        <label className={theme.inputLabel}>Event Title:</label>
                        <input
                            className={theme.input}
                            value={calEvent[0]}
                            onChange={(event) => {
                                const value = event.target.value;
                                setCalEvent((calE) => [value, calE[1]]);
                            }}
                            type="text"
                            placeholder="Event Title"
                        />
                    </div>
                    <div className={theme.inputContainer}>
                        <label className={theme.inputLabel}>Event Details:</label>
                        <input
                            className={theme.input}
                            value={calEvent[1]}
                            onChange={(event) => {
                                const value = event.target.value;
                                setCalEvent((calE) => [calE[0], value]);
                            }}
                            type="text"
                            placeholder="Event Details"
                        />
                    </div>
                    <button
                        className={theme.addButton}
                        onClick={() => {
                            if (date) {
                                const fullDate = getFullDate(date);
                                console.log(fullDate);
                                setCalEventsMap((eMap) => {
                                    const newMap = { ...eMap };
                                    const eventObj = {
                                        title: calEvent[0],
                                        details: calEvent[1],
                                    };
                                    if (fullDate in newMap) {
                                        newMap[fullDate] = [...newMap[fullDate], eventObj];
                                    } else {
                                        newMap[fullDate] = [eventObj];
                                    }
                                    setCalEvent(['', '']);
                                    set('calEventMap', newMap);
                                    return newMap;
                                });
                            }
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
