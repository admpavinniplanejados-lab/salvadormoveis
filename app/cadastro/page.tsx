import Link from 'next/link';

export default function CadastroPage() {
  return (
    <main className="page-shell">
      <div className="container product-detail-page">
        <nav className="product-breadcrumb" aria-label="Caminho"><Link href="/">Home</Link><span>/</span><strong>Cadastro</strong></nav>
        <section className="page-card" style={{ padding: 18 }}>
          <p className="page-chip">Crie sua conta</p>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Cadastro institucional</h1>
          <p style={{ color: '#52627a', marginBottom: 14 }}>Campos completos para nome, CPF, telefone, email e senha, com validações prontas para integração.</p>
          <form style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <input placeholder="Nome completo" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <input placeholder="CPF" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <input placeholder="Telefone" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <input type="email" placeholder="Email" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <input type="password" placeholder="Senha" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <input type="password" placeholder="Confirmar senha" style={{ border: '1px solid #dfe5ef', borderRadius: 8, padding: '10px 12px' }} />
            <button className="primary" type="submit" style={{ gridColumn: '1 / -1' }}>Criar conta</button>
          </form>
          <p style={{ marginTop: 12, color: '#52627a' }}>Já tem conta? <Link href="/login">Entrar</Link></p>
        </section>
      </div>
    </main>
  );
}
