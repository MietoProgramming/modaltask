import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "../styles/globalStyles";
import Dates from "./Dates";

const Modal = ({ setShowModal }) => {
    const [schedule, setSchedule] = useState("no");
    const [report, setReport] = useState({
        reportName: "test",
        format: "excel",
        email: "test@test.pl",
        schedule: "no",
        date: null,
        time: null,
        weekDay: null
    })

    const submitSchedule = async (e) => {
        e.preventDefault();
        const res = await fetch("https://postman-echo.com/post",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(report)
            })
            .then(res => {
                return res ? res : {}
            })
            .catch(error =>
                console.log(error));
        console.log(res);
        res.status === 200 ? alert("Done!") : alert("Something went wrong! Try again!");
    }

    return (
        <Container onSubmit={submitSchedule}>
            <Header>
                <p>Export Report</p>
            </Header>
            <Content>
                <Row>
                    <div>Report name</div>
                    <input
                        type="text"
                        placeholder="Shareablee Report"
                        onChange={(e) => setReport({ ...report, reportName: e.target.value })} />
                </Row>
                <Row>
                    <div>Format</div>
                    <div>
                        <input type="radio" name="format" id="" checked onChange={(e) => setReport({ ...report, format: "excel" })} />

                        <label>Excel</label>
                        <input type="radio" name="format" id="" onChange={(e) => setReport({ ...report, format: "csv" })} />

                        <label>CSV</label>
                    </div>
                </Row>
                <Row>
                    <div>E-mail to</div>
                    <input type="text" placeholder="Shareablee Report" onChange={(e) => setReport({ ...report, email: e.target.value })} />
                </Row>
                <Row>
                    <div>Schedule</div>
                    <div>
                        <input type="radio" name="schedule" id="no" onChange={() => {
                            setSchedule("no");
                            setReport({ ...report, schedule: "no" })
                        }} checked={schedule === "no"} />

                        <label>No Repeat</label>

                        <input type="radio" name="schedule" id="specific" onChange={() => {
                            setSchedule("specific")
                            setReport({ ...report, schedule: "specific" })
                        }
                        } checked={schedule === "specific"} />

                        <label>Specific Date</label>

                        <input type="radio" name="schedule" id="daily" onChange={() => {
                            setSchedule("daily")
                            setReport({ ...report, schedule: "daily" })
                        }
                        } checked={schedule === "daily"} />

                        <label>Daily</label>

                        <input type="radio" name="schedule" id="weekly" onChange={(e) => {
                            setSchedule("weekly");
                            setReport({ ...report, schedule: "weekly" })
                        }} checked={schedule === "weekly"} />

                        <label>Weekly</label>

                    </div>
                </Row>
                {schedule === "specific" ? <Dates type={schedule} report={report} setReport={setReport} /> : null}
                {schedule === "daily" ? <Dates type={schedule} report={report} setReport={setReport} /> : null}
                {schedule === "weekly" ? <Dates type={schedule} report={report} setReport={setReport} /> : null}
            </Content>
            <ButtonsContainer>
                <Button onClick={() => setShowModal(true)}>Cancel</Button>
                <Button buttonType="primary" type="submit">OK</Button>
            </ButtonsContainer>
        </Container>
    );
};

const Container = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 1 4 1;
  min-width: 400px;
  min-height: 300px;
  font-size: 12px;
  border: solid 1px #888;
  box-shadow: 0px 0px 5px 1px #aaa;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
    padding: 15px 15px;
`;

const Header = styled.div`
  padding: 0px 15px;
  background-color: #ccc;
`;

const Button = styled.button`
margin-right: 15px;
    width: 80px;
    padding: 8px 10px;
    background-color: ${(props) =>
        props.buttonType === "primary" ? "#333" : "#fff"};
    color: ${(props) => (props.buttonType === "primary" ? "#fff" : "grey")};
    font-size: 12px;
    border: 1px solid #ccc;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid #ccc;
  padding: 10px 0px;
`;

export default Modal;
