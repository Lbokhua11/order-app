import React from "react";
import OrderMain from "@/components/pages/Order/OrderMain";

const OrderPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <>
      <OrderMain orderId={params.orderId} />
    </>
  );
};

export default OrderPage;
