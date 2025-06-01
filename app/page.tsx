"use client"
import { OrderCard } from "@/components/OrderCard";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Menu = {
  id: string;
  name: string;
  quantity: number;
}
type Order = {
  id: string;
  orderName: string,
  menu: Menu[];
}

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export default function Home() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    socket = io("http://localhost:8080/ws-orders")
    socket.on("orders", (updatedOrder) => {
          console.log("New Order Update:", updatedOrder);

      setOrders((prevOrder) => [...prevOrder, updatedOrder]);
    })
    return () => {
      socket.disconnect();
    }
  }, [])
  // const mockData = [
  //   {
  //     id: "0",
  //     orderName: "xxxxvvxxxxx",
  //     menu: [
  //       { id: "1", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "2", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "3", name: "chicken korea 6 pcs", quantity: 5 },
  //     ]
  //   },
  //   {
  //     id: "1",
  //     orderName: "xxxxddxxxxx",
  //     menu: [
  //       { id: "1", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "2", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "3", name: "chicken korea 6 pcs", quantity: 5 },
  //     ]
  //   },
  //   {
  //     id: "2",
  //     orderName: "xxxxxw2xxxx",
  //     menu: [
  //       { id: "1", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "2", name: "chicken korea 6 pcs", quantity: 5 },
  //       { id: "3", name: "chicken korea 6 pcs", quantity: 5 },
  //     ]
  //   }
  // ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4">
        {orders?.map((order, index) => {
          return (
            <OrderCard key={index} orderName={order.orderName} menus={order.menu} />
          )
        })}
      </div>
    </div>
  );
}
