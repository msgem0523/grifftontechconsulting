import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import { Chip } from '../ds/components/content/Chip.jsx';
import { ProjectCard } from '../ds/components/content/ProjectCard.jsx';
import { Input } from '../ds/components/forms/Input.jsx';
import Seo from '../components/Seo.jsx';

const TRUST = ['Mobile-first', 'Fast delivery', 'Easy to maintain'];
const CHECKLIST = ['Landing pages', 'Portfolio sites', 'QR pages', 'Fixes & updates'];

const SERVICES = [
  {
    to: '/business-websites',
    title: 'Business websites',
    body: 'Clean, responsive sites built for trust, clarity, and conversions.',
  },
  {
    to: '/landing-pages',
    title: 'Landing pages',
    body: 'One-page sites for promotions, events, launches, or services.',
  },
  {
    to: '/qr-pages',
    title: 'QR code pages',
    body: 'A single link that routes customers to all your socials, booking, and payments.',
  },
  {
    to: '/business-websites#support',
    title: 'Updates & fixes',
    body: 'Bug fixes, design cleanup, mobile issues, speed improvements, and content updates.',
  },
  {
    to: '/business-websites#support',
    title: 'Basic automations',
    body: 'Simple workflows: form capture, email notifications, or organizing submissions.',
  },
  {
    to: '/tech-support',
    title: 'Tech support',
    body: 'Help troubleshooting websites, hosting, domains, and tools.',
  },
];

const PROJECTS = [
  {
    title: 'GrowthGuard',
    tone: 'sky',
    summary:
      "A pediatric health tracking application designed to help parents manage children's medical history, milestones, and growth data in one place.",
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    code: 'https://github.com/msgem0523/capstonefrontend',
  },
  {
    title: 'As We Grow Application App',
    tone: 'berry',
    summary:
      'A community-focused event registration with Firebase backend and QR code integration for streamlined check-in and data collection.',
    tags: ['React', 'Firebase', 'QR Code Integration'],
    code: 'https://github.com/msgem0523/aswegrow',
  },
  {
    title: "Griffton's Tech Consulting site",
    tone: 'moss',
    summary:
      'A multi-page business website showcasing landing page templates, service offerings, and pricing for small business clients.',
    tags: ['HTML', 'CSS'],
    code: '#',
  },
];

const SUPERPOWERS = [
  ['Veteran', 'Brought discipline and problem-solving from the Air Force.'],
  ['Mother', 'Driven by empathy and building a better future.'],
  ['Junior Software Engineer', 'Strong foundation in the MERN stack, Agile, and Scrum methodologies.'],
  ['Healthcare IT Advocate', 'Passionate about data security and enhancing patient experiences.'],
];

