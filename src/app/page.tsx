import Image from "next/image";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <nav className="h-20">
        <div className="flex h-full w-full max-w-[1070px] items-center justify-between mx-auto px-6">
          <figure className="max-w-[200px]">
            <img className="w-full h-full" src="/assets/logo.png" alt="logo" />
          </figure>

          <ul className="flex gap-6">
            <li className="cursor-pointer text-[#032b41] transition-colors duration-100 hover:text-[#2bd97c]">
              Login
            </li>
            <li className="cursor-not-allowed text-[#032b41]">About</li>
            <li className="cursor-not-allowed text-[#032b41]">Contact</li>
            <li className="cursor-not-allowed text-[#032b41]">Help</li>
          </ul>
        </div>
      </nav>

      <section>
        <div className="flex">
          <div className="w-1/2 px-6 md:px-12">
            <h1 className="text-[40px] font-bold text-[#032b41] mb-6 md:text-[24px]">
              Gain more knowledge <br />
              in less time
            </h1>

            <p className="text-xl font-light text-[#394547] mb-6 leading-[1.5]">
              Great summaries for busy people,
              <br />
              individuals who barely have time to read,
              <br />
              and even people who don’t like to read.
            </p>

            <button
              className="flex h-10 w-full min-w-[180px] max-w-[300px]
        items-center justify-center rounded
      bg-[#2bd97c] text-[#032b41]
        transition-colors duration-200
      hover:bg-[#20ba68]
        active:translate-y-px
        disabled:cursor-not-allowed disabled:opacity-65"
            >
              Login
            </button>
          </div>

          <figure className="flex w-full justify-end">
            <img
              className="w-full h-full max-w-[400px]"
              src="/assets/landing.png"
              alt="landing"
            />
          </figure>
        </div>
      </section>
      <section>
        <div className="w-full py-10">
          <div className="w-full max-w-[1070px] mx-auto px-6">
            <h2 className="mb-8 text-center text-[32px] font-bold text-[#032b41] md:font-[24px]">
              Understand books in few minutes
            </h2>
            <div className="grid grid-cols-3 gap-10 mb-24 md:grid-cols-1">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillFileText className="w-[60px] h-[60px] md:w-12 md:h-12" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-medium md:font-[20px]">
                  Read or listen
                </div>
                <div className="text-lg text-[#394547] font-light md:font-[14px]">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillBulb className="w-[60px] h-[60px] md:w-12 md:h-12" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-medium md:font-[20px]">
                  Find your next read
                </div>
                <div className="text-lg text-[#394547] font-light md:font-[14px]">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center mb-2 text-[#032b41]">
                  <AiFillAudio className="w-[60px] h-[60px] md:w-12 md:h-12" />
                </div>
                <div className="text-2xl text-[#032b41] mb-4 font-mediume md:font-[20px]">
                  Briefcasts
                </div>
                <div className="text-lg text-[#394547] font-light md:font-[14px]">
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>
            <div className="flex gap-20 mb-24 md:flex-col-2 md:gap-8 md:mb-8">
              <div className="flex w-full md:flex-col justify-center">
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Enhance your knowledge
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Achieve greater success
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Improve your health
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Develop better parenting skills
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Increase happiness
                </div>
                <div className="text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Be the best version of yourself!
                </div>
              </div>

              <div className="flex w-full md:flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10 md:order-1">
                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    93%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    of Summarist members <b>significantly increase</b> reading
                    frequency.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    96%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    of Summarist members <b>establish better</b> habits.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    90%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    have made <b>significant positive</b> change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-20 flex-row-reverse">
              <div className="flex w-full md:flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10 md:order-1">
                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    91%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    of Summarist members <b>report feeling more productive</b>{" "}
                    after incorporating the service into their daily routine.
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    94%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    of Summarist members have <b>noticed an improvement</b> in
                    their overall comprehension and retention of information.
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-xl font-semibold text-[#0365f2]">
                    88%
                  </div>
                  <div className="text-xl font-light text-[#394547] md:font-[16px]">
                    of Summarist members <b>feel more informed</b> about current
                    events and industry trends since using the platform.
                  </div>
                </div>
              </div>

              <div className="flex w-full md:flex-col justify-center md:items-flex">
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Expand your learning
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Accomplish your goals
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Strengthen your vitality
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Become a better caregiver
                </div>
                <div className="mb-4 text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Improve your mood
                </div>
                <div className="text-[32px] font-medium text-[#6b757b] md:text-[24px]">
                  Maximize your abilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1070px] mx-auto px-6">
          <div className="w-full py-10">
            <h2 className="mb-8 text-center text-[32px] font-bold text-[#032b41] md:font-[24px]">
              What our members say
            </h2>

            <div className="max-w-[600px] mx-auto">
              <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                <div className="flex gap-2 mb-2 text-[#032b41]">
                  <div>Hanna M.</div>
                  <div className="flex">
                    <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
                  </div>
                </div>
                <div className="text-[#394547] tracking-[0.3px] leading-[1.4] md:font-[14px]">
                  This app has been a <b>game-changer</b> for me! It&apos;s
                  saved me so much time and effort in reading and comprehending
                  books. Highly recommend it to all book lovers.
                </div>
              </div>
                <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                  <div className="flex gap-2 mb-2 text-[#032b41]">
                    <div>David B.</div>
                    <div className="flex">
                      <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
                    </div>
                  </div>
                  <div className="text-[#394547] tracking-[0.3px] leading-[1.4] md:font-[14px]">
                    I love this app! It provides{" "}
                    <b>concise and accurate summaries</b> of books in a way that
                    is easy to understand. It's also very user-friendly and
                    intuitive.
                  </div>
                </div>
                  <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                    <div className="flex gap-2 mb-2 text-[#032b41]">
                      <div>Nathan S.</div>
                      <div className="flex">
                        <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
                      </div>
                    </div>
                    <div className="text-[#394547] tracking-[0.3px] leading-[1.4] md:font-[14px]">
                      This app is a great way to get the main takeaways from a
                      book without having to read the entire thing.
                      <b>The summaries are well-written and informative. </b>
                      Definitely worth downloading.
                    </div>
                  </div>
                    <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
                      <div className="flex gap-2 mb-2 text-[#032b41]">
                        <div>Ryan R.</div>
                        <div className="flex">
                          <BsStarFill className="w-4 h-4 fill-[#0564f1]" />
                        </div>
                      </div>
                      <div className="text-[#394547] tracking-[0.3px] leading-[1.4] md:font-[14px]">
                        If you're a busy person who{" "}
                        <b>loves reading but doesn't have the time</b> to read
                        every book in full, this app is for you! The summaries
                        are thorough and provide a great overview of the book's
                        content.
                      </div>
                      </div>
                      </div>
                  <div className="flex justify-center">
                    <button className="flex h-10 w-full max-w-[300px] min-w-[180px] items-center justify-center rounded bg-[#2bd97c] text-[#032b41] transition-colors duration-200 hover:bg-[#20ba68] active:translate-y-px">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              </section>
              <section>
                <div className="w-full py-10">
                  <div className="w-full max-w-[1070px] mx-auto px-6">
                    <h2 className="mb-8 text-center text-[32px] font-bold text-[#032b41]">
                      Start growing with Summarist now
                    </h2>

                    <div className="grid grid-cols-3 gap-10 md:grid-col-1 md:gap-6">
                      <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
                        <div className="flex h-[60px] items-center gap-1">
                          <BiCrown className="h-12 w-12 text-[#0365f2]" />
                        </div>

                        <div className="mb-4 text-[40px] font-semibold text-[#032b41] md:font-[32px]">
                          3 Million
                        </div>

                        <div className="font-light text-[#394547] md:font-[14px]">
                          Downloads on all platforms
                        </div>
                      </div>

                      <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
                        <div className="flex h-[60px] items-center gap-1 text-[#0365f2]">
                          <BsStarFill className="h-5 w-5" />
                          <BsStarFill className="h-5 w-5" />
                          <BsStarFill className="h-5 w-5" />
                          <BsStarFill className="h-5 w-5" />
                          <BsStarHalf className="h-5 w-5" />
                        </div>

                        <div className="mb-4 text-[40px] font-semibold text-[#032b41] md:font-[32px]">
                          4.5 Stars
                        </div>

                        <div className="font-light text-[#394547] md:font-[14px]">
                          Average ratings on iOS and Google Play
                        </div>
                      </div>

                      <div className="flex flex-col items-center rounded-xl bg-[#d7e9ff] p-6 pb-10 text-center">
                        <div className="flex h-[60px] items-center gap-1">
                          <RiLeafLine className="h-12 w-12 text-[#0365f2]" />
                        </div>

                        <div className="mb-4 text-[40px] font-semibold text-[#032b41] md:font-[32px]">
                          97%
                        </div>

                        <div className="font-light text-[#394547] md:font-[14px]">
                          Of Summarist members create a better reading habit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <footer className="bg-[#f1f6f4]">
                <div className="w-full py-10">
                  <div className="w-full max-w-[1070px] mx-auto px-6">
                    <div className="relative flex justify-between text-sm mt-8 mb-16 md:flex-col-4 md:gap-8">
                      <div>
                        <div className="mb-4 text-lg font-semibold text-[#032b41]">
                          Actions
                        </div>

                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Summarist Magazine
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Cancel Subscription
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Help
                        </div>
                        <div className="leading-none text-sm text-[#394547] cursor-not-allowed">
                          Contact us
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 text-lg font-semibold text-[#032b41]">
                          Useful Links
                        </div>

                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Pricing
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Summarist Business
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Gift Cards
                        </div>
                        <div className="leading-none text-sm text-[#394547] cursor-not-allowed">
                          Authors & Publishers
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 text-lg font-semibold text-[#032b41]">
                          Company
                        </div>

                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          About
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Careers
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Partners
                        </div>
                        <div className="leading-none text-sm text-[#394547] cursor-not-allowed">
                          Code of Conduct
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 text-lg font-semibold text-[#032b41]">
                          Other
                        </div>

                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Sitemap
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Legal Notice
                        </div>
                        <div className="mb-3 leading-none text-sm text-[#394547] cursor-not-allowed">
                          Terms of Service
                        </div>
                        <div className="leading-none text-sm text-[#394547] cursor-not-allowed">
                          Privacy Policies
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="font-medium text-[#032b41]">
                        Copyright © 2023 Summarist.
                      </div>
                    </div>
                  </div>
                  </div>
                  </footer>
    </>
    );
    }
