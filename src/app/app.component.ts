import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = '';
  title = 'angularApp';
  onKey(event: any) { 
    this.dataService.sharedData = event.target.value ;
    this.dataService.time = new Date() + "";
  }
  constructor(private dataService:DataService)
  {

  }
}
