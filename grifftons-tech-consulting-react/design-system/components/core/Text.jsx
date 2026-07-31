import React from 'react';

const SCALES={
  display:{XXL:['88px','88px','-2.5px'],XL:['64px','66px','-1.8px'],L:['48px','52px','-1.2px'],M:['36px','42px','-0.8px'],S:['28px','34px','-0.5px'],XS:['22px','28px','-0.3px']},
  body:{XL:['21px','34px','-0.3px'],L:['18px','30px','-0.2px'],M:['16px','27px','-0.2px'],S:['14px','22px','-0.1px'],XS:['12px','18px','0px']},
  label:{L:['13px','16px','0.08em'],M:['11px','14px','0.1em']}
};
const DEFAULT_TAG={display:'h2',body:'p',label:'div'};

export function Text({type='body',sizing='M',as,color,weight,align,italic,truncate,measure,className='',style,children,...rest}){
  const scale=SCALES[type]||SCALES.body;
  const [fontSize,lineHeight,letterSpacing]=scale[sizing]||scale.M;
  const Tag=as||DEFAULT_TAG[type];
  const s={margin:0,
    fontFamily:type==='display'?'var(--font-display)':'var(--font-body)',
    fontSize,lineHeight,letterSpacing,
    fontWeight:weight??(type==='display'?400:type==='label'?500:400),
    color:color||'inherit',textAlign:align,fontStyle:italic?'italic':undefined,
    textTransform:type==='label'?'uppercase':undefined,
    maxWidth:measure?'var(--measure-prose)':undefined,...style};
  if(truncate){Object.assign(s,{display:'-webkit-box',overflow:'hidden',WebkitLineClamp:truncate,WebkitBoxOrient:'vertical'});}
  return <Tag className={className} style={s} {...rest}>{children}</Tag>;
}
