import React, { useState } from 'react';
import './App.scss';
import store from  "./store/configureStore";
import Storecontext from './contexts/storeContext';
import Login from './modules/Login';
import Index from './modules/Index';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let authorizedPage = <Login />;

  const handelLoginSuccess = (auth: {access_token:string}) =>{
    setLoggedIn(auth.access_token!=="");
  }

  const handelLogout = () =>{
    setLoggedIn(false);
  }

  if(loggedIn) {
    authorizedPage = <Index onLogout={handelLogout}/>
  } else {
    authorizedPage = <Login onLoginSuccess={handelLoginSuccess} />;
  }
  return <Storecontext.Provider value={store as any}>{authorizedPage}</Storecontext.Provider>;
}

export default App;