import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  constructor(private datalist : ServiceService) { 
    this.showDataList();
  }

  ngOnInit(): void {
  }

  myarr : Array<any> = [];

  showDataList(){
    this.datalist.getUsers().subscribe((res: any[])=>{
      this.myarr= res;})
  }
}
