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
    console.log(`Hey we received an access key on the App level as ${auth.access_token}`);
    setLoggedIn(auth.access_token!=="");
  }

  const handelLogout = () =>{
    setLoggedIn(false);
    console.log(`You logged out successfully!`);
  }

  if(loggedIn) {
    authorizedPage = <Index onLogout={handelLogout}/>
  } else {
    authorizedPage = <Login onLoginSuccess={handelLoginSuccess} />;
  }
  return <Storecontext.Provider value={store as any}>{authorizedPage}</Storecontext.Provider>;
}

export default App;