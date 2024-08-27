import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import OrderItem from "./OrderItem";
import toast from "react-hot-toast";

const OrdersList = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(false);

  const observer = useRef();

  
  if(!session){
    return <p>Please login to use this functionality</p>
  }

  return (
    <Card className="w-full bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-[#535C91] p-6">
        <h2 className="text-3xl font-bold text-white">Your Orders</h2>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {orders.length === 0 && !loading ? (
          <p className="text-center text-gray-500">You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={order._id}
              ref={index === orders.length - 1 ? lastOrderElementRef : null}
            >
              <OrderItem order={order} />
            </div>
          ))
        )}
        {(loading || loadingMore) && (
          <div className="flex flex-col justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mb-4"></div>
            <p className="text-gray-600 font-medium">
              Loading more orders, please wait...
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrdersList;
