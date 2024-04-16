import React from "react";
import Arrow from "@/components/icons/Arrow/Arrow";
import CitypayIcon from "@/components/icons/Citypay/CitypayIcon";
import HelpIcon from "@/components/icons/Help/HelpIcon";

import { useLocale } from "next-intl";
import OrderLanguages from "@/components/shared/Header/Order/components/OrderLanguages";
interface Props {
  orderId: string;
}
const OrderHeader = ({ orderId }: Props) => {
  return (
    <div className="w-100% relative">
      <div className="w-[90rem] max-w-[90rem] fixed z-10 h-[4rem] justify-between p-[1rem, 5rem, 1rem, 5rem] flex absolute  left-1/2 -translate-x-1/2">
        <div className="w-[12.125rem] h-[2rem] ml-[5rem] mt-[1rem] text-[#B8C1F1]">
          <div className="ml-[1.5rem] flex mt-[0.375rem]">
            <Arrow />
            <button className="ml-[0.5rem] text-[0.875rem]">
              Back to merchant
            </button>
          </div>
        </div>
        <div className="w-[8.5rem] h-[3.75rem] mt-[1rem] absolute left-1/2 -translate-x-1/2">
          <div className="ml-[0.5rem]">
            <CitypayIcon />
          </div>
        </div>
        <div className="w-[14.875rem] h-[2rem] mr-[5rem] mt-[1rem] text-[#B8C1F1] flex items-center">
          <button className=" flex w-[6.75rem] h-[2rem] ">
            <div className="ml-[1.5rem] mt-[0.375rem]">
              <HelpIcon />
            </div>
            <span className="ml-[0.5rem] mt-[0.375rem] text-[0.875rem]">
              Help
            </span>
          </button>
          <OrderLanguages orderId={orderId} />
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
