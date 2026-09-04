import { Routes } from '@angular/router';
import { CharacterList } from './components/character-list/character-list';
import { CharacterDetail } from './components/character-detail/character-detail';

export const routes: Routes = [
    {path: "characters", component: CharacterList},
    {path: "characters/:id", component: CharacterDetail},
    {path: "**", component: CharacterList},
];
