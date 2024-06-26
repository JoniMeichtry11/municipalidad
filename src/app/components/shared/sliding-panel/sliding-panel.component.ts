import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sliding-panel',
  standalone: true,
  imports: [],
  templateUrl: './sliding-panel.component.html',
  styleUrl: './sliding-panel.component.scss'
})
export class SlidingPanelComponent {
  @Input() isSlidingPanelOpen: boolean = false;
  @Output() closePanel: EventEmitter<void> = new EventEmitter<void>();

  onClosePanelClick() {
    this.closePanel.emit();
  }
}
