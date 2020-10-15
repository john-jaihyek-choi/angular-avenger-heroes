import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Captain America' },
      { id: 2, name: 'Spider Man' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Black Widow' },
      { id: 6, name: 'Starlord' },
      { id: 7, name: 'Groot' },
      { id: 8, name: 'Dr Strange' },
      { id: 9, name: 'Ant Man' },
      { id: 10, name: 'Black Panther' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
