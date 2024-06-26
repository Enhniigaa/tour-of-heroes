import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetailsComponent } from '../details/details.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { MessagesComponent } from '../messages/messages.component';


@NgModule({
  imports: [
    CommonModule,
    DetailsComponent,
    MessagesComponent,
    HeroesComponent,
    DashboardComponent, 
    HeroSearchComponent,
    NgModule
  ],
  providers: [],
})
export class AppModuleModule { }
