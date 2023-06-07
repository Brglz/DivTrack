import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { DividendService } from './dividend.service';
import { DividendDataSource } from './dividend-data-manipulations.component';

@Component({
  selector: 'app-dividend',
  templateUrl: './dividend.component.html',
  styleUrls: ['./dividend.component.css']
})
export class DividendComponent implements OnInit {

  displayedColumns: string[] = ['ticker', 'shares', 'divPerShare', 'totalDiv', 'exDivDate'];
  dataSource: DividendDataSource | null;
  selectedStockSource: MatTableDataSource<any>;
  tradeData;
  chartValues: [];
  progressBarValues = [
    {currentValue: 27.44, maxValue: 25, period: "Month"},
    {currentValue: 27.44, maxValue: 50, period: "Month"},
    {currentValue: 27.44, maxValue: 100, period: "Month"},
    {currentValue: 329.28, maxValue: 250, period: "Year"},
    {currentValue: 329.28, maxValue: 500, period: "Year"},
    {currentValue: 329.28, maxValue: 1000, period: "Year"}
  ]

  constructor(private dividendDataService: DividendService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit() {
    this.tradeData = this.dividendDataService.getData()

    this.dataSource = new DividendDataSource(new DividendService, this.paginator, this.sort);
    
    fromEvent(this.filter.nativeElement, 'keyup')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  logRowData(stock) {
    this.selectedStockSource = new MatTableDataSource(stock.shares);
  }

  isDateWithinRange(date: string, days:number): boolean {
    const currentDate = new Date();
    const dateInTHeFuture = new Date();
    dateInTHeFuture.setDate(dateInTHeFuture.getDate() + days);
    const [day,month,year] = date.split('.')
    const selectedDate = new Date(`${month}.${day}.${year}`);
    
    return currentDate < selectedDate && selectedDate <= dateInTHeFuture;
  }
}

