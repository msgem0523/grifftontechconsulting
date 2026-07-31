import React from 'react';

export function Wordmark({size=28,variant='full',tone='ink',lockup=false,role,style,...rest}){
  const color = tone==='inverse' ? 'var(--white)' : tone==='forest' ? 'var(--forest)' : 'var(--ink)';
  /* Adapted from the Temecha Griffin personal system: the identity rule (the name IS the
     mark, Newsreader Medium, never boxed) applied to this site's brand name. */
  const text = variant==='initials' ? 'GTC' : variant==='first' ? "Griffton's" : "Griffton's Tech Consulting";
  const mark = <span style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:size,
    lineHeight:1,letterSpacing:size>40?'-0.035em':'-0.02em',color,display:'block',whiteSpace:'nowrap'}}>{text}</span>;
  if(!lockup) return <span style={{display:'inline-block',...style}} {...rest}>{mark}</span>;
  return <span style={{display:'inline-flex',flexDirection:'column',gap:size*0.18,...style}} {...rest}>
    {mark}
    <span style={{fontFamily:'var(--font-body)',fontSize:Math.max(10,size*0.34),lineHeight:1.25,
      letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:500,
      color:tone==='inverse'?'var(--white-70)':'var(--slate)'}}>{role||'Web · Automation · Support'}</span>
  </span>;
}
