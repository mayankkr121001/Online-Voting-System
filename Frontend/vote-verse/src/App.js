import './App.css';
import './Admin.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import WrongRouteError from './components/WrongRouteError';
import VotingPage from './components/VotingPage';
import ThankYouPage from './components/ThankYouPage';

import AdminHome from './components/admin/AdminHome';
import Voters from './components/admin/Voters';
import Candidates from './components/admin/Candidates';
import Scheduler from './components/admin/Scheduler';
import VotingStatus from './components/admin/VotingStatus';
import Result from './components/admin/Result';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/vote' element={<VotingPage/>} />
        <Route path='/thanks' element={<ThankYouPage/>} />
        <Route path='/admin/dashboard' element={<AdminHome/>} />
        <Route path='/admin/voters' element={<Voters/>} />
        <Route path='/admin/candidates' element={<Candidates/>} />
        <Route path='/admin/scheduler' element={<Scheduler/>} />
        <Route path='/admin/votingstatus' element={<VotingStatus/>} />
        <Route path='/admin/result' element={<Result/>} />
        <Route path='*' element={<WrongRouteError/>} />
      </Routes>
    </div>
  );
}

export default App;
