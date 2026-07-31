import React from 'react';

export function Section({tone='page',width='content',pad='default',id,children,style,...rest}){
  const bg={page:'transparent',raised:'var(--surface-raised)',sunken:'var(--pearl-light)',
    inverse:'var(--forest)',accent:'var(--saffron)'}[tone];
  const fg=tone==='inverse'?'var(--text-inverse)':'var(--text-primary)';
  const py={none:'0',tight:'56px',default:'96px',large:'160px'}[pad];
  const inset=tone!=='page';
  return <section id={id} style={{background:bg,color:fg,padding:py+' var(--page-gutter)',
    borderRadius:inset?'var(--radius-l)':0,margin:inset?'0 var(--page-gutter)':0,...style}} {...rest}>
    <div style={{margin:'0 auto',width:'100%',maxWidth:{prose:'680px',content:'1080px',wide:'1360px',full:'none'}[width]}}>{children}</div>
  </section>;
}

export function SectionHead({label,title,intro,action,style,...rest}){
  return <header style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'40px',marginBottom:'48px',...style}} {...rest}>
    <div>
      {label&&<div style={{fontFamily:'var(--font-body)',fontSize:11,lineHeight:'14px',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:500,color:'var(--text-muted)',marginBottom:16}}>{label}</div>}
      {title&&<h2 style={{fontFamily:'var(--font-display)',fontSize:48,lineHeight:'52px',letterSpacing:'-1.2px',fontWeight:400,margin:0,maxWidth:'18ch'}}>{title}</h2>}
      {intro&&<p style={{margin:'18px 0 0',maxWidth:'52ch',fontSize:18,lineHeight:'30px',letterSpacing:'-0.2px',color:'var(--text-secondary)'}}>{intro}</p>}
    </div>
    {action&&<div style={{flex:'0 0 auto',paddingBottom:6}}>{action}</div>}
  </header>;
}
