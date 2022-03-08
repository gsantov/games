import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MemoryGameService } from '../memory-game.service';
import { CardModel } from '../models/card-model';
import { FinishGameComponent } from './finish-game/finish-game.component';


@Component({
  selector: 'app-memory-playable',
  templateUrl: './memory-playable.component.html',
  styleUrls: ['./memory-playable.component.css']
})

export class MemoryPlayableComponent implements OnInit, OnDestroy {

  readonly FOLDED: string = '1';
  readonly UNFOLDED: string = '2';
  readonly LOCKED: string = '3';

  public images: Array<CardModel> = new Array<CardModel>();
  public totalUnfolded: number = 0;
  public lockedTurn: boolean = false;
  public intervalFn: any;
  public gridCols: number;

  constructor(
    private router: Router,
    public memoryService: MemoryGameService,
    public dialog: MatDialog
  ) {
    this.gridCols = this.memoryService.isMobile ? 5 : this.getCols();
  }

  getCols() {
    if (Number(this.memoryService.amountOfCards) < 16) {
      return Number(this.memoryService.amountOfCards) / 2
    } else {
      return 8
    }
  }

  async ngOnInit() {
    this.startTimer();
    let imageIds = new Set<string>();
    imageIds = await this.loadImages();
    imageIds.forEach(elem => {
      this.images.push(new CardModel(elem, `assets/images/memory/${elem}.jpg`, this.FOLDED));
      this.images.push(new CardModel(elem, `assets/images/memory/${elem}.jpg`, this.FOLDED));
    })
    this.images.sort((a, b) => {
      return Number(a.imageId) * this.randomIntFromInterval() - Number(b.imageId) * this.randomIntFromInterval();
    })

  }

  ngOnDestroy() {
    clearInterval(this.intervalFn);
  }

  loadImages(): Promise<Set<string>> {
    let amount: number = Number(this.memoryService.amountOfCards);
    // temporaly load from app bundle
    return new Promise<Set<string>>((resolve, reject) => {
      let images = new Set<string>();
      // let test = new Set<string>();
      do {
        if (images.size == (amount / 2) - 1) {
          resolve(images);
        }
        images.add(this.randomIntFromInterval().toString());
      } while (images.size < amount / 2)
    })
  }

  randomIntFromInterval(min: number = 1, max: number = 20): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  clicCard(entity: CardModel) {
    if (!this.lockedTurn) {
      if (entity.status !== this.LOCKED && entity.status === this.FOLDED && this.totalUnfolded < 2) {
        entity.status = this.UNFOLDED;
        this.totalUnfolded++;
        if (this.totalUnfolded == 2) {
          this.lockedTurn = true;
          setTimeout(() => {
            let unfoldedCards: Array<CardModel> = this.images.filter(elem => elem.status === this.UNFOLDED);
            if (unfoldedCards[0].imageId === unfoldedCards[1].imageId) {
              unfoldedCards.forEach(card => card.status = this.LOCKED);
              this.verifyFinished();
            } else {
              unfoldedCards.forEach(card => card.status = this.FOLDED)
            }
            this.totalUnfolded = 0;
            this.lockedTurn = false;
          }, 1500);
        }
      }
    }
  }

  startTimer() {
    this.intervalFn = setInterval(() => {
      if (this.memoryService.timer == undefined) this.memoryService.timer = 0;
      this.memoryService.timer++;
    }, 1000);
  }

  verifyFinished() {
    if (!this.images.some(elem => elem.status === this.FOLDED)) {
      // game finshed
      clearInterval(this.intervalFn);
      this.openDialog()

    }
  }

  openDialog() {
    this.dialog.open(FinishGameComponent).afterClosed().subscribe(result => {
      this.router.navigate(['home'])
    });
  }

}
