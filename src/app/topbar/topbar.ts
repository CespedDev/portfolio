import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, ToolbarModule, ButtonModule, DrawerModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  mobileMenuVisible = false;
}
