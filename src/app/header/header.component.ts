import {Component, Output, EventEmitter} from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})

export class HeaderComponent {
dropdown: boolean = false;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onClick() {
    this.dropdown = !this.dropdown; 
  }
}
