import React from 'react';
import './App.scss';
import store from  "./store/configureStore";
import Storecontext from './contexts/storeContext';
import Home from './modules/Home';
import SideFilter from './modules/common/SideFilter';
import { Link, Outlet } from "react-router-dom";
import Nav from './modules/common/Nav';

function App() {
  return (
    <Storecontext.Provider value={store as any}>
      <div className="container">
        <div className='row bg-primary text-white text-center'>
          <div className='col-12'>New - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tincidunt lorem.</div>
        </div>
        <div className='row'>
          <div className='col-lg-1'>
            <Link to={`/`} className='navbar-brand mr-0 mr-md-2'>
              <img src='logo1.png' width={50} />
            </Link>
          </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-12'>
                <div className="input-group mb-3 mt-2">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='row'>
              <Nav />
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='row'>
              <div className='col-2 pt-2'>
                <a href="/" className='text-center'>
                  <i className="bi bi-bell-fill"></i>
                </a>
              </div>
              <div className='col-2 pt-2'>
                <a href="/" className='text-center'>
                  <i className="bi bi-chat-fill"></i>
                </a>
              </div>
              <div className='col-2 pt-2'>
                <a href="/" className='text-center'>
                  <i className="bi bi-calendar-date-fill"></i>
                </a>
              </div>
              <div className='col-2 pt-2'>
                <a href="/" className='text-center'>
                  <i className="bi bi-cart-fill"></i>
                </a>
              </div>
              <div className='col-4'>
                <div className='row'>
                  <div className='col-1 pt-2'>
                    <span className='text-end'>
                      <i className="bi bi-three-dots-vertical"></i>
                    </span>
                  </div>
                  <div className='col-8 pt-2 text-end'>
                    <a href="/">
                      <i className="bi bi-file-person-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-top row'>
          <div className='col-lg-3 text-bg-light border-end'>
            <SideFilter />
          </div>
          <div className='col-lg-9'><Outlet /></div>
        </div>
        <footer className='border-top row'>
          <div className='col-12'>
            &copy; 2024 Ut accumsan volutpat nunc at vestibulum. Vivamus a ipsum et urna suscipit hendrerit.
          </div>
        </footer>
      </div>
    </Storecontext.Provider>
  );
}

export default App;