function Home() {
  useReveal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailState, setEmailState] = useState('');
  const [status, setStatus] = useState('');

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (val === '') {
      setEmailState('');
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setEmailState('valid');
    } else {
      setEmailState('invalid');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:msgem0523@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Thanks! Your email app should open with your message ready to send.');
  };

  return (
    <div className="home-page">
      <Seo title="Website & Tech Support | Griffton's Tech Consulting" description="Custom websites, landing pages, QR pages, and practical tech support for small businesses that need simple reliable digital solutions." />
      <Section pad="large">
        <Text type="label" sizing="M" color="var(--text-muted)">Websites & Practical Tech for Small Businesses, Creators & Service Providers</Text>
        <Text type="display" sizing="XL" as="h1" style={{ marginTop: 28, maxWidth: '20ch' }}>
          Modern websites and practical tech that helps your business run smoother.
        </Text>
        <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{ marginTop: 32 }}>
          We build clean, fast, mobile-friendly sites and simple systems that save time — without the confusing tech talk.
        </Text>

        <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
          <Button size="l" iconRight="→" href="#contact">Get a quote</Button>
          <Button size="l" variant="outline" href="#work">See our work</Button>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 64, flexWrap: 'wrap' }}>
          {TRUST.map((t) => <Chip key={t} tone="forest">{t}</Chip>)}
          {CHECKLIST.map((t) => <Chip key={t} tone="neutral">{t}</Chip>)}
        </div>
      </Section>

      <Section id="services" className="reveal">
        <SectionHead
          title="Services"
          intro="Simple, high-impact deliverables that make you look polished and credible online."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {SERVICES.map((s) => (
            <Card key={s.title} interactive>
              <Text type="display" sizing="XS" as="h3">
                <Link to={s.to}>{s.title}</Link>
              </Text>
              <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>
                {s.body}
              </Text>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="work" className="reveal">
        <SectionHead
          title="Featured projects"
          intro="Projects that show my growth in web development, backend logic, and real-world problem-solving."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px 48px' }}>
          {PROJECTS.map((p) => (
            <div key={p.title}>
              <ProjectCard title={p.title} summary={p.summary} tags={p.tags} imageTone={p.tone} />
              <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
                <a href="#" aria-disabled="true">Live →</a>
                <a href={p.code} target="_blank" rel="noreferrer">Code →</a>
              </div>
            </div>
          ))}

          {/* Hidden in the static site's source (commented out there) — restore when it has real links.
          <div>
            <ProjectCard
              title="Country Explorer"
              imageTone="coral"
              summary="A front-end application that retrieves and displays country data using a REST API, allowing users to explore regions, populations, and key country details."
              tags={['HTML', 'CSS', 'JavaScript', 'REST API']}
            />
            <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
              <a href="#" aria-disabled="true">Live →</a>
              <a href="#" target="_blank" rel="noreferrer">Code →</a>
            </div>
          </div>
          */}
        </div>
      </Section>

      <Section id="about" className="reveal">
        <SectionHead title="About" />
        <Text type="body" sizing="XL" measure color="var(--text-secondary)">
          I am a motivated Software Developer passionate about using technology to improve outcomes, especially in Healthcare IT. I specialize in technical solutions tailored for small businesses and community organizations.
        </Text>
        <ul style={{ listStyle: 'none', margin: '48px 0 0', padding: 0 }}>
          {SUPERPOWERS.map(([role, line], i) => (
            <li
              key={role}
              style={{
                padding: '22px 0',
                borderTop: '1px solid var(--line)',
                borderBottom: i === SUPERPOWERS.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <Text type="label" sizing="M" as="div" color="var(--text-muted)" style={{ marginBottom: 8 }}>
                {role}
              </Text>
              <Text type="body" sizing="L" measure color="var(--text-secondary)">{line}</Text>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" className="reveal">
        <SectionHead
          title="Contact"
          intro="Tell us what you need and we’ll respond with next steps."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'start' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Text type="body" sizing="S" color="var(--text-secondary)">
              Fields marked * are required.
            </Text>

            <Input
              label="Name"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
              error={emailState === 'invalid' ? "That address doesn't look right." : undefined}
            />
            <Input
              label="What do you need?"
              name="message"
              multiline
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <Button type="submit" iconRight="→">Send</Button>
            </div>
            {status && <Text type="body" sizing="S" color="var(--text-secondary)">{status}</Text>}
          </form>

          <Card tone="outline">
            <Text type="display" sizing="XS" as="h3">Prefer email?</Text>
            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 12 }}>
              Send a quick note and include your timeline + goal.
            </Text>
            <Button variant="outline" href="mailto:msgem0523@gmail.com" style={{ marginTop: 22 }}>
              msgem0523@gmail.com
            </Button>
            <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Text type="body" sizing="S" color="var(--text-secondary)">
                <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Typical response:</strong> within 1–2 business days
              </Text>
              <Text type="body" sizing="S" color="var(--text-secondary)">
                <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Best info to include:</strong> what you do, what you want built, and any examples you like.
              </Text>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default Home;
