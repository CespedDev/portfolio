import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.html',
  styleUrls: ['./social-buttons.scss'],
  standalone: true,
  imports: [ButtonModule]
})
export class SocialButtonsComponent {
}
