import PropTypes from "prop-types";
import React from "react";

export const Button = ({ color, size }) => {
  return (
    <button className="all-[unset] box-border flex w-[306px] h-[50px] items-center justify-center gap-2.5 px-10 py-[15px] relative bg-[#e5322d] rounded-xl overflow-hidden">
      <div className="relative w-fit mt-[-0.50px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Subscribe now
      </div>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["medium"]),
};
