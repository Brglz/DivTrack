import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { TradeService } from './trade.service';
import { TradeDataSource } from './trade-data-manupulations.component';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {

  displayedColumns: string[] = ['ticker', 'date', 'quantity', 'price', 'cost', 'type'];
  dataSource: TradeDataSource | null;
  selectedStockSource: MatTableDataSource<any>;
  tradeData;
  dividendButtonSubscription
  buyButtonSubscription
  sellButtonSubscription
  allTypeButtonSubscription
  filterApplied: string;

  constructor(private tradeDataService: TradeService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild('dividendButton', { static: true }) dividendButton: ElementRef;
  @ViewChild('buyButton', { static: true }) buyButton: ElementRef;
  @ViewChild('sellButton', { static: true }) sellButton: ElementRef;
  @ViewChild('allTypeButton', { static: true }) allTypeButton: ElementRef;

  ngOnInit() {
    this.tradeData = this.tradeDataService.getData()

    this.dataSource = new TradeDataSource(new TradeService, this.paginator, this.sort);
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

  ngAfterViewInit() {
    this.dividendButtonClick();
    this.buyButtonClick();
    this.sellButtonClick();
    this.allTypeButtonClick();
  }


  dividendButtonClick() {
    this.dividendButtonSubscription = fromEvent(this.dividendButton.nativeElement, 'click')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        if (this.filterApplied == "DIVIDEND") {
          this.dataSource.filter = "";
          this.filterApplied = ""

        } else {
          this.dataSource.filter = "DIVIDEND";
          this.filterApplied = "DIVIDEND"
        }
      });
  }

  buyButtonClick() {
    this.buyButtonSubscription = fromEvent(this.buyButton.nativeElement, 'click')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        if (this.filterApplied == "BUY") {
          this.dataSource.filter = "";
          this.filterApplied = ""

        } else {
          this.dataSource.filter = "BUY";
          this.filterApplied = "BUY"
        }
      });
  }

  sellButtonClick() {
    this.sellButtonSubscription = fromEvent(this.sellButton.nativeElement, 'click')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        if (this.filterApplied == "SELL") {
          this.dataSource.filter = "";
          this.filterApplied = ""

        } else {
          this.dataSource.filter = "SELL";
          this.filterApplied = "SELL"
        }
      });
  }

  allTypeButtonClick() {
    this.allTypeButtonSubscription = fromEvent(this.allTypeButton.nativeElement, 'click')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        this.dataSource.filter = "";
      });
  }


  ngOnDestroy() {
    this.dividendButtonSubscription.unsubscribe();
    this.buyButtonSubscription.unsubscribe();
    this.sellButtonSubscription.unsubscribe();
    this.allTypeButtonSubscription.unsubscribe();
  }
}
