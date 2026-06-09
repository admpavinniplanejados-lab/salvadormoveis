import Link from 'next/link';

export default function MinhaContaPage() {
  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><strong>Minha conta</strong></nav>
        <section className="page-card" style={{ padding: 18 }}>
          <p className="page-chip">Painel do cliente</p>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Minha conta</h1>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {['Dados pessoais', 'Endereços', 'Pedidos', 'Favoritos', 'Segurança'].map((item) => (
              <article key={item} className="page-card" style={{ padding: 14 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{item}</h3>
                <p style={{ color: '#52627a', fontSize: '0.95rem' }}>Área preparada para gerenciamento e histórico do cliente.</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
