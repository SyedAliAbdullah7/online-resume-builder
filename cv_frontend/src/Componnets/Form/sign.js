import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignForm({ status }) {
    const [isLogin, setIsLogin] = useState(status);
    const [signupEmail, setsignupEmail] = useState()
    const [signupUsername, setsignupUsername] = useState()
    const [signupPassword, setsignupPassword] = useState()
    const [loginEmail, setloginEmail] = useState()
    const [loginPassword, setloginPassword] = useState()

    const navigate = useNavigate()
    let logInError = document.querySelector("#result")

    const handleLogIN = (e) => {

        e.preventDefault()
        const logINData = { loginEmail, loginPassword }

        axios.post('http://localhost:5000/login', logINData)
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/user')
                }
                else{
                    logInError.innerHTML = "Email or Password is incorrect"
                    logInError.classList.add("text-red-900")
                }
            })
            .catch(error => console.error(error));
    }

    const handleSignUp = () => {
        
        const signUPData = { signupEmail, signupUsername, signupPassword }

        axios.post('http://localhost:5000/signup', signUPData)
            .catch(error => console.error(error));
        navigate('/sign-in');
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="backdrop-blur-sm bg-white/30 shadow-2xl p-10 rounded-lg flex flex-col gap-8 w-full max-w-lg">
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-4 py-2 mx-2 ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg w-48 font-serif font-medium focus:outline-none`}
                        onClick={() => setIsLogin(true)}
                    >
                        Sign IN
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg w-48 font-serif font-medium focus:outline-none`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign
                    </button>
                </div>

                {isLogin ? (
                    <form className="flex flex-col">
                        <h1 className="text-2xl font-bold mb-4 text-center" id='result'>Welcome back!</h1>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="loginEmail" className="mb-2 text-gray-700">Email / Username</label>
                            <input
                                type="text"
                                id="loginEmail"
                                name="loginEmail"
                                autoComplete='off'
                                onChange={(e) => setloginEmail(e.target.value)}
                                required
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="loginPassword" className="mb-2 text-gray-700">Password</label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="loginPassword"
                                autoComplete='off'
                                required
                                onChange={(e) => setloginPassword(e.target.value)}
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button type="submit" onClick={handleLogIN} className="w-full bg-slate-950 text-white py-2 rounded-lg hover:bg-blue-600">
                            Sign In
                        </button>
                    </form>
                ) : (
                    <form className="flex flex-col">
                        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="signupUsername" className="mb-2 text-gray-700">Username</label>
                            <input
                                type="text"
                                id="signupUsername"
                                name="signupUsername"
                                autoComplete='off'
                                onChange={(e) => setsignupUsername(e.target.value)}
                                required
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="signupEmail" className="mb-2 text-gray-700">Email</label>
                            <input
                                type="email"
                                id="signupEmail"
                                name="signupEmail"
                                autoComplete='off'
                                onChange={(e) => setsignupEmail(e.target.value)}
                                required
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="signupPassword" className="mb-2 text-gray-700">Password</label>
                            <input
                                type="password"
                                id="signupPassword"
                                name="signupPassword"
                                autoComplete='off'
                                onChange={(e) => setsignupPassword(e.target.value)}
                                required
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button type="submit" onClick={handleSignUp} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Sign Up
                        </button>
                    </form>
                )}
            </div>

            <p className='my-4 text-white font-normal text-lg'>Continue as a <Link to={"/guest/form"} className='text-sky-600'>Guest</Link> </p>
        </div>
    );
}

export default SignForm;
