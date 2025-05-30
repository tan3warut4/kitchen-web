import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type Menu = {
    id: string,
    name: string,
    quantity: number,
}

type OrderCardProps = {
    orderName: string,
    menus: Menu[],
}

export function OrderCard({ orderName, menus }: OrderCardProps) {
    return (
        <Card className="w-full min-w-80">
            <CardHeader>
                <CardTitle>{`Order : ${orderName}`}</CardTitle>
                {menus?.map((menu) => {
                    return (
                        <CardDescription key={menu.id}>{menu.name} X {menu.quantity}</CardDescription>
                    )
                })}
            </CardHeader>

            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Update order
                </Button>
            </CardFooter>
        </Card>
    )
}
