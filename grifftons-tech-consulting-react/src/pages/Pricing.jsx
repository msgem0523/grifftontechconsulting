import React from 'react';
import useReveal from '../hooks/useReveal';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import { Chip } from '../ds/components/content/Chip.jsx';
import Seo from '../components/Seo.jsx';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const heroChips = ['Custom design', 'QR code included', 'Mobile-first layout', 'Done-for-you tech setup'];

const whoCards = [
  {
    title: 'Stylists, barbers & beauty pros',
    body: 'One QR on your mirror, cape, or business card that sends people straight to your booking and policies.',
  },
  {
    title: 'Wellness, coaching & creative brands',
    body: 'A calm, branded page that links your consult form, services, and socials without feeling cluttered.',
  },
  {
    title: 'Vendors & pop-up businesses',
    body: 'QR codes for event signage that let people follow, browse, and pay you without digging for your info.',
  },
];

const tiers = [
  {
    name: 'Essentials QR link page',
    label: 'Starter',
    price: '$250+',
    meta: 'Simple, clean page for quick use.',
    features: [
      'Business name, tagline & one main button (Book or Contact)',
      'Up to 4 quick links (IG, FB, TikTok, payments, etc.)',
      'Custom QR code linked to your page',
      '1 small revision included',
      '2–3 business day turnaround after content received',
    ],
    footnote: 'Great for vendor events, pop-ups, or “I just need something that works” moments.',
  },
  {
    name: 'Signature QR landing page',
    label: 'Most popular',
    price: '$500+',
    featured: true,
    meta: 'Custom layout built around your business goals.',
    features: [
      'Custom one-page design (hero, buttons, links, about snippet)',
      'Integration of booking app, socials & key links',
      'Custom QR code (PNG + print-ready file)',
      'Basic copy polishing + 1 revision round',
      'Launch-ready within 3–5 business days after content',
    ],
    footnote: 'Ideal for stylists, barbers, wellness brands & small businesses who want a polished, branded hub.',
  },
  {
    name: 'Premium brand suite',
    label: 'Elevated',
    price: '$950+',
    meta: 'For brands that want extra space & support.',
    features: [
      'Everything in Signature QR landing page',
      'Extra section (services, offers, testimonials, or features)',
      'Additional revision round for layout & copy',
      'Light launch support (small tweaks after going live)',
      'Optional second QR variation (e.g., salon vs. events)',
    ],
    footnote: 'Great for wellness, boutiques & multi-service brands with more to show and say.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Quick intro & fit check',
    body: 'You send a short message with who you are, what you do, and which package you’re leaning toward. If it’s a match, I’ll share next steps & timelines.',
  },
  {
    n: '2',
    title: 'Content + design setup',
    body: 'You send your links, colors, logo, and photos (if you have them). I design your layout, connect everything, and create your QR code.',
  },
  {
    n: '3',
    title: 'Review, revise & launch',
    body: 'You review the preview, request your included revisions, and once you approve, I make it live and send your QR files.',
  },
];

function PriceCard({ tier }) {
  const inv = tier.featured;
  const line = inv ? 'var(--white-20)' : 'var(--line)';
  return (
    <Card tone={inv ? 'inverse' : 'raised'} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div>
          <Text type="display" sizing="XS" as="h3">{tier.name}</Text>
          <div style={{ marginTop: 10 }}>
            <Chip size="s" tone={inv ? 'saffron' : 'neutral'}>{tier.label}</Chip>
          </div>
        </div>
        <Text type="display" sizing="M" as="div" color={inv ? 'var(--saffron)' : 'var(--forest)'}>
          {tier.price}
        </Text>
      </div>
      <Text type="body" sizing="M" color={inv ? 'var(--white-70)' : 'var(--text-secondary)'} style={{ marginTop: 14 }}>
        {tier.meta}
      </Text>
      <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0 }}>
        {tier.features.map((feature) => (
          <Text key={feature} as="li" type="body" sizing="S" style={{ padding: '10px 0', borderTop: `1px solid ${line}` }}>
            {feature}
          </Text>
        ))}
      </ul>
      <Text type="body" sizing="S" color={inv ? 'var(--white-70)' : 'var(--text-muted)'} style={{ marginTop: 16 }}>
        {tier.footnote}
      </Text>
      {inv && (
        <Button variant="accent" fullWidth iconRight="→" style={{ marginTop: 24 }} onClick={() => scrollToId('contact')}>
          Apply for a Signature spot
        </Button>
      )}
    </Card>
  );
}

