import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryGameService } from '../memory-game/memory-game.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public numberOfPlayers: string = '';
  public amountOfCards: string = '';
  public maxCards: number;
  public showMemoryConfig: boolean;
  public memoryDescription = `Test your memory with this memory game. First select the difficulty level. The higher the number, 
    the more cards are in the memo game. On the game board, there are always two identical images. Start the game by flipping a card. 
    Then try to find another card that has the same image as the first. If you can't find a pair, the flipped cards will be flipped back with the face down. 
    Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you 
    find all the pairs in this memory, you have completed the level.`

  constructor(
    private router: Router,
    public memoryService: MemoryGameService
  ) { 
    this.maxCards = 0;
    this.showMemoryConfig = false;
  }

  ngOnInit(): void {
    this.maxCards = this.memoryService.isMobile ? 20 : 40;
    this.numberOfPlayers = '1';
    this.memoryService.amountOfCards = '10';
  }

  playMemory() {
    this.showMemoryConfig = true;
  }

  beginMemoryGame() {
    this.router.navigate(['memory/play'])
  }

  disableInput($event: any) {
    $event.preventDefault();
  }

}
