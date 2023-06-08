import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MarvelApiResponse,
  SmallCharacter,
} from '../interfaces/marvel.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MarvelapiService {
  private baseUrl = 'https://gateway.marvel.com:443/v1/public';
  private apiKey = 'c24ebaf767669f518861aecedf0b75a9';
  private hash = 'bba97005f42293902504830f66257cf5';
  private pageSize = 10;

  private charactersSubject = new BehaviorSubject<SmallCharacter[]>([]);
  private currentPage = 1;
  private totalPages = 0;

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<SmallCharacter[]> {
    const offset = (page - 1) * this.pageSize;
    const url = `${this.baseUrl}/characters?ts=1&apikey=${this.apiKey}&hash=${this.hash}&limit=${this.pageSize}&offset=${offset}`;
    return this.http
      .get<MarvelApiResponse>(url)
      .pipe(
        map((response): SmallCharacter[] => this.mapToSmallCharacters(response))
      );
  }

  private mapToSmallCharacters(response: MarvelApiResponse): SmallCharacter[] {
    const results = response.data.results;
    return results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      };
    });
  }
}
