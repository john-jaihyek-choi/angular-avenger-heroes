import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 2, name: 'Captain America' },
      { id: 3, name: 'Spider Man' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Thor' },
      { id: 6, name: 'Black Widow' },
      { id: 7, name: 'Starlord' },
      { id: 8, name: 'Groot' },
      { id: 9, name: 'Dr Strange' },
      { id: 10, name: 'Ant Man' },
      { id: 11, name: 'Black Panther' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
