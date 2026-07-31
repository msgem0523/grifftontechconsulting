import React from 'react';

const { Section, SectionHead, Text, Button, ProjectCard, Chip, Stat, Subscribe, Quote } = window.FableDesignSystem_270490;

export function Home({go}){
  const {projects,writing}=window.TGData;
  const [filter,setFilter]=React.useState('All work');
  const filters=['All work','Product design','Design system','Research','Service design'];
  const shown=filter==='All work'?projects:projects.filter(p=>p.tags.includes(filter));
  return <>
    <Section pad="large">
      <Text type="label" sizing="M" color="var(--text-muted)">Designer &amp; writer · Durham, NC</Text>
      <Text type="display" sizing="XXL" as="h1" style={{marginTop:28,maxWidth:'15ch'}}>
        I design things people actually finish using.
      </Text>
      <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{marginTop:32}}>
        Fifteen years across health, fintech and civic tools. Mostly I show up when a team knows
        something is wrong but can't quite name it yet — and I stay until it ships.
      </Text>
      <div style={{display:'flex',gap:14,marginTop:44}}>
        <Button size="l" iconRight="→" onClick={()=>go('about')}>Start a project</Button>
        <Button size="l" variant="outline" onClick={()=>go('case')}>Read a case study</Button>
      </div>
    </Section>

    <Section pad="none">
      <SectionHead label="Selected work" title="Four projects, one throughline: fewer steps."
        action={<Button variant="link">All work</Button>}/>
      <div style={{display:'flex',gap:10,marginBottom:44,flexWrap:'wrap'}}>
        {filters.map(t=><span key={t} onClick={()=>setFilter(t)} style={{cursor:'pointer'}}><Chip selected={filter===t}>{t}</Chip></span>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px 48px'}}>
        {shown.map(p=><ProjectCard key={p.id} client={p.client} year={p.year} title={p.title}
          summary={p.summary} tags={p.tags} imageTone={p.tone} onClick={()=>go('case')}/>)}
      </div>
      {shown.length===0&&<Text type="body" sizing="L" color="var(--text-muted)">Nothing under that filter yet.</Text>}
    </Section>

    <Section tone="inverse" pad="large" style={{marginTop:96}}>
      <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:80,alignItems:'center'}}>
        <Quote tone="inverse" attribution="Dana Whitfield" role="VP Product, Northwind Health">
          She rewrote the whole intake flow in a week and it just… worked.
        </Quote>
        <div style={{display:'flex',flexDirection:'column',gap:44}}>
          <Stat tone="accent" value="41%" label="Fewer support tickets in the first quarter after launch"/>
          <Stat tone="inverse" value="9" label="Fields in the new intake form, down from 38"/>
        </div>
      </div>
    </Section>

    <Section pad="large">
      <SectionHead label="Writing" title="Notes from the middle of the work."/>
      <div style={{display:'flex',flexDirection:'column'}}>
        {writing.map(([t,tag,read],i)=><a key={t} href="#" onClick={e=>e.preventDefault()}
          style={{display:'flex',alignItems:'baseline',gap:24,padding:'26px 0',
            borderTop:'1px solid var(--line)',borderBottom:i===writing.length-1?'1px solid var(--line)':'none',boxShadow:'none'}}>
          <span style={{fontFamily:'var(--font-display)',fontSize:28,lineHeight:'34px',letterSpacing:'-0.5px',flex:1}}>{t}</span>
          <Chip size="s" tone="neutral">{tag}</Chip>
          <span style={{fontSize:13,color:'var(--text-muted)',width:52,textAlign:'right'}}>{read}</span>
        </a>)}
      </div>
    </Section>

    <Section pad="none" style={{marginBottom:96}}>
      <Subscribe tone="inverse" title="Notes on shipping"
        blurb="One short letter a month about design, process, and the things that went wrong on the way to shipping."
        note="No spam. Unsubscribe whenever."/>
    </Section>
  </>;
}
Object.assign(window,{Home});