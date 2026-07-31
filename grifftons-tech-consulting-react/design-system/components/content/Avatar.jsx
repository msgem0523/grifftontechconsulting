import React from 'react';

export function Avatar({
  src,
  initials='TG',
  size=64,
  tone='blush',
  style,
  ...rest}){
  const bg={
    blush:'var(--blush)',
    saffron:'var(--saffron)',
    moss:'var(--moss)',
    sky:'var(--sky)',
    forest:'var(--forest)'
  }[tone]||'var(--blush)';
  const fg=tone==='forest'?'var(--white)':'var(--ink)';
  return <span 
    style={{
      display:'inline-flex',
      alignItems:'center',
      justifyContent:'center',
      width:size,
      height:size,
      borderRadius:'var(--radius-round)',
      overflow:'hidden',
      background:bg,
      flex:'0 0 auto',
      ...style
    }} 
    {...rest}>
    {src?<img 
      src={src} 
      alt="" 
      style={{
        width:'100%',
        height:'100%',
        objectFit:'cover'
      }}/>
      :<span 
        style={{fontFamily:'var(--font-display)',
        fontWeight:500,
        fontSize:size*0.4,
        letterSpacing:'-0.02em',
        color:fg
      }}>
        {initials}
      </span>}
  </span>;
}
