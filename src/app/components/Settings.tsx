"use client";

import { useRouter } from "next/navigation";
import auth from "../../firebase";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

function Settings() {
  const router = useRouter();
  

  return (
    <div className="min-h-screen bg-[#f7faf9]">
          <Sidebar />
    
          <div className="md:ml-[200px] px-6 py-10">
            <div className="max-w-[1000px] mx-auto">
              <div className="border-b border-gray-200 py-3 px-6 flex items-center justify-between md:justify-end">
                <SearchBar />
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
