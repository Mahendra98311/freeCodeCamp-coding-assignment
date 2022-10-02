import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",mail:"",password:"",cpassword:""
    });
    
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;
        
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

         const data = await res.json();

        if(data.status=== 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            navigate("/login");
            //useHistory("/login");
        }
    }

    return (
      <>
          <h1>we are on Register page</h1>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="register-content">
  
                        <div className="register-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="POST" className="registered-form" id="registered-form">
                            
                            <div className="form-group">
                              <label htmlFor="name">
                                  <i className="zmdi zmdi-name material-icons-name"></i>
                                </label>
                                  <input type="name" name="name" id="name" autoComplete="off" 
                                  value={user.name} onChange={handleInputs}
                                  placeholder="Your Name"/>
                              </div>
                              <div className="form-group">
                              <label htmlFor="email">
                                  <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                  <input type="email" name="email" id="email" autoComplete="off" 
                                  value={user.email} onChange={handleInputs}
                                  placeholder="Your Email"/>
                              </div>
  
                              <div className="form-group">
                                  <label htmlFor="password">
                                      <i className="zmdi zmdi-lock material-icons-name"></i>
                                  </label>
                                  <input type="password" name="password" id="password" autoComplete="off" 
                                  value={user.password} onChange={handleInputs}
                                  placeholder="Your Password"/>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="cpassword">
                                      <i className="zmdi zmdi-lock material-icons-name"></i>
                                  </label>
                                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                   value={user.cpassword} onChange={handleInputs}
                                   placeholder="Confirm Your Password"/>
                              </div>
  
                              <div className="form-group">
                                  <input type="submit" name="register" id="register" className="form-submit" value="Create Account" onClick={PostData}/>
                              </div>
  
                             </form>   
                             <NavLink to="/login" className="registered-link">I'm already registered</NavLink>
                      </div>
  
                  </div>
              </div>
          </section>
                
      </> 
    )
  }

export default Register