import React from 'react';

const BASE={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'10px',boxSizing:'border-box',
  fontFamily:'var(--font-body)',fontWeight:500,letterSpacing:'-0.2px',whiteSpace:'nowrap',
  cursor:'pointer',userSelect:'none',textDecoration:'none',boxShadow:'none',
  borderRadius:'var(--radius-pill)',transition:'var(--transition-interactive)'};
const SIZES={l:{height:'58px',padding:'0 30px',fontSize:'17px'},m:{height:'52px',padding:'0 26px',fontSize:'16px'},s:{height:'40px',padding:'0 18px',fontSize:'14px'}};

export function Button({variant='primary',size='m',fullWidth=false,disabled=false,iconRight,as,href,style,children,...rest}){
  const [hover,setHover]=React.useState(false);
  const looks={
    primary:{background:hover?'var(--forest-deep)':'var(--forest)',color:'var(--white)',border:'1px solid transparent'},
    accent:{background:hover?'var(--saffron-dark)':'var(--saffron)',color:'var(--ink)',border:'1px solid transparent'},
    outline:{background:hover?'var(--ink)':'transparent',color:hover?'var(--white)':'var(--ink)',border:'1px solid var(--ink)'},
    ghost:{background:hover?'var(--haze)':'transparent',color:'var(--ink)',border:'1px solid transparent'},
    inverse:{background:hover?'var(--pearl-deep)':'var(--white)',color:'var(--forest-ink)',border:'1px solid transparent'},
    link:{background:'none',border:0,padding:0,height:'auto',borderRadius:0,color:'var(--ink)',
      boxShadow:hover?'inset 0 -0.7em 0 var(--saffron)':'inset 0 -2px 0 var(--saffron)'}
  };
  const look=looks[variant]||looks.primary;
  const sized=variant==='link'?{fontSize:'16px'}:SIZES[size];
  const off=disabled?{background:'var(--action-disabled-bg)',borderColor:'transparent',color:'var(--action-disabled-fg)',pointerEvents:'none',boxShadow:'none'}:null;
  const lift=(hover&&variant!=='link'&&!disabled)?{transform:'translateY(-1px)'}:null;
  const Tag=as||(href?'a':'button');
  return <Tag href={href} disabled={Tag==='button'?disabled:undefined}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{...BASE,...sized,...look,...lift,...(fullWidth?{width:'100%'}:null),...off,...style}} {...rest}>
    {children}{iconRight&&<span aria-hidden="true" style={{transform:hover?'translateX(3px)':'none',transition:'transform .25s cubic-bezier(.22,1,.36,1)'}}>{iconRight}</span>}
  </Tag>;
}
