import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  public amountOfCards: string = '';

  constructor() { }
}
