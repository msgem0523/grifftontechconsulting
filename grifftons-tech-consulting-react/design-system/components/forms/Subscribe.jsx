import React from 'react';
import { Button } from '../core/Button.jsx';

export function Subscribe({title='The newsletter',blurb,cta='Subscribe',note,tone='sunken',onSubmit,style,...rest}){
  const inverse=tone==='inverse';
  const [email,setEmail]=React.useState('');
  const [done,setDone]=React.useState(false);
  return <div style={{background:inverse?'var(--forest)':'var(--pearl-light)',borderRadius:'var(--radius-l)',
    padding:'48px',color:inverse?'var(--white)':'var(--text-primary)',...style}} {...rest}>
    <h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:36,lineHeight:'42px',letterSpacing:'-0.8px'}}>{title}</h3>
    {blurb&&<p style={{margin:'14px 0 0',maxWidth:'46ch',fontSize:18,lineHeight:'30px',letterSpacing:'-0.2px',
      color:inverse?'var(--white-70)':'var(--text-secondary)'}}>{blurb}</p>}
    {done
      ? <p style={{margin:'28px 0 0',fontSize:16,lineHeight:'27px',color:inverse?'var(--saffron)':'var(--forest)'}}>You're in. First one lands Sunday.</p>
      : <form onSubmit={e=>{e.preventDefault();setDone(true);onSubmit&&onSubmit(email)}}
          style={{display:'flex',gap:12,marginTop:28,maxWidth:520}}>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"
            style={{flex:1,minWidth:0,height:'var(--control-height)',padding:'0 22px',borderRadius:'var(--radius-pill)',
              border:'1px solid '+(inverse?'var(--white-20)':'var(--line)'),background:inverse?'var(--white-20)':'var(--white)',
              fontFamily:'var(--font-body)',fontSize:16,letterSpacing:'-0.2px',outline:0,
              color:inverse?'var(--white)':'var(--text-primary)'}}/>
          <Button type="submit" variant={inverse?'accent':'primary'}>{cta}</Button>
        </form>}
    {note&&<p style={{margin:'16px 0 0',fontSize:13,color:inverse?'var(--white-50)':'var(--text-muted)'}}>{note}</p>}
  </div>;
}
