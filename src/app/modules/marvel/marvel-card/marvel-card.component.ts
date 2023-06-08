import { Component, Input } from '@angular/core';
import { SmallCharacter } from '../interfaces/marvel.interfaces';

@Component({
  selector: 'app-marvel-card',
  templateUrl: './marvel-card.component.html',
  styleUrls: ['./marvel-card.component.css'],
})
export class MarvelCardComponent {
  @Input()
  public character!: SmallCharacter;
}
