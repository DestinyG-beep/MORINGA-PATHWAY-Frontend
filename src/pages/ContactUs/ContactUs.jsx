import React from "react";
import check11 from "./check-1-1.svg";
import clock from "./clock.svg";
import mail from "./mail.svg";
import mapPin from "./map-pin.svg";
import phone from "./phone.svg";

export const ContactUs = () => {
  return (
    <div className="flex flex-col items-center relative bg-white">
      <div className="flex flex-col w-[1440px] items-center gap-[60px] pt-0 pb-10 px-[166px] relative flex-[0_0_auto] bg-[#070b40] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
        <header className="flex w-[1296px] items-center justify-around gap-[295px] px-0 py-5 relative flex-[0_0_auto] ml-[-94.00px] mr-[-94.00px] bg-transparent">
          <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
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
              <div className="mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-base relative w-fit text-white tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
            </div>
          </div>
        </header>

        <div className="[font-family:'Figtree-Bold',Helvetica] font-bold text-6xl text-center relative w-fit text-white tracking-[0] leading-[normal] whitespace-nowrap">
          Contact Us
        </div>
      </div>

      <div className="w-[1440px] items-center px-[72px] py-[60px] flex justify-between relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-[60px] flex-[0_0_auto] flex-col relative">
          <div className="flex w-[620px] items-start gap-10 flex-[0_0_auto] flex-col relative">
            <div className="flex w-[564px] items-start gap-5 flex-[0_0_auto] flex-col relative">
              <div className="relative w-[631px] mt-[-1.00px] mr-[-67.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] tracking-[0] leading-[normal]">
                Your growth our success
              </div>
            </div>

            <p className="w-[620px] relative [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="flex w-[654px] items-center gap-[104px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[212px] items-start justify-end gap-4 relative">
              <img className="relative w-7 h-7" alt="Phone" src={phone} />

              <div className="relative w-fit [font-family:'Figtree-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-6 whitespace-nowrap">
                Call for inquiry
              </div>

              <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-6 whitespace-nowrap">
                1234567890
              </div>
            </div>

            <div className="inline-flex flex-[0_0_auto] flex-col items-start gap-4 relative">
              <img className="relative w-7 h-7" alt="Mail" src={mail} />

              <div className="relative w-fit [font-family:'Figtree-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-6 whitespace-nowrap">
                Send us email
              </div>

              <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-6 whitespace-nowrap">
                abcdef@gmail.com
              </div>
            </div>

            <div className="inline-flex items-center gap-[104px] relative flex-[0_0_auto]">
              <div className="flex w-[212px] flex-col items-start gap-4 relative">
                <img className="relative w-7 h-7" alt="Clock" src={clock} />

                <div className="relative w-fit [font-family:'Figtree-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  Opening hours
                </div>

                <div className="[font-family:'Figtree-Medium',Helvetica] font-medium text-black text-xl leading-6 relative w-fit tracking-[0] whitespace-nowrap">
                  24/7
                </div>
              </div>

              <div className="flex w-52 flex-col items-start gap-4 relative">
                <img className="relative w-7 h-7" alt="Map pin" src={mapPin} />

                <div className="relative w-fit [font-family:'Figtree-Bold',Helvetica] font-bold text-black text-2xl tracking-[0] leading-6 whitespace-nowrap">
                  Office
                </div>

                <div className="relative w-fit [font-family:'Figtree-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-6 whitespace-nowrap">
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-10 px-10 py-[60px] relative flex-[0_0_auto] bg-[#ebf5f4] rounded-[20px]">
          <div className="inline-flex items-center gap-5 flex-[0_0_auto] flex-col relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[28px] tracking-[0] leading-[normal]">
              Contact Info
            </div>

            <p className="w-[323px] h-[23px] text-center whitespace-nowrap relative [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
              <div className="flex flex-col w-60 items-start gap-1.5 relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-base tracking-[0] leading-5 whitespace-nowrap">
                  First Name
                </div>

                <div className="flex items-center gap-2 px-4 py-[9px] relative self-stretch w-full flex-[0_0_auto] bg-defaultwhite rounded-md">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-5">
                    Your name
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-60 items-start gap-1.5 relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-base tracking-[0] leading-5 whitespace-nowrap">
                  Last Name
                </div>

                <div className="flex items-center gap-2 px-4 py-[9px] relative self-stretch w-full flex-[0_0_auto] bg-defaultwhite rounded-md">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-5">
                    Your last name
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[504px] items-start gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-base tracking-[0] leading-5 whitespace-nowrap">
                Email Address
              </div>

              <div className="flex items-center gap-2 px-4 py-[9px] relative self-stretch w-full flex-[0_0_auto] bg-defaultwhite rounded-md">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-5">
                  Your E-mail address
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[504px] h-[178px] items-start gap-1.5 relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Medium',Helvetica] font-medium text-defaultblack text-base tracking-[0] leading-5 whitespace-nowrap">
                  Message
                </div>

                <div className="flex items-start gap-2 px-4 py-[9px] relative flex-1 self-stretch w-full grow bg-defaultwhite rounded-md">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Figtree-Regular',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-5">
                    Your message...
                  </div>
                </div>
              </div>

              <button className="all-[unset] box-border flex w-[248px] h-10 items-center justify-center gap-2.5 px-5 py-3.5 relative bg-[#309589] rounded-lg overflow-hidden">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Send Message
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col w-[1440px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] relative flex-[0_0_auto] bg-[#070b40]">
        <div className="w-[1296px] items-start ml-[-130.00px] mr-[-130.00px] flex justify-between relative flex-[0_0_auto]">
          <div className="flex flex-col w-[377px] items-start gap-10 relative">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <img className="relative w-7 h-7" alt="Check" src={check11} />

              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Job
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <div className="flex w-32 items-start gap-6 self-stretch flex-col relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Company
            </div>

            <div className="flex items-start gap-4 self-stretch w-full flex-[0_0_auto] flex-col relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base tracking-[0] leading-[26px] whitespace-nowrap">
                About Us
              </div>

              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
                Our Team
              </div>

              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
                Partners
              </div>

              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
                For Candidates
              </div>

              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-defaultwhite text-base leading-[26px] relative w-fit tracking-[0] whitespace-nowrap">
                For Employers
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-6 flex-[0_0_auto] flex-col relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Job Categories
            </div>

            <div className="flex items-start gap-4 self-stretch w-full flex-[0_0_auto] flex-col relative">
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

            <p className="relative self-stretch [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>

            <input
              className="relative w-[306px] h-[50px] rounded-xl overflow-hidden border border-solid border-[#ffffff99] [background:none] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-4 whitespace-nowrap p-0 pl-[21px]"
              placeholder="Email Address"
              type="email"
            />

            <button className="all-[unset] box-border flex w-[306px] h-[50px] items-center justify-center gap-2.5 px-10 py-[15px] relative bg-[#e5322d] rounded-xl overflow-hidden">
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

export default ContactUs;