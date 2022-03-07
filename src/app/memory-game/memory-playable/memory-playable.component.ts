import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from '../memory-game.service';

@Component({
  selector: 'app-memory-playable',
  templateUrl: './memory-playable.component.html',
  styleUrls: ['./memory-playable.component.css']
})
export class MemoryPlayableComponent implements OnInit {

  constructor(public memoryService: MemoryGameService) { }

  ngOnInit(): void {
    console.log('memoryService', this.memoryService.amountOfCards);
  }

  loadImages() {
    // temporaly load from app bundle
    
  }

}
