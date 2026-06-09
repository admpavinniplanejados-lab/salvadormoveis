export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  installment: string;
  badge: string;
  stock: string;
  image: string;
  gallery: string[];
  blurb: string;
  description: string;
  specs: { label: string; value: string }[];
  measures: string;
  color: string;
  material: string;
  availability: string;
};

export const products: Product[] = [
  {
    slug: 'sofa-retratil-premium',
    name: 'Sofá Retrátil Premium Veludo Azul Marinho',
    category: 'Sofás',
    price: 2849.1,
    oldPrice: 3899,
    installment: '10x de R$ 299,90 sem juros',
    badge: 'OFERTA',
    stock: 'Em estoque',
    image: '/assets/blue_sofa.png',
    gallery: ['/assets/blue_sofa.png', '/assets/modern_bed.png', '/assets/dining_table.png'],
    blurb: 'Estrutura reforçada e acabamento sofisticado para sala moderna.',
    description: 'Sofá premium com tecido veludo, estrutura reforçada, assento acolchoado e pés em madeira para máximo conforto.',
    specs: [
      { label: 'Categoria', value: 'Sofás retráteis' },
      { label: 'Cor', value: 'Azul Marinho' },
      { label: 'Material', value: 'Veludo + madeira' },
    ],
    measures: '2,20m x 1,00m',
    color: 'Azul Marinho',
    material: 'Veludo + madeira',
    availability: 'Pronta entrega',
  },
  {
    slug: 'cama-box-queen',
    name: 'Cama Box Queen com Cabeceira Estofada Cinza',
    category: 'Camas',
    price: 1709.1,
    oldPrice: 2499,
    installment: '10x de R$ 189,90 sem juros',
    badge: 'NOVO',
    stock: 'Últimas unidades',
    image: '/assets/modern_bed.png',
    gallery: ['/assets/modern_bed.png', '/assets/blue_sofa.png'],
    blurb: 'Conforto, estrutura firme e visual contemporâneo para o quarto.',
    description: 'Base box queen com cabeceira estofada, molas ensacadas e acabamento elegante para quarto principal.',
    specs: [
      { label: 'Tipo', value: 'Box Queen' },
      { label: 'Cor', value: 'Cinza' },
      { label: 'Suporte', value: 'Molas ensacadas' },
    ],
    measures: '158cm x 198cm',
    color: 'Cinza',
    material: 'MDF + tecido',
    availability: 'Entrega 24h',
  },
  {
    slug: 'mesa-de-jantar-retangular',
    name: 'Conjunto Mesa de Jantar Retangular com 6 Cadeiras',
    category: 'Sala de Jantar',
    price: 3239.1,
    oldPrice: 4299,
    installment: '10x de R$ 359,90 sem juros',
    badge: 'OFERTA',
    stock: 'Disponível',
    image: '/assets/dining_table.png',
    gallery: ['/assets/dining_table.png', '/assets/blue_sofa.png'],
    blurb: 'Tampo resistente e acabamento elegante para refeições em família.',
    description: 'Mesa retangular em MDF com 6 cadeiras, ideal para salas de jantar modernas e ambientes aconchegantes.',
    specs: [
      { label: 'Modelo', value: '6 lugares' },
      { label: 'Tampo', value: 'MDF resistente' },
      { label: 'Acabamento', value: 'Natural' },
    ],
    measures: '180cm x 90cm',
    color: 'Natural',
    material: 'MDF',
    availability: 'Em estoque',
  },
];

export const categories = ['Todos', 'Sofás', 'Camas', 'Sala de Jantar'];
