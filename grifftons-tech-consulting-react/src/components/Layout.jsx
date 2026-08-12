import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '../ds/components/layout/Nav.jsx';
import { Footer } from '../ds/components/layout/Footer.jsx';
import { Button } from '../ds/components/core/Button.jsx';

const NAV_ITEMS = [
  { id: '/', label: 'Home' },
  { id: '/about', label: 'About' },
  { id: '/pricing', label: 'Pricing' },
  { id: '/business-websites', label: 'Business Websites' },
  { id: '/landing-pages', label: 'Landing Pages' },
  { id: '/qr-pages', label: 'QR Pages' },
  { id: '/tech-support', label: 'Tech Support' },
  { id: '/questionnaire', label: 'Questionnaire' },
];

const FOOTER_COLUMNS = [
  {
    title: 'Contact',
    items: [
      <a href="mailto:msgem0523@gmail.com">Email</a>,
      <a
        href="https://www.linkedin.com/in/temecha-griffin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>,
      <a
        href="https://www.github.com/msgem0523"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>,
    ]
  }
];

function Layout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Nav
        items={NAV_ITEMS}
        active={pathname}
        homeId="/"
        onNavigate={(id) => navigate(id)}
        action={<Button size="s" onClick={() => navigate('/#contact')}>Start a project</Button>}
      />
      <main>
        <Outlet />
      </main>
      <Footer 
        columns={FOOTER_COLUMNS}
        note={`© ${new Date().getFullYear()} Griffton's Tech Consulting`} 
      />
    </>
  );
}

export default Layout;
