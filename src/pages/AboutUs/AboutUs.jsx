import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { AppBar } from "../AppBar/AppBar";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import check11 from "./check-1-1.svg";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center relative bg-white">
      <div className="flex flex-col w-[1440px] h-[322px] items-center gap-[60px] pt-0 pb-10 px-[166px] relative bg-[#070b40] bg-[url(/hero.png)] bg-cover bg-[50%_50%]">
        <AppBar appbarVariant="default" />
        <div className="[font-family:'Figtree-Bold',Helvetica] font-bold text-6xl text-center leading-[normal] relative w-fit text-white tracking-[0] whitespace-nowrap">
          About Us
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 px-0 py-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[1199.23px] items-start gap-10 px-0 py-10 relative flex-[0_0_auto]">
          <div className="relative flex-1 mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-[40px] tracking-[0] leading-[normal]">
            Elevation to success!
          </div>

          <div className="flex items-start gap-6 relative flex-1 grow">
            <p className="flex-1 mt-[-1.00px] text-defaultblack relative [font-family:'Figtree-Regular',Helvetica] font-normal text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox. The quick brown fox
              jumps over the lazy fox. The quick brown fox jumps over the lazy
              fox. The quick brown fox jumps over the lazy fox. The quick brown
              fox jumps over the lazy fox. The quick brown fox jumps over the
              lazy fox. The quick brown fox jumps over the lazy fox.
            </p>
          </div>
        </div>

        <div className="relative w-[1296px] h-[684px] rounded-[20px] bg-[url(/img.png)] bg-cover bg-[50%_50%]" />
      </div>

      <Accordion accordionVariant="default" />
      <footer className="flex flex-col w-[1440px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] relative flex-[0_0_auto] bg-[#070b40]">
        <div className="flex w-[1296px] items-start justify-between relative flex-[0_0_auto] ml-[-130.00px] mr-[-130.00px]">
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

          <div className="flex flex-col w-32 items-start gap-6 relative self-stretch">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-defaultwhite text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Company
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-base leading-[26px] relative w-fit text-defaultwhite tracking-[0] whitespace-nowrap">
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

            <p className="relative self-stretch [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>

            <TextField variant="outlined" />
            <Button color="primary" size="medium">
              Subscribe now
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;