"use client";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-[25.063rem] h-[2.75rem] z-10 p-[0.375rem 1.5rem 0.375rem 1.5rem] text-[#B8C1F1] flex items-center absolute left-1/2 -translate-x-1/2">
      <Checkbox
        onChange={() => setIsChecked((prev) => !prev)}
        className="1000:w-5 1000:h-5 w-4 h-4"
        checked={isChecked}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          "& .MuiSvgIcon-root": {
            color: isChecked ? "#1B8B26" : "#969BB5",
          },
          p: 0,
        }}
      />

      <span className="ml-[0.5rem] text-[0.875rem]">
        I agree to pay 1% commission
      </span>
      <div className="ml-[1rem]">
        <button
          disabled={!isChecked}
          className={`w-[9.6875rem] h-[2.75rem]  p-[0.75rem 1.5rem 0.75rem 1.5rem] ${!isChecked ? "bg-[#73799C] " : "bg-[#4E64DD] cursor-pointer"} rounded-full text-[0.875rem] text-[#E2E5EE] font-bold`}
        >
          Pay 5000.00 gel
        </button>
      </div>
    </div>
  );
};

export default CheckBox;
