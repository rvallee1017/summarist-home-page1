function Settings() {
  return (
    <div className="ml-0 w-full">
      <div className="bg-[#fff] border-b-border-[#e1e7ea] h-[80px] z-1">
        <div className="relative flex items-center justify-between py-0 px-8 max-w-[1070px] h-full">
          <div className="flex items-center gap-6 max-w-[340px] w-full">
            <div className="flex items-center w-full">
              <div className="relative gap-2">
                <input className="h-[40px] w-full py-0 px-4 outline-0 bg-[#f1f6f4] text-[#042330] border-2-border-[#e1e7ea] rounded-lg"></input>
                <div className="flex items-center absolute h-full right-2 justify-end border-l-border-[#e1e7ea] pl-2"></div>
              </div>
            </div>
            <div className="md:flex items-center justify-center cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="opacity-0 fixed t-0 l-0 w-full h-full bg-[#3a4649] transition-opacity duration-[400ms] ease-[ease] delay-0 z-10"></div>
      <div className="md:transform-x-full bg-[#f7faf9] w-[200px] min-w-[200px] fixed t-0 l-0 h-screen z-1000 transition-all duartion-[300ms]">
        <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] m-auto">
          <img className="w-full h-[40px]" src="/assets/logo.png"></img>
        </div>
        <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-[20px] overflow-y-auto">
          <div className="flex-1-1 mt-[40px]">
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/for-you"
            >
              <div className="w-[5px] h-full bg-transparent mr-4"></div>
              <div className="flex items-center justify-center mr-2"></div>
              <div>For you</div>
            </a>
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/library"
            >
              <div className="w-[5px] h-full bg-transparent mr-4"></div>
              <div className="flex items-center justify-center mr-2"></div>
              <div className="m-0 p-0 border-box">My Library</div>
            </a>
            <div className="flex items center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
              <div className="w-[5px] h-full bg-transparent mr-4">
                <div className="flex items-center justify-center mr-2">
                  <div className="m-0 p-0 border-box">Highlights</div>
                </div>
                <div className="mb-0 cursor-not-allowed flex item-center h-[56] text-[#032b41]">
                  <div className="m-0 p-0 border-box"></div>
                  <div className="m-0 p-0 border-box">Search</div>
                </div>
              </div>
              <div className="m-0 p-0 border-box block">
                <a
                  className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                  href="/settings"
                >
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>
                  <div className="flex items-center justify-center mr-2"></div>
                  <div className="m-0 p-0 border-box">Settings</div>
                </a>
                <div className="cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>
                  <div className="flex items-center justify-center mr-2"></div>
                  <div className="m-0 p-0 border-box block">Help & Support</div>
                </div>
                <div className="mb-0 flex items-center h-[56px] text-[#032b41] cursor-pointer">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>
                  <div className="flex items-center justify-center mr-2"></div>
                  <div className="m-0 p-0 border-box">Logout</div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="pt-[40px]  w-full">
            <div className="max-w-[1070px] w-fll m-auto py-0 px-6">
              <div className="align-left border-b-border-[#e1e7ea]">
                Settings
              </div>
              <div className="flex items-flex-start gap-2 mb-5 border-b-border-[#e1e7ea] pb-6">
                <div className="text-[18px] font-bold text-[#032b41]">
                  Your Subscription plan
                </div>
                <div className="text-[#032b41]">Basic</div>
                <a className="w-fit bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-base transition-bg duration-200ms flex items-center justify-center min-w-[180px]">
                  Upgrade to Premium
                </a>
              </div>
              <div className="flex flex-col items-flex-start gap-2 pb-6">
                <div className="text-[18px] font-bold text-[#032b41]">
                  Email
                </div>
                <div className="text-[#032b41]">hanna@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
