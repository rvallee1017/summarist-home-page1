"use client";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import auth from "../../firebase";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import {
  FiHome,
  FiBookmark,
  FiEdit,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiClock,
  FiStar,
} from "react-icons/fi";

function AudioTime({ src }: { src: string }) {
  const [time, setTime] = useState("");

  return (
    <>
      <audio
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => {
          const seconds = Math.floor(e.currentTarget.duration);
          const minutes = Math.floor(seconds / 60);
          const secs = String(seconds % 60).padStart(2, "0");
          setTime(`${minutes}:${secs}`);
        }}
      />
      <span>{time}</span>
    </>
  );
}

function ForYou() {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchSelectedBook = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
        );

        const data = await response.json();
        setSelectedBook(data[0]);

        console.log("Selected Book:", data);
      } catch (error) {
        console.error("Error fetching selected book:", error);
      }
    };

    fetchSelectedBook();
  }, []);

  useEffect(() => {
    const fetchSuggestedBooks = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
        );

        const data = await response.json();
        setSuggestedBooks(data);

        console.log("Suggested Books:", data);
      } catch (error) {
        console.error("Error fetching suggested books:", error);
      }
    };

    fetchSuggestedBooks();
  }, []);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
        );

        const data = await response.json();
        setRecommendedBooks(data);

        console.log("Recommended Books:", data);
      } catch (error) {
        console.error("Error fetching recommended books:", error);
      }
    };

    fetchRecommendedBooks();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Sidebar />

      <div className="md:ml-[200px] px-6 py-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-b border-gray-200 py-3 px-6 flex items-center justify-between md:justify-end">
            <SearchBar />
          </div>
        </div>

        <div className="max-w-[1070px] mx-auto px-4 py-6">
          <div className="w-full">
            <div className="text-[22px] font-bold text-[#032b41] mb-4">
              Selected just for you
            </div>

            <a
              className="flex flex-col md:flex-row gap-6 p-6 bg-[#fbefd6] rounded-sm mb-6"
              href={`/book/${selectedBook?.id}`}
            >
              <div className="md:w-full md:text-[14px] text-[#032b41]">
                How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className="hidden md:block w-px bg-[#bac8ce]" />
              <div className="md:w-full flex gap-4">
                <div className="flex gap-4">
                  <figure className="h-[140px] w-[140px]">
                    <img
                      className="block w-full h-full"
                      src={selectedBook?.imageLink}
                      alt="book"
                    />
                  </figure>
                  <div className="flex flex-col">
                    <div>{selectedBook?.title}</div>
                    <div>{selectedBook?.author}</div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      <AudioTime src={selectedBook?.audioLink} />
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <div>
              <div className="text-[22px] font-bold text-[#032b41] mb-4">
                Recommended For You
              </div>
              <div className="font-light text-[#394547] mb-4">
                We think you'll like these
              </div>
              <div className="flex overflow-x-auto gap-4 snap-x mb-8">
                {recommendedBooks.map((book) => (
                  <a
                    key={book.id}
                    href={`/book/${book.id}`}
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                  >
                    {book.subscriptionRequired && (
                      <div className="absolute top-0 right-0 bg-[#032b41] text-white text-[10px] px-2 h-[18px] flex items-center rounded-full">
                        Premium
                      </div>
                    )}
                    <figure className="w-[172px] h-[172px]">
                      <img
                        className="w-full h-full"
                        src={book.imageLink}
                        alt={book.title}
                      />
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {book.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {book.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-2">
                      {book.subTitle}
                    </div>
                    <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                      <FiClock className="w-4 h-4" />
                      <AudioTime src={book.audioLink} />
                    </div>
                    <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
                      <FiStar className="w-4 h-4" />
                      <span>{book.averageRating}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-[22px] font-bold text-[#032b41] mb-4">
              Suggested Books
            </div>
            <div className="font-light text-[#394547] mb-4">
              Browse those books
            </div>
            <div className="flex overflow-x-auto gap-4 snap-x mb-5">
              {suggestedBooks.map((book) => (
                <a
                  key={book.id}
                  href={`/book/${book.id}`}
                  className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                >
                  {book.subscriptionRequired && (
                    <div className="absolute top-0 right-0 bg-[#032b41] text-white text-[10px] px-2 h-[18px] flex items-center rounded-full">
                      Premium
                    </div>
                  )}
                  <figure className="w-[172px] h-[172px] mb-2">
                    <img
                      className="w-full h-full"
                      src={book.imageLink}
                      alt={book.title}
                    />
                  </figure>
                  <div className="text-base font-bold text-[#032b41]">
                    {book.title}
                  </div>
                  <div className="text-sm text-[#6b757b] font-light mb-2">
                    {book.author}
                  </div>
                  <div className="text-sm text-[#394547] mb-2">
                    {book.subTitle}
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                      <FiClock className="w-4 h-4" />
                      <AudioTime src={book.audioLink} />
                    </div>
                    <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                      <FiStar className="w-4 h-4" />
                      <span>{book.averageRating}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYou;
