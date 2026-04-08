import { Component, inject, OnInit, signal } from '@angular/core';
import {Service} from '../services/service'
import {Character} from '../models/character';
import { MatCardModule } from '@angular/material/card';
import { CharacterFilter } from '../character-filter/character-filter';

@Component({
  selector: 'app-character-list',
  imports: [MatCardModule, CharacterFilter],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  private service = inject(Service);
  characters = signal<Character[]>([])

  ngOnInit(): void {
    this.loadCharacters()
  }

  loadCharacters() {
    this.service.getAllCharacters().subscribe(data => this.characters.set(data))
  }

  onFilterChanged(house: string) {
    if (house === 'all') {
      this.loadCharacters();
    } else {
      this.service.getAllCharactersInHouse(house).subscribe((data) => this.characters.set(data));
    }
  }
}
