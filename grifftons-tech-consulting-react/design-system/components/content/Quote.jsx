import React from 'react';

export function Quote({
  children,
  attribution,
  role,
  tone='page',
  style,
  ...rest}){
  const inverse=tone==='inverse';
  return <figure style={{margin:0,...style}} {...rest}>
    <blockquote 
      style={{
        margin:0,
        fontFamily:'var(--font-display)',
        fontWeight:400,
        fontStyle:'italic',
        fontSize:36,
        lineHeight:'46px',
        letterSpacing:'-0.8px',
        maxWidth:'22ch',
        color:inverse?'var(--white)':'var(--text-primary)'
      }}>
        {children}
    </blockquote>
    {attribution&&<figcaption 
      style={{
        marginTop:24,
        fontFamily:'var(--font-body)',
        fontSize:13,
        lineHeight:'19px',
        letterSpacing:'-0.1px',
        color:inverse?'var(--white-70)':'var(--text-muted)'
      }}>
      <span 
        style={{
          fontWeight:600,
          color:inverse?'var(--white)':'var(--text-primary)'
        }}>
          {attribution}
      </span>
      {role&&<span> · {role}</span>}
    </figcaption>}
  </figure>;
}
