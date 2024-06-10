import { Component } from '@angular/core';
import { CarouselComponent } from '../shared';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
