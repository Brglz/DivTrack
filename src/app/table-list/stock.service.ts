import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockData:Stock[] = [
    { ticker: 'KO', name: "Coca Cola",totalQuantity: 10, avgPrice: 10, totalCost: 100, weight: 0.05, sector: 'Consumer', shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'IBM',name: "International Business Machines Corporation", totalQuantity: 2, avgPrice: 10, totalCost: 100, weight: 0.094, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'HDV',name: "iShares Core High Dividend ETF", totalQuantity: 3, avgPrice: 10, totalCost: 100, weight: 0.082, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'O',name: 'Realty Income Corporation', totalQuantity: 4, avgPrice: 10, totalCost: 100, weight: 0.1012, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'MCD',name:"McDonald's Corporation", totalQuantity: 5, avgPrice: 10, totalCost: 100, weight: 0.014547, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AAPL',name: 'Apple Inc.', totalQuantity: 6, avgPrice: 10, totalCost: 100, weight: 0.0899, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'MSFT',name:'Microsoft Corporation', totalQuantity: 7, avgPrice: 10, totalCost: 100, weight: 0.0292, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'KR', name:'Microsoft Corporation', totalQuantity: 8, avgPrice: 10, totalCost: 100, weight: 0.0415, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.058, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO',name:'Microsoft Corporation', totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.02, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.02, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.02, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.0334, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.0212, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.02245, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.012, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] }
    ,{ ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.071, sector: 'Consumer' , shares: [
      {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}, {quantity: 5, price: 10, cost: 50, date:"10.06.2023"}
    ] },
    { ticker: 'AVGO', name:'Microsoft Corporation',totalQuantity: 9, avgPrice: 10, totalCost: 100, weight: 0.051, sector: 'Consumer' , shares: [
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

  getData() {
    return this.stockData;
  }

}
