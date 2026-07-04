import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectLang } from '../shared/lang';
import { UI } from '../shared/ui-texts';
import { BIO_HIGHLIGHTS, BIO_STORY, SKILL_GROUPS } from './bio-data';

@Component({
  selector: 'app-bio-page',
  standalone: true,
  imports: [],
  templateUrl: './bio-page.html',
  styleUrl: './bio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioPage {
  readonly t = UI;
  readonly lang = injectLang();

  readonly highlights = BIO_HIGHLIGHTS;
  readonly skillGroups = SKILL_GROUPS;

  readonly storyParagraphs = computed(() => BIO_STORY[this.lang()].split('\n\n'));
}
