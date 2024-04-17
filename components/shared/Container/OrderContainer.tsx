import React from "react";
import OrderHeader from "@/components/shared/Header/Order/OrderHeader";
import OrderFooter from "@/components/shared/Footer/Order/OrderFooter";
import orderHeader from "@/components/shared/Header/Order/OrderHeader";

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
        <section className="w-[26rem] h-[36.75rem]  absolute top-[4.75rem] left-1/2 -translate-x-1/2 flex flex-col rounded-[0.625rem, 0.625rem, 0rem, 0rem]">
          <div className="h-[5.5rem] w-[26rem] bg-green-500  p-[1rem, 1.25rem, 1rem, 1.25rem] rounded-t-[0.625rem, 0.625rem]"></div>
          <h1>gamarjoba</h1>
        </section>
      </main>

      <OrderFooter />
    </>
  );
};

export default OrderContainer;
