import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';




const Login = () => {

    const navigate = useNavigate();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if(res.status === 404 || !data) {
            window.alert("Invalid Credentials");
        }else {
            window.alert("Login Successfully");
            navigate("/courses")
        }
    }

  return (
    <>
        <h1>we are on login page</h1>
          <section className="sign-in">
              <div className="container mt-5">
                  <div className="login-content">

                      <div className="login-form">
                          <h2 className="form-title">Sign in</h2>
                          <form method="POST" className="registered-form" id="registered-form">

                            <div className="form-group">
                            <label htmlFor="email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                              </label>
                                <input type="email" name="email" id="email" autoComplete="off" 
                                value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}   
                                 placeholder="Your Password"/>
                            </div>

                            <div className="form-group">
                                <input type="submit" name="signin" id="signin" className="form-submit" 
                                value="Log In"
                                 onClick={loginUser}  
                                />
                            </div>

                           </form>   
                    </div>

                </div>
            </div>
        </section>
              
    </> 
  )
}

export default Login