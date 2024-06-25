import React, { useEffect, useState } from 'react';
import axios from 'axios';
import emailIcon from '../Images/email.svg';
import phoneIcon from '../Images/phone.svg';
import locationIcon from '../Images/location.svg';
import LinkedIcon from '../Images/linkedin.svg'
import githubIcon from '../Images/github.svg'
import './Template.css'

function UserTemplate() {
    const [data, setData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});

    const getData = () => {
        axios.get('http://localhost:5000/data')
            .then(response => {
                setData(response.data);
                setFormData(response.data);
            })
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSave = () => {
        setData(formData);
        setEditMode(false);
        // send the updated data to the server
        axios.post('http://localhost:5000/data', formData)
            .then(response => console.log('Data saved:', response))
            .catch(error => console.error('Error saving data:', error));
    }

    const PersonSkills = data.skills || []

    return (
        <body class="bg-gray-100 font-sans leading-normal tracking-normal py-10" id='NonePrintedArea'>
            <div class="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg" id='PrintedArea'>
                {!editMode ? (
                    <>
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
                                    <img src={locationIcon} alt='location' className='h-4 w-4' />
                                    {data.addr}
                                </p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-700 flex items-center gap-2 my-1">
                                    <img src={LinkedIcon} alt='linkedin' className='h-4 w-4' />
                                    {data.linkedin}
                                </p>

                                <p class="text-gray-700 flex items-center gap-2 my-1">
                                    <img src={githubIcon} alt='github' className='h-4 w-4' />
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

                        <div className='flex justify-center'>
                            <button onClick={() => setEditMode(true)} id='editbutton' className='border-3 border-black rounded-2xl px-24 py-2 font-medium text-lg hover:bg-black hover:text-white transition mt-4' >Edit</button>
                            <button onClick={handlePrint} id='printbutton' className='border-3 border-black rounded-2xl px-24 py-2 font-medium text-lg hover:bg-black hover:text-white transition mt-4 ml-4' >Print</button>
                        </div>
                    </>
                ) : (
                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Name</label>
                            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Major Skill</label>
                            <input type="text" name="majorSkill" value={formData.majorSkill || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Email</label>
                            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Phone Number</label>
                            <input type="text" name="phoneNO" value={formData.phoneNO || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Address</label>
                            <input type="text" name="addr" value={formData.addr || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">LinkedIn</label>
                            <input type="text" name="linkedin" value={formData.linkedin || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">GitHub</label>
                            <input type="text" name="github" value={formData.github || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Summary</label>
                            <textarea name="summary" value={formData.summary || ''} onChange={handleChange} className="p-2 border rounded"></textarea>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Post</label>
                            <input type="text" name="post" value={formData.post || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Company</label>
                            <input type="text" name="company" value={formData.company || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Starting Date</label>
                            <input type="text" name="startingDate" value={formData.startingDate || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Ending Date</label>
                            <input type="text" name="endingDate" value={formData.endingDate || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Description</label>
                            <textarea name="description" value={formData.description || ''} onChange={handleChange} className="p-2 border rounded"></textarea>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Degree</label>
                            <input type="text" name="degree" value={formData.degree || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Major Course</label>
                            <input type="text" name="MajorCourse" value={formData.MajorCourse || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">School</label>
                            <input type="text" name="school" value={formData.school || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Degree Completion Date</label>
                            <input type="text" name="degreeCompl" value={formData.degreeCompl || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold text-gray-700">Skills (comma separated)</label>
                            <input type="text" name="skills" value={formData.skills || ''} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className='border-3 border-black rounded-2xl px-24 py-2 font-medium text-lg hover:bg-black hover:text-white transition mt-4' >Save</button>
                        </div>
                    </form>
                )}
            </div>
        </body>
    );
}

export default UserTemplate;
