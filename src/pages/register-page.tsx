import RegisterForm from "../components/register-form";

function RegisterPage() {
    return (
        <div className="font-[sans-serif] w-full h-full">
            <div className="grid md:grid-cols-2 items-center justify-items-center gap-8 h-full w-full">
                <div className="h-full w-full md:py-6 flex items-center justify-end relative max-md:after:hidden after:absolute after:bg-gradient-to-l after:from-gray-50 after:via-[#66fef9] after:to-[#5562f5] after:h-full after:w-3/4 after:left-0 after:z-0">
                    <img src="https://readymadeui.com/photo.webp" className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative" alt="Dining Experience" />
                </div>

                <RegisterForm />
            </div>
        </div>
    );
    
}

export default RegisterPage;