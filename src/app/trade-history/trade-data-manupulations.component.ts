import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { BehaviorSubject, Observable, merge, map } from "rxjs";
import { TradeService } from "./trade.service";

export class TradeDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');

    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);

    }

    filteredData: any[] = [];
    renderedData: any[] = [];

    constructor(public _exampleDatabase: TradeService,
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
            // this.filteredData = this._exampleDatabase.data.slice().filter((stock: any) => {
            //     const searchStr = (stock.ticker).toLowerCase();
            //     return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            // });

            this.filteredData = this._exampleDatabase.data.slice().filter((stock: any) => {
                const searchStr = stock.ticker.toLowerCase();
                const filterValue = this.filter.toLowerCase();
                const typeMatch = stock.type.toLowerCase().includes(filterValue);
                const dateMatch = stock.date.toLowerCase().includes(filterValue);

                return searchStr.includes(filterValue) || typeMatch || dateMatch;
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
                case 'quantity': [propertyA, propertyB] = [a.quantity, b.quantity]; break;
                case 'price': [propertyA, propertyB] = [a.price, b.price]; break;
                case 'cost': [propertyA, propertyB] = [a.cost, b.cost]; break;
                case 'date': [propertyA, propertyB] = [a.date, b.date]; break;
                case 'type': [propertyA, propertyB] = [a.type, b.type]; break;
            }

            if (this._sort.active == 'date') {
                propertyA = propertyA.toString()
                propertyB = propertyB.toString()
                const [dayA, monthA, yearA] = propertyA.split('.');
                const [dayB, monthB, yearB] = propertyB.split('.');
                const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
                const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

                return (dateA.getTime() - dateB.getTime()) * (this._sort.direction === 'asc' ? 1 : -1);
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}