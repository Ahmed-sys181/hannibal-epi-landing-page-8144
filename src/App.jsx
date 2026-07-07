import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", minHeight: '100vh', background: '#020617', color: '#f8fafc' }}>
      
    <section style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)', color: '#5eead4', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem' }}>✨ AI-Powered</span><br />
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '0 0 1.5rem' }}>EPI School</h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '40rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>Built with AI and design freedom. Launch faster than ever.</p>
        <a href="#" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: 'linear-gradient(to right, #14b8a6, #3b82f6)', borderRadius: '0.75rem', fontWeight: 700, color: '#ffffff', textDecoration: 'none', fontSize: '1rem', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>Get Started Free</a>
      </div>
    </section>
  


    <section style={{ background: '#020617', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1rem' }}>Everything you need</h2>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8' }}>Powerful features to accelerate your workflow</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
          
    <div key={0} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.5)', borderRadius: '1rem', padding: '2rem', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>Lightning Fast</h3>
      <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Optimized for performance from day one.</p>
    </div>
        
    <div key={1} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.5)', borderRadius: '1rem', padding: '2rem', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>AI Powered</h3>
      <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Generate content with simple prompts.</p>
    </div>
        
    <div key={2} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.5)', borderRadius: '1rem', padding: '2rem', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>Beautiful Design</h3>
      <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Professional designs out of the box.</p>
    </div>
        </div>
      </div>
    </section>
  


    <section style={{ background: '#f8fafc', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, #f0fdf4, #eff6ff)', border: '1px solid #bbf7d0', borderRadius: '1.5rem', padding: '3rem' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem' }}>Ready to get started?</h2>
        <p style={{ fontSize: '1.125rem', color: '#475569', margin: '0 0 2rem' }}>Join thousands of creators building with Hannibal.ai today.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ padding: '0.875rem 2rem', background: 'linear-gradient(to right, #14b8a6, #3b82f6)', borderRadius: '0.75rem', fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>Start Building Free</a>
          <a href="#" style={{ padding: '0.875rem 2rem', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #cbd5e1', color: '#374151' }}>See a Demo</a>
        </div>
      </div>
    </section>
  


    <section style={{ background: '#020617', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1rem' }}>Simple, transparent pricing</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>Start free, scale as you grow.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
          
      <div key={0} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.5)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column',  }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.25rem' }}>Starter</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 1.5rem' }}>Perfect for personal projects</p>
        <div style={{ marginBottom: '1.5rem' }}><span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff' }}>Free</span><span style={{ color: '#94a3b8' }}> /forever</span></div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}><li key={0} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>3 Projects</li><li key={1} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>10 AI Generations/mo</li><li key={2} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Basic Components</li><li key={3} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Public Sharing</li></ul>
        <a href="#" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', background: 'linear-gradient(to right, #14b8a6, #3b82f6)', color: '#ffffff' }}>Get Started</a>
      </div>
        
      <div key={1} style={{ background: 'linear-gradient(to bottom, #14b8a6, #3b82f6)', border: 'none', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', transform: 'scale(1.05)', boxShadow: '0 25px 50px rgba(20,184,166,0.3)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.25rem' }}>Pro</h3>
        <p style={{ color: 'rgba(204,251,241,0.8)', fontSize: '0.875rem', margin: '0 0 1.5rem' }}>For professional builders</p>
        <div style={{ marginBottom: '1.5rem' }}><span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff' }}>$29</span><span style={{ color: 'rgba(204,251,241,0.8)' }}> /month</span></div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}><li key={0} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(204,251,241,0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Unlimited Projects</li><li key={1} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(204,251,241,0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>500 AI Generations/mo</li><li key={2} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(204,251,241,0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>All Components</li><li key={3} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(204,251,241,0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Custom Domain</li><li key={4} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(204,251,241,0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Priority Support</li></ul>
        <a href="#" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', background: '#ffffff', color: '#0d9488' }}>Start Free Trial</a>
      </div>
        
      <div key={2} style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.5)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column',  }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.25rem' }}>Team</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 1.5rem' }}>For agencies and teams</p>
        <div style={{ marginBottom: '1.5rem' }}><span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff' }}>$79</span><span style={{ color: '#94a3b8' }}> /month</span></div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}><li key={0} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Everything in Pro</li><li key={1} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Unlimited AI Generations</li><li key={2} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Team Collaboration</li><li key={3} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>Advanced Analytics</li><li key={4} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ color: '#14b8a6', marginTop: '0.1rem' }}>✓</span>White-label</li></ul>
        <a href="#" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', background: 'linear-gradient(to right, #14b8a6, #3b82f6)', color: '#ffffff' }}>Contact Sales</a>
      </div>
        </div>
      </div>
    </section>
  
    </div>
  );
}
