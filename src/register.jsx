import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from "./food.jpg";
import { useState } from 'react';
import tick from "./tick.png";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/login');
        }, 3300);
    };

    return (
        <div className="flex justify-center items-center h-screen relative">
            <img src={food} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="border w-1/2 border-red-500 rounded relative z-10 bg-white p-2">
                <b className="text-2xl">Log in</b><br />Log in to save and review your favorite recipes.<br />
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start w-80">
                        <p className="text-base font-bold mb-2">Email address</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-500 rounded px-2 py-1 w-full"
                            placeholder="username" required
                        />
                        <p className="text-base font-bold mt-4 mb-2">Password</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-500 rounded px-2 py-1 w-full"
                            placeholder="Enter your password" required
                        />
                        <button
                            className="bg-red-500 text-white rounded py-1 mt-4 text-base w-full mb-2"
                            onClick={handleChange}
                        >
                            Join now
                        </button>
                        {showSuccessMessage && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-white rounded-lg overflow-hidden  max-w-sm w-full p-3 flex flex-col items-center ">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
                
            </div>
            <img src={tick} className="w-8 h-8 mb-4" />
            <p className="text-medium">Account created successfully!</p>
        </div>
    </div>
)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
