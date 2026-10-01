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

function ForYou() {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [recommendedBook, setRecommendedBook] = useState<any>(null);
  const [suggestedBook, setSuggestedBook] = useState<any>(null);

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
    const fetchSuggestedBook = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
        );

        const data = await response.json();
        setSuggestedBook(data[0]);

        console.log("Suggested Book:", data);
      } catch (error) {
        console.error("Error fetching suggested book:", error);
      }
    };

    fetchSuggestedBook();
  }, []);

  useEffect(() => {
    const fetchRecommendedBook = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
        );

        const data = await response.json();
        setRecommendedBook(data[0]);

        console.log("Recommended Book:", data);
      } catch (error) {
        console.error("Error fetching recommended book:", error);
      }
    };

    fetchRecommendedBook();
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
                          3 mins 23 secs
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
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-width-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991"></audio>
                    <figure className="w-[172px] h-[172px]">
                      <img
                        className="w-full h-full"
                        src={recommendedBook?.imageLink}
                      ></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-2">
                      <div className="flex gap-2">
                        <div className="flex w-4 h-4"></div>
                        <div className="m-0 p-0 border-box">03:24</div>
                      </div>
                      <div className="flex items-center gap-1 text-[14px] font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div className="m-0 p-0 border-box">4.4</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-width-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fcan't-hurt-me.mp3?alt=media&amp;token=7de57406-60ca-49d6-9113-857507f48312"></audio>
                    <figure className="w-[172px] h-[172px]">
                      <img
                        className="w-full h-full"
                        src={recommendedBook?.imageLink}
                      ></img>
                    </figure>
                    <div className="text-sm font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 font-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>04:52</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.2</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-width-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fmastery.mp3?alt=media&amp;token=364b7c19-e9b1-4084-be0d-3a9cb5367098"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img
                        className="block w-full h-full"
                        src={recommendedBook?.imageLink}
                      ></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>04:40</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.3</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fatomic-habits.mp3?alt=media&amp;token=e9bd4ea8-044a-4c73-acac-1228e3bc50b6"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img
                        className="w-full h-full"
                        src={recommendedBook?.imageLink}
                        alt="book"
                      ></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>03:24</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.3</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-talk-to-anyone.mp3?alt=media&amp;token=30173e56-fbe6-4162-8184-64d24dc480ac"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img src={recommendedBook?.imageLink} alt="book"></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>03:22</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.6</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgood-to-great.mp3?alt=media&amp;token=c1b30865-26f7-47c5-a0f3-fd9da5d3da3d"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img src={recommendedBook?.imageLink} alt="book"></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>03:01</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.5</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-intelligent-investor.mp3?alt=media&amp;token=82429bb8-8af4-4375-bca5-e6f89e631fca"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img src={recommendedBook?.imageLink} alt="book"></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>02:48</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.8</div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                    href={`/book/${recommendedBook?.id}`}
                  >
                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-4-day-week.mp3?alt=media&amp;token=6265f7a5-1dab-422d-8d22-71cdb70678a1"></audio>
                    <figure className="w-[172px] h-[172px] mb-2">
                      <img src={recommendedBook?.imageLink} alt="book"></img>
                    </figure>
                    <div className="text-base font-bold text-[#032b41] mb-2">
                      {recommendedBook?.title}
                    </div>
                    <div className="text-sm text-[#6b757b] font-light mb-2">
                      {recommendedBook?.author}
                    </div>
                    <div className="text-sm text-[#394547] mb-4">
                      {recommendedBook?.description}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>02:20</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                        <div className="flex w-4 h-4"></div>
                        <div>4.6</div>
                      </div>
                    </div>
                  </a>
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
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>03:24</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.3</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Frich-dad-poor-dad.mp3?alt=media&amp;token=e65e6fc1-b5c7-4aed-9715-07a96ec12db1"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>05:38</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.5</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-10x-rule.mp3?alt=media&amp;token=4638392a-ced3-4926-a8b3-1c7a4fbe520a"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>03:18</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fdeep-work.mp3?alt=media&amp;token=f1749513-05ab-4733-8675-6073ba6ac5e9"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>02:50</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.3</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-5-second-rule.mp3?alt=media&amp;token=9a0e621a-c545-431f-8d19-052cc445844a"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>02:45</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.3</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-12-week-year.mp3?alt=media&amp;token=7542f2ee-eafe-44a7-9606-17f070d83af8"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>03:36</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.6</div>
                  </div>
                </div>
              </a>
              <a
                className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full"
                href={`/book/${suggestedBook?.id}`}
              >
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgetting-things-done.mp3?alt=media&amp;token=82466b53-7e16-4044-a79f-53bda67a39fe"></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img
                    className="w-full h-full"
                    src={suggestedBook?.imageLink}
                    alt="book"
                  ></img>
                </figure>
                <div className="text-base font-bold text-[#032b41]">
                  {suggestedBook?.title}
                </div>
                <div className="text-sm text-[#6b757b] font-light mb-2">
                  {suggestedBook?.author}
                </div>
                <div className="text-sm text-[#394547] mb-2">
                  {suggestedBook?.description}
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap font-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>02:24</div>
                  </div>
                  <div className="flex items-center gap text-sm font-light text-[#6b757b]">
                    <div className="flex w-4 h-4"></div>
                    <div>4.3</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYou;
