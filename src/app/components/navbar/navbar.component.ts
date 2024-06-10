import { Component } from '@angular/core';
import { SlidingPanelComponent } from '../shared';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SlidingPanelComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSlidingPanelOpen = false;

  closeSlidingPanel(){
    this.isSlidingPanelOpen = false;
  }
  openSlidingPanel(){
    this.isSlidingPanelOpen = true;
  }
}
