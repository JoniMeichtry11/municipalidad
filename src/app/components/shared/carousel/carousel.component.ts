import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  slides = [
    { image: '../../../../assets/img/image-1.png', caption: '' },
    { image: '../../../../assets/img/image-2.png', caption: '' },
    { image: '../../../../assets/img/image-3.png', caption: '' }
  ];
}
