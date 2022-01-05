import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  name1:string=" ";
  name2:string=" ";
  name3:any=" "

  datas:any=[{
    name:"agff"
  },
  {
    name:"agff2"
  },
  {
    name:"agffrg"
  },
  {
    name:"agfffg"
  },
]
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {} 
  

  res(val:any)
  {
    this.myservice.name1value=this.name1;
    this.myservice.name2value=this.name2;
    this.myservice.datavalue=val;
  }
}
