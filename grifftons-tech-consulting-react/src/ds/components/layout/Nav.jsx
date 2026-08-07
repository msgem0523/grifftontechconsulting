import React, { useEffect, useState } from 'react';
import { Wordmark } from '../core/Wordmark.jsx';
import styles from './Nav.module.css';

export function Nav({
  items = [],
  active,
  onNavigate,
  action,
  tone = 'page',
  homeId = 'home',
  style,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const inverse = tone === 'inverse';

  const handleNavigate = (id) => {
    onNavigate?.(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${inverse ? styles.inverse : ''}`}
      style={style}
      aria-label="Main navigation"
      {...rest}
    >
      <a
        href="#"
        className={styles.wordmark}
        onClick={(event) => {
          event.preventDefault();
          handleNavigate(homeId);
        }}
      >
        <Wordmark size={22} tone={inverse ? 'inverse' : 'ink'} />
      </a>

      <button
        type="button"
        className={styles.navToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
      </button>

      <div
        id="primary-navigation"
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.navLinks}>
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href="#"
                className={isActive ? styles.active : ''}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {action && (
          <div className={styles.action} onClick={() => setIsOpen(false)}>
            {action}
          </div>
        )}
      </div>
    </nav>
  );
}