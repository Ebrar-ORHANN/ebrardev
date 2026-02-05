"use client";

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Smartphone, Code, Zap, ExternalLink } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1e1b4b 100%)',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(12px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
  },
  navContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #c084fc, #f472b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem'
  },
  navLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer'
  },
  hero: {
    paddingTop: '128px',
    paddingBottom: '80px',
    textAlign: 'center',
    padding: '128px 1rem 80px 1rem'
  },
  heroIcon: {
    width: '160px',
    height: '160px',
    margin: '0 auto 2rem auto',
    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: 1.2
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#d1d5db',
    marginBottom: '2rem'
  },
  heroDescription: {
    fontSize: '1.125rem',
    color: '#9ca3af',
    maxWidth: '42rem',
    margin: '0 auto 3rem auto'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  buttonPrimary: {
    background: 'linear-gradient(to right, #a855f7, #ec4899)',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer'
  },
  buttonSecondary: {
    border: '2px solid #a855f7',
    color: '#c084fc',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    transition: 'all 0.3s',
    cursor: 'pointer'
  },
  section: {
    padding: '5rem 1rem',
    maxWidth: '1280px',
    margin: '0 auto'
  },
  sectionBg: {
    backgroundColor: 'rgba(30, 41, 59, 0.5)'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.3s'
  },
  cardIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  cardDescription: {
    color: '#9ca3af'
  },
  projectCard: {
    backgroundColor: '#1e293b',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.3s'
  },
  projectImage: {
    width: '100%',
    height: '192px',
    objectFit: 'cover'
  },
  projectContent: {
    padding: '1.5rem'
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  projectDescription: {
    color: '#9ca3af',
    marginBottom: '1rem'
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  techTag: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    color: '#d8b4fe',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem'
  },
  projectLinks: {
    display: 'flex',
    gap: '1rem'
  },
  projectLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  skillBar: {
    marginBottom: '1.5rem'
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem'
  },
  skillName: {
    fontWeight: '600'
  },
  skillPercent: {
    color: '#c084fc'
  },
  skillBarBg: {
    width: '100%',
    height: '12px',
    backgroundColor: '#334155',
    borderRadius: '9999px',
    overflow: 'hidden'
  },
  skillBarFill: {
    height: '100%',
    background: 'linear-gradient(to right, #a855f7, #ec4899)',
    borderRadius: '9999px',
    transition: 'width 1s ease'
  },
  contactIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  contactIcon: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '50%',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    transition: 'all 0.3s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    backgroundColor: '#0f172a',
    padding: '2rem 1rem',
    textAlign: 'center',
    color: '#9ca3af',
    borderTop: '1px solid rgba(168, 85, 247, 0.2)'
  },
  mobileMenu: {
    display: 'none',
    cursor: 'pointer'
  },
  mobileMenuContent: {
    backgroundColor: '#1e293b',
    borderTop: '1px solid rgba(168, 85, 247, 0.2)',
    padding: '1rem'
  },
  mobileMenuItem: {
    display: 'block',
    color: '#d1d5db',
    textDecoration: 'none',
    padding: '0.75rem 0',
    borderBottom: '1px solid rgba(168, 85, 247, 0.1)'
  }
};

