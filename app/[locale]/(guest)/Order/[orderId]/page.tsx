import React from "react";
import OrderContainer from "@/components/shared/Container/OrderContainer";

const OrderPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <>
      <OrderContainer orderId={params.orderId} />
    </>
  );
};

export default OrderPage;
