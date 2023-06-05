import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockDataService } from 'app/services/stock-data.service';
import {ExampleDataSource} from '../table-list/table-data-manupulation.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StockService } from './stock.service';
import { fromEvent } from 'rxjs';

export interface StockData {
  ticker: string;
  totalQuantity: number;
  avgPrice: number;
  totalCost: number;
  shares: [];
  weight: number;
  sector: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['ticker', 'totalQuantity', 'avgPrice', 'totalCost', 'weight', 'sector'];
  selectedStockDisplayedColumns: string[] = ['date', 'quantity', 'price', 'cost'];
  dataSource: ExampleDataSource | null;
  selectedStockSource: MatTableDataSource<any>;
  selectedStock;
  stockData;

  constructor(private stockDataService: StockService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit() {
    this.stockData = this.stockDataService.getData()
    this.selectedStock = this.stockData[0];
    
    this.dataSource = new ExampleDataSource(new StockService, this.paginator, this.sort);
    this.selectedStockSource = new MatTableDataSource(this.selectedStock.shares);
    fromEvent(this.filter.nativeElement, 'keyup')
    // .debounceTime(150)
    // .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) {
        return;
      }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  logRowData(stock) {
    this.selectedStockSource = new MatTableDataSource(stock.shares);
    this.selectedStock = stock;
  }

}
