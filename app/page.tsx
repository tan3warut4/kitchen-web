import { OrderCard } from "@/components/OrderCard";

export default function Home() {
  const mockData = [
    {
      id: "0",
      orderName: "xxxxvvxxxxx",
      menu: [
        {id: "1", name: "chicken korea 6 pcs", quantity: 5 },
        { id: "2",name: "chicken korea 6 pcs", quantity: 5 },
        { id: "3",name: "chicken korea 6 pcs", quantity: 5 },
      ]
    },
    {
      id: "1",
      orderName: "xxxxddxxxxx",
      menu: [
        {id: "1", name: "chicken korea 6 pcs", quantity: 5 },
        {id: "2",name: "chicken korea 6 pcs", quantity: 5 },
        { id: "3",name: "chicken korea 6 pcs", quantity: 5 },
      ]
    },
    {
      id: "2",
      orderName: "xxxxxw2xxxx",
      menu: [
        { id: "1", name: "chicken korea 6 pcs", quantity: 5 },
        { id: "2", name: "chicken korea 6 pcs", quantity: 5 },
        { id: "3", name: "chicken korea 6 pcs", quantity: 5 },
      ]
    }
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4">
        {mockData.map((order) => {
          return (
            <OrderCard key={order.id} orderName={order.orderName} menus={order.menu} />
          )
        })}
      </div>
    </div>
  );
}
