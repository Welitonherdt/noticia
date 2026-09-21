import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Component({
  imports: [],
  selector: 'app-noticia-detalhes',
  styleUrl: './noticia-detalhes.css',
  templateUrl: './noticia-detalhes.html',
})
export class NoticiaDetalhes {
  @Input() noticia: Noticia | null = null;

  @Output() fechar = new EventEmitter<void>();

  fecharNoticia(): void {
    this.fechar.emit();
  }
}
