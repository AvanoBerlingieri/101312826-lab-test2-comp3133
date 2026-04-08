import { Component, input, signal,  inject} from '@angular/core';
import {Service } from '../services/service';
import { Character } from '../models/character';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-character-details',
  imports: [MatCardModule, MatListModule],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetails {

  id = input<String | null>(null);
  character = signal<Character | null>(null);
  private service = inject(Service);

  ngOnInit() {
    this.service.getCharacterById(this.id()).subscribe((data) => this.character.set(data))
  }
}
