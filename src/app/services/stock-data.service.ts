import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  stockData = [
    { ticker: 'KO', totalQuantity: 1, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer', shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'IBM', totalQuantity: 2, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'HDV', totalQuantity: 3, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'O', totalQuantity: 4, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'MCD', totalQuantity: 5, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AAPL', totalQuantity: 6, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'MSFT', totalQuantity: 7, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'KR', totalQuantity: 8, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
  ]

  constructor() { }

  getStockData() {
    return this.stockData;
  }
}
