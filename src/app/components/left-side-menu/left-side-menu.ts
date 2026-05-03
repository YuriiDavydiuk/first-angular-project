import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.scss',
})
export class LeftSideMenuComponent {}
