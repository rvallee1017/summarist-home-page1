

function LoginFormPage() {
    <div className="w-full z-9999">
        <div className="relative max-w-[400px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <div className="pt-12 px-8 pb-6">
                <div className="text-center text-[20px] font-bold text-[#032b41] mb-6">Log in to Summarist</div>
                <button className="relative flex bg-[#3a579d] text-white justify-center">
                    <figure className="bg-transparent flex items-center w-[36px] h-[36px] rounded-sm absolute left-2"></figure>
                    <div>Login as a Guest</div>
                </button>
                <div className="flex items-center m-4">
                    <span className="m-[24px] text-sm text-[#394547] font-medium">or</span>
                </div>
                <button className="relative flex bg-[#4285f4] text-white justify-center">
                    <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-sm bg-white absolute left-0.5">
                        <img className="w-6 h-6" src="/assets/google.png"></img>
                    </figure>
                    <div>Login with Google</div>
                </button>
                <div className="flex items-center m-[16px]">
                    <span className="m-[24px] text-sm text-[#394547] font-medium">or</span>
                </div>
                <form className="flex flex-col gap-4">
                    <input className="h-[40px] border-2-border-[#bac8ce] rounded-sm p-3" placeholder="Email Address"></input>
                    <input className="h-[40px] border-2-border-[#bac8ce] rounded-sm p-3" placeholder="Password" type="password"></input>
                    <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm text-base transition-bg duration-200ms flex items-center justify-center min-w-[180px]">
                        <span>Login</span>
                    </button>
                </form>
            </div>
            <div className="text-center text-[#116be9] font-light text-sm w-fit m-auto cursor-pointer">Forgot your password?</div>
            <button className="h-[40px] align-center bg-[#f1f6f4] text-[#116be9] w-full rounded-r-sm rounded-l-sm font-light text-base">Don't have an account?</button>
            <div className="absolute top-3 right-3 flex cursor-pointer transition-opacity duration-200ms"></div>
        </div>
    </div>
}

export default LoginFormPage