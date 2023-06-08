import { Component, OnInit } from '@angular/core';
import { SmallCharacter } from '../interfaces/marvel.interfaces';
import { MarvelapiService } from '../services/marvelapi.service';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css'],
})
export class MarvellistComponent implements OnInit {
  characters: SmallCharacter[] = [];
  page: number = 0;
  search: string = '';
  currentPage = 1;
  isLoading = false;
  totalPages = 0;
  constructor(private marvelapiService: MarvelapiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.marvelapiService
      .getCharacters(this.currentPage)
      .subscribe((characters) => {
        this.characters = characters;
      });
  }
  loadNextPage(): void {
    this.currentPage++;
    this.getCharacters();
  }
  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }
}
