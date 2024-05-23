import './App.css';
import './Admin.css';
import Cookies from 'universal-cookie';
import { Routes, Route } from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import WrongRouteError from './components/WrongRouteError';
import VotingPage from './components/VotingPage';
import ThankYouPage from './components/ThankYouPage';

import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import Voters from './components/admin/Voters';
import Candidates from './components/admin/Candidates';
import Scheduler from './components/admin/Scheduler';
import VotingStatus from './components/admin/VotingStatus';
import Result from './components/admin/Result';
import { useEffect, useState } from 'react';

function App() {
  const [adminLoggedInStatus, setAdminLoggedInStatus] = useState(false);
  const [voterLoggedInStatus, setVoterLoggedInStatus] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    // console.log(cookies.get('adminData'));
    if(cookies.get('adminData')){
      setAdminLoggedInStatus(true);
    }else{
      setAdminLoggedInStatus(false);
    }

    if(cookies.get('voterData')){
      setVoterLoggedInStatus(true);
    }else{
      setVoterLoggedInStatus(false);
    }


  }, [])

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        {voterLoggedInStatus && <Route path='/vote' element={<VotingPage />} />}
        {voterLoggedInStatus && <Route path='/thanks' element={<ThankYouPage />} />}


        <Route path='/admin/login' element={<AdminLogin />} />
        {adminLoggedInStatus && <Route path='/admin/dashboard' element={<AdminHome />} />}
        {adminLoggedInStatus && <Route path='/admin/voters' element={<Voters />} />}
        {adminLoggedInStatus && <Route path='/admin/candidates' element={<Candidates />} />}
        {adminLoggedInStatus && <Route path='/admin/scheduler' element={<Scheduler />} />}
        {adminLoggedInStatus && <Route path='/admin/result' element={<Result />} />}
        <Route path='*' element={<WrongRouteError />} />
      </Routes>
    </div>
  );
}

export default App;
