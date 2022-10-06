import { useState } from "react";
import axios from "axios";
import {useNavigate ,Link} from "react-router-dom";

export default function UserLogin() {

    let navigate = useNavigate();
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [Allok, setAllok] = useState(false);
    const [LoginResponse, setLoginResponse] = useState('');


    const validate = (out) => {
        const errors = {};
        setAllok(true);
        console.log(Allok);
        if (!out.UserName) {
            errors.username = "Username is required!";
            setAllok(false);
        }
        if (!out.Password) {
            errors.password = "Password is required";
            setAllok(false);
        }
        return errors;
    };

    async function Submit(e) {
        console.log(Allok);
        const out = {
            "UserName": UserName,
            "Password": Password
        };
        setFormErrors(validate(out));
        console.log(Allok);
        console.log(formErrors)
        console.log(out);
        if (Allok) {
            axios.get("http://localhost:24396/api/userregistration", { params: out }
            ).then((response) => {
                console.log(response.data[0]);
                console.log(response.status);
                if (response.data[0].matches === 0) {
                    setLoginResponse("No Account with that Username or password..");
                }
                else {
                    setLoginResponse("Account Found");
                    console.log(response.status)
                    localStorage.setItem("UserName", UserName);
                    localStorage.setItem("UserLogin", true);
                    navigate('/Home');
                }

            }).catch(function (error) {
                alert(error.message);
            })
        }
        e.preventDefault();
    }
    return (
        <>
            <div className="login">
                <form className="user-form">
                    <h2>LOGIN</h2>
                    <div >
                        <label>Username <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.username}</label>}
                    </div>
                    <input required type="text" placeholder="Username" onChange={event => setUserName(event.target.value)}></input>
                    <div >
                        <label>Password <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.password}</label>}
                    </div>
                    <input required type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                    <button className="login-button" onClick={(e) => Submit(e)}>LOGIN</button>
                    {<label className="labelalert">{LoginResponse}</label>}
                   
                    <Link className="btnlink" to="/UserRegistration"><b>New user?Register Now</b></Link>
                </form>
            </div>
        </>
    );
}