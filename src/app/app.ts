import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { NoticiaCard } from './components/noticia-card/noticia-card';
import { NoticiaDetalhes } from './components/noticia-detalhes/noticia-detalhes';
import { Rodape } from './components/rodape/rodape';
import { Noticia } from './models/noticia';

@Component({
  imports: [Cabecalho, NoticiaCard, NoticiaDetalhes, Rodape],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  tituloPortal: string = 'Central Agora';
  nomeUsuario: string = 'Visitante';
  usuarioAssinante: boolean = false;
  categoriaSelecionada: string = 'Todas';
  noticiaSelecionada: Noticia | null = null;

  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Tecnologia verde transforma pequenas cidades brasileiras',
      categoria: 'Tecnologia',
      resumo:
        'Projetos de energia limpa e sensores urbanos ajudam municipios a economizar recursos e melhorar servicos publicos.',
      conteudoCompleto:
        'Cidades de pequeno e medio porte estao adotando placas solares em predios publicos, iluminacao inteligente e sensores para acompanhar o consumo de agua. A iniciativa reduz gastos, amplia a qualidade dos servicos e aproxima a populacao das decisoes sobre sustentabilidade.',
      autor: 'Marina Alves',
      dataPublicacao: '14/09/2026',
      tempoLeitura: 4,
      imagem:
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80',
      destaque: true,
      exclusiva: false,
    },
    {
      id: 2,
      titulo: 'Pesquisa aponta novas tendencias no mercado de trabalho',
      categoria: 'Economia',
      resumo:
        'Especialistas destacam crescimento dos formatos hibridos e valorizacao de habilidades digitais.',
      conteudoCompleto:
        'O levantamento mostra que empresas procuram profissionais capazes de combinar conhecimento tecnico, comunicacao clara e autonomia. As areas de tecnologia, saude, educacao e servicos continuam entre as mais aquecidas para os proximos meses.',
      autor: 'Rafael Nunes',
      dataPublicacao: '13/09/2026',
      tempoLeitura: 3,
      imagem:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
      destaque: false,
      exclusiva: false,
    },
    {
      id: 3,
      titulo: 'Bastidores: como uma redacao escolhe a manchete do dia',
      categoria: 'Exclusivo',
      resumo:
        'Conteudo para assinantes mostra criterios editoriais, checagem de fatos e decisao de prioridade.',
      conteudoCompleto:
        'A escolha da manchete envolve relevancia publica, impacto social, atualidade e qualidade da apuracao. Editores comparam fontes, revisam dados e avaliam o melhor formato para que a informacao chegue ao leitor com clareza e responsabilidade.',
      autor: 'Equipe Central Agora',
      dataPublicacao: '12/09/2026',
      tempoLeitura: 6,
      imagem:
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
      destaque: false,
      exclusiva: true,
    },
    {
      id: 4,
      titulo: 'Festival cultural movimenta o fim de semana no centro',
      categoria: 'Cultura',
      resumo:
        'Programacao gratuita reune musica, teatro, gastronomia e feira de artistas independentes.',
      conteudoCompleto:
        'O festival ocupa praca, biblioteca e teatro municipal com atividades para todas as idades. Alem dos shows, o publico podera participar de oficinas, exposicoes e rodas de conversa com artistas locais.',
      autor: 'Bianca Rocha',
      dataPublicacao: '11/09/2026',
      tempoLeitura: 2,
      imagem:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
      destaque: false,
      exclusiva: false,
    },
    {
      id: 5,
      titulo: 'Guia exclusivo analisa os impactos da inteligencia artificial',
      categoria: 'Exclusivo',
      resumo:
        'Reportagem especial explica oportunidades, riscos e cuidados no uso de ferramentas inteligentes.',
      conteudoCompleto:
        'A reportagem aprofunda como a inteligencia artificial pode apoiar estudos, empresas e servicos publicos. Tambem apresenta limites importantes, como privacidade, vieses, verificacao de informacoes e necessidade de supervisao humana.',
      autor: 'Lucas Pereira',
      dataPublicacao: '10/09/2026',
      tempoLeitura: 7,
      imagem:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
      destaque: false,
      exclusiva: true,
    },
  ];

  get categorias(): string[] {
    return ['Todas', ...new Set(this.noticias.map((noticia) => noticia.categoria))];
  }

  get noticiasFiltradas(): Noticia[] {
    if (this.categoriaSelecionada === 'Todas') {
      return this.noticias;
    }

    return this.noticias.filter((noticia) => noticia.categoria === this.categoriaSelecionada);
  }

  get noticiaDestaque(): Noticia | undefined {
    return this.noticias.find((noticia) => noticia.destaque);
  }

  alterarAssinatura(): void {
    this.usuarioAssinante = !this.usuarioAssinante;
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    this.noticiaSelecionada = null;
  }

  abrirNoticia(noticia: Noticia): void {
    this.noticiaSelecionada = noticia;
  }

  fecharNoticia(): void {
    this.noticiaSelecionada = null;
  }
}
