import {useEffect, useState} from "react";
import axios from "axios";
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Scheduler = () => {
    const [position, setposition] = useState("");
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const [schedule, setSchedule] = useState([]);

    function getSchedulerFunc(){
        axios.get(`http://127.0.0.1:8000/api/scheduler`)
        .then(res => {
            // console.log(res);
            setSchedule(res.data.schedule);
        })
        .catch(err => {
            console.log(err.response.data.message);
        })

    }
    useEffect(() =>{
        getSchedulerFunc();
    }, [])

    function onScheduleBtnClick(){
        // console.log(position, date, startTime, endTime);
        axios.post(`http://127.0.0.1:8000/api/scheduler`, 
        {
            'position': position,
            'date':date,
            'startTime':startTime,
            'endTime': endTime
        })
        .then(res => {
            alert(res.data.message);
            getSchedulerFunc();
        })
        .catch(err => {
            alert(err.response.data.message);
        })
        setposition("");
        setDate();
        setStartTime();
        setEndTime();

    }
    function deleteScheduleBtn(id){
        axios.delete(`http://127.0.0.1:8000/api/scheduler/${id}/delete`)
        .then(res => {
            alert(res.data.message)
            getSchedulerFunc();
        })
        .catch(err =>{
            console.log(err);
        })

    }
    

    return (
        <>
            <div className='schedulerContainer'>
                <AdminNav />
                <div className="schedulerDiv">
                    <SideBar />
                    <div className="schedulerSection">
                        <div className="schedulerHeading"><h1>Scheduler</h1>
                        </div>
                        <div className="scheduleInputButtonDiv">
                            <div className="scheduleInputDiv positionInput">
                                <label>Set Positon:</label>
                                <input type="text" onChange={e => setposition(e.target.value)}/>
                            </div>
                            <div className="scheduleInputDiv dateInput">
                                <label>Set Date:</label>
                                <input type="date" onChange={e => setDate(e.target.value)}/>
                            </div>
                            <div className="scheduleInputDiv startTimeInput">
                                <label>Start Time:</label>
                                <input type="time" onChange={e => setStartTime(e.target.value)}/>
                            </div>
                            <div className="scheduleInputDiv endTimeInput">
                                <label>End Time:</label>
                                <input type="time" onChange={e => setEndTime(e.target.value)}/>
                            </div>
                            <div className="scheduleBtnDiv">
                                <button onClick={onScheduleBtnClick}>Schedule</button>
                            </div>

                        </div>
                        <div className="scheduleTable">
                            <table border="1">
                                <tbody>
                                    <tr>
                                        <th>S No</th>
                                        <th>Position</th>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Tools</th>
                                    </tr>
                                    {schedule.map((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.position}</td>
                                            <td>{item.date}</td>
                                            <td>{item.startTime}</td>
                                            <td>{item.endTime}</td>
                                            <td>
                                                <button onClick={() => deleteScheduleBtn(item.id)}className="deleteBtn">Delete</button>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scheduler