import React from "react";
import OrderHeader from "@/components/shared/Header/Order/OrderHeader";
import OrderFooter from "@/components/shared/Footer/Order/OrderFooter";
import orderHeader from "@/components/shared/Header/Order/OrderHeader";
import SearchIcon from "@/components/icons/Search/SearchIcon";

interface Props {
  orderId: string;
}
const OrderContainer = ({ orderId }: Props) => {
  return (
    <>
      <OrderHeader orderId={orderId} />
      <span className=" text-[#B8C1F1] text-[0.875rem] absolute top-[3.5rem] left-1/2 -translate-x-1/2">
        Order Page # {orderId}
      </span>
      <main className="w-full h-vh-minus-header-footer absolute top-[4rem]">
        <section className="w-[26rem] h-[36.75rem]  absolute top-[4.75rem] left-1/2 -translate-x-1/2 flex flex-col ">
          <div className="h-[5.5rem] w-[26rem] bg-[#31344B] rounded-t-[0.625rem] flex items-center relative py-0 px-[1.25rem]">
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
        </section>
      </main>

      <OrderFooter />
    </>
  );
};

export default OrderContainer;
