import LoginForm from "../components/login-form";

function LoginPage() {
    return (
        <div className="font-[sans-serif] w-full h-full">
            <div className="grid md:grid-cols-2 items-center justify-items-center gap-8 h-full w-full">
                <LoginForm />

                <div className="h-full w-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#66fef9] before:to-[#5562f5] before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img src="https://readymadeui.com/photo.webp" className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative" alt="Dining Experience" />
                </div>
            </div>
        </div>
    );
    
}

export default LoginPage;