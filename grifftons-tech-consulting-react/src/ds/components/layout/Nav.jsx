import React from 'react';
import { Wordmark } from '../core/Wordmark.jsx';

export function Nav({
  items=[],
  active,
  onNavigate,
  action,
  tone='page',
  homeId='home',
  style,
  ...rest
}){
  const inverse=tone==='inverse';
  return <nav 
    style={{
      position:'sticky',
      top:0,
      zIndex:40,
      display:'flex',
      alignItems:'center',
      gap:'48px',
      padding:'22px var(--page-gutter)',
      background:inverse?'var(--forest)':'var(--pearl)',
      color:inverse?'var(--white)':'var(--ink)',
      ...style}} {...rest}>
    <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(homeId)}} style={{boxShadow:'none'}}>
      <Wordmark size={22} tone={inverse?'inverse':'ink'}/>
    </a>
    <div 
      style={{
        display:'flex',
        gap:'30px',
        flex:1
      }}
    >
      {items.map(it=>{
        const on=active===it.id;
        return <a key={it.id} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(it.id)}}
          style={{
            fontFamily:'var(--font-body)',
            fontSize:15,
            letterSpacing:'-0.2px',
            fontWeight:500,
            color:inverse?(on?'var(--white)':'var(--white-70)'):(on?'var(--ink)':'var(--text-muted)'),
            boxShadow:on?'inset 0 -2px 0 var(--saffron)':'none',
            paddingBottom:2,
            transition:'var(--transition-interactive)'
          }}
        >
          {it.label}
        </a>;
      })}
    </div>
    {action}
  </nav>;
}
