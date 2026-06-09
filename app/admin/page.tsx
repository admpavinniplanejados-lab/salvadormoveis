import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><strong>Admin</strong></nav>
        <section className="page-card" style={{ padding: 18 }}>
          <p className="page-chip">Painel administrativo</p>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Dashboard institucional</h1>
          <p style={{ color: '#52627a', marginBottom: 14 }}>Acesso protegido com módulos para produtos, categorias, pedidos, clientes, banners, SEO e configurações.</p>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              ['Pedidos', 'R$ 124.800'],
              ['Clientes', '1.284'],
              ['Produtos', '87'],
              ['Conversão', '8,4%'],
            ].map(([label, value]) => (
              <article className="page-card" key={label} style={{ padding: 14 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{label}</h3>
                <strong style={{ fontSize: '1.25rem' }}>{value}</strong>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
