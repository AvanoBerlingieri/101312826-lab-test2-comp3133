import { Component, output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-character-filter',
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './character-filter.html',
  styleUrl: './character-filter.css',
})
export class CharacterFilter {
  selectedHouse = output<string>();

  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange(value: string) {
    this.selectedHouse.emit(value);
  }
}
