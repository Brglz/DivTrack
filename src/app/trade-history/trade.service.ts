import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Trade } from 'app/models/trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  stockData:Trade[] = [
    {ticker: "MSFT", date: "01.06.2022", quantity: 10, price: 10, cost: 100, type: "BUY", userId: '1'},
    {ticker: "KO", date: "02.06.2023", quantity: 2, price: 10, cost: 20, type: "BUY", userId: '1'},
    {ticker: "O", date: "03.08.2023", quantity: 3, price: 10, cost: 30, type: "BUY", userId: '1'},
    {ticker: "DLR", date: "04.10.2023", quantity: 4, price: 10, cost: 40, type: "BUY", userId: '1'},
    {ticker: "AAPL", date: "05.06.2023", quantity: 5, price: 10, cost: 50, type: "BUY", userId: '1'},
    {ticker: "IBM", date: "06.03.2023", quantity: 6, price: 10, cost: 60, type: "BUY", userId: '1'},
    {ticker: "SCHD", date: "07.04.2023", quantity: 7, price: 10, cost: 70, type: "BUY", userId: '1'},
    {ticker: "BBY", date: "08.09.2023", quantity: 8, price: 10, cost: 80, type: "BUY", userId: '1'},
    {ticker: "BBY", date: "08.09.2023", quantity: 8, price: 10, cost: 80, type: "SELL", userId: '1'},
    {ticker: "TGT", date: "09.06.2023", quantity: 9, price: 10, cost: 90, type: "BUY", userId: '1'},
    {ticker: "O", date: "10.04.2023", quantity: 11, price: 10, cost: 110, type: "BUY", userId: '1'},
    {ticker: "O", date: "10.04.2023", quantity: 11, price: 10, cost: 110, type: "SELL", userId: '1'},
    {ticker: "HDV", date: "11.05.2023", quantity: 12, price: 10, cost: 120, type: "BUY", userId: '1'},
    {ticker: "HDV", date: "11.05.2023", quantity: 12, price: 10, cost: 120, type: "SELL", userId: '1'},
    {ticker: "AVGO", date: "12.04.2023", quantity: 13, price: 10, cost: 130, type: "BUY", userId: '1'},
    {ticker: "GE", date: "13.02.2023", quantity: 14, price: 10, cost: 140, type: "BUY", userId: '1'},
    {ticker: "MO", date: "14.01.2023", quantity: 0, price: 0, cost: 8.19, type: "DIVIDEND", userId: '1'},
    {ticker: "KO", date: "14.01.2022", quantity: 0, price: 0, cost: 3.45, type: "DIVIDEND", userId: '1'},
    {ticker: "AAPL", date: "14.05.2023", quantity: 0, price: 0, cost: 3.44, type: "DIVIDEND", userId: '1'},
    {ticker: "O", date: "14.08.2023", quantity: 0, price: 0, cost: 12.34, type: "DIVIDEND", userId: '1'},
    {ticker: "DLR", date: "09.08.2023", quantity: 0, price: 0, cost: 1.33, type: "DIVIDEND", userId: '1'},
  ]

  dataChange: BehaviorSubject<Trade[]> = new BehaviorSubject<Trade[]>([]);

  dialogData: any;

  constructor() { }

  get data(): Trade[] {
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

  addIssue (issue: Trade): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Trade): void {
    this.dialogData = issue;
    
  }

  addShares (issue: Trade): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }

  getData() {
    return this.stockData;
  }

}
