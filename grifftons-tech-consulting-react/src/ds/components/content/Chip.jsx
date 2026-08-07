import React from 'react';

const TONES={
  neutral:[
    'var(--haze-light)',
    'var(--text-secondary)',
    'var(--line)'
  ],
  saffron:[
    'var(--saffron-tint)',
    'var(--saffron-dark)',
    'transparent'
  ],
  forest:[
    'var(--forest-tint)',
    'var(--forest)',
    'transparent'
  ],
  sky:[
    'var(--sky-tint)',
    'var(--sky)',
    'transparent'
  ],
  berry:[
    'var(--berry-tint)',
    'var(--berry)',
    'transparent'
  ],
  moss:[
    'var(--moss-tint)',
    'var(--forest)',
    'transparent'
  ],
  coral:[
    'var(--coral-tint)',
    'var(--brick)',
    'transparent'
  ],
  inverse:[
    'var(--white-20)',
    'var(--white)',
    'transparent'
  ]
};

export function Chip({
  tone='neutral',
  size='m',
  selected=false,
  children,
  style,
  wrap=false,
  ...rest
}){
  const [bg,fg,bd]=TONES[tone]||TONES.neutral;
  return <span style={{
    display:'inline-flex',
    alignItems:'center',
    gap:6,
    padding:size==='s'?'4px 12px':'7px 16px',
    fontSize:size==='s'?12:13,
    lineHeight:'18px',
    letterSpacing:'-0.1px',
    fontFamily:'var(--font-body)',
    fontWeight:500,
    borderRadius:'var(--radius-pill)',
    background:selected?'var(--ink)':bg,
    color:selected?'var(--white)':fg,
    border:'1px solid '+(selected?'var(--ink)':bd),
    whiteSpace: wrap ? 'normal' : 'nowrap',
    maxWidth: wrap ? '100%' : undefined,
    overflowWrap: wrap ? 'anywhere' : undefined,
    transition:'var(--transition-interactive)',...style}} {...rest}>{children}</span>;
}
