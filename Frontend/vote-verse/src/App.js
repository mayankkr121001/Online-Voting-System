import './App.css';
import './Admin.css';
import { Routes, Route } from "react-router-dom"
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import AdminProtectedRoutes from './utils/AdminProtectedRoutes.jsx'

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import UserResult from './components/UserResult';
import WrongRouteError from './components/WrongRouteError';
import VotingPage from './components/VotingPage';
import ThankYouPage from './components/ThankYouPage';

import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import Voters from './components/admin/Voters';
import Candidates from './components/admin/Candidates';
import Scheduler from './components/admin/Scheduler';
import AdminResult from './components/admin/Result';

function App() {


  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/result' element={<UserResult />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/vote' element={<VotingPage />} />
          <Route path='/thanks' element={<ThankYouPage />} />

        </Route>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route element={<AdminProtectedRoutes />}>
          <Route path='/admin/dashboard' element={<AdminHome />} />
          <Route path='/admin/voters' element={<Voters />} />
          <Route path='/admin/candidates' element={<Candidates />} />
          <Route path='/admin/scheduler' element={<Scheduler />} />
          <Route path='/admin/result' element={<AdminResult />} />
        </Route>

        <Route path='*' element={<WrongRouteError />} />
      </Routes>
    </div>
  );
}

export default App;
