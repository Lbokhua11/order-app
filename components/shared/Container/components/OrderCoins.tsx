"use client";
import React, { useState } from "react";
import SearchIcon from "@/components/icons/Search/SearchIcon";
import BinanceIcon from "@/components/icons/BinancePay/BinanceIcon";
import Radio from "@mui/material/Radio";
import GatePayIcon from "@/components/icons/GatePay/GatePayIcon";

const OrderCoins = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <main className="w-full h-vh-minus-header-footer absolute top-[4rem]">
        <section className="w-[26rem] h-[36.75rem]  absolute top-[4.75rem] left-1/2 -translate-x-1/2 flex flex-col ">
          <div className="h-[5.5rem] w-[26rem] bg-[#31344B] rounded-t-[0.625rem] flex items-center relative py-0 px-[1.25rem] border-b border-solid border-gray-700">
            <div className="w-[21rem] h-[3.5rem]">
              <span className="text-[1rem] text-[#E2E5EE]">Your Order:</span>
              <span className="text-[1.5rem] text-[#E2E5EE]"> 44242 </span>
              <span className="text-[0.875rem] text-[#969BB5]">GEL</span> <br />
              <span className="text-[0.875rem] text-[#969BB5]">
                Select a payment method or cryptocurrency below
              </span>
            </div>
            <div className="">
              <SearchIcon />
            </div>
          </div>
          <div className="w-[26rem] bg-[#31344B] py-[1rem] px-[1.25rem] flex flex-col gap-y-[0.75rem]">
            <div className="flex flex-col gap-y-[0.75rem]">
              <span className="text-[#969BB5] text-[1rem]">
                Payment Methods
              </span>
              <div className="flex justify-between">
                <div
                  className={`w-[11.25rem] h-[7rem] bg-[#414560] rounded-[0.625rem]  ${selectedValue == "a" ? "border border-solid border-blue-500" : ""} py-[0.875rem] px-[0.875rem] flex flex-col gap-y-[0.5rem]`}
                  onClick={() => {
                    setSelectedValue("a");
                  }}
                >
                  <div className=" flex justify-between ">
                    <BinanceIcon />
                    <Radio
                      checked={selectedValue === "a"}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      className="1000:w-5 1000:h-5 w-4 h-4"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: selectedValue == "a" ? "#4E64DD" : "#E2E5EE",
                        },
                        p: 0,
                      }}
                    />
                  </div>
                  <div>
                    <span className="flex flex-col gap-y-[0.25rem] text-[#E2E5EE]">
                      Pay with binance
                    </span>
                    <span className="text-[#969BB5]">2000 USDT</span>
                  </div>
                </div>
                <div
                  className={`w-[11.25rem] h-[7rem] bg-[#414560] rounded-[0.625rem]  ${selectedValue == "b" ? "border border-solid border-blue-500" : ""} py-[0.875rem] px-[0.875rem] flex flex-col gap-y-[0.5rem]`}
                  onClick={() => {
                    setSelectedValue("b");
                  }}
                >
                  <div className=" flex justify-between ">
                    <GatePayIcon />
                    <Radio
                      checked={selectedValue === "b"}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "b" }}
                      className="1000:w-5 1000:h-5 w-4 h-4"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: selectedValue == "b" ? "#4E64DD" : "#E2E5EE",
                        },
                        p: 0,
                      }}
                    />
                  </div>
                  <div>
                    <span className="flex flex-col gap-y-[0.25rem] text-[#E2E5EE]">
                      Pay with Gate.io
                    </span>
                    <span className="text-[#969BB5]">2000 USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#969BB5] text-[1rem]">
                Cryptocurrencies
              </span>
              <div className="flex flex-col">
                <div>Bitcoin</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderCoins;
