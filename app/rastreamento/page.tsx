import Link from 'next/link';

export default function RastreamentoPage() {
  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><strong>Rastreamento</strong></nav>
        <section className="product-detail-grid">
          <article className="page-card" style={{ padding: 18 }}>
            <p className="page-chip">Pedido e entrega</p>
            <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Acompanhe seu pedido</h1>
            <p style={{ color: '#52627a', marginBottom: 12 }}>Pesquise por número do pedido, CPF ou email para consultar o status.</p>
            <form style={{ display: 'grid', gap: 10 }}>
              <input placeholder="Número do pedido" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
              <input placeholder="CPF ou email" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
              <button className="primary" type="submit">Consultar</button>
            </form>
          </article>
          <article className="page-card" style={{ padding: 18 }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: 10 }}>Status do pedido</h2>
            <ul style={{ display: 'grid', gap: 10, color: '#52627a' }}>
              <li>• Pedido recebido</li>
              <li>• Em separação</li>
              <li>• Em transporte</li>
              <li>• Saiu para entrega</li>
              <li>• Entregue</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
