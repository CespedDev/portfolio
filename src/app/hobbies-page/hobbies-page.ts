import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { injectLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';
import { FAVORITE_GAMES, GAMING_INTRO, PHOTOGRAPHY_INTRO, PHOTOS } from './hobbies-data';

@Component({
  selector: 'app-hobbies-page',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './hobbies-page.html',
  styleUrl: './hobbies-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesPage {
  readonly t = UI;
  readonly lang = injectLang();

  readonly favoriteGames = FAVORITE_GAMES;
  readonly photos = PHOTOS;

  readonly gamingParagraphs = computed(() => GAMING_INTRO[this.lang()].split('\n\n'));
  readonly photographyParagraphs = computed(() => PHOTOGRAPHY_INTRO[this.lang()].split('\n\n'));
}
