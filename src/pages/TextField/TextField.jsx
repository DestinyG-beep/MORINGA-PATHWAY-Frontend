import PropTypes from "prop-types";
import React from "react";

export const TextField = ({ variant, inputType = "email" }) => {
  return (
    <input
      className="relative w-[306px] h-[50px] rounded-xl overflow-hidden border border-solid border-[#ffffff99] [background:none] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-4 whitespace-nowrap p-0 pl-[21px]"
      placeholder="Email Address"
      type={inputType}
    />
  );
};

TextField.propTypes = {
  variant: PropTypes.oneOf(["outlined"]),
  inputType: PropTypes.string,
};
