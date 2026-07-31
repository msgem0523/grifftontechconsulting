import React from 'react';

export function Input({label,error,hint,multiline=false,rows=4,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const shared={width:'100%',boxSizing:'border-box',border:0,outline:0,background:'transparent',
    fontFamily:'var(--font-body)',fontSize:16,lineHeight:'27px',letterSpacing:'-0.2px',color:'var(--text-primary)',resize:'none'};
  return <label style={{display:'block',width:'100%'}}>
    {label&&<span style={{display:'block',marginBottom:10,fontFamily:'var(--font-body)',fontSize:11,
      letterSpacing:'.1em',textTransform:'uppercase',fontWeight:500,color:'var(--text-muted)'}}>{label}</span>}
    <span style={{padding:multiline?'14px 22px':'0 22px',
      height:multiline?'auto':'var(--control-height)',display:'flex',alignItems:'center',
      background:'var(--surface-raised)',
      border:'1px solid '+(error?'var(--error)':focus?'var(--forest)':'var(--line)'),
      borderRadius:multiline?'var(--radius-s)':'var(--radius-pill)',
      boxShadow:focus?'0 0 0 3px var(--saffron-light)':'none',
      transition:'var(--transition-interactive)',...style}}>
      {multiline
        ? <textarea rows={rows} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={shared} {...rest}/>
        : <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={shared} {...rest}/>}
    </span>
    {(error||hint)&&<span style={{display:'block',marginTop:8,paddingLeft:22,fontFamily:'var(--font-body)',
      fontSize:13,lineHeight:'19px',color:error?'var(--error)':'var(--text-muted)'}}>{error||hint}</span>}
  </label>;
}
