import axios from "axios";
import { useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "@/tools/cookies.js";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('http://localhost:8081/users/login',  
            JSON.stringify({
            "username": username,
            "password": password
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
            setCookie("user", JSON.stringify(response.data.user), 7);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (        
        <form className="max-w-lg max-md:mx-auto w-full p-6">
            <div className="mb-12">
                <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
                <p className="text-gray-800 text-sm mt-6">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
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

            <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
                <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md" />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                        Remember me
                    </label>
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
                    Log in
                </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold tracking-wide hover:underline ml-1">Register here</Link></p>
        </form>
    );
}

export default LoginForm;