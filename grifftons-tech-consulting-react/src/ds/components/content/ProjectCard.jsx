import React from 'react';

export function ProjectCard({image,imageTone='sky',title,client,summary,tags=[],year,onClick,size='m',style,...rest}){
  const [hover,setHover]=React.useState(false);
  const tint={sky:'var(--sky-tint)',berry:'var(--berry-tint)',moss:'var(--moss-tint)',
    coral:'var(--coral-tint)',saffron:'var(--saffron-tint)',forest:'var(--forest-tint)'}[imageTone]||'var(--haze-light)';
  const ratio=size==='l'?'16 / 10':'4 / 3';
  return <article onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{cursor:onClick?'pointer':'default',...style}} {...rest}>
    <div style={{aspectRatio:ratio,borderRadius:'var(--radius-m)',overflow:'hidden',background:tint,
      boxShadow:hover?'var(--shadow-lifted)':'var(--shadow-soft)',
      transform:hover?'translateY(-4px)':'none',transition:'var(--transition-interactive)'}}>
      {image&&<img src={image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',
        transform:hover?'scale(1.03)':'none',transition:'transform .5s cubic-bezier(.22,1,.36,1)'}}/>}
    </div>
    <div style={{display:'flex',alignItems:'baseline',gap:12,marginTop:22,flexWrap:'wrap'}}>
      {client&&<span style={{fontFamily:'var(--font-body)',fontSize:11,lineHeight:'14px',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:500,color:'var(--text-muted)',whiteSpace:'nowrap'}}>{client}</span>}
      {year&&<span style={{fontFamily:'var(--font-body)',fontSize:11,lineHeight:'14px',letterSpacing:'.1em',color:'var(--slate-light)',whiteSpace:'nowrap'}}>{year}</span>}
    </div>
    <h3 style={{margin:'10px 0 0',fontFamily:'var(--font-display)',fontWeight:400,
      fontSize:size==='l'?36:28,lineHeight:size==='l'?'42px':'34px',letterSpacing:size==='l'?'-0.8px':'-0.5px'}}>
      <span style={{boxShadow:hover?'inset 0 -0.5em 0 var(--saffron)':'none',
        transition:'box-shadow .25s cubic-bezier(.22,1,.36,1)'}}>{title}</span></h3>
    {summary&&<p style={{margin:'14px 0 0',maxWidth:'48ch',fontSize:16,lineHeight:'27px',letterSpacing:'-0.2px',color:'var(--text-secondary)'}}>{summary}</p>}
    {tags.length>0&&<div style={{display:'flex',gap:8,marginTop:18,flexWrap:'wrap'}}>
      {tags.map(t=><span key={t} style={{padding:'5px 14px',borderRadius:'var(--radius-pill)',background:'var(--haze-light)',border:'1px solid var(--line)',fontSize:12,lineHeight:'18px',letterSpacing:'-0.1px',color:'var(--text-secondary)',whiteSpace:'nowrap'}}>{t}</span>)}
    </div>}
  </article>;
}
