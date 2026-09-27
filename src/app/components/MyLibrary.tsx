function MyLibrary() {
      <div className="relative flex flex-col transition-all duration-300 md:max-w-full">
        <div className="bg-[#fff] border-b border-[#e1e7ea] h-[80px] z-1">
          <div className="relative flex items-center justify-between p-5 max-width-[1070px] m-auto h-full">
            <figure>
              <img className="overflow-clip"></img>
            </figure>
            <div className="flex items-center gap-6 max-width-[340px] w-full">
              <div className="flex items-center w-full justify-end">
                <div className="relative gap-2">
                  <div>
                    <input className="h-10 w-full p-4 outline-none bg-[#f1f6f4] text-[#042330] border-2px rounded lg" placeholder="Search for books" type="text"></input>
                    <div className="flex items-center absolute h-full right-8px justify-end border-1-2 border-[#e1e7ea] p-2"></div>
                  </div>
                </div>
                <div className="items-center justify-center cursor-pointer md:flex"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-0 pointer-events-none fixed top-0 right-0 w-full h-full bg-[#3a4649] transition-opacity duration-[400ms] ease-[ease] delay-0 z-10"></div>
        <div className="bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-screen z-1000 transition-all duration-[300ms] md:transform-x-full">
          <div className="flex items-center justify-center h-[60px] pt-4 max-width-[160px] m-0">
            <img className="w-full h-[40px]" src="/logo.png" alt="Logo"></img>
          </div>
          <div className="flex flex-col justify-between h-[60px]">
            <div className="flex-1-1 mt-[40px]">
              {/* For You */}
              <a
                className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                href="/for-you"
              >
                <div className="bg-[#2bd97c] w-[5px] h-full mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">For You</div>
              </a>

              {/* My Library */}
              <a
                className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                href="/library"
              >
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">My Library</div>
              </a>

              {/* Highlights */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">Highlights</div>
              </div>

              {/* Search */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">Search</div>
              </div>

              {/* Settings */}
              <a
                className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                href="/settings"
              >
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">Settings</div>
              </a>

              {/* Help & Support */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">Help & Support</div>
              </div>

              {/* Logout */}
              <div className="flex items-center h-[56px] text-[#032b41] cursor-pointer">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2"></div>

                <div className="m-0 p-0 box-border">Logout</div>
              </div>
            </div>
          </div>
        </div>
        </div>
}

export default MyLibrary