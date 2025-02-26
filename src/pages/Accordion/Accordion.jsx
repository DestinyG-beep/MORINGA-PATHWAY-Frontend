import PropTypes from "prop-types";
import React from "react";

export const Accordion = ({ accordionVariant, className }) => {
  return (
    <div
      className={`flex flex-col items-center gap-[60px] pt-[120px] pb-[60px] px-0 relative ${className}`}
    >
      <div className="inline-flex items-center gap-10 flex-[0_0_auto] flex-col relative">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-Bold',Helvetica] font-bold text-defaultblack text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
          Frequently Asked Questions
        </div>

        <p className="relative w-fit [font-family:'Figtree-Regular',Helvetica] font-normal text-defaultblack text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
        </p>
      </div>

      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="items-start bg-[#ebf5f4] rounded-[20px] flex w-[1296px] gap-5 p-10 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#309689] text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
            01
          </div>

          <div className="flex items-start gap-5 flex-1 grow flex-col relative">
            <p className="relative w-[421px] h-[17px] mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
              Can I upload a CV?
            </p>

            <p className="relative self-stretch h-[45px] [font-family:'Figtree-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          <img className="relative w-10 h-10" alt="Plus circle" />
        </div>

        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="items-center border-b-2 [border-bottom-style:solid] border-[#30968933] flex w-[1296px] gap-5 p-10 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-600 text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              02
            </div>

            <div className="flex items-start gap-5 flex-1 grow flex-col relative">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-[normal]">
                How long will the recruitment process take?
              </p>
            </div>

            <img className="relative w-10 h-10" alt="Plus circle" />
          </div>

          <div className="items-center border-b-2 [border-bottom-style:solid] border-[#30968933] flex w-[1296px] gap-5 p-10 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-600 text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              04
            </div>

            <div className="flex items-start gap-5 flex-1 grow flex-col relative">
              <p className="relative w-[785px] h-[17px] mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
                Do you recruit for Graduates, Apprentices and Students?
              </p>
            </div>

            <img className="relative w-10 h-10" alt="Plus circle" />
          </div>

          <div className="items-center border-b-2 [border-bottom-style:solid] border-[#30968933] flex w-[1296px] gap-5 p-10 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-600 text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              03
            </div>

            <div className="flex items-start gap-5 flex-1 grow flex-col relative">
              <p className="relative w-[820px] h-[17px] mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
                What does the recruitment and selection process involve?
              </p>
            </div>

            <img className="relative w-10 h-10" alt="Plus circle" />
          </div>

          <div className="items-center border-b-2 [border-bottom-style:solid] border-[#30968933] flex w-[1296px] gap-5 p-10 relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-600 text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              05
            </div>

            <div className="flex items-start gap-5 flex-1 grow flex-col relative">
              <p className="relative w-[934px] h-[17px] mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-defaultblack text-2xl tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
                Can I receive notifications for any future jobs that may
                interest me?
              </p>
            </div>

            <img className="relative w-10 h-10" alt="Plus circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  accordionVariant: PropTypes.oneOf(["default"]),
};
