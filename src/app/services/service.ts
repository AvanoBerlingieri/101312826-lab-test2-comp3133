import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../models/character';

@Injectable({ providedIn: 'root' })
export class Service {
  private http = inject(HttpClient);
  private apiUrl = 'https://hp-api.onrender.com/api';

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }

  getAllCharactersInHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
}
