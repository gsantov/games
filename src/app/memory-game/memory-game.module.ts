import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryMainComponent } from './memory-main/memory-main.component';
import { MemoryPlayableComponent } from './memory-playable/memory-playable.component';
import { MemoryScoreComponent } from './memory-score/memory-score.component';
import { AppRoutingModule } from '../app-routing.module';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemoryMainComponent,
    MemoryPlayableComponent,
    MemoryScoreComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, 
    CardModule,
    ButtonModule, 
    InputNumberModule,
    InputTextModule,
    FormsModule
  ], 
  exports: [
    MemoryMainComponent,
    MemoryPlayableComponent,
    MemoryScoreComponent
  ]
})
export class MemoryGameModule { }
