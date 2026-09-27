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
        <div className="row">
        <div className="container">
        <div className="for-you__title">Saved Books</div>
        <div className="for-you__sub--title">2 items</div>
        <div className="for-you__recommended--books">
        <a className="for-you__recommended--books-link" href="/book/2l0idxm1rvw">
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fcan't-hurt-me.mp3?alt=media&amp;token=7de57406-60ca-49d6-9113-857507f48312"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&amp;token=026646b0-40f8-48c4-8d32-b69bd5b8f700" alt="book" style="display: block;">
        </figure>
        <div className="recommended__book--title">Can’t Hurt Me</div>
        <div className="recommended__book--author">David Goggins</div><div className="recommended__book--sub-title">Master Your Mind and Defy the Odds</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">04:52</div>
        </div><div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">4.2</div>
        </div>
        </div>
        </a>
        <a className="for-you__recommended--books-link" href="/book/5bxl50cz4bt">
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991">
        </audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&amp;token=099193aa-4d85-4e22-8eb7-55f12a235fe2" alt="book" style="display: block;">
        </figure>
        <div className="recommended__book--title">How to Win Friends and Influence People in the Digital Age</div>
        <div className="recommended__book--author">Dale Carnegie</div>
        <div className="recommended__book--sub-title">Time-tested advice for the digital age</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">03:24</div>
        </div><div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">4.4</div>
        </div>
        </div>
        </a>
        </div>
        <div className="for-you__title">Finished</div>
        <div className="for-you__sub--title">13 items</div>
        <div className="for-you__recommended--books">
        <a className="for-you__recommended--books-link" href="/book/18tro3gle2p">
        <div className="book__pill book__pill--subscription-required">Premium</div>
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-talk-to-anyone.mp3?alt=media&amp;token=30173e56-fbe6-4162-8184-64d24dc480ac"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-talk-to-anyone.png?alt=media&amp;token=48f77463-a093-42b4-8f1f-82fa4edd044c" alt="book" style="display: block;">
        </figure>
        <div className="recommended__book--title">How to Talk to Anyone</div>
        <div className="recommended__book--author">Leil Lowndes</div>
        <div className="recommended__book--sub-title">92 Little Tricks for Big Success in Relationships</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">03:22</div>
        </div><div className="recommended__book--details">
        <div className="recommended__book--details-icon"></div>
        <div className="recommended__book--details-text">4.6</div>
        </div>
        </div>
        </a>
        <a className="for-you__recommended--books-link" href="/book/2l0idxm1rvw">
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fcan't-hurt-me.mp3?alt=media&amp;token=7de57406-60ca-49d6-9113-857507f48312"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&amp;token=026646b0-40f8-48c4-8d32-b69bd5b8f700" alt="book" style="display: block;"></figure>
        <div className="recommended__book--title">Can’t Hurt Me</div>
        <div className="recommended__book--author">David Goggins</div>
        <div className="recommended__book--sub-title">Master Your Mind and Defy the Odds</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon"></div>
        <div className="recommended__book--details-text">04:52</div>
        </div><div className="recommended__book--details">
        <div className="recommended__book--details-icon"></div>
        <div className="recommended__book--details-text">4.2</div>
        </div>
        </div>
        </a>
        <a className="for-you__recommended--books-link" href="/book/2ozpy1q1pbt">
        <div className="book__pill book__pill--subscription-required">Premium</div>
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-intelligent-investor.mp3?alt=media&amp;token=82429bb8-8af4-4375-bca5-e6f89e631fca"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-intelligent-investor.png?alt=media&amp;token=f72f1865-de93-4c67-bd6e-55070f467923" alt="book" style="display: block;">
        </figure>
        <div className="recommended__book--title">The Intelligent Investor</div>
        <div className="recommended__book--author">Benjamin Graham</div>
        <div className="recommended__book--sub-title">The Definitive Book on Value Investing</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon"></div>
        <div className="recommended__book--details-text">02:48</div>
        </div>
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon">
        </div>
        <div className="recommended__book--details-text">4.8</div>
        </div>
        </div>
        </a>
        <a className="for-you__recommended--books-link" href="/book/4t0amyb4upc">
        <div className="book__pill book__pill--subscription-required">Premium</div>
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fmastery.mp3?alt=media&amp;token=364b7c19-e9b1-4084-be0d-3a9cb5367098"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
        <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fmastery.png?alt=media&amp;token=c41aac74-9887-4536-9478-93cd983892af" alt="book" style="display: block;">
        </figure>
        <div className="recommended__book--title">Mastery</div>
        <div className="recommended__book--author">Robert Greene</div>
        <div className="recommended__book--sub-title">Myths about genius and what it really means to be great</div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
        <div className="recommended__book--details-icon"></div>
        <div className="recommended__book--details-text">4.3</div>
        </div>
        </div>
        </a>
        <a className="for-you__recommended--books-link" href="/book/5bxl50cz4bt">
        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991"></audio>
        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
          <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&amp;token=099193aa-4d85-4e22-8eb7-55f12a235fe2" alt="book" style="display: block;">
          </figure>
          <div className="recommended__book--title">How to Win Friends and Influence People in the Digital Age</div>
          <div className="recommended__book--author">Dale Carnegie</div>
          <div className="recommended__book--sub-title">Time-tested advice for the digital age</div>
          <div className="recommended__book--details-wrapper">
            <div className="recommended__book--details">
              <div className="recommended__book--details-icon">
                </div>
                <div className="recommended__book--details-text">4.4</div>
                </div>
                </div>
                </a>
                <a className="for-you__recommended--books-link" href="/book/6ctat6ynzqp">
                <div className="book__pill book__pill--subscription-required">Premium</div>
                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-5-second-rule.mp3?alt=media&amp;token=9a0e621a-c545-431f-8d19-052cc445844a"></audio>
                <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                  <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-five-second-rule.png?alt=media&amp;token=8d6d24fd-11c8-425d-b7f0-3ae1499192db" alt="book" style="display: block;">
                  </figure>
                  <div className="recommended__book--title">The 5 Second Rule</div>
                  <div className="recommended__book--author">Mel Robbins</div>
                  <div className="recommended__book--sub-title">Transform Your Life, Work, and Confidence with Everyday Courage</div>
                  <div className="recommended__book--details-wrapper">
                    <div className="recommended__book--details">
                      <div className="recommended__book--details-icon">
                        </div>
                        <div className="recommended__book--details-text">02:45</div>
                        </div>
                        <div className="recommended__book--details">
                          <div className="recommended__book--details-icon">
                            </div>
                            <div className="recommended__book--details-text">4.3</div>
                            </div>
                            </div>
                            </a>
                            <a className="for-you__recommended--books-link" href="/book/ap153fptaq">
                            <div className="book__pill book__pill--subscription-required">Premium</div>
                            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgood-to-great.mp3?alt=media&amp;token=c1b30865-26f7-47c5-a0f3-fd9da5d3da3d"></audio>
                            <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                              <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fgood-to-great.png?alt=media&amp;token=b906ec52-7871-411f-b5b6-53f1da98ee27" alt="book" style="display: block;">
                              </figure>
                              <div className="recommended__book--title">Jim Collins</div>
                              <div className="recommended__book--author">Good to Great</div>
                              <div className="recommended__book--sub-title">Why Some Companies Make the Leap...And Others Don't</div>
                              <div className="recommended__book--details-wrapper">
                                <div className="recommended__book--details">
                                  <div className="recommended__book--details-icon">
                                    </div>
                                    <div className="recommended__book--details-text">03:01</div>
                                    </div>
                                    <div className="recommended__book--details">
                                      <div className="recommended__book--details-icon">
                                        </div>
                                        <div className="recommended__book--details-text">4.5</div>
                                        </div>
                                        </div>
                                        </a>
                                        <a className="for-you__recommended--books-link" href="/book/cuolx5oryy8"><div className="book__pill book__pill--subscription-required">Premium</div>
                                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-4-day-week.mp3?alt=media&amp;token=6265f7a5-1dab-422d-8d22-71cdb70678a1"></audio>
                                        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                          <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-4-day-week.png?alt=media&amp;token=8f468ea2-f16c-4a96-9bc3-8f66aaff33ec" alt="book" style="display: block;">
                                          </figure>
                                          <div className="recommended__book--title">The 4 Day Week</div>
                                          <div className="recommended__book--author">Andrew Barnes</div>
                                          <div className="recommended__book--sub-title">How the flexible work revolution can increase productivity, profitability, and wellbeing, and help create a sustainable future</div>
                                          <div className="recommended__book--details-wrapper">
                                            <div className="recommended__book--details">
                                              <div className="recommended__book--details-icon">
                                                </div>
                                                <div className="recommended__book--details-text">02:20</div>
                                                </div>
                                                <div className="recommended__book--details">
                                                  <div className="recommended__book--details-icon">
                                                    </div>
                                                    <div className="recommended__book--details-text">4.6</div>
                                                    </div>
                                                    </div>
                                                    </a>
                                                    <a className="for-you__recommended--books-link" href="/book/f9gy1gpai8">
                                                    <div className="book__pill book__pill--subscription-required">Premium</div>
                                                    <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
                                                    <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                                      <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&amp;token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2" alt="book" style="display: block;">
                                                      </figure>
                                                      <div className="recommended__book--title">The Lean Startup</div>
                                                      <div className="recommended__book--author">Eric Ries</div>
                                                      <div className="recommended__book--sub-title">How Constant Innovation Creates Radically Successful Businesses</div>
                                                      <div className="recommended__book--details-wrapper">
                                                        <div className="recommended__book--details">
                                                          <div className="recommended__book--details-icon">
                                                            </div>
                                                            <div className="recommended__book--details-text">03:23</div>
                                                            </div>
                                                            <div className="recommended__book--details">
                                                              <div className="recommended__book--details-icon">
                                                                </div>
                                                                <div className="recommended__book--details-text">4.6</div>
                                                                </div>
                                                                </div>
                                                                </a>
                                                                <a className="for-you__recommended--books-link" href="/book/g2tdej27d23">
                                                                <div className="book__pill book__pill--subscription-required">Premium</div>
                                                                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fatomic-habits.mp3?alt=media&amp;token=e9bd4ea8-044a-4c73-acac-1228e3bc50b6"></audio>
                                                                <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                                                  <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fatomic_habits.png?alt=media&amp;token=51401979-e7cc-40c4-87fa-3b27d1fe761b" alt="book" style="display: block;">
                                                                  </figure>
                                                                  <div className="recommended__book--title">Atomic Habits</div>
                                                                  <div className="recommended__book--author">James Clear</div>
                                                                  <div className="recommended__book--sub-title">An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones</div>
                                                                  <div className="recommended__book--details-wrapper">
                                                                    <div className="recommended__book--details">
                                                                      <div className="recommended__book--details-icon">
                                                                        </div>
                                                                        <div className="recommended__book--details-text">4.3</div>
                                                                        </div>
                                                                        </div>
                                                                        </a>
                                                                        <a className="for-you__recommended--books-link" href="/book/g80xtszllo9">
                                                                        <div className="book__pill book__pill--subscription-required">Premium</div>
                                                                        <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fdeep-work.mp3?alt=media&amp;token=f1749513-05ab-4733-8675-6073ba6ac5e9"></audio>
                                                                        <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                                                          <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fdeep-work.png?alt=media&amp;token=3a857c13-f374-4c82-b134-fef5a01c202e" alt="book" style="display: block;">
                                                                          </figure>
                                                                          <div className="recommended__book--title">Deep Work</div>
                                                                          <div className="recommended__book--author">Cal Newport</div>
                                                                          <div className="recommended__book--sub-title">Rules for Focused Success in a Distracted World</div>
                                                                          <div className="recommended__book--details-wrapper">
                                                                            <div className="recommended__book--details">
                                                                            <div className="recommended__book--details-icon"></div>
                                                                            <div className="recommended__book--details-text">02:50</div>
                                                                            </div>
                                                                            <div className="recommended__book--details">
                                                                              <div className="recommended__book--details-icon">
                                                                                </div>
                                                                                <div className="recommended__book--details-text">4.3</div>
                                                                                </div>
                                                                                </div>
                                                                                </a>
                                                                                <a className="for-you__recommended--books-link" href="/book/hyqzkhdyq7h">
                                                                                <div className="book__pill book__pill--subscription-required">Premium</div>
                                                                                <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Frich-dad-poor-dad.mp3?alt=media&amp;token=e65e6fc1-b5c7-4aed-9715-07a96ec12db1"></audio>
                                                                                <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                                                                  <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Frich-dad-poor-dad.png?alt=media&amp;token=dc226e0c-fd89-4897-9605-9603e04a9966" alt="book" style="display: block;">
                                                                                  </figure>
                                                                                  <div className="recommended__book--title">Rich Dad, Poor Dad</div>
                                                                                  <div className="recommended__book--author">Robert T. Kiyosaki</div>
                                                                                  <div className="recommended__book--sub-title">What the Rich Teach Their Kids about Money – That the Poor and the Middle className Do Not!</div>
                                                                                  <div className="recommended__book--details-wrapper">
                                                                                    <div className="recommended__book--details">
                                                                                    <div className="recommended__book--details-icon"> 
                                                                                      </div>
                                                                                      <div className="recommended__book--details-text">05:38</div>
                                                                                      </div>
                                                                                      <div className="recommended__book--details">
                                                                                        <div className="recommended__book--details-icon">
                                                                                          </div>
                                                                                          <div className="recommended__book--details-text">4.5</div>
                                                                                          </div>
                                                                                          </div>
                                                                                          </a>
                                                                                          <a className="for-you__recommended--books-link" href="/book/vt4i7lvosz">
                                                                                          <div className="book__pill book__pill--subscription-required">Premium</div>
                                                                                          <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-10x-rule.mp3?alt=media&amp;token=4638392a-ced3-4926-a8b3-1c7a4fbe520a"></audio>
                                                                                          <figure className="book__image--wrapper" style="margin-bottom: 8px;">
                                                                                            <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-10x-rule.png?alt=media&amp;token=1e766af7-97ec-4bb8-969f-95ca35cf1d68" alt="book" style="display: block;">
                                                                                            </figure>
                                                                                            <div className="recommended__book--title">The 10X Rule</div>
                                                                                            <div className="recommended__book--author">Grant Cardone</div>
                                                                                            <div className="recommended__book--sub-title">The Only Difference Between Success and Failure</div>
                                                                                            <div className="recommended__book--details-wrapper"><div className="recommended__book--details">
                                                                                              <div className="recommended__book--details-icon">
                                                                                                </div>
                                                                                                <div className="recommended__book--details-text">03:18</div>
                                                                                                </div>
                                                                                                <div className="recommended__book--details">
                                                                                                  <div className="recommended__book--details-icon">
                                                                                                    </div>
                                                                                                    <div className="recommended__book--details-text">4</div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </a>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </div>
        </div>
}

export default MyLibrary