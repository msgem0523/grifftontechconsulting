import React from 'react';

export function Stat({
  value,
  label,
  tone='ink',
  align='left',
  style,
  ...rest}){
  const color=tone==='accent'?'var(--saffron)':tone==='inverse'?'var(--white)':tone==='forest'?'var(--forest)':'var(--ink)';
  return <div 
    style={{
      textAlign:align,
      ...style}} {...rest}>
    <div 
      style={{
        fontFamily:'var(--font-display)',
        fontWeight:400,
        fontSize:64,
        lineHeight:'66px',
        letterSpacing:'-1.8px',
        color}}>{value}</div>
    <div 
      style={{
        marginTop:10,
        fontFamily:'var(--font-body)',
        fontSize:13,
        lineHeight:'19px',
        letterSpacing:'-0.1px',
        color:tone==='inverse'?'var(--white-70)':'var(--text-muted)',
        maxWidth:'22ch'
      }}>
      {label}
    </div>
  </div>;
}
