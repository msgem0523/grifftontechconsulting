const { Nav, Footer, Button } = window.FableDesignSystem_270490;

export function SiteNav({route,go}){
  return <Nav items={[{id:'work',label:'Work'},{id:'about',label:'About'},{id:'writing',label:'Writing'}]}
    active={route==='case'?'work':route} onNavigate={go} homeId="work"
    action={<Button size="s" onClick={()=>go('about')}>Get in touch</Button>}/>;
}

export function SiteFooter(){
  return <Footer columns={[
    {title:'Work',items:['Case studies','Services','Availability']},
    {title:'Writing',items:['Newsletter','Archive']},
    {title:'Elsewhere',items:['LinkedIn','GitHub','Read.cv']}
  ]}/>;
}
export function Writing({go}){
  const { Section, SectionHead, Text, Chip, Subscribe } = window.FableDesignSystem_270490;
  const {writing}=window.TGData;
  return <>
    <Section pad="large">
      <Text type="label" sizing="M" color="var(--text-muted)">Writing</Text>
      <Text type="display" sizing="XL" as="h1" style={{marginTop:24,maxWidth:'17ch'}}>
        Notes from the middle of the work.
      </Text>
      <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{marginTop:28}}>
        Short pieces about process, research and the parts of a project that don't make it into the
        case study. Roughly one a month.
      </Text>
    </Section>
    <Section pad="none">
      <div style={{display:'flex',flexDirection:'column'}}>
        {writing.concat([['Why I stopped running kickoff workshops','Process','7 min'],
                         ['A design system is a maintenance budget','Design systems','5 min']])
          .map(([t,tag,read],i,arr)=><a key={t} href="#" onClick={e=>e.preventDefault()}
          style={{display:'flex',alignItems:'baseline',gap:24,padding:'30px 0',
            borderTop:'1px solid var(--line)',borderBottom:i===arr.length-1?'1px solid var(--line)':'none',boxShadow:'none'}}>
          <span style={{fontFamily:'var(--font-display)',fontSize:28,lineHeight:'34px',letterSpacing:'-0.5px',flex:1}}>{t}</span>
          <Chip size="s" tone="neutral">{tag}</Chip>
          <span style={{fontSize:13,color:'var(--text-muted)',width:52,textAlign:'right'}}>{read}</span>
        </a>)}
      </div>
    </Section>
    <Section pad="none" style={{margin:'96px 0'}}>
      <Subscribe tone="inverse" title="Notes on shipping"
        blurb="One short letter a month about design, process, and the things that went wrong on the way to shipping."
        note="No spam. Unsubscribe whenever."/>
    </Section>
  </>;
}

Object.assign(window,{SiteNav,SiteFooter,Writing});