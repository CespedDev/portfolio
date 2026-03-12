import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './topbar/topbar';
import { SocialButtonsComponent } from './social-buttons/social-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, SocialButtonsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
