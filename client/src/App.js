import { Fragment, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


//components
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  const [isAuthenticated, setIsAuthenthicated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenthicated(boolean)
  }

  async function isAuth(){
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify",{
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json()
      parseRes === true ? setIsAuthenthicated(true) : setIsAuthenthicated(false)

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(()=>{
    isAuth()
  },[])

  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path='/login' element={ !isAuthenticated ? < Login setAuth={setAuth} /> : <Navigate replace to="/dashboard" />} />
            
            <Route exact path='/register' element={ !isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate replace to="/login" /> } />
            
            <Route exact path='/dashboard' element={ isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate replace to="/login" /> } />
          </Routes>

        </div>
      </Router>
    </Fragment>
  );
}

export default App;
