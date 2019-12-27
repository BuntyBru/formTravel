import { Component, OnInit } from '@angular/core';
import {BackService} from './back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  favoriteSeason:any=[];
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  counter=0;
  showItems:any=[]
  textVal:any=[];
  forward:string='arrow_forward_ios';
  backward:string='arrow_back_ios';
  showSubmit:boolean=false;
  constructor(private backService:BackService){}

  ngOnInit()
  {
    console.log(this.textVal);
    this.showItems = this.backService.mainData[0];
  }

  moveForward()
  {
    if(this.counter < this.backService.mainData.length-1)
    {
      this.counter+=1
      console.log(this.textVal)
      this.showItems = this.backService.mainData[this.counter];
    }
    if(this.counter == this.backService.mainData.length-1)
    {
      this.showSubmit= true;
    }
    
    console.log("moving forward",this.counter);
  }

  moveBackward()
  {
    console.log("Mving backward");
    if(this.counter >0)
    {
      this.counter -=1;
      console.log(this.backService.mainData[this.counter]);
      this.showItems = this.backService.mainData[this.counter];
    }

    if(this.counter < this.backService.mainData.length-1)
    {
      this.showSubmit=false;
    }
   
  }

  submit()
  {
    let obj = {
      savingsCalc:this.favoriteSeason['savingsCalc'],
      totalTravel:this.textVal['totalTravel'],
      avgBooking:this.textVal['avgBooking'],
      businessPerc:this.value,
      travelPolicy:this.favoriteSeason['travelPolicy']
    }
    console.log("submit", obj)
  }
}
