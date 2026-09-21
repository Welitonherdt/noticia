export interface Noticia {
  id: number;
  titulo: string;
  categoria: string;
  resumo: string;
  conteudoCompleto: string;
  autor: string;
  dataPublicacao: string;
  tempoLeitura: number;
  imagem: string;
  destaque: boolean;
  exclusiva: boolean;
}
