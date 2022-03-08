import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from '../../memory-game.service';

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.css']
})
export class FinishGameComponent implements OnInit {

  minutes:number = 0;
  seconds:number = 0;

  constructor(public memoryService: MemoryGameService) { 
    // this.finishStr = this.memoryService.timer < 60 ? + `${this.memoryService.timer} seconds` : ;
  }

  ngOnInit(): void {
    this.transformTime(this.memoryService.timer);
  }

  transformTime(value?: number): void {
    if(value){
      this.minutes = Math.floor(value / 60);
      this.seconds = value - this.minutes * 60;
    } 
 }
}
