"use client";

import { useEffect, useState } from "react";
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

function ForYou(book) {
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
    <div className="box-border">
      <div className="relative flex flex-col transition-all duration-300 md:max-w-full ml-[200px]">
        <div className="bg-[#fff] border-b border-[#e1e7ea] h-[80px] z-1">
          <div className="relative flex items-center justify-between p-5 max-width-[1070px] m-auto h-full">
            <figure>
              <img className="overflow-clip"></img>
            </figure>
            <div className="flex items-center gap-6 max-width-[340px] w-full">
              <div className="flex items-center w-full justify-end">
                <div className="relative gap-2">
                  <div>
                    <input
                      className="h-10 w-full p-4 outline-none bg-[#f1f6f4] text-[#042330] border-2px rounded lg"
                      placeholder="Search for books"
                      type="text"
                    ></input>
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
          <div className="flex items-center justify-center h-[60px] pt-4 max-w-[160px] m-auto">
            <img
              className="w-full h-[40px]"
              src="/assets/logo.png"
              alt="Logo"
            ></img>
          </div>
          <div className="flex flex-col justify-between h-[60px]">
            <div className="flex-1-1 mt-[40px]">
              {/* For You */}
              <a
                className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                href="/for-you"
              >
                <div className="bg-[#2bd97c] w-[5px] h-full mr-4"></div>

                <div className="flex items-center justify-center mr-2">
                  {" "}
                  <FiHome size={22} />{" "}
                </div>

                <div className="m-0 p-0 box-border">For You</div>
              </a>

              {/* My Library */}
              <a
                className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                href="/library"
              >
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2">
                  <FiBookmark size={22} />
                </div>

                <div className="m-0 p-0 box-border">My Library</div>
              </a>

              {/* Highlights */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2">
                  <FiEdit size={22} />
                </div>

                <div className="m-0 p-0 box-border">Highlights</div>
              </div>

              {/* Search */}
              <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                <div className="w-[5px] h-full bg-transparent mr-4"></div>

                <div className="flex items-center justify-center mr-2">
                  <FiSearch size={22} />
                </div>

                <div className="m-0 p-0 box-border">Search</div>
              </div>

              {/* Settings */}
              <div className="m-0 p-0 border-box block fixed bottom-[23px]">
                <a
                  className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                  href="/settings"
                >
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>

                  <div className="flex items-center justify-center mr-2">
                    <FiSettings size={22} />
                  </div>

                  <div className="m-0 p-0 box-border">Settings</div>
                </a>

                {/* Help & Support */}
                <div className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-not-allowed">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>

                  <div className="flex items-center justify-center mr-2">
                    <FiHelpCircle size={22} />
                  </div>

                  <div className="m-0 p-0 box-border">Help & Support</div>
                </div>

                {/* Logout */}
                <div className="flex items-center h-[56px] text-[#032b41] cursor-pointer">
                  <div className="w-[5px] h-full bg-transparent mr-4"></div>

                  <div className="flex items-center justify-center mr-2">
                    <FiLogOut size={22} />
                  </div>

                  <div className="m-0 p-0 box-border" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[75%] items-center justify-center m-auto max-w-[1070px] px-4 py-6">
          <div className="p-[40px] w-full">
            <div className="m-0 p-0 border-box">
              <div className="text-[22px] font-bold text-[#032b41] mb-4">
                Selected just for you
              </div>
              <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
              <a
                className="sm:p-4 md:w-full md:flex-col md:gap-6 flex justify-between bg-[#fbefd6] rounded-sm mb-6"
                href={`/book/${selectedBook?.id}`}
              >
                <div className="md:w-full md:text-[14px] text-[#032b41]">
                  How Constant Innovation Creates Radically Successful
                  Businesses
                </div>
                <div className="md:display-none w-px bg-[#bac8ce]"></div>
                <div className="md:w-full flex gap-4">
                  <div className="h-[140px] w-[140px] min-w-[140px]">
                    <div className="flex gap-4 md:w-full ">
                      <figure className="h-[140px] w-[140px] min-w-[140px]">
                        <img
                          className="block"
                          src={selectedBook?.imageLink}
                          alt="book"
                        ></img>
                      </figure>
                      <div className="font-semibold text-[#032b41] mb-2">
                        {selectedBook?.title}
                      </div>
                      <div className="text-sm text-[#394547] mb-4">
                        {selectedBook?.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center w-[40px] min-w-[40px] h-[40px]"></div>
                        <div className="text-[14px] font-medium text-[#032b41]">
                         <AudioTime src={book.audioLink} />
                        </div>
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
                  <a key={book.id} href={`/book/${book.id}`}
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-width-[200px] w-full">
                    <figure className="w-[172px] h-[172px]">
                      <img
                        className="w-full h-full"
                        src={book.imageLink} alt={book.title}
                      ></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {book.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {book.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-2">{book.subTitle}</div>
                      <div className="flex gap-2">
                        <div className="flex w-4 h-4"></div>
                        <div className="m-0 p-0 border-box"><AudioTime src={book.audioLink} /></div>
                      <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div className="m-0 p-0 border-box">{book.averageRating}</div>
                      </div>
                    </div>
                  </a>
                   ))}
                </div>
              </div>
            </div>
            <div className="text-[22px] font-bold text-[#032b41] mb-4">
              Suggested Books
            </div>
            <div className="font-light text-[#394547] mb-4">
              Browse those books
            </div>
            <div className="flex  overflow-x-auto gap-4 snap-x mb-5">
              {suggestedBooks.map((book) => (
              <a key={book.id} href={`/book/${book.id}`}
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full">
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={book.imageLink} alt={book.title}
                  ></img>
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
                    <div className="flex w-4 h-4"></div>
                    <div><AudioTime src={book.audioLink} /></div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>{book.averageRating}</div>
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
