import {useEffect, useState} from "react";
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Scheduler = () => {
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    function onScheduleBtnClick(){
        console.log(date, startTime, endTime);

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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scheduler