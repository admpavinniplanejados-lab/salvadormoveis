'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { categories, products } from '../../data/products';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export default function ProdutosPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState('destaques');

  const filtered = useMemo(() => {
    const list = products.filter((item) => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'Todos' || item.category === category;
      return matchesQuery && matchesCategory;
    });

    return [...list].sort((a, b) => {
      if (sort === 'menor') return a.price - b.price;
      if (sort === 'maior') return b.price - a.price;
      return 0;
    });
  }, [query, category, sort]);

  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Navegação"><Link href="/">Home</Link><span>/</span><strong>Produtos</strong></nav>
        <section className="page-card" style={{ padding: 18, marginBottom: 18 }}>
          <h1 style={{ fontSize: '1.6rem', marginBottom: 8 }}>Listagem de produtos</h1>
          <p style={{ color: '#52607a', marginBottom: 14 }}>Busca, filtro por categoria e ordenação mantêm a experiência institucional do site.</p>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar nome do produto" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }}>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }}>
              <option value="destaques">Destaques</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>
        </section>

        <section className="product-grid">
          {filtered.map((product) => (
            <article className="product-card page-card" key={product.slug}>
              <div className="product-main-image-wrap"><span className="product-badge sale">{product.badge}</span><img src={product.image} alt={product.name} className="product-main-image" /></div>
              <div style={{ padding: '14px 16px 16px' }}>
                <p className="page-chip">{product.category}</p>
                <h3 style={{ fontSize: '1.05rem', marginTop: 6, marginBottom: 8 }}>{product.name}</h3>
                <p style={{ color: '#515d75', fontSize: '0.95rem' }}>{product.blurb}</p>
                <div style={{ marginTop: 10, display: 'grid', gap: 4 }}>
                  <strong style={{ fontSize: '1.15rem' }}>{formatCurrency(product.price)}</strong>
                  <span style={{ color: '#5a6579', fontSize: '0.92rem' }}>ou {product.installment}</span>
                </div>
                <div className="cta-row" style={{ marginTop: 12 }}>
                  <Link href={`/produto/${product.slug}`} className="primary">Ver detalhes</Link>
                  <a href="https://api.whatsapp.com/send?phone=557191770157" className="secondary" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
