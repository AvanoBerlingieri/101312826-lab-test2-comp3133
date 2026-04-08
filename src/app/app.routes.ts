import { Routes } from '@angular/router';
import {CharacterList} from './character-list/character-list';
import { CharacterDetails } from './character-details/character-details';

export const routes: Routes = [
  {path: "", component: CharacterList},
  {path: "character/:id", component: CharacterDetails},
];
