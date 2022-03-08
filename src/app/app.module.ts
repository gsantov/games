import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MemoryGameModule } from './memory-game/memory-game.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    MemoryGameModule,

    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule ,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
