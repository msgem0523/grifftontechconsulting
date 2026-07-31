import React from 'react';

export function Card({
  tone='raised',
  interactive=false,
  pad=32,
  children,
  style,
  ...rest}){
  const [hover,setHover]=React.useState(false);
  const bg={
    raised:'var(--surface-raised)',
    sunken:'var(--pearl-light)',
    outline:'transparent',
    inverse:'var(--forest)',
    accent:'var(--saffron)'}[tone];
  return <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{
      background:bg,
      color:tone==='inverse'?'var(--white)':'var(--text-primary)',
      border:tone==='outline'?'1px solid var(--line)':'1px solid transparent',
      borderRadius:'var(--radius-l)',
      padding:pad,
      boxShadow:tone==='outline'?'none':(interactive&&hover?'var(--shadow-lifted)':'var(--shadow-soft)'),
      transform:interactive&&hover?'translateY(-3px)':'none',
      cursor:interactive?'pointer':'default',
      transition:'var(--transition-interactive)',
      ...style
  }} {...rest}>{children}</div>;
}
