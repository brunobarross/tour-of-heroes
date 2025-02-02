import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private heroService: HeroService){}
  heroes: Hero[] = []

  ngOnInit(){
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
