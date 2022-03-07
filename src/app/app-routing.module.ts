import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MemoryMainComponent } from './memory-game/memory-main/memory-main.component';
import { MemoryPlayableComponent } from './memory-game/memory-playable/memory-playable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'memory/main', component: MemoryMainComponent },
  { path: 'memory/play', component: MemoryPlayableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
