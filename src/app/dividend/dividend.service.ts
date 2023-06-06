import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Dividend } from 'app/models/dividend';

@Injectable({
  providedIn: 'root'
})
export class DividendService {
  stockData:Dividend[] = [
    {ticker: "MSFT", shares: 1, divPerShare: 2, totalDiv: 2, exDivDate: "20.06.2022"},
    {ticker: "KO", shares: 2, divPerShare: 2, totalDiv: 4, exDivDate: "06.05.2023"},
    {ticker: "O", shares: 3, divPerShare: 2, totalDiv: 6, exDivDate: "09.05.2023"},
    {ticker: "IBM", shares: 4, divPerShare: 2, totalDiv: 8, exDivDate: "20.06.2023"},
    {ticker: "AAPL", shares: 5, divPerShare: 2, totalDiv: 10, exDivDate: "07.06.2023"},
    {ticker: "HDV", shares: 6, divPerShare: 2, totalDiv: 12, exDivDate: "08.06.2023"},
    {ticker: "AVGO", shares: 7, divPerShare: 2, totalDiv: 14, exDivDate: "09.06.2023"},
    {ticker: "PEP", shares: 8, divPerShare: 2, totalDiv: 16, exDivDate: "01.01.2023"},
    {ticker: "MSFT", shares: 1, divPerShare: 2, totalDiv: 2, exDivDate: "10.06.2022"},
    {ticker: "KO", shares: 2, divPerShare: 2, totalDiv: 4, exDivDate: "10.05.2023"},
    {ticker: "O", shares: 3, divPerShare: 2, totalDiv: 6, exDivDate: "09.05.2023"},
    {ticker: "IBM", shares: 4, divPerShare: 2, totalDiv: 8, exDivDate: "24.05.2023"},
    {ticker: "AAPL", shares: 5, divPerShare: 2, totalDiv: 10, exDivDate: "11.06.2023"},
    {ticker: "HDV", shares: 6, divPerShare: 2, totalDiv: 12, exDivDate: "10.05.2023"},
    {ticker: "AVGO", shares: 7, divPerShare: 2, totalDiv: 14, exDivDate: "11.03.2023"},
    {ticker: "PEP", shares: 8, divPerShare: 2, totalDiv: 16, exDivDate: "01.01.2023"},
    {ticker: "MSFT", shares: 1, divPerShare: 2, totalDiv: 2, exDivDate: "12.06.2022"},
    {ticker: "KO", shares: 2, divPerShare: 2, totalDiv: 4, exDivDate: "10.05.2023"},
    {ticker: "O", shares: 3, divPerShare: 2, totalDiv: 6, exDivDate: "09.05.2023"},
    {ticker: "IBM", shares: 4, divPerShare: 2, totalDiv: 8, exDivDate: "13.06.2023"},
    {ticker: "AAPL", shares: 5, divPerShare: 2, totalDiv: 10, exDivDate: "28.05.2023"},
    {ticker: "HDV", shares: 6, divPerShare: 2, totalDiv: 12, exDivDate: "14.06.2023"},
    {ticker: "AVGO", shares: 7, divPerShare: 2, totalDiv: 14, exDivDate: "15.06.2023"},
    {ticker: "PEP", shares: 8, divPerShare: 2, totalDiv: 16, exDivDate: "01.01.2023"},
  ]

  dataChange: BehaviorSubject<Dividend[]> = new BehaviorSubject<Dividend[]>([]);

  dialogData: any;

  constructor() { }

  get data(): Dividend[] {
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

  addIssue (issue: Dividend): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Dividend): void {
    this.dialogData = issue;
    
  }

  addShares (issue: Dividend): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }

  getData() {
    return this.stockData;
  }

}
