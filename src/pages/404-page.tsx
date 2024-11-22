import { Link } from "react-router-dom";

import img from '@/assets/illustration-404.svg';

function Page404() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 lg:max-w-6xl">
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h2 className="text-4xl font-extrabold text-gray-800 mt-4 mb-8">Page not found</h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button onClick={() => window.history.back()}
                            className="hover:text-black text-blue-600 text-[15px] block hover:transparent bg-blue-50 rounded px-4 py-2.5 transition-all">
                                Go Back 🔙
                        </button>

                        <Link to="/"
                            className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
                                Go to home 🏠
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={img} alt="svg 404" />
                </div>
            </div>
        </section>
    );
}

export default Page404;