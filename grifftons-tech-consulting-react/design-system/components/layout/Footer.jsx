import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';

export function Footer({
  columns=[],
  note,
  style,
  ...rest
}){
  return <footer style={{
    margin:'0 var(--page-gutter) var(--page-gutter)',
    padding:'72px 48px 40px',
    background:'var(--forest)',
    borderRadius:'var(--radius-l)',
    color:'var(--white)',
    ...style
  }} {...rest}>
    <div style={{
      margin:'0 auto',
      maxWidth:1080
    }}>
      <Wordmark size={40} tone="inverse" lockup/>
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
                marginBottom: 14,
              }}
            >
              {c.title}
            </div>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {c.items.map((item) => {
                const isLink = typeof item === 'object' && item !== null && item.href;
                const key = isLink ? item.href : item;

                return (
                  <li
                    key={key}
                    style={{
                      fontSize: 15,
                      lineHeight: '28px',
                      color: 'var(--white-70)'
                    }}
                  >
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
  </footer>;
}
