import { Component, inject, OnInit, signal } from '@angular/core';
import {Service} from '../services/service'
import {Character} from '../models/character';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-character-list',
  imports: [MatCardModule],
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
}
