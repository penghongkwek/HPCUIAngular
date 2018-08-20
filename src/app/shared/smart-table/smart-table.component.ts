// import {
//   Component,
//   OnInit,
//   Input,
//   Output,
//   EventEmitter
// } from '@angular/core';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.html',
  styleUrls: ['./smart-table.css'],
})
export class SmartTableComponent implements AfterViewInit {

  columns = [
    { columnDef: 'position', header: 'No.',    cell: (element: any) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
    { columnDef: 'weight',   header: 'Weight', cell: (element: any) => `${element.weight}`   },
    { columnDef: 'symbol',   header: 'Symbol', cell: (element: any) => `${element.symbol}`   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const ELEMENT_DATA: any[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  position: string;
  name: string;
  weight: string;
  symbol: string;
}

// export class ExampleDataSource extends DataSource<any> {

//   connect(): Observable<Element[]> {
//     return Observable.of(ELEMENT_DATA);
//   }

//   disconnect() {}
// }
// export class SmartTableComponent implements OnInit {

//   // @Input() steps: SmartTableModel[];
//   // @Output() clickEvent = new EventEmitter<any>();

//   constructor() { }

//   ngOnInit() {
//   }

// }
