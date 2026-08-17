import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  message='Welcome , Admin';
  total_employees=120;
  active=108;
  inactive=12;
  departments=8;

  loading=false;
  refreshButton(){
    this.loading=true;
    //api
     setTimeout(()=>{
      this.loading=false;
      },2000);
  }

}
