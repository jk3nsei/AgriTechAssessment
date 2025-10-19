import { Component } from '@angular/core';
import { IMockData } from '../user-table/user-table';
import MockData from '../../mockData.json';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class Sidebar {
  mockData: IMockData[] = MockData;

  user = this.mockData[0];

  get summary() {
    const totalEarnings = this.user.Quantity * this.user.Rate;
    const uif = 35.32;
    const paye = 1.0;
    const deductionsTotal = uif + paye;
    const netTotal = totalEarnings - deductionsTotal;

    return {
      totalEarnings,
      totalDeductions: deductionsTotal,
      netTotal,
      uif,
      paye,
      deductionsTotal,
    };
  }
}
