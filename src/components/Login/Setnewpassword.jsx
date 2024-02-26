import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import Swal from 'sweetalert2';
import "./Login.css";
import { Setpasswordscema } from './Setpasswordscema';

function Setnewpassword() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();  // Correct usage

    const switchMode = () => {
        setIsSignUpMode(prevMode => !prevMode);
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5500/getemail', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            if (result.email) {
                setEmail(result.email);
            } else {
                alert("Something goes wrong");
                navigate("/");  // Use navigate instead of Navigate
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const passwordInitialValue = {
        password: "",
        Confirm_password: "",
    };

    const passwordFormik = useFormik({
        initialValues: passwordInitialValue,
        validationSchema: Setpasswordscema,
        onSubmit: async (data) => {
            data = {email:email, password:data.password};
            
            const response = await fetch('http://localhost:5500/updatepassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.update) {
                Swal.fire({
                    icon: "success",
                    text:"Password has been Update. Signin into your accout.",
                    timer: 3500
                });
                navigate("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
    });

    const [showUpdatePassword, setShowUpdatePassword] = useState(false);

    const Updatepasswordtoggle = () => {
        setShowUpdatePassword((prevShowUpdatePassword) => !prevShowUpdatePassword);
    };

    const [showUpdateConfirmPassword, setShowUpdateConfirmPassword] = useState(false);

    const Updateconfirmpasswordtoggle = () => {
        setShowUpdateConfirmPassword((prevShowUpdateConfirmPassword) => !prevShowUpdateConfirmPassword);
    };

    return (
        <>
            <div className={`Container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={passwordFormik.handleSubmit}>
                            <h2 className="title" style={{fontSize:30}}>Set new password</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name='mail'
                                    value={email}
                                    readOnly
                                />
                            </div>
                            {
                                passwordFormik.errors.password && passwordFormik.touched.password ?
                                    <p className='mb-1' style={{ color: 'red' }}>{passwordFormik.errors.password}</p> : null
                            }
                            <div className="input-fieldp">
                                <i className="mx-2 fas fa-lock"></i>
                                <input
                                    className='text-secondary flex-grow-1'  // Added flex-grow-1 for input to take remaining space
                                    type={showUpdatePassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    name='password'
                                    value={passwordFormik.values.password}
                                    onChange={passwordFormik.handleChange}
                                    onBlur={passwordFormik.handleBlur}
                                />
                                <i className={`fas ${showUpdatePassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={Updatepasswordtoggle}></i>
                            </div>

                            {
                                passwordFormik.errors.Confirm_password && passwordFormik.touched.Confirm_password ?
                                    <p className='mb-1' style={{ color: 'red' }}>{passwordFormik.errors.Confirm_password}</p> : null
                            }

                            <div className="input-fieldp">
                                <i className="mx-2 fas fa-lock"></i>
                                <input
                                    className='text-secondary flex-grow-1'  // Added flex-grow-1 for input to take remaining space
                                    type={showUpdateConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    name='Confirm_password'
                                    value={passwordFormik.values.Confirm_password}
                                    onChange={passwordFormik.handleChange}
                                    onBlur={passwordFormik.handleBlur}
                                />
                                <i className={`fas ${showUpdateConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={Updateconfirmpasswordtoggle}></i>
                            </div>

                            <button style={{ marginTop: 5 }} type="submit" className="btn solid" >Update</button>
                            <ul>
                                <li className='text-secondary'>Password must contain at least one uppercase letter</li>
                                <li className='text-secondary'>one lowercase letter, one number</li>
                                <li className='text-secondary'>one special character</li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>

                        </div>
                        <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Setnewpassword;
