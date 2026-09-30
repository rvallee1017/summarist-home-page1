"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../../firebase";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <>
      {/* Mobile Hamburger Button (Only shows when menu is closed) */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Dark Overlay when Mobile Menu is Open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-[#f7faf9] border-r z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6">
          {/* Header with Logo and Mobile Close Button */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-bold text-[#032b41]">Summarist</h2>
            <button
              className="md:hidden text-2xl text-[#032b41]"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-6 font-semibold text-[#032b41]">
            <a href="/for-you" className="flex items-center gap-3">
              For You
            </a>
            <a href="#" className="flex items-center gap-3">
              My Library
            </a>
            <a href="#" className="flex items-center gap-3">
              Highlights
            </a>
            <a href="#" className="flex items-center gap-3">
              Search
            </a>
          </nav>
        </div>

        <div className="absolute bottom-6 left-6 flex flex-col gap-6 font-semibold text-[#032b41]">
          <a href="#" className="flex items-center gap-3">
            Settings
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-left"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}