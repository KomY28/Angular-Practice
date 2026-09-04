import { Component, computed, inject, input } from '@angular/core';
import { CharacterService } from '../../services/character';
import { httpResource } from '@angular/common/http';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail {
  
  characterServices=inject(CharacterService);
  id=input<string>();
  character = httpResource<Character>(() => `https://rickandmortyapi.com/api/character/${this.id()}`);
}
