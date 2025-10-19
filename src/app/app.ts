import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserTable } from './user-table/user-table';
import { Sidebar } from './sidebar/sidebar';
import { Rightsidebar } from './rightsidebar/rightsidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserTable, Sidebar, Rightsidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AgriTechAssessment');
}
