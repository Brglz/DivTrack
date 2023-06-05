import { User } from "./user";

export interface Trade {
    ticker: string,
    date: string,
    quantity: number,
    price: number,
    cost: number,
    type: string,
    userId: string
}
