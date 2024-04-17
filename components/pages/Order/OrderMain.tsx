import React from "react";
import OrderContainer from "@/components/shared/Container/OrderContainer";

interface Props {
  orderId: string;
}
const OrderMain = ({ orderId }: Props) => {
  return (
    <>
      <OrderContainer orderId={orderId} />
    </>
  );
};

export default OrderMain;