// Media query için
const mediaStyles = `
  @media (max-width: 768px) {
    .desktop-menu { display: none !important; }
    .mobile-menu-btn { display: block !important; }
    .hero-title { font-size: 2.5rem !important; }
    .section-title { font-size: 2rem !important; }
  }
`;

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Film Keşif Uygulaması",
      description: "TMDB API entegrasyonlu film keşif ve takip uygulaması. Çoklu dil desteği, favoriler sistemi ve detaylı film bilgileri içerir.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      tech: ["React Native", "Expo Router", "Firebase Auth", "TMDB API", "i18next"],
      github: "https://github.com/Ebrar-ORHANN/movie__app",
      
     
    },
    {
     id: 2,
      title: "QR Menü Sistemi",
      description: "Kafeler için geliştirilmiş QR kod tabanlı dijital menü yönetim sistemi. Cloudinary entegrasyonu ile görsel yönetimi ve admin paneli.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      tech: ["React Native", "Expo", "Firebase Firestore", "Cloudinary", "QR Code"],
      github: "https://github.com/Ebrar-ORHANN/cafe_menu",
      
    },
   {
  id: 3,
  title: "AI Recipe App",
  description: "Yapay zeka destekli tarif öneri mobil uygulaması. Kullanıcı girdilerine göre dinamik tarif üretimi, API entegrasyonu ve modern mobil arayüz deneyimi.",
  image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
  tech: ["React Native", "Expo", "AI API", "REST API", "JavaScript"],
  github: "https://github.com/Ebrar-ORHANN/recipe-ai-app"
},

    
  ];

  const skills = [
    { name: "React Native", level: 80 },
    { name: "JavaScript", level: 85 }, 
    { name: "Firebase", level: 80 },
    { name: "Git & GitHub", level: 90 }
  ];

  return (
    <div style={styles.container}>
      <style>{mediaStyles}</style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Portfolio</div>
          
          {/* Desktop Menu */}
          <div style={styles.navLinks} className="desktop-menu">
            <a href="#home" style={styles.navLink}>Ana Sayfa</a>
            <a href="#about" style={styles.navLink}>Hakkımda</a>
            <a href="#projects" style={styles.navLink}>Projeler</a>
            <a href="#skills" style={styles.navLink}>Yetenekler</a>
            <a href="#contact" style={styles.navLink}>İletişim</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            style={styles.mobileMenu}
            className="mobile-menu-btn"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={styles.mobileMenuContent}>
            <a href="#home" style={styles.mobileMenuItem} onClick={() => setMenuOpen(false)}>Ana Sayfa</a>
            <a href="#about" style={styles.mobileMenuItem} onClick={() => setMenuOpen(false)}>Hakkımda</a>
            <a href="#projects" style={styles.mobileMenuItem} onClick={() => setMenuOpen(false)}>Projeler</a>
            <a href="#skills" style={styles.mobileMenuItem} onClick={() => setMenuOpen(false)}>Yetenekler</a>
            <a href="#contact" style={styles.mobileMenuItem} onClick={() => setMenuOpen(false)}>İletişim</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroIcon}>
          <Smartphone size={80} color="#fff" />
        </div>
        <h1 style={styles.heroTitle} className="hero-title">
          EBRAR ORHAN
        </h1>
        <p style={styles.heroSubtitle}>
          React Native Developer
        </p>
        <p style={styles.heroDescription}>
          Bilgisayar Mühendisliği son sınıf öğrencisiyim. Modern ve kullanıcı dostu mobil uygulamalar geliştiriyorum.
        </p>
        <div style={styles.buttonContainer}>
          <a href="#projects" style={styles.buttonPrimary}>
            Projelerimi Gör
          </a>
          <a href="#contact" style={styles.buttonSecondary}>
            İletişime Geç
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.sectionBg}}>
        <h2 style={styles.sectionTitle} className="section-title">Hakkımda</h2>
        <div style={styles.grid3}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <Code size={32} color="#c084fc" />
            </div>
            <h3 style={styles.cardTitle}>Mobil Geliştirme</h3>
            <p style={styles.cardDescription}>
              React Native ve cross-platform teknolojiler ile profesyonel mobil uygulamalar geliştiriyorum.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <Zap size={32} color="#c084fc" />
            </div>
            <h3 style={styles.cardTitle}>Performans Odaklı</h3>
            <p style={styles.cardDescription}>
              Hızlı, responsive ve kullanıcı deneyimini ön planda tutan uygulamalar yaratıyorum.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <Smartphone size={32} color="#c084fc" />
            </div>
            <h3 style={styles.cardTitle}>Modern Teknolojiler</h3>
            <p style={styles.cardDescription}>
              En güncel framework'ler ve best practice'ler ile sürekli kendimi geliştiriyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle} className="section-title">Projelerim</h2>
        <div style={styles.grid3}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.techTags}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div style={styles.projectLinks}>
                  <a href={project.github} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <Github size={20} /> GitHub
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{...styles.section, ...styles.sectionBg}}>
        <div style={{maxWidth: '56rem', margin: '0 auto'}}>
          <h2 style={styles.sectionTitle} className="section-title">Yeteneklerim</h2>
          <div>
            {skills.map((skill, idx) => (
              <div key={idx} style={styles.skillBar}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div style={styles.skillBarBg}>
                  <div style={{...styles.skillBarFill, width: `${skill.level}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={{textAlign: 'center'}}>
          <h2 style={styles.sectionTitle} className="section-title">İletişime Geçin</h2>
          <p style={{...styles.heroDescription, marginBottom: '3rem'}}>
            Bir proje için benimle çalışmak ister misiniz? Benimle iletişime geçin!
          </p>
          <div style={styles.contactIcons}>
            <a href="mailto:ebrarohan2501@gmail.com" style={styles.contactIcon}>
              <Mail size={24} color="#c084fc" />
            </a>
            <a href="https://github.com/Ebrar-ORHANN?tab=repositories" style={styles.contactIcon} target="_blank" rel="noopener noreferrer">
              <Github size={24} color="#c084fc" />
            </a>
            <a href="https://www.linkedin.com/in/ebrar-orhan25/" style={styles.contactIcon} target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} color="#c084fc" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        
      </footer>
    </div>
  );
}

export default Portfolio;
