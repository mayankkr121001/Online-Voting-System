import { useEffect, useState } from "react"
import AdminNav from "./AdminNav"
import SideBar from "./SideBar"
import axios from "axios";

const AdminHome = () => {
  const [totalVoters, setTotalVoters] = useState(0);
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [votesCasted, setVotesCasted] = useState(0);
  const [votesRemaining, setVotesRemaining] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/voters`)
      .then(res => {
        // console.log(res.data.voters.length);
        setTotalVoters(res.data.voters.length);
      })
      .catch(err => console.log(err));
    axios.get(`http://127.0.0.1:8000/api/candidates`)
      .then(res => {
        // console.log(res.data.candidates.length);
        setTotalCandidates(res.data.candidates.length);
      })
      .catch(err => console.log(err));

      axios.get(`http://127.0.0.1:8000/api/votingStatus`)
      .then(res => {
          // console.log(res.data.votingStatus.length);
          setVotesCasted(res.data.votingStatus.length)
      })
      .catch(err => console.log(err))
      setVotesRemaining(totalVoters - votesCasted)
  })

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
                <p>Total Voters: {totalVoters}</p>
              </div>
              <div className="dashboardCard totalCandidates">
                <p>Total Canditates: {totalCandidates}</p>
              </div>
              <div className="dashboardCard noOfVotesDone">
                <p>Votes Casted: {votesCasted}</p>
              </div>
              <div className="dashboardCard noOfVotesRemaining">
                <p>Votes Remaining: {votesRemaining}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminHome