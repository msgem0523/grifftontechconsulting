import React from 'react';

export function Modal({
  open=true,
  title,
  onClose,
  footer,
  width=560,
  children,
  style,
  ...rest}){
  if(!open) return null;
  return <div 
    onClick={onClose} 
    style={{
      position:'fixed',
      inset:0,
      background:'var(--black-60)',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'24px',
      zIndex:100,
      animation:'tg-fade-in .25s cubic-bezier(.22,1,.36,1) forwards'}}>
    <div 
      onClick={e=>e.stopPropagation()} 
      style={{
        background:'var(--surface-raised)',
        borderRadius:'var(--radius-l)',
        padding:'40px',
        width:'100%',
        maxWidth:width,
        boxShadow:'var(--shadow-lifted)',
        animation:'tg-fade-up .25s cubic-bezier(.22,1,.36,1) forwards',
        ...style}} {...rest}>
      {title&&<h2 style={{
        margin:'0 0 14px',
        fontFamily:'var(--font-display)',
        fontSize:'28px',
        lineHeight:'34px',
        letterSpacing:'-0.5px',
        color:'var(--text-primary)'
      }}>{title}</h2>}
      {children}
      {footer&&<div style={{
        marginTop:'28px',
        display:'flex',
        gap:'12px'
      }}>{footer}</div>}
    </div>
  </div>;
}

export function Callout({
  tone='accent',
  label,
  /* children, */
  style,
  ...rest}){
  const tones={
    accent:['var(--saffron-tint)','var(--saffron)'],
    forest:['var(--forest-tint)','var(--forest)'],
    sky:['var(--sky-tint)','var(--sky)'],
    berry:['var(--berry-tint)','var(--berry)'],
    neutral:['var(--haze-light)','var(--slate-light)']};
  const [bg,bar]=tones[tone]||tones.accent;
  return <aside style={{
    background:bg,
    borderRadius:'var(--radius-m)',
    padding:'24px 28px',
    display:'flex',
    gap:'18px',
    ...style}} {...rest}>
    <span aria-hidden="true" style={{flex:'0 0 4px',borderRadius:'999px',background:bar}}/>
    <div>
      {label&&<div style={{
        fontFamily:'var(--font-body)',
        fontSize:11,
        lineHeight:'14px',
        letterSpacing:'.1em',
        textTransform:'uppercase',
        fontWeight:500,
        color:'var(--text-muted)',
        marginBottom:6
      }}>{label}</div>}
    </div>
  </aside>;
}
