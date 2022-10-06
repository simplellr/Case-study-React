import { useState } from "react";
import axios from "axios";
import {useNavigate ,Link} from "react-router-dom";


export default function UserRegistration() {
    let navigate = useNavigate();
    const [Name, setName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [CPassword, setCPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [Allok, setAllok] = useState(false);

    const [isSubmit, setIsSubmit] = useState(false);
    const validate = (out) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        setAllok(true);
        console.log(Allok);
        if (!out.Name) {
            errors.name = "Name is required!";
            setAllok(false);
        }
        if (!out.UserName) {
            errors.username = "Username is required!";
            setAllok(false);
        }
        if (!out.Email) {
            errors.email = "Email is required!";
            setAllok(false);
        } else if (!regex.test(out.Email)) {
            errors.email = "This is not a valid email format!";
            setAllok(false);
        }
        if (!out.Password) {
            errors.password = "Password is required";
            setAllok(false);
        } else if (out.Password.length < 4) {
            errors.password = "Password must be more than 4 characters";
            setAllok(false);
        } else if (out.Password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
            setAllok(false);
        }
        if (!CPassword.length) {
            errors.cpassword = "Confirm Password is required";
            setAllok(false);
        } else if (out.Password !== CPassword) {
            errors.cpassword = "Password Doesn't match";
            setAllok(false);
        }
        return errors;
    };

    async function Submit(e) {
        e.preventDefault();
        console.log(Allok);
        const out = {
            "Name": Name,
            "UserName": UserName,
            "Email": Email,
            "Password": Password
        };
        setFormErrors(validate(out));
        console.log(Allok);
        console.log(formErrors)
        console.log(out);
        if (Allok) {
            axios.post("http://localhost:24396/api/UserRegistration", out)
                .then(function (response) {
                    console.log(response.data);
                    console.log(response.status);
                    setIsSubmit(true);
                })
                .catch(function (error) {
                    if (error.request.status === 500) {
                        alert("Username already exist")
                    } else {
                        alert(error.message)
                    }
                });
        }
    }
    return (
        <>
            <div className="login">
              
            <form className="user-form">
            <h2>Registration</h2>
                   
                    <div >
                        <label>Name <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.name}</label>}
                    </div>
                    <input required type="text" placeholder="Name" onChange={event => setName(event.target.value)}></input>

                    <div >
                        <label>Username <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.username}</label>}
                    </div>
                    <input required type="text" placeholder="Username" onChange={event => setUserName(event.target.value)}></input>

                    <div >
                        <label>Email <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.email}</label>}
                    </div>

                    <input required type="text" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
                    <div >
                        <label>Password <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.password}</label>}
                    </div>
                    <input required type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>

                    <div >
                        <label>Confirm Password <span className="star-important">*</span></label>
                        {<label className="labelalert">{formErrors.cpassword}</label>}
                    </div>
                    <input required type="password" placeholder="Confirm Password" onChange={event => setCPassword(event.target.value)}></input>


                    <button className="login-button" onClick={(e) => Submit(e)}>Register</button>
                    <br />
                    <Link  className="btnlink" to="/"><b>Have an account, Login here</b></Link>
                   
                    </form>
                  
            </div>
        </>
    );
}