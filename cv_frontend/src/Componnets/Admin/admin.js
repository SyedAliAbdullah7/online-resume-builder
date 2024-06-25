import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [cvData, setcvData]= useState([]);
    const [users, setusers] = useState([]);

    useEffect(() => {
        fetchRegistrations();
        fetchCvData();
    }, []);

    const fetchRegistrations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cvdata');
            setcvData(response.data);
        } catch (error) {
            console.error('Error fetching cvData:', error);
        }
    };

    const fetchCvData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setusers(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Registrations</h2>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">LinkedIn</th>
                        <th className="px-4 py-2">GitHub</th>
                    </tr>
                </thead>
                <tbody>
                    {cvData.map((registration, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2">{registration.name}</td>
                            <td className="px-4 py-2">{registration.email}</td>
                            <td className="px-4 py-2">{registration.phoneNO}</td>
                            <td className="px-4 py-2">{registration.addr}</td>
                            <td className="px-4 py-2">{registration.linkedin}</td>
                            <td className="px-4 py-2">{registration.github}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">UserName</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2">{data.signupUsername}</td>
                            <td className="px-4 py-2">{data.signupEmail}</td>
                            <td className="px-4 py-2">{data.signupPassword}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;

