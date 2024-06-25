import React from 'react'
import { Link } from 'react-router-dom'
import cvTemplateSample from '../Images/resume-template.avif'

function Main() {
    return (
        <div className='flex justify-center items-center py-40'>
            <div>
                <h1 className='text-center font-medium text-2xl'>Online Resume Builder</h1>
                <p className='text-center font-bold text-5xl w-3/5 mx-auto'>Only 2% of resumes make it past the first round. Be in the top 2%</p>
                <p className='w-9/12 mx-auto text-center text-lg my-3'>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
                <div className='flex justify-center'>
                    <Link to={"/user/form"} className='bg-blue-900 px-12 py-2 text-white font-semibold text-xl rounded hover:shadow-xl' >Create My Resume</Link>
                </div>
                <div className='flex justify-center my-7'>
                    <img src={cvTemplateSample} alt='template'/>
                </div>
            </div>
        </div>
    )
}

export default Main