import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import MockData from '../../mockData.json';

export interface IMockData {
  id: number;
  Name: string;
  Description: string;
  Type: string;
  Quantity: number;
  Rate: number;
  summary?: {
    totalEarnings: number;
    totalDeductions: number;
    netTotal: number;
    uif: number;
    paye: number;
    deductionsTotal: number;
  };
}

@Component({
  selector: 'app-user-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable {
  displayedColumns: string[] = ['Name', 'Description', 'Type', 'Quantity', 'Rate'];
  dataSource!: MatTableDataSource<IMockData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: IMockData[] = MockData;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sortChange.subscribe(() => {
      this.dataSource.data = [...this.dataSource.data].reverse();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
