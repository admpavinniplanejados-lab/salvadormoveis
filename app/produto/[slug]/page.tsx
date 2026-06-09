import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../data/products';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 2);

  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><Link href="/produtos">Produtos</Link><span>/</span><strong>{product.name}</strong></nav>
        <section className="product-detail-grid">
          <article className="product-gallery-card page-card">
            <div className="product-main-image-wrap"><span className="product-badge sale">{product.badge}</span><img src={product.image} alt={product.name} className="product-main-image" /></div>
            <div className="thumb-row">{product.gallery.map((img) => <button className="thumb-btn active" key={img} type="button"><img src={img} alt={product.name} /></button>)}</div>
          </article>
          <aside className="product-info-card page-card">
            <p className="page-chip">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-subtitle">{product.blurb}</p>
            <div className="price-box"><div className="price-line old">{formatCurrency(product.oldPrice)}</div><div className="price-line main">{formatCurrency(product.price)}</div><div className="price-line small">{product.installment}</div></div>
            <p style={{ color: '#55627b', marginBottom: 8 }}><strong>Disponibilidade:</strong> {product.availability}</p>
            <div className="cta-row"><a className="primary" href="https://api.whatsapp.com/send?phone=557191770157" target="_blank" rel="noreferrer">Falar no WhatsApp</a><Link className="secondary" href="/rastreamento">Rastrear pedido</Link></div>
          </aside>
        </section>

        <section className="detail-panels-grid">
          <article className="page-card detail-panel"><h2>Descrição</h2><p>{product.description}</p></article>
          <article className="page-card detail-panel"><h2>Especificações</h2><div className="spec-list">{product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div></article>
          <article className="page-card detail-panel"><h2>Medidas / Cor / Material</h2><p><strong>Medidas:</strong> {product.measures}<br /><strong>Cor:</strong> {product.color}<br /><strong>Material:</strong> {product.material}</p></article>
        </section>

        <section className="page-card" style={{ padding: 18, marginTop: 18 }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: 8 }}>Produtos relacionados</h2>
          <div className="product-grid">{related.map((item) => <article className="product-card" key={item.slug}><img src={item.image} alt={item.name} style={{ borderRadius: 10 }} /><div style={{ padding: 12 }}><h3 style={{ fontSize: '1rem' }}>{item.name}</h3><p style={{ color: '#56637b', fontSize: '0.92rem' }}>{item.category}</p><Link href={`/produto/${item.slug}`} className="primary" style={{ display: 'inline-block', marginTop: 10 }}>Ver detalhes</Link></div></article>)}</div>
        </section>

        <section className="page-card" style={{ padding: 18, marginTop: 18 }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: 8 }}>Avaliações</h2>
          <p style={{ color: '#55627b' }}>“Entrega rápida, atendimento excelente e produto conforme anunciado.” — Cliente Salvador</p>
          <p style={{ color: '#55627b', marginTop: 8 }}>“Ótimo acabamento e excelente custo-benefício.” — Cliente Lauro de Freitas</p>
        </section>
      </div>
    </main>
  );
}
