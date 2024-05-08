import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const Scheduler = () => {
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
                                <input type="date" />
                            </div>
                            <div className="scheduleInputDiv startTimeInput">
                                <label>Start Time:</label>
                                <input type="time" />
                            </div>
                            <div className="scheduleInputDiv endTimeInput">
                                <label>End Time:</label>
                                <input type="time" />
                            </div>
                            <div className="scheduleBtnDiv">
                                <button>Schedule</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scheduler