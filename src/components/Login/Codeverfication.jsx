import React, { useState } from 'react';
import './Codeverfication.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Codeverfication() {
    const currentPathname = window.location.pathname;
    console.log(currentPathname);
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value) && index >= 0 && index < 6) {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);

            // Automatically focus on the next input field
            const nextIndex = index + 1;
            if (nextIndex <= 5) {
                const nextInput = document.getElementById(`verification-input-${nextIndex}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };


    const handleSubmit = async () => {
        const combinedCode = parseInt(verificationCode.join(''), 10);
        console.log('Combined Verification Code:', combinedCode);
        if (currentPathname !== "/forgetpassword") {
            const dataToSend = { code: combinedCode, SignupEmailVerify: true };
            console.log(dataToSend);
            try {
                let result = await fetch('http://localhost:5500/code', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend),
                });

                if (!result.ok) {
                    throw new Error('Error occurred during the request.');
                }

                result = await result.json();

                if (result.auth_token) {
                    console.log((result.user));
                    localStorage.setItem('user', JSON.stringify(result.user));
                    localStorage.setItem('token', result.auth_token);
                    navigate('/Home');
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Verification code is Wrong!",
                    });
                }
            } catch (error) {
                console.error('Error:', error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
        else {
            const data = { code: combinedCode, forgetpassword: true };
            try {
                let result = await fetch('http://localhost:5500/code', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                result = await result.json();
                console.log(result);

                if (result.Verify) {
                    navigate("/setpassword");
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Verification code is Wrong!",
                    });
                }
            } catch (error) {
                console.error('Error:', error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }

        }
    };

    const handleResend = async () => {
        try {
            let result = await fetch('http://localhost:5500/resend', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            if (result.resend) {
                Swal.fire({
                    icon: "success",
                    text: "Verification has been Resend.",
                    timer: 3500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }




    const handleSendCode = async () => {
        console.log(formik.values.email);
        const data = { email: formik.values.email };
        let result = await fetch('http://localhost:5500/forgetpassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        result = await result.json();
        if (result.resend) {
            Swal.fire({
                icon: "success",
                text: "Verification has been Resend.",
                timer: 3500
            });
        } else if (result.notalready) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email does not exist in the system. Please sign up.",
            });
        }
    }
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => handleSendCode(formik.values.email),
    });

    const handleForgetResend = async () => {
        try {
            let result = await fetch('http://localhost:5500/resendforFP', { //FP=Forget Password
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            if (result.resend) {
                Swal.fire({
                    icon: "success",
                    text: "Verification has been Sent.",
                    timer: 3500
                });
            } else if (result.notentermail) {
                Swal.fire({
                    icon: "error",
                    text: "Enter Your Email.",
                    timer: 3500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }

    return (
        <>
            <div className="page">
                <div className="verification-box">
                    <h2>Email Verification</h2>
                    {currentPathname === "/forgetpassword" && (
                        <div className="email-input-container">
                            <form onSubmit={formik.handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Enter your Email"
                                    className={`my-1 emailInput text-center ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                                        }`}
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    autoComplete='off'
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                )}
                                <button
                                    type="submit"
                                    className="btn btn-primary mx-1 send-code-button"
                                >
                                    Send Code
                                </button>
                            </form>
                        </div>
                    )}



                    <p>Enter the 6-digit code sent to your email.</p>

                    <div className="input-row">
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                id={`verification-input-${index}`}
                                type="text"
                                className="form-control verification-input"
                                maxLength="1"
                                required
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                autoComplete="off"
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginTop: 15, height: 40, padding: 9, width: 100 }}
                        onClick={handleSubmit}
                    >
                        Verify
                    </button>

                    <p>
                        Didn't receive the code? <span onClick={currentPathname === "/forgetpassword" ? handleForgetResend : handleResend} style={{ color: 'blue', textDecoration: "underline", cursor: "pointer" }}>Resend</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Codeverfication;
