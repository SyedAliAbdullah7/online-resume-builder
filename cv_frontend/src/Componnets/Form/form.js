import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import nameIcon from '../Images/name.svg'
import emailIcon from '../Images/email.svg'
import phoneIcon from '../Images/phone.svg'
import locationIcon from '../Images/location.svg'
import linkedInIcon from '../Images/linkedin.svg'
import githubIcon from '../Images/github.svg'

import skillIcon from '../Images/skill.svg'

import degreeIcon from '../Images/degree.svg'
import orgIcon from '../Images/school.svg'
import calenderIcon from '../Images/calender.svg'

import aboutIcon from '../Images/about.svg'
import jobIcon from '../Images/job.svg'
import descriptionIcon from '../Images/description.svg'


function Form({ResumeResult}) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNO, setphoneNO] = useState()
    const [addr, setaddr] = useState()
    const [linkedin, setlinkedin] = useState()
    const [github, setgithub] = useState()
    const [majorSkill, setmajorskill] = useState()

    const [summary, setsummary] = useState()

    const [post, setpost] = useState()
    const [company, setcompany] = useState()
    const [startingDate, setstartingDate] = useState()
    const [endingDate, setendingDate] = useState()
    const [description, setdescription] = useState()

    const [degree, setdegree] = useState()
    const [MajorCourse, setMajorCourse] = useState()
    const [school, setschool] = useState()
    const [degreeCompl, setdegreeCompl] = useState()

    const [skills, setSkills] = useState([])




    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = { name, email, phoneNO, addr, linkedin, github, majorSkill, summary, post, company, startingDate, endingDate, description, degree, MajorCourse, school, degreeCompl, skills };

        axios.post('http://localhost:5000/formdata', userData)
            .catch(error => console.error(error));
        Navigate(ResumeResult)
    }

    const addSkillField = () => {
        setSkills([...skills, '']);
    };

    const handleSkillChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index] = event.target.value;
        setSkills(newSkills);
    };


    return (
        <>
            <body className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 flex justify-center'>
                <form className='w-screen' onSubmit={handleSubmit}>
                    <div>
                        {/* Personal Information  */}
                        <div className='border-2 border-black p-6 rounded-2xl w-3/5 mx-auto'>
                            <h1 className='text-5xl m-4 text-center text-white font-bold'>Personal Information</h1>
                            <div className='flex flex-wrap gap-x-20 justify-center'>

                                <div id="name_field" >
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={nameIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='name'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; Abdullah"
                                            autoComplete='off'
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="email_field" >
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={emailIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='email'
                                            required
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@flowbite.com"
                                            autoComplete='off'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="PH_field" >
                                    <label for="PhoneNO" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={phoneIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="number"
                                            name='PhoneNO'
                                            required
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; 923056577432.."
                                            autoComplete='off'
                                            onChange={(e) => setphoneNO(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="Address_field" >
                                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={locationIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='address'
                                            required
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; gujrat"
                                            autoComplete='off'
                                            onChange={(e) => setaddr(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="majorSkill_field" >
                                    <label for="majorSkill" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Major Skill</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={skillIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='majorSkill'
                                            required
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; Graphic Designer"
                                            autoComplete='off'
                                            onChange={(e) => setmajorskill(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="linkedin_field" >
                                    <label for="linkedinSkill" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your LinkedIn URL</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={linkedInIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='linkedin'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="Only Developer can fill this field"
                                            autoComplete='off'
                                            onChange={(e) => setlinkedin(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="github_field" >
                                    <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Github Link</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={githubIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='github'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="Only Developer can fill this field"
                                            autoComplete='off'
                                            onChange={(e) => setgithub(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Educational Field */}
                        <div className='border-2 border-black p-6 rounded-2xl w-3/5 mx-auto my-4'>
                            <h1 className='text-5xl m-4 text-center text-white font-bold'>Educational Information</h1>
                            <div className='flex flex-wrap gap-x-20 justify-center'>

                                <div id="degree_field">
                                    <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Degree</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={degreeIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <select
                                            name="degree"
                                            id='degree'
                                            onChange={(e) => setdegree(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                        >
                                            <option value="" disabled selected>Select your Educational Degree</option>
                                            <option value="Matric">Matric</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Becholars">Becholars</option>
                                            <option value="Masters">Masters</option>
                                            <option value="PHD">PHD</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="MajorCourse_field" >
                                    <label for="MajorCourse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Major Course</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={degreeIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='MajorCourse'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="e.g; Computer Science"
                                            autoComplete='off'
                                            onChange={(e) => setMajorCourse(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="organization_field" >
                                    <label for="organization" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Organization</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={orgIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='organization'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="e.g; University Of Gujrat"
                                            autoComplete='off'
                                            onChange={(e) => setschool(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="year_field" >
                                    <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Completion Year</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={calenderIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="number"
                                            name='Year'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; 2020"
                                            autoComplete='off'
                                            onChange={(e) => setdegreeCompl(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Skill Information */}
                        <div className='mt-4 border-2 border-black p-6 rounded-2xl w-3/5 mx-auto'>
                            <h1 className='text-5xl m-4 text-center text-white font-bold'>Skills</h1>
                            <div className='flex flex-wrap gap-x-20 justify-center'>
                                {skills.map((skill, index) => (
                                    <div key={index} id={`skill_field_${index}`}>
                                        <label htmlFor={`skill_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill {index + 1}</label>
                                        <div className="relative mb-6">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <img src={skillIcon} alt='icon' className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="text"
                                                name={`skill_${index}`}
                                                value={skill}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                                placeholder={`Skill ${index + 1}`}
                                                autoComplete='off'
                                                onChange={(e) => handleSkillChange(index, e)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={addSkillField}
                                >
                                    Add Skill
                                </button>
                            </div>
                        </div>



                        {/* Experience Section  */}
                        <div className='border-2 border-black p-6 rounded-2xl w-3/5 mx-auto my-4'>
                            <h1 className='text-5xl m-4 text-center text-white font-bold'>Experience</h1>
                            <div className='flex flex-wrap gap-x-20 justify-center'>

                                <div id="post_field" >
                                    <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Post</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={jobIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='post'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            placeholder="e.g; Manager"
                                            autoComplete='off'
                                            onChange={(e) => setpost(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="Company_field" >
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={orgIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='company'
                                            placeholder='e.g; ABC Corporation'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            autoComplete='off'
                                            onChange={(e) => setcompany(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="startDate_field" >
                                    <label for="startDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Starting Date</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={calenderIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='startingDate'
                                            placeholder='June, 2021'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            autoComplete='off'
                                            onChange={(e) => setstartingDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="endingDate_field" >
                                    <label for="endingDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Ending Date</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={calenderIcon} alt='icon' className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            name='endingDate'
                                            placeholder='July, 2023'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                                            autoComplete='off'
                                            onChange={(e) => setendingDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div id="description_field" >
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Job Description</label>
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={descriptionIcon} alt='icon' className="w-6 h-6" />
                                        </div>
                                        <textarea
                                            type="text"
                                            name='description'
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 h-24"
                                            autoComplete='off'
                                            onChange={(e) => setdescription(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* summary  */}
                        <div className='border-2 border-black p-6 rounded-2xl w-3/5 mx-auto my-4'>
                            <h1 className='text-5xl m-4 text-center text-white font-bold'>About</h1>
                            <div className='flex flex-wrap gap-x-20 justify-center'>

                                <div id="Summary_field" >
                                    <div class="relative mb-6">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <img src={aboutIcon} alt='icon' className="w-6 h-6" />
                                        </div>
                                        <textarea
                                            type="text"
                                            name='about'
                                            required
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 h-24"
                                            autoComplete='off'
                                            onChange={(e) => setsummary(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" class="border-3 border-gray-900 px-20 py-1 rounded-3xl text-white font-medium text-lg bg-slate-500 hover:shadow-2xl">Submit</button>
                    </div>
                </form>
            </body>

        </>
    );
}

export default Form;
