import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  array : any[]=[];

  get data():any{

    if(this.dataService.sharedData === undefined)
      return [];
    this.array.push({
      data : this.dataService.sharedData,
      time : this.dataService.time
    });
    console.log(this.array);
      
    return this.array;
  }
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
