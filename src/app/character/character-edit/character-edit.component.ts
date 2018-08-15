import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {
  constructor(private characterService: CharacterService) { }

  @Input() character: Character;

  ngOnInit() {
    if (!this.character) {
      this.getCharacter();
    }
  }

  getCharacter(): void {
    this.characterService.getMyCharacter()
        .subscribe(character => this.character = character );
  }

  save(): void {
    this.characterService.updateCharacter(this.character).subscribe();
  }

}
