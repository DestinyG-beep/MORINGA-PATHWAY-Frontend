import PropTypes from "prop-types";
import React from "react";

export const AppBar = ({ appbarVariant, className }) => {
  return (
    <div
      className={`flex w-[1296px] items-center justify-around gap-[295px] px-0 py-5 relative ${className}`}
    >
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
          <div className="relative w-fit mt-[-1.00px] [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            About Us
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Figtree-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  appbarVariant: PropTypes.oneOf(["default"]),
};

export default AppBar;