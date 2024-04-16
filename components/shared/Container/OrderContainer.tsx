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

      <OrderFooter />
    </>
  );
};

export default OrderContainer;
