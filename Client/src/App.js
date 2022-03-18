import { Routes, Route } from 'react-router-dom';
import React,{useState} from 'react';
import Appoinments from './components/appoinment/Appoinment';
import Home from './components/homeLayout/home/Home';
import Login from './components/login/Login';
import PrivateVerify from './components/login/private-route/PrivateVerify';
import "./style/global.css";
import Dashboard from './dashboard/Dashboard';
export const contextAuth = React.createContext();

function App() {
  const [logininfo, setLogininfo] = useState({});
  return (
    <contextAuth.Provider value={[logininfo, setLogininfo]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateVerify />}>
          <Route path="/appoinment" element={<Appoinments />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </contextAuth.Provider>
  );
}

export default App;
