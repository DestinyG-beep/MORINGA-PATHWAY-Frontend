import React from "react";
import { Button } from "../Button/Button";
import bookmarks from "./bookmarks.svg";
import briefcase22 from "./briefcase-2-2.svg";
import check11 from "./check-1-1.svg";
import chevronDown from "./chevron-down.svg";
import chevronRight from "./chevron-right.svg";
import clock from "./clock.svg";
import ellipse from "./ellipse.png";
import g1352 from "./g-135-2.png";
import g1353 from "./g-135-3.png";
import g1354 from "./g-135-4.png";
import g1355 from "./g-135-5.png";
import g1356 from "./g-135-6.png";
import g135 from "./g-135.png";
import icon21 from "./icon-2.png";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.png";
import icon31 from "./icon-3.svg";
import icon4 from "./icon-4.png";
import icon5 from "./icon-5.png";
import icon from "./icon.png";
import icon1 from "./icon.svg";
import image from "./image.png";
import image1 from "./image.svg";
import line3 from "./line-3.svg";
import logo2 from "./logo-2.svg";
import logo3 from "./logo-3.svg";
import logo4 from "./logo-4.svg";
import logo5 from "./logo-5.svg";
import logo from "./logo.svg";
import logos from "./logos.svg";
import mapPin2 from "./map-pin-2.svg";
import mapPin from "./map-pin.svg";
import mdiBellBadgeOutline from "./mdi-bell-badge-outline.svg";
import search from "./search.svg";
import NavBar from "../../components/Navbar";

