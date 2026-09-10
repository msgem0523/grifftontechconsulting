import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';
import styles from './Footer.module.css';

export function Footer({
  columns=[],
  note,
  style,
  ...rest}){
  return (
    <footer 
      className={styles.footer} 
      style={style} 
      {...rest}
    >
      <div className={styles.inner}>
        <Wordmark 
          size={32} 
          tone="inverse" 
          lockup
          wrap
          style={{ maxWidth: '100%' }}
        />
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat('+Math.max(columns.length,1)+',1fr)',
          gap:32,
          marginTop:56
        }}>
          {columns.map((c) => (
            <div
              key={`${c.title}:${c.items
                .map((item) => (typeof item === 'object' ? item.href : item))
                .join('|')}`}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--white-50)',
                  marginBottom: 14
                }}
              >
                {c.title}
              </div>
            <ul className={styles.itemList}>
              {c.items.map((item) => {
                const isLink = typeof item === 'object' && item !== null && item.href;
                const key = isLink ? item.href : item;

                return (
                  <li key={key} className={styles.item}>
                    {isLink ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                        {item.external ? ' ↗' : ''}
                      </a>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        </div>
        <div style={{
          marginTop:64,
          paddingTop:22,
          borderTop:'1px solid var(--white-20)',
          fontSize:13,
          color:'var(--white-50)'
        }}>
          {note||'© '+new Date().getFullYear()+' Temecha Griffin'}
        </div>
      </div>
    </footer>
  );
}
