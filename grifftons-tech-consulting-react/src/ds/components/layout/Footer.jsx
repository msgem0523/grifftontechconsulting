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
          {columns.map(c=><div key={c.title}>
            <div style={{
              fontFamily:'var(--font-body)',
              fontSize:11,
              letterSpacing:'.1em',
              textTransform:'uppercase',
              fontWeight:500,
              color:'var(--white-50)',
              marginBottom:14
            }}>{c.title}</div>
            {c.items.map((item, index) => (
              <div
                key={`${c.title}-${index}`}
                style={{
                  fontSize:15,
                  lineHeight: '28px',
                  color: 'var(--white-70)'
                }}
              >
                {item}
              </div>
            ))}
          </div>)}
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
