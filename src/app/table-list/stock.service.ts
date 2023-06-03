import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockData:Stock[] = [
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
    ] },
    { ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 25, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
  ]

  dataChange: BehaviorSubject<Stock[]> = new BehaviorSubject<Stock[]>([]);

  dialogData: any;

  constructor() { }

  get data(): Stock[] {
    return this.dataChange.value;
  }

  public getAllIssues(): void {
    // this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
    //     this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //   console.log (error.name + ' ' + error.message);
    //   });

    this.dataChange.next(this.stockData);
  }

  getDialogData() {
    return this.dialogData;
  }

  addIssue (issue: Stock): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Stock): void {
    this.dialogData = issue;
    
  }

  addShares (issue: Stock): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }


}