export const Jobs = () => {
  return (
    <div className="flex-box items-center relative bg-white">
      <div className="flex flex-col w-[1440px] h-[210px] items-center justify-between pt-0 pb-10 px-[166px] relative bg-[#070b40] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
        <header className="flex w-[358px] items-center justify-between px-0 py-5 relative flex-[0_0_auto] bg-transparent">
          <div className="relative w-[162px]" />

          <Navbar/>
        </header>

        <div className="flex w-[1342.14px] items-center justify-between ml-[-117.07px] mr-[-117.07px] rotate-[-0.10deg] relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2 p-0.5 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-[30px] border-2 border-solid border-[#c9cdf0] relative flex-[0_0_auto]">
              <img
                className="relative w-[35.8px] h-[55.84px] rotate-[0.10deg] object-cover"
                alt="Ellipse"
                src={ellipse}
              />
            </div>

            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-primary-10 text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                Aleph Phoebe
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <img
              className="relative w-[24.04px] h-[24.04px] mt-[-0.02px] mb-[-0.02px] ml-[-0.02px] rotate-[0.10deg]"
              alt="Bookmarks"
              src={bookmarks}
            />

            <img
              className="relative w-[24.04px] h-[24.04px] mt-[-0.02px] mb-[-0.02px] mr-[-0.02px] rotate-[0.10deg]"
              alt="Mdi bell badge"
              src={mdiBellBadgeOutline}
            />
          </div>
        </div>

        <div className="[font-family:'Figtree-Bold',Helvetica] font-bold text-6xl text-center relative w-fit text-white tracking-[0] leading-[normal] whitespace-nowrap">
          Jobs
        </div>
      </div>

      <div className="flex w-[1440px] items-start gap-6 pt-[60px] pb-[120px] px-[72px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 px-5 py-10 relative self-stretch w-full flex-[0_0_auto] bg-[#ebf5f4] rounded-[20px] overflow-hidden">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Search by Job Title
              </div>

              <div className="flex w-[265px] h-10 items-center gap-3 px-3 py-3.5 bg-white relative rounded-xl overflow-hidden">
                <img
                  className="relative w-5 h-5 mt-[-4.00px] mb-[-4.00px]"
                  alt="Search"
                  src={search}
                />

                <div className="relative w-fit mt-[-0.50px] [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Job title or company
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Location
              </div>

              <div className="flex w-[265px] h-10 items-center justify-between px-3 py-3.5 bg-white relative rounded-xl overflow-hidden">
                <div className="inline-flex items-center gap-3 mt-[-4.00px] mb-[-4.00px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-5 h-5"
                    alt="Map pin"
                    src={mapPin2}
                  />

                  <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Choose city
                  </div>
                </div>

                <img
                  className="relative w-5 h-5 mt-[-4.00px] mb-[-4.00px]"
                  alt="Chevron down"
                  src={chevronDown}
                />
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Category
              </div>

              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      Commerce
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="[font-family:'Figtree-Regular',Helvetica] text-black relative w-fit mt-[-1.00px] font-normal text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Telecomunications
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Hotels &amp; Tourism
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Education
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Financial Services
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>

              <Button color="primary" size="medium">
                Show more
              </Button>
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="[font-family:'Figtree-SemiBold',Helvetica] text-black relative w-fit mt-[-1.00px] font-semibold text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {" "}
                Job Type
              </div>

              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Full Time
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Part Time
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Freelance
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Seasonal
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Fixed-Price
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Experience Level
              </div>

              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      No-experience
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Fresher
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Intermediate
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Expert
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Date Posted
              </div>

              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      All
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Last Hour
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Last 24 Hours
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Last 7 Days
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>

                <div className="flex w-[266px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-4 h-4 rounded border border-solid border-[#6c757d]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Last 30 Days
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-5 items-center justify-around gap-2.5 px-2 py-1 bg-white rounded-xl relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-base relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-28 items-start gap-5 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Salary
              </div>

              <div className="relative self-stretch w-full h-6">
                <div className="relative w-64 h-5 top-0.5">
                  <img
                    className="w-[245px] absolute h-1 top-2 left-[11px]"
                    alt="Line"
                    src={line3}
                  />

                  <img
                    className="w-[164px] absolute h-1 top-2 left-[11px]"
                    alt="Line"
                    src={line3}
                  />

                  <div className="absolute w-5 h-5 top-0 left-0 bg-[#309689] rounded-[10px]" />

                  <div className="absolute w-5 h-5 top-0 left-[165px] bg-[#309689] rounded-[10px]" />
                </div>
              </div>

              <div className="flex h-6 items-end justify-between relative self-stretch w-full">
                <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Salary: Ksh0 - Ksh100,000
                </div>

                <button className="all-[unset] box-border flex w-[72px] h-6 justify-center gap-2.5 px-[75px] py-3 bg-[#309689] rounded items-center relative overflow-hidden">
                  <div className="relative w-fit mt-[-7.00px] mb-[-3.00px] ml-[-58.00px] mr-[-58.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    Apply
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-10 relative flex-1 grow">
          <div className="flex w-[966px] items-center justify-between relative flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-gray-600 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Showing 6-6 of 10 results
            </p>

            <button className="all-[unset] box-border flex w-[180px] h-10 justify-between p-3 rounded-md border-[1.5px] border-solid border-[#6c757d] items-center relative overflow-hidden">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Figtree-Medium',Helvetica] font-medium text-gray-600 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Sort by latest
              </div>

              <img
                className="relative w-6 h-6 mt-[-4.00px] mb-[-4.00px]"
                alt="Chevron down"
                src={chevronDown}
              />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      10 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={icon5} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={logo4} />

                  <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Forward Security Director
                    </div>

                    <p className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Bauch, Schuppe and Schulist Co
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
                      Hotels &amp; Tourism
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="Clock" src={clock} />

                    <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Full time
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="G" src={g1355} />

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

            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      12 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={icon21} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={image1} />

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
                      Part time
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="G" src={g1356} />

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

            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      15 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={icon} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={logo5} />

                  <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Internal Integration Planner
                    </div>

                    <p className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Mraz, Quigley and Feest Inc.
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
                      Construction
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="Clock" src={clock} />

                    <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Full time
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="G" src={g1354} />

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

            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      24 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={icon3} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={logo3} />

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

            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      26 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={image} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={logo2} />

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

            <div className="items-start gap-7 p-10 self-stretch w-full flex-[0_0_auto] shadow-[0px_3px_8px_#30968914] flex flex-col relative bg-white rounded-[20px]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col h-7 items-start gap-2.5 p-2 bg-[#3096891a] rounded-lg relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-[#309689] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      30 min ago
                    </div>
                  </div>

                  <img className="relative w-6 h-6" alt="Icon" src={icon4} />
                </div>

                <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-10 h-10" alt="Logo" src={logo} />

                  <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Forward Accounts Consultant
                    </div>

                    <div className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Miller Group
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
                      Financial services
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="Clock" src={clock} />

                    <div className="relative w-fit [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Full time
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img className="relative w-6 h-6" alt="G" src={g1353} />

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

          <div className="flex w-[966px] justify-between items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]" />

            <div className="inline-flex gap-6 items-start relative flex-[0_0_auto]">
              <button className="all-[unset] box-border flex flex-col w-10 h-10 justify-center gap-2.5 px-[9px] py-[7px] bg-[#309689] rounded-lg items-center relative overflow-hidden">
                <div className="[font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-xl relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                  1
                </div>
              </button>

              <button className="all-[unset] box-border flex flex-col w-10 h-10 justify-center gap-2.5 px-[9px] py-[7px] rounded-lg border-2 border-solid border-[#6c757d] items-center relative overflow-hidden">
                <div className="[font-family:'Figtree-SemiBold',Helvetica] font-semibold text-gray-600 text-xl relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                  2
                </div>
              </button>
            </div>

            <button className="all-[unset] box-border inline-flex h-10 justify-center gap-2 px-4 py-[15px] flex-[0_0_auto] rounded-lg border-2 border-solid border-[#6c757d] items-center relative overflow-hidden">
              <div className="inline-flex items-center gap-1 mt-[-7.00px] mb-[-7.00px] relative flex-[0_0_auto]">
                <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-gray-600 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Next
                </div>

                <img
                  className="relative w-6 h-6"
                  alt="Chevron right"
                  src={chevronRight}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1440px] items-center gap-[60px] pt-[60px] pb-[120px] px-0 relative flex-[0_0_auto] bg-[#ebf5f4]">
        <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Top Company
          </div>

          <p className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            These are some of the high end companies we have been able to
            connect with among others
          </p>
        </div>

        <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
          <div className="w-[306px] h-[360px] items-center justify-between px-0 py-12 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto]">
              <div className="flex w-[60px] h-[60px] items-center justify-center gap-2.5 p-1.5 relative bg-black rounded-lg overflow-hidden shadow-[0px_2px_4px_#30968926]">
                <img className="relative w-10 h-10" alt="Icon" src={icon2} />
              </div>

              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                Instagram
              </div>
            </div>

            <p className="relative w-[230px] h-[67px] [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="w-[306px] h-[360px] items-center justify-between px-0 py-12 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto]">
              <div className="flex w-[60px] h-[60px] items-center justify-center gap-2.5 p-1.5 relative bg-black rounded-lg overflow-hidden shadow-[0px_2px_4px_#30968926]">
                <img className="relative w-10 h-10" alt="Logos" src={logos} />
              </div>

              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                Tesla
              </div>
            </div>

            <p className="relative w-[230px] h-[67px] [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="w-[306px] h-[360px] items-center justify-between px-0 py-12 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto]">
              <div className="flex w-[60px] h-[60px] items-center justify-center gap-2.5 p-1.5 relative bg-black rounded-lg overflow-hidden shadow-[0px_2px_4px_#30968926]">
                <img className="relative w-10 h-10" alt="Icon" src={icon31} />
              </div>

              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                McDonald’s
              </div>
            </div>

            <p className="relative w-[230px] h-[67px] [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="w-[306px] h-[360px] items-center justify-between px-0 py-12 shadow-[0px_3px_8px_#3096890d] flex flex-col relative bg-white rounded-[20px]">
            <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto]">
              <div className="flex w-[60px] h-[60px] items-center justify-center gap-2.5 p-1.5 relative bg-black rounded-lg overflow-hidden shadow-[0px_2px_4px_#30968926]">
                <img className="relative w-10 h-10" alt="Icon" src={icon1} />
              </div>

              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                Apple
              </div>
            </div>

            <p className="relative w-[230px] h-[67px] [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>
        </div>
      </div>

      <footer className="flex flex-col w-[1440px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] relative flex-[0_0_auto] bg-[#070b40]">
        <div className="flex w-[1296px] items-start justify-between relative flex-[0_0_auto] ml-[-130.00px] mr-[-130.00px]">
          <div className="flex flex-col w-[377px] items-start gap-10 relative">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <img className="relative w-7 h-7" alt="Check" src={check11} />

              <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xl relative w-fit tracking-[0] leading-[normal] whitespace-nowrap">
                Job
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

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
            <div className="[font-family:'Inter-SemiBold',Helvetica] text-defaultwhite relative w-fit mt-[-1.00px] font-semibold text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Job Categories
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="[font-family:'Inter-Regular',Helvetica] text-defaultwhite relative w-fit mt-[-1.00px] font-normal text-base tracking-[0] leading-[normal] whitespace-nowrap">
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

            <p className="relative self-stretch [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>

            <input
              className="w-[306px] h-[50px] border border-solid border-[#ffffff99] relative rounded-xl overflow-hidden [background:none] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-4 whitespace-nowrap p-0 pl-[21px]"
              placeholder="Email Address"
              type="email"
            />

            <button className="all-[unset] box-border flex w-[306px] h-[50px] justify-center gap-2.5 px-10 py-[15px] bg-[#e5322d] rounded-xl items-center relative overflow-hidden">
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

export default Jobs;