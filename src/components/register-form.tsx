import axios from "axios";
import { useEffect, useState } from "react";
import { FaBirthdayCake, FaEye, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordBis, setPasswordBis] = useState('');
    const [msgPassword, setMsgPassword] = useState('');
    const [birth, setBirth] = useState('');  
    const navigate = useNavigate();

    useEffect(() => {
        if (password !== passwordBis) {
            setMsgPassword('passwords are not the same');
        }
    }, [password, passwordBis]);

    const handleSubmit = () => {
        if (password !== passwordBis) {
            return;
        }

        if (username === '' || password === '' || passwordBis === '') {
            return;
        }

        axios.post('http://localhost:8081/users/register', 
            JSON.stringify({
            "username": username,
            "password": password,
            "birthdate": birth
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            navigate('/login');
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (        
        <form className="max-w-lg max-md:mx-auto w-full p-6">
            <div className="mb-12">
                <h3 className="text-gray-800 text-4xl font-extrabold">Register</h3>
                <p className="text-gray-800 text-sm mt-6">Immerse yourself in a hassle-free Register journey with our intuitively designed Register form. Effortlessly access your account.</p>
            </div>

            <div>
                <label className="text-gray-800 text-[15px] mb-2 block">Username</label>
                <div className="relative flex items-center">
                    <input name="username" type="text" required 
                        className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter username"
                        onChange={(e) => { setUsername(e.target.value) }} />
                    <FaUser className="absolute right-4 text-gray-400" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
                <div className="relative flex items-center">
                    <input name="password" type="password" required 
                        className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <FaEye className="absolute right-4 text-gray-400" />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">Rewrite Password</label>
                <div className="relative flex items-center">
                    <input name="passwordBis" type="password" required 
                        className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600" placeholder="Enter password"
                        onChange={(e) => { setPasswordBis(e.target.value) }} />
                    <FaEye className="absolute right-4 text-gray-400" />
                </div>
                <p className={`mt-2 text-sm text-red-500 font-light ${ (password === '' || passwordBis === '') || (password === passwordBis) ? "opacity-0" : "opacity-100"} `}>{msgPassword}</p>
            </div>

            <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">Birthday</label>
                <div className="relative flex items-center">
                    <FaBirthdayCake className="absolute left-4 text-gray-400" />
                    <input name="birth" type="date" required 
                        className="w-1/2 text-sm text-gray-800 bg-gray-100 focus:bg-transparent pl-16 px-4 py-3.5 rounded-md outline-blue-600"
                        onChange={(e) => { setBirth(e.target.value) }} />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
                <div className="flex items-center">
                </div>  
                <div className="text-sm">
                    <a href="jajvascript:void(0);" className="text-blue-600 font-semibold hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div className="mt-8">
                <button type="button" onClick={() => { handleSubmit() }}
                    className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Sign Up
                </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">Already have an account? <Link to="/login" className="text-blue-600 font-semibold tracking-wide hover:underline ml-1">Login here</Link></p>
        </form>
    );
}

export default RegisterForm;