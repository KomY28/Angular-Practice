import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponse } from '../models/character';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersData=httpResource<CharacterResponse>(()=>'https://rickandmortyapi.com/api/character');
}
