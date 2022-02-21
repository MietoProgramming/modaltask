import React from "react";
import { Row } from "../styles/globalStyles";
import styled from "styled-components";

const Dates = ({ type, report, setReport }) => {


    return (
        <Row>
            {type === "specific" && <>
                <div>Date</div>

                <DateContainer>
                    <input type="date" name="date" id="date"
                        onInput={(e) => setReport({ ...report, date: e.target.valueAsDate })} />
                    <label> at </label>
                    <input type="time" name="time" id="time"
                        onInput={(e) => setReport({ ...report, time: e.target.value })} />
                </DateContainer>
            </>
            }
            {type === "daily" && <>
                <div>Everyday at</div>

                <DateContainer>
                    <input type="time" name="time" id="time" onInput={(e) => setReport({ ...report, time: e.target.value })} />
                </DateContainer>
            </>
            }
            {type === "weekly" && <>
                <div>Every</div>
                <DateContainer>
                    <select name='day'
                        onChange={(e) => setReport({ ...report, weekDay: e.target.value })}>
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
                            return <option key={day} value={day}>{day}</option>
                        })}
                    </select>
                    <label> at </label>
                    <input type="time" name="time" id="time" onInput={(e) => setReport({ ...report, time: e.target.value })} />
                </DateContainer>
            </>
            }
        </Row>
    );
};

const DateContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

> :nth-child(n){
    margin-right: 10px; 
}

> input, select{
width: 100px;   
height: 25px; 
}



`

export default Dates;
