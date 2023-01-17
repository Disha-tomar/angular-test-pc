import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import {
  faListUl,
  faFilter,
  faClockRotateLeft,
  faShareNodes,
  faPen,
  faTrashCan,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // FontAwesome icons decalaration
  listIcon = faListUl;
  filterIcon = faFilter;
  historyIcon = faClockRotateLeft;
  mailIcon = faEnvelope;
  editIcon = faPen;
  deleteIcon = faTrashCan;
  shareIcon = faShareNodes;
  timeIcon = faClock;

  dataColumns;
  allColumnsTobeDisplayed;
  selectedDetailsObject;

  constructor() {}

  headerButtonsArray = [
    { name: 'SAVED LISTS', icon: this.listIcon },
    { name: 'SAVED FILTERS', icon: this.filterIcon },
    { name: 'SEARCH HISTORY', icon: this.historyIcon },
  ];

  data = [
    {
      id: 1,
      date: '',
      'List Name': 'Competitive Intelligence',
      'No. of Entities': 0,
    },
    { id: 2, date: '', 'List Name': 'My Vendors', 'No. of Entities': 0 },
    { id: 3, date: '', 'List Name': 'My Customers', 'No. of Entities': 0 },
    {
      id: 4,
      date: 'Jul 23',
      'List Name': 'Test_30_results',
      'No. of Entities': 28,
    },
    { id: 5, date: 'Jun 28', 'List Name': 'To_index', 'No. of Entities': 100 },
    {
      id: 6,
      date: 'Apr 10',
      'List Name': 'KPMG Requested Companies -Listed Set_Prasada Kumar',
      'No. of Entities': 34,
    },
    {
      id: 7,
      date: 'Mar 12',
      'List Name': 'Error Case LTB To EBITDA Blank_Prasada Kumar',
      'No. of Entities': 24,
    },
    {
      id: 8,
      date: 'Dec 14',
      'List Name': 'Two Companies',
      'No. of Entities': 2,
    },
    {
      id: 9,
      date: 'Apr 10',
      'List Name': 'KPMG Requested Companies -Listed Set_Prasada Kumar',
      'No. of Entities': 34,
    },
    {
      id: 10,
      date: 'Mar 12',
      'List Name': 'Error Case LTB To EBITDA Blank_Prasada Kumar',
      'No. of Entities': 24,
    },
    {
      id: 11,
      date: 'Dec 14',
      'List Name': 'Two Companies',
      'No. of Entities': 2,
    },
    {
      id: 12,
      date: 'Apr 10',
      'List Name': 'KPMG Requested Companies -Listed Set_Prasada Kumar',
      'No. of Entities': 34,
    },
    {
      id: 13,
      date: 'Mar 12',
      'List Name': 'Error Case LTB To EBITDA Blank_Prasada Kumar',
      'No. of Entities': 24,
    },
    {
      id: 14,
      date: 'Dec 14',
      'List Name': 'Two Companies',
      'No. of Entities': 2,
    },
  ];

  dataSource = new MatTableDataSource(this.data);

  ngOnInit(): void {
    // this.dataSource.data = this.data;

    this.dataColumns = Object.keys(Object.values(this.data)[0]).slice(1);

    this.allColumnsTobeDisplayed = this.dataColumns.concat([
      'Actions',
      'Details',
    ]);
  }

  getDetailsHandler(event, element) {
    console.log(element);
    this.selectedDetailsObject = element;
  }

  getFilterValue(filterValue) {
    console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
