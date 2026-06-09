import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><strong>Login</strong></nav>
        <section className="product-detail-grid">
          <article className="page-card" style={{ padding: 18 }}>
            <p className="page-chip">Área do cliente</p>
            <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Acesse sua conta</h1>
            <p style={{ color: '#52627a', marginBottom: 14 }}>Recuperação de senha, manter conectado e proteção de rotas estão preparadas para expansão institucional.</p>
            <form style={{ display: 'grid', gap: 12 }}>
              <input type="email" placeholder="Email" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
              <input type="password" placeholder="Senha" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
              <label style={{ color: '#52627a', fontSize: '0.95rem' }}><input type="checkbox" /> Manter conectado</label>
              <button className="primary" type="submit">Entrar</button>
            </form>
            <p style={{ marginTop: 10, color: '#52627a' }}><Link href="/cadastro">Criar conta</Link> · <a href="#">Esqueci a senha</a></p>
          </article>
          <article className="page-card" style={{ padding: 18 }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Benefícios da conta</h2>
            <ul style={{ color: '#53647d', display: 'grid', gap: 8 }}>
              <li>• Histórico de pedidos e rastreamento</li>
              <li>• Endereços salvos</li>
              <li>• Favoritos e promoções exclusivas</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
