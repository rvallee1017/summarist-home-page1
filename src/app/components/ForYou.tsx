function ForYou() {
  return (
    <div className="box-border">
      <div className="relative flex flex-col transition-all duration-300 md:max-w-full">
        <div className="bg-[#fff] border-b border-[#e1e7ea] h-[80px] z-1">
          <div className="relative flex items-center justify-between p-5 max-width-[1070px] m-auto h-full">
            <figure>
              <img className="overflow-clip"></img>
            </figure>
            <div className="flex items-center gap-6 max-width-[340px] w-full">
              <div className="flex items-center w-full">
                <div className="relative gap-2">
                  <div>
                    <input className="h-10 w-full p-4 outline-none bg-[#f1f6f4] text-[#042330] border-2px rounded lg"></input>
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
                <img
                  className="w-full h-[40px]"
                  src="/logo.png"
                  alt="Logo"
                ></img>
              </div>
              <div className="flex flex-col justify-between h-[60px]">
                <div className="flex-1-1 mt-[40px]">
                  <a
                    className="flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
                    href="/for-you"
                  >
                    <div className="bg-[#2bd97c] w-[5px] h-full mr-4"></div>
                    <div className="flex items-center justify-center mr-2"></div>
                    <div className="m-0 p-0 box-border">For You</div>
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
                        <div className="m-0 p-0 border-box block">
                          Help & Support
                        </div>
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
                </div>
                <div className="max-w-[1070px] items-center justify-center m-auto px-0 py-6">
                  <div className="p-[40px] w-full">
                    <div className="m-0 p-0 border-box">
                      <div className="text-[22px] font-bold text-[#032b41] mb-4">
                        Selected just for you
                      </div>
                      <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
                      <a
                        className="sm:p-4 md:w-full md:flex-col md:gap-6 flex justify-between bg-[#fbefd6] rounded-sm mb-6"
                        href="/book/f9gy1gpai8"
                      >
                        <div className="md:w-full md:text-[14px] text-[#032b41]">
                          How Constant Innovation Creates Radically Successful
                          Businesses
                        </div>
                        <div className="md:display-none w-px bg-[#bac8ce]"></div>
                        <div className="md:w-full flex gap-4">
                          <div className="h-[140px] w-[140px] min-w-[140px]">
                            <div className="md:w-full">
                              <div className="font-semibold text-[#032b41] mb-2">
                                The Lean Startup
                              </div>
                              <div className="text-sm text-[#394547] mb-4">
                                Eric Ries
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
                            href="/book/5bx150cz4bt"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991"></audio>
                            <figure className="w-[172px] h-[172px]">
                              <img
                                className="w-full h-full"
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&amp;token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              How to Win Friends and Influence People in the
                              Digital Age
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Dale Carnegie
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
                            href="/book/210idxm1rv"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fcan't-hurt-me.mp3?alt=media&amp;token=7de57406-60ca-49d6-9113-857507f48312"></audio>
                            <figure className="w-[172px] h-[172px]">
                              <img
                                className="w-full h-full"
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&amp;token=026646b0-40f8-48c4-8d32-b69bd5b8f700"
                              ></img>
                            </figure>
                            <div className="text-sm font-bold text-[#032b41] mb-2">
                              Can't Hurt Me
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              David Goggins
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              Master Your Mind and Defy the Odds
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
                            href="/book/4t0amyb4upc"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fmastery.mp3?alt=media&amp;token=364b7c19-e9b1-4084-be0d-3a9cb5367098"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                className="block w-full h-full"
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fmastery.png?alt=media&amp;token=c41aac74-9887-4536-9478-93cd983892af"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              Mastery
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Robert Greene
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              Myths about genius and what it really means to be
                              great
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
                            href="/book/g2tdej27d23"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fatomic-habits.mp3?alt=media&amp;token=e9bd4ea8-044a-4c73-acac-1228e3bc50b6"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                className="w-full h-full"
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fatomic_habits.png?alt=media&amp;token=51401979-e7cc-40c4-87fa-3b27d1fe761b"
                                alt="book"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              Atomic Habits
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              James Clear
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              An Easy & Proven Way to Build Good Habits & Break
                              Bad Ones
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
                            href="/book/18tro3gle2p"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-talk-to-anyone.mp3?alt=media&amp;token=30173e56-fbe6-4162-8184-64d24dc480ac"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-talk-to-anyone.png?alt=media&amp;token=48f77463-a093-42b4-8f1f-82fa4edd044c"
                                alt="book"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              How to Talk to Anyone
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Leil Lowndes
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              92 Little Tricks for Big Success in Relationships
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
                            href="/book/ap153fptaq"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgood-to-great.mp3?alt=media&amp;token=c1b30865-26f7-47c5-a0f3-fd9da5d3da3d"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fgood-to-great.png?alt=media&amp;token=b906ec52-7871-411f-b5b6-53f1da98ee27"
                                alt="book"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              Good to Great
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Jim Collins
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              Why Some Companies Make the Leap...And Others
                              Don't
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
                            href="/book/2ozpy1q1pbt"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-intelligent-investor.mp3?alt=media&amp;token=82429bb8-8af4-4375-bca5-e6f89e631fca"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-intelligent-investor.png?alt=media&amp;token=f72f1865-de93-4c67-bd6e-55070f467923"
                                alt="book"
                              ></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              The Intelligent Investor
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Benjamin Graham
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              The Definitive Book on Value Investing
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
                            href="/book/cuo1z5oryy8"
                          >
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-4-day-week.mp3?alt=media&amp;token=6265f7a5-1dab-422d-8d22-71cdb70678a1"></audio>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-4-day-week.png?alt=media&amp;token=8f468ea2-f16c-4a96-9bc3-8f66aaff33ec" alt="book"></img>
                            </figure>
                            <div className="text-base font-bold text-[#032b41] mb-2">
                              The 4 Day Week
                            </div>
                            <div className="text-sm text-[#6b757b] font-light mb-2">
                              Andrew Barnes
                            </div>
                            <div className="text-sm text-[#394547] mb-4">
                              "How the flexible work revolution can increase productivity, profitability, and wellbeing, and help create a sustainable future"
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
                    <div className="text-[22px] font-bold text-[#032b41] mb-4">Suggested Books</div>
                    <div className="font-light text-[#394547] mb-4">Browse those books</div>
                    <div className="flex  overflow-x-auto gap-4 snap-x mb-5">
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/6ncszvwl4e">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fzero-to-one.png?alt=media&amp;token=0c64bbe6-4e9e-4a0e-adc9-9e218dd12402" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">Zero to One</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Peter Thiel with Blake Masters</div>
                        <div className="text-sm text-[#394547] mb-2">Notes on Startups, or How to Build the Future</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/hyqzkhdyg7h">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Frich-dad-poor-dad.mp3?alt=media&amp;token=e65e6fc1-b5c7-4aed-9715-07a96ec12db1"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Frich-dad-poor-dad.png?alt=media&amp;token=dc226e0c-fd89-4897-9605-9603e04a9966" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">Rich Dad, Poor Dad</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Robert T. Kiyosaki</div>
                        <div className="text-sm text-[#394547] mb-2">"What the Rich Teach Their Kids about Money - That the Poor and the Middle Class Do Not!"</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/vt4i7lvosz">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-10x-rule.mp3?alt=media&amp;token=4638392a-ced3-4926-a8b3-1c7a4fbe520a"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-10x-rule.png?alt=media&amp;token=1e766af7-97ec-4bb8-969f-95ca35cf1d68" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">The 10X Rule</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Grant Cardone</div>
                        <div className="text-sm text-[#394547] mb-2">The Only Difference Between Success and Failure</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/g80xtszllo9">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fdeep-work.mp3?alt=media&amp;token=f1749513-05ab-4733-8675-6073ba6ac5e9"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fdeep-work.png?alt=media&amp;token=3a857c13-f374-4c82-b134-fef5a01c202e" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">Deep Work</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Cal Newport</div>
                        <div className="text-sm text-[#394547] mb-2">Rules for Focused Success in a Distracted World</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/6ctat6ynnzqp">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-5-second-rule.mp3?alt=media&amp;token=9a0e621a-c545-431f-8d19-052cc445844a"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-five-second-rule.png?alt=media&amp;token=8d6d24fd-11c8-425d-b7f0-3ae1499192db" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">The 5 Second Rule</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Mel Robbins</div>
                        <div className="text-sm text-[#394547] mb-2">Transform Your Life, Work, and Confidence with Everyday Courage</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/pducrv7aiqr">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-12-week-year.mp3?alt=media&amp;token=7542f2ee-eafe-44a7-9606-17f070d83af8"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-twelve-week-year.png?alt=media&amp;token=e6c87df7-f57c-4026-b364-9ba05541b438" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">The 12 Week Year</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">Brian P. Moran and Michael Lennington</div>
                        <div className="text-sm text-[#394547] mb-2">Get More Done in 12 Weeks than Others Do in 12 Months</div>
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
                        <a className="relative snap-start pt-8 px-3 pb-3 decoration-none rounded-sm max-w-[200px] w-full" href="/book/vdb1ghfrlt">
                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgetting-things-done.mp3?alt=media&amp;token=82466b53-7e16-4044-a79f-53bda67a39fe"></audio>
                        <figure className="w-[172px] h-[172px] mb-2">
                            <img className="w-full h-full"src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fgetting-things-done.png?alt=media&amp;token=b1d71920-25fd-4b8b-ad2b-7652f27b4cbc" alt="book"></img>
                        </figure>
                        <div className="text-base font-bold text-[#032b41]">Getting Things Done</div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">David Allen</div>
                        <div className="text-sm text-[#394547] mb-2">The Art of Stress-Free Productivity</div>
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
