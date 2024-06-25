import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailIcon from '../Images/email.svg';
import phoneIcon from '../Images/phone.svg';
import locationIcon from '../Images/location.svg';
import LinkedIcon from '../Images/linkedin.svg'
import githubIcon from '../Images/github.svg'
import './Template.css'

function GuestTemplate() {
    const [data, setData] = useState({});

    const getData = () => {
        axios.get('http://localhost:5000/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        getData();
    }, []);


    const handlePrint = () => {
        let PrintedArea = document.querySelector('#PrintedArea')
        PrintedArea.classList.remove('shadow-lg')
        document.title = 'Resume'
        window.print();
    };


    const PersonSkills = data.skills || []

    return (

        <body class="bg-gray-100 font-sans leading-normal tracking-normal py-10" id='NonePrintedArea'>
            <div class="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg" id='PrintedArea'>

                <div class="flex items-center justify-center mb-10">
                    <div>
                        <h1 class="text-5xl font-bold text-gray-800">{data.name}</h1>
                        <p class="text-2xl my-1 font-normal text-gray-600 text-center">{data.majorSkill}</p>
                    </div>
                </div>

                <div class="flex justify-between mb-10">
                    <div>
                        <p class="text-gray-700 flex items-center gap-2 my-1">
                            <img src={emailIcon} alt='email' className='h-4 w-4' />
                            {data.email}
                        </p>
                        <p class="text-gray-700 flex items-center gap-2 my-1">
                            <img src={phoneIcon} alt='phone' className='h-4 w-4' />
                            {data.phoneNO}
                        </p>
                        <p class="text-gray-700 flex items-center gap-2 my-1">
                            <img src={locationIcon} alt='phone' className='h-4 w-4' />
                            {data.addr}
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-gray-700 flex items-center gap-2 my-1">
                            <img src={LinkedIcon} alt='phone' className='h-4 w-4' />
                            {data.linkedin}
                        </p>

                        <p class="text-gray-700 flex items-center gap-2 my-1">
                            <img src={githubIcon} alt='phone' className='h-4 w-4' />
                            {data.github}
                        </p>
                    </div>
                </div>

                <div class="mb-10">
                    <h2 class="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 font-serif">Profile Summary</h2>
                    <p class="text-gray-700">{data.summary}</p>
                </div>

                <div class="mb-10">
                    <h2 class="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 font-serif">Experience</h2>
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-gray-800">{data.post}</h3>
                        <p class="text-gray-600">{data.company} </p>
                        <p class="text-gray-600">{data.startingDate} - {data.endingDate} </p>

                        <ul class="list-disc list-inside text-gray-700 ml-5">
                            <li>{data.description}</li>
                        </ul>
                    </div>
                </div>

                <div class="mb-10">
                    <h2 class="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 font-serif">Education</h2>
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-gray-800">{data.degree} in {data.MajorCourse} | {data.school}</h3>
                        <p class="text-gray-600">{data.degreeCompl}</p>
                    </div>
                </div>

                <div class="mb-10">
                    <h2 class="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 font-serif">Skills</h2>
                    <div class="flex flex-wrap" id='skillData_field'>
                        {PersonSkills.map((skill, index) => (
                            <span key={index} class="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div class="text-center mt-10">
                    <p class="text-gray-600">© 2024 Resume Builder. All rights reserved.</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <button onClick={handlePrint} id='printbutton' className='border-3 border-black rounded-2xl px-24 py-2 font-medium text-lg hover:bg-black hover:text-white transition mt-4' >Print</button>
            </div>
        </body>




    );
}

export default GuestTemplate;
