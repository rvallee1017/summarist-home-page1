"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../../firebase";
import {
  FiHome,
  FiBookmark,
  FiEdit,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";


function Settings() {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
    };

  return (
    <div className="relative flex-1 flex-col ml-[200px] transition-all duration-300ms overflow-x-hidden">
      <div className="ml-0 w-full">
      <div className="bg-[#fff] border-b-border-[#e1e7ea] h-[80px] z-1">
        <div className="relative flex items-center justify-between py-0 px-8 max-w-[1070px] h-full">
          <div className="flex items-center gap-6 max-w-[340px] w-full">
            <div className="flex items-center w-full">
              <div className="relative gap-2">
                <input className="h-[40px] w-full py-0 px-4 outline-0 bg-[#f1f6f4] text-[#042330] border-2-border-[#e1e7ea] rounded-lg" placeholder="Search for books" type="text"></input>
                <div className="flex items-center absolute h-full right-2 justify-end border-l-border-[#e1e7ea] pl-2"></div>
              </div>
            </div>
            <div className="md:flex items-center justify-center cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="opacity-0 fixed t-0 l-0 w-full h-full bg-[#3a4649] transition-opacity duration-[400ms] ease-[ease] delay-0 z-10"></div>
      <div className="bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-screen z-1000 transition-all duration-[300ms]">
        <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] m-auto">
          <img className="w-full h-[40px]" src="/assets/logo.png"></img>
        </div>
        <div className="bg-[#f7faf9] w-full">
          <div className="flex-1-1 mt-[40px]">
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/for-you"
            >
              <div className="w-[5px] h-full bg-transparent mr-4"></div>
              <div className="flex items-center justify-center mr-2"><FiHome size={22} /></div>
              <div>For you</div>
            </a>
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/library"
            >
              <div className="w-[5px] h-full bg-transparent mr-4"></div>
              <div className="flex items-center justify-center mr-2"><FiBookmark size={22} /></div>
              <div className="m-0 p-0 border-box">My Library</div>
            </a>
            <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
              <div className="w-[5px] h-full bg-transparent mr-4"></div>
                <div className="flex items-center justify-center mr-2"><FiEdit size={22} /></div>
                  <div className="m-0 p-o box-border">Highlights</div>
                </div>
                 <div className="px-5 pt-2 cursor-not-allowed flex items-center h-[56px] text-[#032b41]">
                   <div className="flex items-center justify-center mr-2">< FiSearch size={22} /></div>
                   <div className="m-0 p-0 border-box block">Search</div>
                 </div>
             
              <div className="m-0 p-0 border-box block fixed bottom-[23px]">
                <a
                  className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                  href="/settings"
                >
                  <div className="bg-[#2bd97c] w-[5px] h-full mr-4"></div>
                  <div className="flex items-center justify-center mr-2"><FiSettings size={22} /></div>
                  <div className="m-0 p-0 border-box">Settings</div>
                </a>
                <div className="cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>
                  <div className="flex items-center justify-center mr-2">< FiHelpCircle size={22} /></div>
                  <div className="m-0 p-0 border-box block">Help & Support</div>
                </div>
                <div className="mb-0 flex items-center h-[56px] text-[#032b41] cursor-pointer">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>
                  <div className="flex items-center justify-center mr-2"><FiLogOut size={22} /></div>
                  <div className="m-0 p-0 border-box" onClick={handleLogout}>Logout</div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1070px] px-4 w-full">
            <div className="max-w-[1070px] w-full m-auto px-4">
              <div className="align-left border-b border-[#e1e7ea] text-[32px] font-bold">
                Settings
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[18px] font-bold text-[#032b41] ">
                  Your Subscription plan
                </div>
                <div className="text-[#032b41] border-b-border-[#e1e7ea] flex-col-1">Basic</div>
                <a className="w-fit bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-base transition-bg duration-200ms flex items-center justify-center min-w-[180px] border-b border-[#e1e7ea]" href="/choose-plan">
                  Upgrade to Premium
                </a>
              </div>
              <div className="flex flex-col items-flex-start gap-2 pb-6">
                <div className="text-[18px] font-bold text-[#032b41]">
                  <div className="border-b border-[#e1e7ea] pt-5"></div>
                  Email
                </div>
                <div className="text-[#032b41]">{auth.currentUser?.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Settings;
