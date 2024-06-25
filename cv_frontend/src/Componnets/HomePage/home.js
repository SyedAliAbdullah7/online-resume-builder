import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <body className='flex justify-center items-center h-screen w-screen bg-gradient-to-r from-neutral-700 to-stone-400 text-white' id='background'>
            <div className='w-3/5 mr-24'>
                <h1 className='font-bold text-7xl text-center my-2 text-slate-900'>Resume Builder</h1>
                <p className='text-center text-xl w-3/4 m-auto text-slate-900'>Resume builder is helpful to create your professional resume. Resume Builder is helpful to showcase your skills and experience.</p>
                <div className='flex justify-center m-3'>
                    <Link to={"sign-up"} className='border-3 border-slate-950 px-12 py-2 text-lg rounded-lg  mx-4 text-slate-900 font-semibold hover:bg-gray-900 hover:transition-colors hover:text-gray-50'>
                        SIGN UP
                    </Link>
                    <Link to={"sign-in"} className='border-3 border-slate-950 px-12 py-2 text-lg rounded-lg mx-4 text-slate-900 font-semibold hover:bg-gray-900 hover:transition-colors hover:text-gray-50'>
                        SIGN IN
                    </Link>
                </div>
            </div>
        </body>
    )
}

export default Home
