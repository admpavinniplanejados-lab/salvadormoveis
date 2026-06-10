import Link from 'next/link';
import Carousel from './carousel';
import PromoBar from './PromoBar';

const promoItems = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: 'Entrega 24h a 72h para Salvador, Lauro e região (Consulte Condições)',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    text: 'Pagamento na entrega',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: 'Retire Rápido',
  },
];

const headerActions = [
  {
    href: '/login',
    label: 'Atendimento',
    icon: (
      <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    href: '/rastreamento',
    label: (
      <>
        Rastrear<br />pedido
      </>
    ),
    icon: (
      <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    href: '/login',
    label: 'Minha...',
    icon: (
      <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const categoryLinks = [
  'SOFÁS',
  'ROUPEIROS',
  'MESA',
  'CÔMODAS',
  'COLCHÕES E CAMAS BOX',
  'MAIS CATEGORIAS',
];

const mobileNavItems = [
  { href: '/', label: 'Início', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
    active: true,
  },
  { href: '/produtos', label: 'Categorias', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  { href: '/produtos', label: 'Ofertas', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l3 7-1 5H4L3 10l3-7z" />
        <path d="M16 13a4 4 0 1 1-8 0" />
      </svg>
    ),
  },
  { href: '/login', label: 'Conta', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const promoStripItems = [
  {
    title: 'PRODUTOS EM PROMOÇÃO',
    subtitle: 'consulte a aba de promoção',
    icon: (
      <svg className="icon-red" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <line x1="14.5" y1="8.5" x2="8.5" y2="14.5" />
        <circle cx="9.5" cy="9.5" r="1.2" fill="currentColor" />
        <circle cx="13.5" cy="13.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'FRETE RÁPIDO',
    subtitle: 'entrega segura',
    icon: (
      <svg className="icon-red" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'PARCELE ATÉ 10X S/ JUROS',
    subtitle: 'nos cartões',
    icon: (
      <svg className="icon-red" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 7.5l8-3.5a2 2 0 0 1 2.6 1.1l2.5 5.5a2 2 0 0 1-1.1 2.6l-2 .8" />
        <rect x="2" y="9" width="16" height="11" rx="2" />
        <line x1="2" y1="13" x2="18" y2="13" />
        <rect x="4" y="15" width="2.5" height="2" rx="0.5" />
        <circle cx="13" cy="16.5" r="1" fill="currentColor" />
        <circle cx="15" cy="16.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'LOJA OFICIAL',
    subtitle: '100% seguro',
    icon: (
      <svg className="icon-red" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
  },
  {
    title: 'PAGUE NO PIX',
    subtitle: 'pagamento seguro',
    icon: (
      <svg className="icon-teal" width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
        <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z" />
      </svg>
    ),
  },
];

const categoryIcons = [
  { label: 'Sofá', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /><path d="M2 11v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4z" /><path d="M4 19v2" /><path d="M20 19v2" /></svg>
    ),
  },
  { label: 'Quarto', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 3v18" /><path d="M3 12h18" /></svg>
    ),
  },
  { label: 'Eletros', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="5" y1="10" x2="19" y2="10" /><circle cx="9" cy="6" r="0.8" fill="currentColor" /><circle cx="9" cy="14" r="0.8" fill="currentColor" /></svg>
    ),
  },
  { label: 'Banheiro', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6h6M5 12h14a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zM6 12V8a6 6 0 0 1 12 0v4" /></svg>
    ),
  },
  { label: 'Cama', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h20" /><path d="M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4" /><path d="M4 12v6" /><path d="M20 12v6" /><rect x="2" y="18" width="20" height="2" rx="1" /></svg>
    ),
  },
  { label: 'Cozinha', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M2 8h20" /><path d="M8 2v20" /></svg>
    ),
  },
  { label: 'Sala', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M17 2l-5 5-5-5" /></svg>
    ),
  },
  { label: 'Escritório', icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
];

const featuredProducts = [
  { image: '/assets/blue_sofa.png', category: 'Sofás', name: 'Sofá Confortável', price: 'A partir de' },
  { image: '/assets/modern_bed.png', category: 'Camas', name: 'Cama Box Queen', price: 'A partir de' },
  { image: '/assets/dining_table.png', category: 'Cozinha', name: 'Mesa de Cozinha', price: 'A partir de' },
  { image: '/assets/blue_sofa.png', category: 'Aparadores', name: 'Aparador Moderno', price: 'A partir de' },
  { image: '/assets/modern_bed.png', category: 'Cristaleiras', name: 'Cristaleira Elegante', price: 'A partir de' },
];

const bestSellingProducts = [
  { badge: '-23%', image: '/assets/blue_sofa.png', category: 'Sofás', name: 'Sofá Retrátil e Reclinável 2.30m Premium Veludo Azul Marinho', oldPrice: 'R$ 3.899,00', pixPrice: 'R$ 2.849,10', cardPrice: 'R$ 2.999,00', installment: 'ou 10x de R$ 299,90 sem juros' },
  { image: '/assets/modern_bed.png', category: 'Camas', name: 'Cama Box Queen com Cabeceira Estofada Cinza 158cm', oldPrice: 'R$ 2.499,00', pixPrice: 'R$ 1.709,10', cardPrice: 'R$ 1.899,00', installment: 'ou 10x de R$ 189,90 sem juros' },
  { badge: 'OFERTA', image: '/assets/dining_table.png', category: 'Sala de Jantar', name: 'Conjunto Mesa de Jantar Retangular Tampo MDF com 6 Cadeiras', oldPrice: 'R$ 4.299,00', pixPrice: 'R$ 3.239,10', cardPrice: 'R$ 3.599,00', installment: 'ou 10x de R$ 359,90 sem juros' },
  { badge: 'NOVO', image: '/assets/blue_sofa.png', category: 'Sofás', name: 'Poltrona Decorativa Confort Pés Palito Veludo Azul', oldPrice: 'R$ 999,00', pixPrice: 'R$ 719,10', cardPrice: 'R$ 799,00', installment: 'ou 10x de R$ 79,90 sem juros' },
  { image: '/assets/modern_bed.png', category: 'Colchões', name: 'Colchão Ortopédico Queen Molas Ensacadas D65 Premium', oldPrice: 'R$ 3.199,00', pixPrice: 'R$ 2.429,10', cardPrice: 'R$ 2.699,00', installment: 'ou 10x de R$ 269,90 sem juros' },
  { badge: '-15%', image: '/assets/dining_table.png', category: 'Painéis e Racks', name: 'Rack para TV até 65" com Painel MDF Branco e Cinza', oldPrice: 'R$ 1.299,00', pixPrice: 'R$ 993,60', cardPrice: 'R$ 1.104,00', installment: 'ou 10x de R$ 110,40 sem juros' },
  { image: '/assets/blue_sofa.png', category: 'Sofás', name: 'Sofá 3 Lugares Fixo Tecido Suede Cinza Claro', oldPrice: 'R$ 1.599,00', pixPrice: 'R$ 1.169,10', cardPrice: 'R$ 1.299,00', installment: 'ou 10x de R$ 129,90 sem juros' },
  { badge: 'OFERTA', image: '/assets/modern_bed.png', category: 'Roupeiros', name: 'Guarda-Roupa Casal 6 Portas 3 Gavetas com Espelho Branco', oldPrice: 'R$ 2.899,00', pixPrice: 'R$ 2.069,10', cardPrice: 'R$ 2.299,00', installment: 'ou 10x de R$ 229,90 sem juros' },
  { badge: '-20%', image: '/assets/blue_sofa.png', category: 'Sofás', name: 'Sofá 2 Lugares Retrátil Premium Tecido Cinza Escuro', oldPrice: 'R$ 2.599,00', pixPrice: 'R$ 1.879,10', cardPrice: 'R$ 2.079,00', installment: 'ou 10x de R$ 207,90 sem juros' },
  { image: '/assets/dining_table.png', category: 'Mesas', name: 'Mesa Lateral Moderna Tampo Vidro Pés Metal Preto', oldPrice: 'R$ 899,00', pixPrice: 'R$ 649,10', cardPrice: 'R$ 719,00', installment: 'ou 10x de R$ 71,90 sem juros' },
  { badge: 'NOVO', image: '/assets/modern_bed.png', category: 'Estofados', name: 'Poltronas de Couro Reclinável com Suporte Lombar', oldPrice: 'R$ 3.499,00', pixPrice: 'R$ 2.519,10', cardPrice: 'R$ 2.799,00', installment: 'ou 10x de R$ 279,90 sem juros' },
  { image: '/assets/blue_sofa.png', category: 'Móveis', name: 'Aparador Branco com Portas Espelhadas e Vidro Temperado', oldPrice: 'R$ 1.799,00', pixPrice: 'R$ 1.299,10', cardPrice: 'R$ 1.449,00', installment: 'ou 10x de R$ 144,90 sem juros' },
];

const footerInstitutionalLinks = [
  'Como comprar',
  'Segurança',
  'Nossas Lojas',
  'Meios de pagamento',
  'Política de Privacidade',
  'Termos de uso',
  'Trocas e devoluções',
  'Trabalhe Conosco',
  'Regulamento Placar-Premiado',
  'Cupons de desconto',
  'Fale Conosco',
];

const attendanceItems = [
  {
    icon: '📍',
    label: 'Endereço',
    value: 'Rua Cristiano Buys, 122 f\nLoja Horto Bela Vista\nSalvador - BA | CEP: 41150-120',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '(71) 9177-0157',
    href: 'https://api.whatsapp.com/send?phone=557191770157',
  },
  {
    icon: '✉️',
    label: 'E-mail',
    value: 'salvadormoveisbahia@gmail.com',
    href: 'mailto:salvadormoveisbahia@gmail.com',
  },
];

const paymentMethods = ['Crédito', 'Débito', 'PIX', 'Carnê'];

const securitySeals = ['Google', 'Protegida'];

export default function HomePage() {
  return (
    <main>
      <PromoBar items={promoItems} />

      <header className="header" id="main-header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <img src="/assets/logo.png" alt="Salvador Móveis Logo" className="logo-img" />
          </Link>

          <div className="search-box">
            <input type="text" placeholder="O que deseja procurar?" />
            <button aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <div className="header-actions">
            {headerActions.map((item) => (
              <Link href={item.href} className="header-action" key={typeof item.label === 'string' ? item.label : 'action-' + item.href}>
                {item.icon}
                <span className="action-text">{item.label}</span>
              </Link>
            ))}

            <Link href="/produtos" className="header-action cart-action" aria-label="Carrinho">
              <div className="cart-icon-wrapper">
                <svg className="action-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="cart-badge">0</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <nav className="category-nav" id="category-nav">
        <div className="container category-nav-inner">
          <ul className="cat-list" id="cat-list">
            {categoryLinks.map((label) => (
              <li key={label}>
                <Link href="/produtos">{label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/produtos" className="btn-offers">
            <span className="offers-icon">
              <svg className="offers-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </span>
            <span className="offers-text">Melhores ofertas</span>
            <span className="offers-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </Link>
        </div>
      </nav>

      <section className="banner-carousel" id="banner-carousel">
        <div className="carousel-track" id="carousel-track">
          <div className="carousel-slide active">
            <img src="/assets/banner-carrossel-topo1.png" alt="Promoção 1" />
          </div>
          <div className="carousel-slide">
            <img src="/assets/banner-carrossel-topo2.png" alt="Promoção 2" />
          </div>
          <div className="carousel-slide">
            <img src="/assets/banner-carrossel-topo3.avif" alt="Promoção 3" />
          </div>
        </div>
      </section>

      <Carousel />

      <section className="promo-strip">
        <div className="container promo-strip-inner">
          {promoStripItems.map((item) => (
            <div className="promo-strip-item" key={item.title}>
              <div className="promo-strip-icon">{item.icon}</div>
              <div className="promo-strip-text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cat-icons-section">
        <div className="container">
          <div className="cat-icons-grid">
            {categoryIcons.map((item) => (
              <Link href="/produtos" className="cat-icon-item" key={item.label}>
                <div className="cat-icon-circle">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>Produtos em Destaque</h2>
            </div>
          </div>
          <div className="products-grid-5col">
            {featuredProducts.map((item) => (
              <article className="product-card-featured" key={item.name}>
                <div className="product-img-wrap-featured">
                  <img src={item.image} alt={item.name} />
                  <div className="product-actions-overlay">
                    <button className="pao-btn wishlist-toggle" aria-label="Favoritar">♡</button>
                    <button className="pao-btn quick-view" aria-label="Ver rápido">👁</button>
                  </div>
                </div>
                <div className="product-body-featured">
                  <span className="product-category">{item.category}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <span className="product-price">{item.price}</span>
                  <button className="btn-add-cart-featured">COMPRAR</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <img src="/assets/banner-site-2.png" alt="Promoção especial" className="banner-image" />
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>🔥 Mais Vendidos</h2>
            </div>
            <Link href="/produtos" className="btn-see-all">
              VER TODOS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>

          <div className="products-grid">
            {bestSellingProducts.map((item) => (
              <article className="product-card" key={item.name}>
                <div className="product-img-wrap">
                  {item.badge ? <span className="product-badge">{item.badge}</span> : null}
                  <img src={item.image} alt={item.name} />
                  <div className="product-actions-overlay">
                    <button className="pao-btn wishlist-toggle" aria-label="Favoritar">♡</button>
                    <button className="pao-btn quick-view" aria-label="Ver rápido">👁</button>
                  </div>
                </div>
                <div className="product-body">
                  <span className="product-category">{item.category}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <div className="product-pricing">
                    <span className="price-old">{item.oldPrice}</span>
                    <span className="price-pix">{item.pixPrice} <small>no PIX</small></span>
                    <span className="price-card">{item.cardPrice}</span>
                    <span className="price-installment">{item.installment}</span>
                  </div>
                  <button className="btn-add-cart">COMPRAR</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="whatsapp-banner-section">
        <div className="container">
          <img src="/assets/banner-whatsapp.png" alt="WhatsApp" className="whatsapp-banner-image" />
        </div>
      </section>

      <footer className="footer">
        <div className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <div className="newsletter-text">
                <h3>CADASTRE-SE EM NOSSA NEWSLETTER</h3>
                <p>e receba novidades e promoções</p>
              </div>
              <form className="newsletter-form">
                <input type="text" placeholder="Seu nome" required />
                <input type="email" placeholder="Seu e-mail" required />
                <button type="submit" className="newsletter-btn">CADASTRE-SE</button>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-main">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="/assets/logo.png" alt="Salvador Móveis" className="footer-logo-img" />
              </div>
              <p className="footer-description">
                Salvador Móveis – Transformando Sonhos! Oferecemos móveis de qualidade, conforto e elegância. Cada peça é pensada para refletir seu estilo e tornar seus ambientes ainda mais especiais.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com/salvadormoveis" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com/salvadormoveis" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </a>
                <a href="https://youtube.com/salvadormoveis" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">INSTITUCIONAL</h4>
              <ul className="footer-links">
                {footerInstitutionalLinks.map((link) => (
                  <li key={link}><Link href="/produtos">{link}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">ATENDIMENTO</h4>
              {attendanceItems.map((item) => (
                <div className="attendance-item" key={item.label}>
                  <span className="attendance-icon">{item.icon}</span>
                  <div className="attendance-content">
                    <p className="attendance-label">{item.label}</p>
                    <p className="attendance-value">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">{item.value}</a>
                      ) : (
                        item.value.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div className="attendance-hours">
                <p className="attendance-label"><strong>HORÁRIO DE ATENDIMENTO</strong></p>
                <p>Segunda a Domingo das 8h às 22h</p>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">FORMAS DE PAGAMENTO</h4>
              <p className="payments-subtitle">SELOS DE SEGURANÇA</p>
              <div className="security-seals">
                {securitySeals.map((seal) => (
                  <div className="seal-item" key={seal}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>{seal}</span>
                  </div>
                ))}
              </div>
              <p className="payments-subtitle" style={{ marginTop: '16px' }}>MEIOS DE PAGAMENTO</p>
              <div className="payment-methods">
                {paymentMethods.map((method) => (
                  <span className="payment-method" key={method}>{method}</span>
                ))}
              </div>
              <div className="company-info">
                <p><strong>Salvador Móveis LTDA</strong></p>
                <p>CNPJ: 26.282.573/0001-49</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Menu mobile">
        <div className="mobile-bottom-inner">
          {mobileNavItems.map((item) => (
            <Link href={item.href} className={`mobile-nav-item${item.active ? ' active' : ''}`} key={item.label}>
              <span className="mobile-nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="mobile-nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
