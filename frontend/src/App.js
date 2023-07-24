import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import { HashRouter  as Router } from 'react-router-dom';

import Home from './Components/home';
import Deposit from './Components/deposit';
import Transfer from './Components/transfer';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import Login from './Components/login';
import Logout from './Components/logout';
import CreateAccount from './Components/createaccount';
import AccountSummary from './Components/accountsummary';
import About from './Components/about';
import Products from './Components/workinprogress';
import Reset from './Components/workinprogress';
import NavBar from './Components/navbar';
import Footer from './Components/footer';

import './styles/App.css';
import { Container } from 'react-bootstrap';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/fir-login';

import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return (
    <Container className="App" style={{height:'100vh'}}>
      <Router>
          
        {/* Add the navigation bar */}
        <NavBar />
        <h2 className='p-4'> 
              <span> Welcome to Carolinaz Bank</span>
        </h2>
        {user ? <div style={{display: 'flex', justifyContent: 'right'}}>{(user.displayName)} ({(user.email)})<br/> {(new Date().toLocaleDateString())} </div> : <></>}
       
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createAccount" exact element={<CreateAccount/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="/accountsummary" exact element={<AccountSummary/>} />
            <Route path="/deposit" exact element={<Deposit/>} />
            <Route path="/withdraw" exact element={<Withdraw/>} />
            <Route path="/transfer" exact element={<Transfer/>} />
            <Route path="/allData" exact element={<AllData/>} />
            <Route path="/logout" exact element= {<Logout/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/products" exact element={<Products/>} />
            <Route path="/reset" exact element={<Reset/>} />
          </Routes>
        <Footer />
    </Router>
  </Container>
  );
}

// In order to clarify import/export default and non-defaults, see this thread:
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281
export default App;
