import { FormEvent, useContext, useState } from "react";
import Storecontext from "../contexts/storeContext";
import { postLogin } from "../store/login";
import HeaderAnnouncements from './common/HeaderAnnouncements';
import React from "react";
import Footer from "./common/Footer";

export default function Login() {
    const store = useContext(Storecontext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);

    const unsubscribe = store.subscribe(()=>{
        console.log(`subscribed`)
    });

    function loginFormSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log(email);
        console.log(password);
        console.log(keepLogin);
        store.dispatch(postLogin({
            url: "auth/login", 
            method: "POST", 
            data: { email, password, keepLogin }, 
            onSuccess: "login/successActions", 
            onError: "login/errorActions"
        }));
    }
    
    return <div className="container">
      <HeaderAnnouncements message="Login to continue ..." />
      <div>
        <form onSubmit={evt=>{
          loginFormSubmit(evt);
        }}>
          <div className="form-group">
            <label>Login email</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="persistence24" name="persistence24" onChange={(e) => { 
              console.log()
              return setKeepLogin(e.target.checked)
            }} />
            <label className="form-check-label">Keep me loggedIn for 24 hours</label>
          </div>
          <button type="submit" className="btn btn-primary" name="submit">Submit</button>
        </form>         
      </div>
      <Footer />
    </div>
}