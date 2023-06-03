import { Share } from "./share";

export interface Stock {
    ticker: string, 
    totalQuantity: number, 
    avgPrice: number, 
    totalCost: number, 
    weight: number, 
    sector: string, 
    shares: Share[];
}
