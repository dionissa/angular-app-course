import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() aspectoSelecionado = new EventEmitter<string>();

  onSelect(aspecto: string) {
    this.aspectoSelecionado.emit(aspecto);
  }
}