function Pricing() {
  useReveal();

  return (
    <div className="pricing-page">
      <Seo
        title="Pricing | Griffton's Tech Consulting"
        description="Explore transparent pricing for websites, landing pages, QR pages, and technology services tailored to small businesses."
      />

      {/* Hero */}
      <Section pad="default" className="reveal">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
          <div 
            style={{
              flex: '1 1 480px',
              minWidth: 0,
              width: '100%',
            }}
          >
            <div style={{ maxWidth: '100%', overflowWrap: 'anywhere' }}>
              <Chip tone="saffron" wrap>
                Accepting a limited number of projects this month
              </Chip>
            </div>
            <Text type="label" sizing="M" color="var(--text-muted)" style={{ marginTop: 28 }}>
              Work with me
            </Text>
            <Text type="display" sizing="XL" as="h1" style={{ marginTop: 18, maxWidth: '16ch' }}>
              Let’s build a landing page that actually feels like you.
            </Text>
            <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{ marginTop: 24 }}>
              If you’re tired of sending your clients all over the place for links,
              bookings, and payments, I’ll help you bring everything into one
              clean, QR-powered landing page — designed with your energy in mind.
            </Text>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              {heroChips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
              <Button size="l" iconRight="→" onClick={() => scrollToId('contact')}>
                Start my landing page
              </Button>
              <Button size="l" variant="outline" onClick={() => scrollToId('pricing')}>
                View packages & pricing
              </Button>
            </div>
            <Text type="body" sizing="S" color="var(--text-muted)" measure style={{ marginTop: 22 }}>
              Think of this like a “Tea Talk” for your online presence — we’ll
              make it calm, clear, and completely you.
            </Text>
          </div>
          <Card style={{ flex: '1 1 300px', minWidth: 0, width: '100%' }}>
            <Text type="display" sizing="XS" as="h3">This is for you if…</Text>
            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 12 }}>
              You’re ready to stop saying “ignore my link-in-bio” and start
              sending people to one page that makes sense.
            </Text>
            <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0 }}>
              {[
                'You have a booking app, IG, and payment links but nowhere clean to put them.',
                'You do pop-ups, events, or run a service-based business.',
                'You want your online link to look as put-together as your actual work.',
              ].map((item) => (
                <Text key={item} as="li" type="body" sizing="S" style={{ padding: '10px 0', borderTop: '1px solid var(--line)' }}>
                  {item}
                </Text>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Who it's for */}
      <Section pad="tight" className="reveal">
        <SectionHead
          label="Who I design for"
          title="You don’t have to be “techy” to have a smooth online experience."
          intro="If you can send screenshots and links, we can work together. Here are some of the people I had in mind when I built these packages:"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
          {whoCards.map((who) => (
            <Card key={who.title}>
              <Text type="display" sizing="XS" as="h3">{who.title}</Text>
              <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 10 }}>
                {who.body}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section pad="tight" id="pricing" className="reveal">
        <SectionHead
          label="Landing page services"
          title="Choose the option that fits where you are right now."
          intro="Every package includes a custom QR code, mobile-friendly layout, and integration of your key links. You send your info — I handle the layout and setup."
          action={(
            <Text type="body" sizing="S" color="var(--text-muted)" style={{ maxWidth: '26ch' }}>
              You can always start simple and upgrade later as your business grows.
            </Text>
          )}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, alignItems: 'stretch' }}>
          {tiers.map((tier) => <PriceCard key={tier.name} tier={tier} />)}
        </div>
      </Section>

      {/* How it works */}
      <Section pad="tight" className="reveal">
        <SectionHead
          label="How it works"
          title="I keep the process simple so you don’t get overwhelmed."
          intro="You don’t have to write a novel or know “website words.” We’ll move step by step:"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
          {steps.map((step) => (
            <Card key={step.n} tone="outline">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <Text type="display" sizing="M" as="div" color="var(--forest)">{step.n}</Text>
                <Text type="label" sizing="M" color="var(--text-muted)">Step {step.n}</Text>
              </div>
              <Text type="display" sizing="XS" as="h3" style={{ marginTop: 14 }}>{step.title}</Text>
              <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 10 }}>
                {step.body}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact / CTA */}
      <Section pad="tight" id="contact" className="reveal">
        <Text type="display" sizing="M" as="h2">Ready to get started or have questions?</Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28 }}>
          <Card tone="outline" pad={20}>
            <Text type="body" sizing="M">
              Email: <a href="mailto:msgem0523@gmail.com">msgem0523@gmail.com</a>
            </Text>
          </Card>
          <Card tone="outline" pad={20}>
            <Text type="body" sizing="M">
              Instagram: <a href="https://instagram.com/msgem0523thecoder" target="_blank" rel="noreferrer">@msgem0523thecoder</a>
            </Text>
          </Card>
        </div>
        <Text type="body" sizing="M" color="var(--text-secondary)" measure style={{ marginTop: 24 }}>
          When you reach out, share your name, business type, and which package
          you’re interested in. If you’ve worked with me for Tea Talk before,
          feel free to mention that too — I already know your vibe.
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          <Text type="body" sizing="S" color="var(--text-muted)">
            © {new Date().getFullYear()} Griffton Landing Studio · Landing pages with heart & strategy
          </Text>
          <Text type="body" sizing="S" color="var(--text-muted)">
            Already have a site and just need help structuring it?{' '}
            <a href="mailto:msgem0523@gmail.com">Ask about custom support.</a>
          </Text>
        </div>
      </Section>
    </div>
  );
}

export default Pricing;
