import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import WrongRouteError from './components/WrongRouteError';
import VotingPage from './components/VotingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/vote' element={<VotingPage/>} />
        <Route path='*' element={<WrongRouteError/>} />
      </Routes>
    </div>
  );
}

export default App;
