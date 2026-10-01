"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const faqs = [
  { question: "How does the free 7-day trial work?", answer: "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial." },
  { question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?", answer: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option." },
  { question: "What's included in the Premium plan?", answer: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."},
  { question: "Can I cancel during my trial or subscription?", answer: "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."}
];

export default function ChoosePlan() {
    const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="m-0 w-full">
      <div className="opacity-0 pointer-events-none fixed top-0 left-0 w-full h-full bg-[#3a4649] transition-opacity duration-400ms ease-ease z-10"></div>
      <div className="w-full ">
        <div className="relative text-center w-full mb-[24px] bg-[#032b41] rounded-b-[256px]">
          <div className="max-w-[1000px] m-auto px-[24px] pt-12">
            <div className="font-bold md:text-[48px] mb-[40px] text-[26px] md:mb-[32px] text-white text-center">
              Get unlimited access to many amazing books to read
            </div>
            <div className="md:text-[20px] mb-[32px] text-[16px] text-white text-center">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="flex justify-center max-w-[340px] m-auto rounded-t-[180px] overflow-hidden">
              <img
                className="w-full h-full"
                alt="pricing"
                src="/assets/pricing-top.png"
              ></img>
            </figure>
          </div>
        </div>
        <div className="max-w-[1070px] w-full m-auto px-[24px]">
          <div className="w-full py-[40px]">
            <div className="grid-cols-1 grid md:grid-cols-3 justify-center text-center gap-[24px] max-w-[800px] m-auto">
              <div>
                <figure className="flex justify-center text-[#032b41] mb-3">
                  <svg
                    className="w-[60px] h-[60px]"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"></path>
                  </svg>
                </figure>
                <div className="text-[#394547]">
                  <b>Key ideas in few min</b> with many books to read
                </div>
              </div>
              <div>
                <figure className="flex justify-center text-[#032b41] mb-3">
                  <svg
                    className="w-[60px] h-[60px]"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0H24V24H0z"></path>
                      <path d="M21 3v2c0 3.866-3.134 7-7 7h-1v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-3c0-3.866 3.134-7 7-7h3zM5.5 2c2.529 0 4.765 1.251 6.124 3.169C10.604 6.51 10 8.185 10 10v1h-.5C5.358 11 2 7.642 2 3.5V2h3.5z"></path>
                    </g>
                  </svg>
                </figure>
                <div className="text-[#394547]">
                  <b>3 million</b> people growing with Summarist everyday
                </div>
              </div>
              <div>
                <figure className="flex justify-center text-[#032b41] mb-3">
                  <svg
                    className="w-[60px] h-[60px]"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                  </svg>
                </figure>
                <div className="text-[#394547] pb-12">
                  <b>Precise recommendations</b> collections curated by experts
                </div>
              </div>
            </div>
            <div className="text-[24px] text-[#032b41] text-center mb-8 font-bold">
              Choose the plan that fits you
            </div>
            <div className="border-4 border-[#2be080] flex gap-6 p-6 bg-[#f1f6f4] rounded-sm cursor-pointer max-w-[680px] m-auto">
              <div className="relative w-6 h-6 rounded-full border-black border-2 flex items-center justify-center">
                <div className="absolute w-[6px] h-[6px] bg-[#000] rounded-[50%]"></div>
              </div>
              <div>
                <div className="md:text-base text-lg font-semibold text-[#032b41] mb-2">
                  Premium Plus Yearly
                </div>
                <div className="md:text-[20px] text-2xl font-bold text-[#032b41] mb-2">
                  $99.99/year
                </div>
                <div className="md:text-xs text-[#6b757b]">
                  7-day free trial included
                </div>
              </div>
            </div>
            <div className="text-sm text-[#6b757b] flex items-center gap-2 max-w-[240px] mx-auto my-6 justify-center">
              <div className="flex-1 h-px bg-[#bac8ce]"></div>
              <div>or</div>
              <div className="flex-1 h-px bg-[#bac8ce]"></div>
            </div>
            <div className="flex gap-6 p-6 bg-[#f1f6f4] border-[#bac8ce] rounded-sm cursor-pointer max-w-[680px] m-auto">
              <div className="relative w-6 h-6 rounded-full border-black border-2 flex items-center justify-center"></div>
              <div>
                <div className="md:text-base text-lg font-semibold text-[#032b41] mb-2">
                  Premium Monthly
                </div>
                <div className="md:text-[20px] text-2xl font-bold text-[#032b41] mb-2">
                  $9.99/month
                </div>
                <div className="md:text-xs text-[#6b757b]">
                  No trial included
                </div>
              </div>
            </div>
            <div className="bg-[#fff] sticky border-0 z-1 p-8 flex flex-col items-center gap-4">
              <span>
                <button className="w-[300px] bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-base transition-bg duration-200ms flex items-center justify-center min-w-[180px] cursor-pointer">
                  <span>Start your free 7-day trial</span>
                </button>
              </span>
              <div className="text-xs text-[#6b757b] text-center">
                Cancel your trial at any time before it ends, and you won’t be
                charged.
              </div>
            </div>
            <div>
              {faqs.map((faq, index) => (
  <div key={index} className="border-b border-[#ddd]">
    <div
      className="flex justify-between items-center cursor-pointer p-6"
      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
    >
      <div className="text-lg font-medium text-[#032b41]">{faq.question}</div>
      <FiChevronDown className={openIndex === index ? "rotate-180" : ""} />
    </div>

    {openIndex === index && (
      <div className="px-6 pb-6 text-[#394547]">{faq.answer}</div>
    )}
  </div>
))}
</div>
</div>
</div>
        <section className="bg-[#f1f6f4]">
          <div className="p-[40px] w-full ">
            <div className="max-w-[1070px] w-full m-auto p-6">
              <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 relative flex justify-between text-sm m-auto">
                <div className="z-1">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Actions
                  </div>
                  <div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Summarist Magazine
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Cancel Subscription
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Help
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="z-1">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Useful Links
                  </div>
                  <div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Pricing
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Summarist Business
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Gift Cards
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Authors &amp; Publishers
                      </a>
                    </div>
                  </div>
                </div>
                <div className="z-1">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Company
                  </div>
                  <div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        About
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Careers
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Partners
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Code of Conduct
                      </a>
                    </div>
                  </div>
                </div>
                <div className="z-1">
                  <div className="font-semibold mb-4 text-lg text-[#032b41]">
                    Other
                  </div>
                  <div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Sitemap
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Legal Notice
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Terms of Service
                      </a>
                    </div>
                    <div className="mb-3">
                      <a className="text-[#394547] text-sm cursor-not-allowed">
                        Privacy Policies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[#032b41] font-medium">
                  Copyright © 2023 Summarist.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
