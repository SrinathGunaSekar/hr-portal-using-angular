import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  dashboard ='Dashboard';
  employees ='Employees';
  departments='Departments';
  profile='Profiles';
}
