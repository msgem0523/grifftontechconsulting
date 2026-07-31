import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';

export function Footer({columns=[],note,style,...rest}){
  return <footer style={{margin:'0 var(--page-gutter) var(--page-gutter)',padding:'72px 48px 40px',
    background:'var(--forest)',borderRadius:'var(--radius-l)',color:'var(--white)',...style}} {...rest}>
    <div style={{margin:'0 auto',maxWidth:1080}}>
      <Wordmark size={40} tone="inverse" lockup/>
      <div style={{display:'grid',gridTemplateColumns:'repeat('+Math.max(columns.length,1)+',1fr)',gap:32,marginTop:56}}>
        {columns.map(c=><div key={c.title}>
          <div style={{fontFamily:'var(--font-body)',fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',fontWeight:500,color:'var(--white-50)',marginBottom:14}}>{c.title}</div>
          {c.items.map(i=><div key={i} style={{fontSize:15,lineHeight:'28px',color:'var(--white-70)'}}>{i}</div>)}
        </div>)}
      </div>
      <div style={{marginTop:64,paddingTop:22,borderTop:'1px solid var(--white-20)',fontSize:13,color:'var(--white-50)'}}>
        {note||'© '+new Date().getFullYear()+' Temecha Griffin'}
      </div>
    </div>
  </footer>;
}
