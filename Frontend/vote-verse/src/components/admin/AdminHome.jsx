import AdminNav from "./AdminNav"
import SideBar from "./SideBar"

const AdminHome = () => {
  return (
    <>
      <div className='adminDashboardContainer'>
        <AdminNav />
        <div className="adminDashboardDiv">
          <SideBar />
          <div className="dashboardSection">
            <h1>Dashboard</h1>
            <div className="dashboardDetails">
              <div className="dashboardCard totalStudents">
                <p>Total Students: 20</p>
              </div>
              <div className="dashboardCard totalCandidates">
                <p>Total Canditates: 2</p>
              </div>
              <div className="dashboardCard noOfVotesDone">
                <p>Votes Casted: 12</p>
              </div>
              <div className="dashboardCard noOfVotesRemaining">
                <p>Votes Remaining: 8</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminHome