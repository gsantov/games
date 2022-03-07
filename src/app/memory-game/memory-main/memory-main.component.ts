import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryGameService } from '../memory-game.service';

@Component({
  selector: 'app-memory-main',
  templateUrl: './memory-main.component.html',
  styleUrls: ['./memory-main.component.css']
})
export class MemoryMainComponent implements OnInit {

  public numberOfPlayers: string = '';
  public amountOfCards: string = '';

  constructor(
    private router: Router,
    public memoryService: MemoryGameService
  ) { }

  ngOnInit(): void {
    this.numberOfPlayers = '1';
    this.memoryService.amountOfCards = '40';
  }

  beginGame() {
    this.router.navigate(['memory/play'])
  }

  disableInput($event: any) {
    $event.preventDefault();
  }

}
