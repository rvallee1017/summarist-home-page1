import React from "react";
import {
  FiHome,
  FiBookmark,
  FiEdit,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../../firebase";

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };
  return (
    <>
      <div className="opacity-0 pointer-events-none fixed top-0 right-0 w-full h-full bg-[#3a4649] transition-opacity duration-400 ease-[ease] delay-0 z-10" />

      <div className="bg-[#f7faf9] w-50 min-w-50 fixed top-0 left-0 h-screen z-50 transition-all duration-300 md:transform-x-full">
        <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] m-auto">
          <img className="w-full h-[40px]" src="/assets/logo.png" alt="Logo" />
        </div>

        <div className="flex flex-col justify-between h-[calc(100vh-60px)]">
          <div className="flex-1 mt-10">
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/for-you"
            >
              <div className="bg-[#2bd97c] w-[5px] h-full mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiHome size={22} />
              </div>
              <div className="m-0 p-0 box-border">For You</div>
            </a>

            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/library"
            >
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiBookmark size={22} />
              </div>
              <div className="m-0 p-0 box-border">My Library</div>
            </a>

            <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiEdit size={22} />
              </div>
              <div className="m-0 p-0 box-border">Highlights</div>
            </div>

            <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiSearch size={22} />
              </div>
              <div className="m-0 p-0 box-border">Search</div>
            </div>
          </div>

          <div className="mt-auto pb-6">
            <a
              className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiSettings size={22} />
              </div>
              <div className="m-0 p-0 box-border">Settings</div>
            </a>

            <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiHelpCircle size={22} />
              </div>
              <div className="m-0 p-0 box-border">Help & Support</div>
            </div>

            <div
              className="flex items-center h-[56px] text-[#032b41] cursor-pointer"
              onClick={handleLogout}
            >
              <div className="w-[5px] h-full bg-transparent mr-4" />
              <div className="flex items-center justify-center mr-2">
                <FiLogOut size={22} />
              </div>
              <div className="m-0 p-0 box-border">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
