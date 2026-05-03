import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu';
import { CategoryComponent } from './components/category/category';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal';
import { GenerateAnswerModalComponent } from './components/generate-answer-modal/generate-answer-modal';
import { PreparationComponent } from './components/preparation/preparation';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';
import { UserPanelComponent } from './components/user-panel/user-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    CategoryComponent,
    DeleteConfirmationModalComponent,
    GenerateAnswerModalComponent,
    LeftSideMenuComponent,
    PreparationComponent,
    TopMenuComponent,
    PageNotFoundComponent,
    UserPanelComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
