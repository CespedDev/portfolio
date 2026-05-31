import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hobbies-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hobbies-page.html',
  styleUrl: './hobbies-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesPage {}
