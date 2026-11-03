import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '../ds/components/layout/Nav.jsx';
import { Footer } from '../ds/components/layout/Footer.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { CONTACT } from '../lib/contact';

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
      {
        label: 'Email',
        href: `mailto:${CONTACT.email}`
      },
      {
        label: 'LinkedIn',
        href: CONTACT.linkedin,
        external: true
      },
      {
        label: 'GitHub',
        href: CONTACT.github,
        external: true
      }
    ]
  }
];

function Layout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo(0, 0);
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
