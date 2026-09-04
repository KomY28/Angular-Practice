import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {

  characterServices=inject(CharacterService);
}
