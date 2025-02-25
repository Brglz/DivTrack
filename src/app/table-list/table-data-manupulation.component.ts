import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { BehaviorSubject, Observable, merge, map } from "rxjs";
import { StockService } from "./stock.service";

export class StockDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
  
    get filter(): string {
      return this._filterChange.value;
    }
  
    set filter(filter: string) {
      this._filterChange.next(filter);
    }
  
    filteredData: any[] = [];
    renderedData: any[] = [];
  
    constructor(public _exampleDatabase: StockService,
      public _paginator: MatPaginator,
      public _sort: MatSort) {
      super();
      // Reset to the first page when the user changes the filter.
      this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
      
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {//stel
      // Listen for any changes in the base data, sorting, filtering, or pagination
  
      const displayDataChanges = [
        this._exampleDatabase.dataChange,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
      
      this._exampleDatabase.getAllIssues();
  
  
      return merge(...displayDataChanges).pipe(map(() => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((stock: any) => {
          const searchStr = (stock.ticker).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
  
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
  
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
  
        return this.renderedData;
      }
      ));
    }
  
    disconnect() { }
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: any[]): any[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
      
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';

        switch (this._sort.active) {
          case 'ticker': [propertyA, propertyB] = [a.ticker, b.ticker]; break;
          case 'totalQuantity': [propertyA, propertyB] = [a.totalQuantity, b.totalQuantity]; break;
          case 'avgPrice': [propertyA, propertyB] = [a.avgPrice, b.avgPrice]; break;
          case 'totalCost': [propertyA, propertyB] = [a.totalCost, b.totalCost]; break;
          case 'weight': [propertyA, propertyB] = [a.weight, b.weight]; break;
          case 'sector': [propertyA, propertyB] = [a.sector, b.sector]; break;
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
        
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
}