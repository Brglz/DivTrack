import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StockDataService } from 'app/services/stock-data.service';

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
  selectedStockDisplayedColumns: string[] = ['quantity', 'price', 'cost', 'date'];
  dataSource: MatTableDataSource<any>; 
  selectedStockSource: MatTableDataSource<any>;
  selectedStock;
  stockData;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit() {
    this.stockData = this.stockDataService.getStockData()
    this.selectedStock = this.stockData[0];
    
    this.dataSource = new MatTableDataSource(this.stockData)
    this.selectedStockSource = new MatTableDataSource(this.selectedStock.shares);
  }

  logRowData(stock) {
    this.selectedStockSource = new MatTableDataSource(stock.shares);
    this.selectedStock = stock;
  }

}
