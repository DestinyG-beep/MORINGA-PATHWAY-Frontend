import React from "react";
import { Button } from "./Button/Button";
import briefcase22 from "briefcase-2-2.svg";
import chevronDown from "chevron-down.svg";
import clock from "clock.svg";
import g1352 from "g-135-2.png";
import g135 from "g-135.png";
import icon2 from "icon-2.png";
import icon3 from "icon-3.png";
import iconBg2 from "icon-bg-2.svg";
import iconBg3 from "icon-bg-3.svg";
import iconBg4 from "icon-bg-4.svg";
import iconBg5 from "icon-bg-5.svg";
import iconBg6 from "icon-bg-6.svg";
import iconBg from "icon-bg.svg";
import icon from "icon.png";
import image from "image.png";
import image1 from "image.svg";
import logo2 from "logo-2.svg";
import logo3 from "logo-3.svg";
import logo from "logo.svg";
import mapPin from "map-pin.svg";
import quotes from "quotes.svg";
import search from "search.svg";
import star5 from "star-5.svg";


export const Homepage = () => {
  return (
    <div className="inline-flex flex-col items-center relative bg-white">
      <div className="flex flex-col w-[1440px] h-[614px] items-center gap-[100px] px-[166px] py-0 relative bg-[#000000b2] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
        <header className="flex w-[528px] items-center gap-[295px] px-0 py-5 relative flex-[0_0_auto] bg-transparent">
          <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Home
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Jobs
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                About Us
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </div>
          </div>

          <div className="gap-5 mr-[-314.00px] inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Login
            </div>

            <Button color="primary" size="medium">
              Register
            </Button>
          </div>
        </header>

        <div className="inline-flex flex-col h-[431px] items-center gap-20 relative">
          <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-[60px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-[#ff5c00] text-[70px] text-center tracking-[0] leading-[80px] whitespace-nowrap">
                  Moringa Pathway
                </div>

                <p className="relative self-stretch [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                  Connecting Talent with Opportunity: Your Gateway to Career
                  Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1440px] h-[472px] items-center pt-[60px] pb-[120px] px-0 relative">
        <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            How it works
          </div>

          <p className="w-[646px] h-[37px] text-defaultblack text-center overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
            The quick brown fox jumps over the lazy fox.
          </p>
        </div>

        <div className="inline-flex items-start flex-[0_0_auto] mb-[-99.00px] -mt-px gap-6 relative">
          <div className="w-[306px] h-[280px] items-center justify-center gap-6 shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={image1}
            />

            <div className="inline-flex flex-col h-[81px] items-center gap-5 relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Create Account
              </div>

              <p className="relative w-60 h-10 [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="w-[306px] h-[280px] items-center justify-center gap-6 shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg}
            />

            <div className="inline-flex flex-col h-[81px] items-center gap-5 relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Upload Resume
              </div>

              <p className="relative w-60 h-10 [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="w-[306px] h-[280px] items-center justify-center gap-6 shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg4}
            />

            <div className="inline-flex flex-col h-[81px] items-center gap-5 relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Find Jobs
              </div>

              <p className="w-60 text-black text-center relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="w-[306px] h-[280px] items-center justify-center gap-6 shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg5}
            />

            <div className="inline-flex flex-col h-[81px] items-center gap-5 relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Apply Job
              </div>

              <p className="relative w-60 h-10 [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-start justify-center relative flex-[0_0_auto] rounded-2xl overflow-hidden">
        <div className="inline-flex h-20 items-center gap-5 p-5 relative flex-[0_0_auto] bg-white">
          <div className="inline-flex items-center gap-5 relative self-stretch flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2.5 p-5 relative self-stretch flex-[0_0_auto] border-r [border-right-style:solid] border-[#c7c7c799]">
              <div className="relative w-fit mt-[-10.50px] mb-[-8.50px] [font-family:'Figtree-Medium',Helvetica] font-medium text-[#00000080] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Job Title or Company
              </div>
            </div>

            <div className="flex w-[180px] items-center gap-3 relative self-stretch border-r [border-right-style:solid] border-[#c7c7c799]">
              <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-[#00000080] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Select Location
              </div>

              <img
                className="relative w-6 h-6"
                alt="Chevron down"
                src={chevronDown}
              />
            </div>

            <div className="flex w-[180px] items-center gap-3 relative self-stretch">
              <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-[#00000080] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Select Category
              </div>

              <img
                className="relative w-6 h-6"
                alt="Chevron down"
                src={chevronDown}
              />
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border inline-flex justify-center gap-2.5 px-7 py-3.5 self-stretch flex-[0_0_auto] bg-[#309689] items-center relative">
          <img className="relative w-4 h-4" alt="Search" src={search} />

          <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
            Search Job
          </div>
        </button>
      </div>

      <div className="flex flex-col w-[1440px] h-[1197px] items-center justify-between px-0 py-[60px] relative">
        <div className="w-[600px] items-start flex justify-between relative flex-[0_0_auto]">
          <div className="flex w-40 items-center gap-3 relative">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg2}
            />

            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                25,850
              </div>

              <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Jobs
              </div>
            </div>
          </div>

          <div className="flex w-40 items-center gap-3 relative">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg3}
            />

            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                10,250
              </div>

              <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Candidates
              </div>
            </div>
          </div>

          <div className="flex w-40 items-center gap-3 relative">
            <img
              className="relative w-[60px] h-[60px]"
              alt="Icon bg"
              src={iconBg6}
            />

            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                18,400
              </div>

              <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Companies
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[1296px] items-end justify-between relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Jobs Available
            </div>
          </div>

          <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-[#309689] text-2xl tracking-[0] leading-[normal] underline whitespace-nowrap">
            View all
          </div>
        </div>

        <div className="flex flex-col h-[944px] items-center self-stretch w-full gap-6 relative">
          <div className="w-[1296px] items-start gap-7 p-10 flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex justify-between self-stretch w-full items-start relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-7 gap-2.5 p-2 bg-[#3096891a] rounded-lg items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    12 min ago
                  </div>
                </div>

                <img className="relative w-6 h-6" alt="Icon" src={icon3} />
              </div>

              <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                <img className="relative w-10 h-10" alt="Logo" src={logo} />

                <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Regional Creative Facilitator
                  </div>

                  <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Wisozk - Becker Co
                  </div>
                </div>
              </div>
            </div>

            <div className="items-end self-stretch w-full flex justify-between relative flex-[0_0_auto]">
              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Briefcase"
                    src={briefcase22}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    ICT
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="Clock" src={clock} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Part time
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="G" src={g1352} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Ksh 1000- Ksh 4000
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Map pin"
                    src={mapPin}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Nairobi, Kenya
                  </div>
                </div>
              </div>

              <Button color="primary" size="medium">
                Job details
              </Button>
            </div>
          </div>

          <div className="w-[1296px] items-start gap-7 p-10 flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex justify-between self-stretch w-full items-start relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-7 gap-2.5 p-2 bg-[#3096891a] rounded-lg items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    24 min ago
                  </div>
                </div>

                <img className="relative w-6 h-6" alt="Icon" src={icon2} />
              </div>

              <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                <img className="relative w-10 h-10" alt="Logo" src={logo2} />

                <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                    District Intranet Director
                  </div>

                  <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    VonRueden - Weber Co
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Briefcase"
                    src={briefcase22}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    ICT
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="Clock" src={clock} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Full time
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="G" src={image} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Ksh 1000- Ksh 4000
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Map pin"
                    src={mapPin}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Nairobi, Kenya
                  </div>
                </div>
              </div>

              <Button color="primary" size="medium">
                Job details
              </Button>
            </div>
          </div>

          <div className="w-[1296px] items-start gap-7 p-10 flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex justify-between self-stretch w-full items-start relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-7 gap-2.5 p-2 bg-[#3096891a] rounded-lg items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    26 min ago
                  </div>
                </div>

                <img className="relative w-6 h-6" alt="Icon" src={icon} />
              </div>

              <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                <img className="relative w-10 h-10" alt="Logo" src={logo3} />

                <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Corporate Tactics Facilitator
                  </div>

                  <p className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Cormier, Turner and Flatley Inc
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-end gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Briefcase"
                    src={briefcase22}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Commerce
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="Clock" src={clock} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Full time
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img className="relative w-6 h-6" alt="G" src={g135} />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Ksh 1000- Ksh 4000
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-6 h-6"
                    alt="Map pin"
                    src={mapPin}
                  />

                  <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Nairobi, Kenya
                  </div>
                </div>
              </div>

              <Button color="primary" size="medium">
                Job details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[86px] pt-[120px] pb-[60px] px-[72px] relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="inline-flex items-center gap-[86px] relative flex-[0_0_auto]">
          <div className="relative flex-[0_0_auto] rounded-[20px] bg-[url(/img.png)] bg-cover bg-[50%_50%]" />

          <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="relative w-[531px] mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] tracking-[0] leading-[normal]">
                Connecting talent with opportunities
              </div>
            </div>

            <div className="gap-6 inline-flex items-center relative flex-[0_0_auto]">
              <Button color="primary" size="medium">
                Search Job
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[306px] items-start gap-[29px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-[#309689] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              12k+
            </div>

            <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Clients worldwide
            </div>
          </div>

          <div className="flex flex-col w-[306px] items-start gap-[29px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-[#309689] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              20k+
            </div>

            <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Active resume
            </div>
          </div>

          <div className="flex flex-col w-[306px] items-start gap-[29px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-[#309689] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              18k+
            </div>

            <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Compnies
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1440px] h-[1290px] items-center justify-center gap-[60px] px-0 py-[120px] relative bg-[#ebf5f4] bg-[url(/testimonials.png)] bg-cover bg-[50%_50%]">
        <div className="relative self-stretch w-full h-[714px] mt-[-110.00px] bg-[#00000080] rounded-[20px] overflow-hidden bg-[url(/video.png)] bg-cover bg-[50%_50%]">
          <div className="inline-flex flex-col gap-[60px] top-[219px] left-[172px] items-center relative">
            <p className="relative w-[952px] h-[132px] mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-white text-[50px] text-center tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              Good Life Begins With <br />A Good Foundation
            </p>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultblack text-[50px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Testimonials from Our Customers
          </div>
        </div>

        <div className="inline-flex items-end flex-[0_0_auto] mb-[-110.00px] gap-6 relative">
          <div className="w-[416px] h-[400px] items-start justify-between p-10 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />
                </div>

                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Amazing services
                </div>
              </div>

              <p className="w-[331px] h-[94px] text-black overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-16 h-16 rounded-[50px] bg-[url(/avatar.svg)] bg-cover bg-[50%_50%]" />

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
                  User 1
                </div>

                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Happy Client
                </div>
              </div>
            </div>

            <img
              className="absolute w-10 h-[30px] top-[266px] left-[336px]"
              alt="Quotes"
              src={quotes}
            />
          </div>

          <div className="w-[416px] h-[400px] items-start justify-between p-10 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />
                </div>

                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Everything simple
                </div>
              </div>

              <p className="w-[331px] h-[94px] text-black overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-16 h-16 rounded-[50px] bg-[url(/avatar.svg)] bg-cover bg-[50%_50%]" />

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="w-[107px] relative mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
                  User 2
                </div>

                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Happy Client
                </div>
              </div>
            </div>

            <img
              className="absolute w-10 h-[30px] top-[266px] left-[336px]"
              alt="Quotes"
              src={quotes}
            />
          </div>

          <div className="w-[416px] h-[400px] items-start justify-between p-10 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />

                  <img
                    className="relative w-[19.9px] h-[19.03px]"
                    alt="Star"
                    src={star5}
                  />
                </div>

                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Awesome, thank you!
                </div>
              </div>

              <p className="w-[331px] h-[94px] text-black overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-16 h-16 rounded-[50px] bg-[url(/avatar-2.svg)] bg-cover bg-[50%_50%]" />

              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal]">
                  User 3
                </div>

                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Happy Client
                </div>
              </div>
            </div>

            <img
              className="absolute w-10 h-[30px] top-[266px] left-[336px]"
              alt="Quotes"
              src={quotes}
            />
          </div>
        </div>
      </div>

      <footer className="flex flex-col w-[1440px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] relative flex-[0_0_auto] bg-[#060a40]">
        <div className="flex w-[1296px] items-start justify-between relative flex-[0_0_auto] ml-[-130.00px] mr-[-130.00px]">
          <div className="flex flex-col w-32 items-start gap-6 relative self-stretch">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Company
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                About Us
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                Our Team
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                Partners
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                For Candidates
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                For Employers
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Job Categories
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Telecomunications
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Hotels &amp; Tourism
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Construction
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Education
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Financial Services
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative self-stretch flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Newsletter
            </div>

            <p className="self-stretch text-white relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>

            <input
              className="relative w-[306px] h-[50px] rounded-xl overflow-hidden border border-solid border-[#ffffff99] [background:none] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-4 whitespace-nowrap p-0 pl-[21px]"
              placeholder="Email Address"
              type="email"
            />

            <button className="all-[unset] box-border flex w-[306px] h-[50px] justify-center gap-2.5 px-10 py-[15px] bg-[#e5322d] rounded-xl overflow-hidden items-center relative">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Subscribe now
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
