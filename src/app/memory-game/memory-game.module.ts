import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryPlayableComponent } from './memory-playable/memory-playable.component';
import { MemoryScoreComponent } from './memory-score/memory-score.component';
import { AppRoutingModule } from '../app-routing.module';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FinishGameComponent } from './memory-playable/finish-game/finish-game.component';


@NgModule({
  declarations: [
    MemoryPlayableComponent,
    MemoryScoreComponent,
    FinishGameComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, 
    CardModule,
    ButtonModule, 
    InputNumberModule,
    InputTextModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ], 
  exports: [
    MemoryPlayableComponent,
    MemoryScoreComponent
  ]
})
export class MemoryGameModule { }
