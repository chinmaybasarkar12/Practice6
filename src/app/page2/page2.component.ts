import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  value1:string="";
  value2:string="";
  value3:any="";
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {

    this.value1=this.myservice.name1value;
    this.value2=this.myservice.name2value;
    this.value3=this.myservice.datavalue;
  }

}
