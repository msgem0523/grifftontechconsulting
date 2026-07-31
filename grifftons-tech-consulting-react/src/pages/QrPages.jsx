import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import { Chip } from '../ds/components/content/Chip.jsx';

const useCases = [
    ['Event registration', 'Send guests to one page for event details, sign-up forms, schedules, and location info.'],
    ['Menu or service list', 'Share your offerings in a format that is easy to read on phones at pop-ups, salons, and storefronts.'],
    ['Booking links', 'Make it simple for clients to book appointments, consultations, or discovery calls without extra steps.'],
    ['Contact card', 'Give customers quick access to your phone, email, socials, and business details from one scan.'],
    ['Promotions and offers', 'Highlight seasonal offers, special launches, coupon codes, or campaign links in one focused layout.'],
    ['Custom business hub', 'Combine your intro, CTA, links, and brand style into a page that feels more polished than a basic link list.'],
];

const packages = [
    ['Starter', 'Quick QR setup', 'A clean single page for one main action, a few links, and essential business info.'],
    ['Standard', 'Branded customer page', 'A more polished layout with stronger branding, multiple sections, and space for offers or services.'],
    ['Premium', 'Expanded QR experience', 'Best for businesses that want more content, extra support, and a page tailored to a fuller customer journey.'],
];

function QrPages() {
    useReveal();

    return (
        <div className="qr-page">
            <Section pad="large" className="reveal">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>
                    <div>
                        <Text type="label" sizing="M" color="var(--text-muted)">QR pages</Text>
                        <Text type="display" sizing="XL" as="h1" style={{ marginTop: 24, maxWidth: '16ch' }}>
                            QR-powered pages for small businesses.
                        </Text>
                        <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{ marginTop: 28 }}>
                            A simple mobile-friendly page customers reach by scanning a QR
                            code. Keep your most important business info, links, and offers in
                            one place that is easy to open, share, and update.
                        </Text>

                        <div style={{ display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' }}>
                            <Chip tone="neutral">Mobile-friendly layout</Chip>
                            <Chip tone="neutral">Easy to share at events or in-store</Chip>
                            <Chip tone="neutral">Built around your real customer flow</Chip>
                        </div>

                        <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
                            <Button size="l" as={Link} to="/#contact" iconRight="→">Request a QR page</Button>
                            <Button size="l" variant="outline" as={Link} to="/pricing">View pricing</Button>
                        </div>
                    </div>

                    <Card tone="raised" pad={40}>
                        <Text type="display" sizing="S" as="h2">What it can include</Text>
                        <ul style={{ listStyle: 'none', margin: '24px 0 28px', padding: 0 }}>
                            {['Booking links and contact buttons',
                                'Menus, service lists, or event details',
                                'Promotions, specials, and social links',
                                'Custom branding for your business'].map((item, i) => (
                                <li key={item} style={{ padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}>
                                    <Text type="body" sizing="M" as="span" color="var(--text-secondary)">{item}</Text>
                                </li>
                            ))}
                        </ul>
                        <Link to="/pricing">Compare packages</Link>
                    </Card>
                </div>
            </Section>

            <Section className="reveal">
                <SectionHead
                    title="Common QR page use cases"
                    intro="These pages work best when you need one clean destination instead of sending customers to multiple links."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {useCases.map(([title, body]) => (
                        <Card key={title} tone="raised">
                            <Text type="display" sizing="XS" as="h3">{title}</Text>
                            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 12 }}>{body}</Text>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="reveal">
                <SectionHead
                    title="Simple package options"
                    intro="Start with a package that fits your business now, or view the full pricing page for more detail."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {packages.map(([tier, title, body]) => {
                        const inverse = tier === 'Standard';
                        return (
                            <Card key={tier} tone={inverse ? 'inverse' : 'raised'}>
                                <Text type="label" sizing="M" color={inverse ? 'var(--white-70)' : 'var(--text-muted)'}>{tier}</Text>
                                <Text type="display" sizing="XS" as="h3" style={{ marginTop: 16 }}>{title}</Text>
                                <Text type="body" sizing="M" color={inverse ? 'var(--white-70)' : 'var(--text-secondary)'} style={{ marginTop: 12 }}>{body}</Text>
                            </Card>
                        );
                    })}
                </div>
                <div style={{ display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap' }}>
                    <Button as={Link} to="/pricing" iconRight="→">See full pricing</Button>
                    <Button variant="outline" as={Link} to="/landing-pages">View related landing pages</Button>
                </div>
            </Section>

            <Section className="reveal" style={{ paddingBottom: 96 }}>
                <Card tone="raised" pad={48}>
                    <Text type="display" sizing="M" as="h2">Need a QR page for your business?</Text>
                    <Text type="body" sizing="L" measure color="var(--text-secondary)" style={{ marginTop: 18 }}>
                        If you already know what you need, request a page. If you want
                        help deciding what should go on it, book a free consultation
                        first.
                    </Text>
                    <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
                        <Button as={Link} to="/#contact" iconRight="→">Request a QR page</Button>
                        <Button variant="outline" as={Link} to="/#contact">Book a free consultation</Button>
                    </div>
                </Card>
            </Section>
        </div>
    );
}

export default QrPages;
