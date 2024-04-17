"use client";
import UncheckedIcon from "@/components/icons/Unchecked/UncheckedIcon";
import CheckedIcon from "@/components/icons/CheckedIcon/CheckedIcon";
import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-[25.063rem] h-[2.75rem] z-10 p-[0.375rem 1.5rem 0.375rem 1.5rem] text-[#B8C1F1] flex items-center ">
      {!isChecked && (
        <button onClick={() => setIsChecked(true)}>
          <UncheckedIcon />
        </button>
      )}
      {isChecked && (
        <button onClick={() => setIsChecked(false)}>
          <CheckedIcon />
        </button>
      )}

      <span className="ml-[0.5rem] text-[0.875rem]">
        I agree to pay 1% commission
      </span>
      <div className="ml-[1rem]">
        {isChecked && (
          <button className="w-[9.6875rem] h-[2.75rem] p-[0.75rem 1.5rem 0.75rem 1.5rem] bg-[#4E64DD] rounded-full text-[0.875rem] text-[#E2E5EE] font-bold">
            Pay 5000.00 gel
          </button>
        )}
        {!isChecked && (
          <button
            className="w-[9.6875rem] h-[2.75rem] p-[0.75rem 1.5rem 0.75rem 1.5rem] bg-[#73799C] rounded-full text-[0.875rem] text-[#B9BCC5] font-bold"
            disabled
          >
            Pay 5000.00 gel
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
