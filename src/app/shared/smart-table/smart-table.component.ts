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
    { columnDef: 'job', header: 'Job',    cell: (element: any) => `${element.job}` },
    { columnDef: 'nodes',     header: 'Nodes',   cell: (element: any) => `${element.nodes}`     },
    { columnDef: 'core_node',   header: 'Cores/Node', cell: (element: any) => `${element.core_node}`   },
    { columnDef: 'ram',   header: 'RAM', cell: (element: any) => `${element.ram}`   },
    { columnDef: 'priority',   header: 'Priority', cell: (element: any) => `${element.priority}`   },
    { columnDef: 'status',   header: 'Status', cell: (element: any) => `${element.status}`   },
    { columnDef: 'creation_time',   header: 'Creation Time', cell: (element: any) => `${element.creation_time}`   },
    { columnDef: 'start_time',   header: 'Start Time', cell: (element: any) => `${element.start_time}`   },
    { columnDef: 'et_wt',   header: 'Elapsed Time / Wall Time', cell: (element: any) => `${element.et_wt}`   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const ELEMENT_DATA: any[] = [
      {job: '382103.host', nodes: '2', core_node: 32, ram: '64GB', priority: '2', status: 'Queued'
        , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00'},
      {job: '382104.host', nodes: '3', core_node: 32, ram: '32GB', priority: '2', status: 'Suspended'
        , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382105.host', nodes: '5', core_node: 32, ram: '64GB', priority: '2', status: 'Error'
      , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00'},
      {job: '382106.host', nodes: '7', core_node: 32, ram: '32GB', priority: '2', status: 'Completed'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382107.host', nodes: '2', core_node: 80, ram: '64GB', priority: '2', status: 'Hold'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382108.host', nodes: '1', core_node: 32, ram: '32GB', priority: '2', status: 'Transferred'
      , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00'},
      {job: '382109.host', nodes: '3', core_node: 32, ram: '64GB', priority: '2', status: 'Waiting'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382110.host', nodes: '7', core_node: 32, ram: '32GB', priority: '2', status: 'Running'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382111.host', nodes: '3', core_node: 32, ram: '64GB', priority: '2', status: 'Queued'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382112.host', nodes: '4', core_node: 32, ram: '32GB', priority: '2', status: 'Suspended'
      , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00'},
      {job: '382113.host', nodes: '2', core_node: 32, ram: '64GB', priority: '2', status: 'Error'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382114.host', nodes: '1', core_node: 32, ram: '32GB', priority: '2', status: 'Completed'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382115.host', nodes: '2', core_node: 32, ram: '64GB', priority: '2', status: 'Hold'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382116.host', nodes: '3', core_node: 32, ram: '32GB', priority: '2', status: 'Transferred'
      , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00'},
      {job: '382117.host', nodes: '4', core_node: 32, ram: '64GB', priority: '2', status: 'Waiting'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382118.host', nodes: '2', core_node: 32, ram: '32GB', priority: '2', status: 'Running'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382119.host', nodes: '5', core_node: 32, ram: '64GB', priority: '2', status: 'Queued'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:00', et_wt: '00:30:00/42:30:00'},
      {job: '382120.host', nodes: '2', core_node: 32, ram: '32GB', priority: '2', status: 'Suspended'
      , creation_time: '17 July 2018 14:00:00', start_time: '-', et_wt: '--- / 42:30:00H'},
      {job: '382121.host', nodes: '6', core_node: 32, ram: '64GB', priority: '2', status: 'Error'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:23', et_wt: '00:30:00/42:30:00'},
      {job: '382122.host', nodes: '1', core_node: 32, ram: '32GB', priority: '2', status: 'Completed'
      , creation_time: '17 July 2018 14:00:00', start_time: '14:01:23', et_wt: '00:30:00/42:30:00'},
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
