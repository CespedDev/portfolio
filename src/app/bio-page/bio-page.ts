import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bio-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './bio-page.html',
  styleUrl: './bio-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioPage {}
