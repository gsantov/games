import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MemoryGameComponent } from './memory-game/memory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MemoryGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
