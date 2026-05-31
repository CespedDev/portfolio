import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bio-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './bio-page.html',
  styleUrl: './bio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioPage {}
