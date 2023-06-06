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
    const currentDate = new Date(); // 06.06.2023
    const dateInTHeFuture = new Date(); //20.06.2023
    dateInTHeFuture.setDate(dateInTHeFuture.getDate() + days);
    const [day,month,year] = date.split('.')
    const selectedDate = new Date(`${month}.${day}.${year}`); //19.06.2023
    console.log(selectedDate ,currentDate > selectedDate, selectedDate >= dateInTHeFuture);
    

    // 06.06.2023 > 19.06.2023 && 19.06.2023 >= 20.06.2023
    
    return currentDate < selectedDate && selectedDate <= dateInTHeFuture;
  }
}

