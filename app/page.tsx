

export default function Home() {
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', fontFamily: 'sans-serif', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2rem' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', animation: 'bounce 1.5s infinite' }}>
      👋 Bem-vindo(a) ao Portal Universitário! 🎓
    </h1>
    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#333', textAlign: 'center', maxWidth: 500 }}>
      Explore, cadastre e descubra universidades incríveis! <span role="img" aria-label="books">📚</span> <span role="img" aria-label="rocket">🚀</span>
    </p>
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      <a href="/university" style={{ padding: '0.75rem 1.5rem', background: '#4f8cff', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(79,140,255,0.15)', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        📋 Listar Universidades
      </a>
      <a href="/university/new" style={{ padding: '0.75rem 1.5rem', background: '#34c759', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(52,199,89,0.15)', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        ➕ Cadastrar Universidade
      </a>
    </div>
    <style>
      {`
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-16px);}
        }
      `}
    </style>
  </div>
  );
}
