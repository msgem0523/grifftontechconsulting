import React from 'react';

const { Section, SectionHead, Text, Button, Avatar, Chip, Card, Input } = window.FableDesignSystem_270490;

export function About(){
  const [sent,setSent]=React.useState(false);
  return <>
    <Section pad="large">
      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:80,alignItems:'start'}}>
        <div>
          <Text type="label" sizing="M" color="var(--text-muted)">About</Text>
          <Text type="display" sizing="XL" as="h1" style={{marginTop:24,maxWidth:'16ch'}}>
            I'm Temecha. I ask a lot of questions first.
          </Text>
          <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{marginTop:28}}>
            I've spent fifteen years designing software for places where the stakes are real —
            clinics, city offices, people's money. The work is usually less about invention and more
            about subtraction.
          </Text>
          <Text type="body" sizing="L" measure style={{marginTop:24}}>
            Before design I was a technical writer, which is why I still think the fastest way to fix
            an interface is to try writing its instructions. If they run past a paragraph, the
            interface is wrong.
          </Text>
        </div>
        <Avatar size={320} tone="blush" initials="TG" style={{borderRadius:'var(--radius-l)'}}/>
      </div>
    </Section>

    <Section tone="sunken" pad="large">
      <SectionHead label="How I work" title="Three things you can count on."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        {[['I start in the room','Twelve waiting rooms before a single artboard. The finding is always in the room, not the analytics.'],
          ['I write before I draw','If the instructions run long, the design is wrong. Copy is the first prototype.'],
          ['I stay until it ships','Handoff is not a deliverable. I am in the standups through launch week.']]
          .map(([h,p])=><Card key={h} tone="raised" pad={32}>
            <Text type="display" sizing="XS" as="h3">{h}</Text>
            <Text type="body" sizing="M" color="var(--text-secondary)" style={{marginTop:14}}>{p}</Text>
          </Card>)}
      </div>
    </Section>

    <Section pad="large">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80}}>
        <div>
          <SectionHead label="Capabilities" title="What I'm hired for." style={{marginBottom:28}}/>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            {['Product design','Design systems','User research','Service design','Content design','Prototyping','Workshops','Design ops']
              .map(t=><Chip key={t} tone="neutral">{t}</Chip>)}
          </div>
          <Text type="display" sizing="XS" as="h3" style={{marginTop:56}}>Currently</Text>
          <Text type="body" sizing="M" color="var(--text-secondary)" style={{marginTop:12}}>
            Taking one new engagement for Q4. Based in Durham, NC; happy anywhere in US timezones.
          </Text>
        </div>
        <Card tone="raised" pad={40} id="contact">
          <Text type="display" sizing="S" as="h2">Tell me what's going on.</Text>
          <Text type="body" sizing="M" color="var(--text-secondary)" style={{marginTop:12}}>
            A sentence is plenty. I reply to everything within two days.
          </Text>
          {sent
            ? <Text type="body" sizing="L" color="var(--forest)" style={{marginTop:32}}>Got it — talk soon.</Text>
            : <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{marginTop:28,display:'flex',flexDirection:'column',gap:20}}>
                <Input label="Email" placeholder="you@company.com"/>
                <Input label="What are you working on?" multiline rows={4} placeholder="A form nobody finishes…"/>
                <Button type="submit" size="l" fullWidth iconRight="→">Send it</Button>
              </form>}
        </Card>
      </div>
    </Section>
  </>;
}
Object.assign(window,{About});