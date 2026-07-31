const { Section, Text, Button, Chip, Stat, Callout, Quote, Card } = window.FableDesignSystem_270490;

export function CaseStudy({go}){
  return <>
    <Section pad="large">
      <div><Button variant="link" onClick={()=>go('work')}>← All work</Button></div>
      <Text type="label" sizing="M" color="var(--text-muted)" style={{marginTop:40}}>Northwind Health · 2025</Text>
      <Text type="display" sizing="XL" as="h1" style={{marginTop:20,maxWidth:'17ch'}}>
        Rebuilding intake for 400 clinics
      </Text>
      <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{marginTop:28}}>
        Northwind's first-visit form asked 38 questions. Nearly half of patients gave up before
        submitting it. I spent four months finding out which nine actually mattered.
      </Text>
      <div style={{display:'flex',gap:10,marginTop:36,flexWrap:'wrap'}}>
        {['Product design','Research','Design system'].map(t=><Chip key={t} tone="moss">{t}</Chip>)}
      </div>
    </Section>

    <Section pad="none">
      <div style={{aspectRatio:'16 / 9',borderRadius:'var(--radius-l)',background:'var(--moss-tint)',
        boxShadow:'var(--shadow-card)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Text type="body" sizing="S" color="var(--text-muted)">Hero image — 16:9, 28px radius</Text>
      </div>
    </Section>

    <Section pad="large" width="prose">
      <Text type="display" sizing="M" as="h2">The problem wasn't the form</Text>
      <Text type="body" sizing="L" style={{marginTop:22}}>
        Every clinic had added a question over the years and nobody had ever taken one away. The form
        was a record of eleven departments' anxieties, in the order they arrived. Patients read it as
        a test they were about to fail.
      </Text>
      <Text type="body" sizing="L" style={{marginTop:22}}>
        I sat in twelve waiting rooms before I touched a design tool. The finding that mattered:
        people abandoned at question six, every time, regardless of what question six was.
      </Text>
      <Callout tone="forest" label="What changed" style={{margin:'40px 0'}}>
        We moved everything that wasn't needed to book the appointment into the visit itself, where
        a person could ask it out loud.
      </Callout>
      <Text type="display" sizing="M" as="h2" style={{marginTop:56}}>Nine questions</Text>
      <Text type="body" sizing="L" style={{marginTop:22}}>
        The new form fits on one screen on a phone. It asks who you are, what hurts, and when you can
        come in. Everything else is a conversation, not a field.
      </Text>
    </Section>

    <Section tone="sunken" pad="large">
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:48}}>
        <Stat tone="forest" value="41%" label="Fewer support tickets in the first quarter"/>
        <Stat tone="forest" value="9" label="Fields, down from 38"/>
        <Stat tone="forest" value="2.1×" label="More completed intakes per week"/>
      </div>
    </Section>

    <Section pad="large" width="prose">
      <Quote attribution="Dana Whitfield" role="VP Product, Northwind Health">
        She rewrote the whole intake flow in a week and it just… worked.
      </Quote>
    </Section>

    <Section pad="none" style={{marginBottom:96}}>
      <Card tone="accent" pad={48}>
        <Text type="display" sizing="M" as="h2" style={{maxWidth:'20ch'}}>Got a form nobody finishes?</Text>
        <div style={{marginTop:28}}><Button size="l" iconRight="→" onClick={()=>go('about')}>Tell me about it</Button></div>
      </Card>
    </Section>
  </>;
}
Object.assign(window,{CaseStudy});