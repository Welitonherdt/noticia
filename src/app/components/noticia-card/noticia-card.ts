import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Component({
  imports: [],
  selector: 'app-noticia-card',
  styleUrl: './noticia-card.css',
  templateUrl: './noticia-card.html',
})
export class NoticiaCard {
  @Input({ required: true }) noticia!: Noticia;
  @Input() assinante: boolean = false;

  @Output() selecionarNoticia = new EventEmitter<Noticia>();

  favorita: boolean = false;

  alterarFavorito(): void {
    this.favorita = !this.favorita;
  }

  abrirNoticia(): void {
    if (!this.noticia.exclusiva || this.assinante) {
      this.selecionarNoticia.emit(this.noticia);
    }
  }
}
