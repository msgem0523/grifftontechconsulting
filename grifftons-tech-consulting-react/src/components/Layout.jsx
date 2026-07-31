import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '../ds/components/layout/Nav.jsx';
import { Footer } from '../ds/components/layout/Footer.jsx';
import { Button } from '../ds/components/core/Button.jsx';

const NAV_ITEMS = [
  { id: '/', label: 'Home' },
  { id: '/about', label: 'About' },
  { id: '/pricing', label: 'Pricing' },
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
        style={{ flexWrap: 'wrap' }}
      />
      <main>
        <Outlet />
      </main>
      <Footer note={`© ${new Date().getFullYear()} Griffton's Tech Consulting`} />
    </>
  );
}

export default Layout;
