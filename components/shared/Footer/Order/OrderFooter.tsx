import React from "react";
import CitypayIcon from "@/components/icons/Citypay/CitypayIcon";

import CheckBox from "@/components/shared/Footer/Order/components/CheckBox";

const OrderFooter = () => {
  return (
    <>
      <div className="w-[100%]  bg-[#31344B] fixed bottom-0 h-[4.75rem]">
        <footer className="w-[90rem]  max-w-[90rem] fixed bottom-0 h-[4.75rem] justify-between py-0 px-[80px] relative flex items-center z-50 left-1/2 -translate-x-1/2">
          <button className="h-[2rem] z-10  text-[#B8C1F1]">
            Terms and conditions
          </button>
          <CheckBox />
          <div className="w-[12.938rem] h-[2rem] z-10 p-[0.375rem 1.5rem 0.375rem 1.5rem] flex">
            <span className="text-[0.875rem] text-[#B8C1F1] mt-[0.375rem]">
              Powered by:
            </span>
            <div className="ml-[0.5rem]">
              <CitypayIcon />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OrderFooter;
