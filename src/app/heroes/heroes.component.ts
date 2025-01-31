import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, HeroDetailComponent, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})

export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelectedHero(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
