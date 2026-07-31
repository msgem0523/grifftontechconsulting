import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import { Stat } from '../ds/components/content/Stat.jsx';

const helpCards = [
    ['Website issues', 'We can help with website troubleshooting, broken links, form issues, layout problems, missing content, mobile display issues, and basic page updates.'],
    ['Forms & links', 'We can assist with contact forms, booking links, payment links, QR code pages, and customer-facing actions.'],
    ['Domain & hosting', 'We can help with domain setup, DNS configuration, hosting questions, email setup, launch troubleshooting, and basic website migrations.'],
    ['Tool setup', 'We can assist with setting up and configuring various tools, software, file organization, basic workflow improvements, and applications to ensure they work seamlessly with your existing systems.'],
    ['Website cleanups', 'We can help with website cleanups, removing outdated content, fixing broken links, optimizing images, and improving overall site performance.'],
    ['Basic training', 'We can provide basic training on using your website, tools, and software to ensure you and your team can manage your digital assets effectively.'],
];

function TechSupport() {
    useReveal();

    return (
        <div className="support-page">
            <Section pad="large" className="reveal">
                <Text type="label" sizing="M" color="var(--text-muted)">Tech support</Text>
                <Text type="display" sizing="XL" as="h1" style={{ marginTop: 28, maxWidth: '22ch' }}>
                    Friendly, practical tech help when your website or tools start acting brand new.
                </Text>
                <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{ marginTop: 32 }}>
                    We help small businesses troubleshoot website issues, domain setup, forms, links, basic hosting questions, and everyday tech problems that can be solved with a little know-how and a lot of patience. Whether you're dealing with a broken contact form, a domain that's not pointing correctly, or just need some guidance on how to update your site, we're here to help you get back on track without the frustration.
                </Text>
                <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
                    <Button size="l" iconRight="→" as={Link} to="/#contact">Request support</Button>
                    <Button size="l" variant="outline" as={Link} to="/#services">Back to services</Button>
                </div>
                <Card style={{ marginTop: 56, maxWidth: 620 }}>
                    <Text type="label" sizing="M" as="h2" color="var(--text-muted)">Support pricing</Text>
                    <div style={{ display: 'flex', gap: 56, marginTop: 28, flexWrap: 'wrap' }}>
                        <Stat tone="forest" value="$50" label="Starting at $50 an incident" />
                        <Stat tone="forest" value="$35" label="Hourly support starting at $35/hour" />
                    </div>
                    <Text type="body" sizing="S" color="var(--text-muted)" style={{ marginTop: 24 }}>
                        Pricing depends on issue complexity, urgency, and time required.
                    </Text>
                </Card>
            </Section>

            <Section pad="tight" className="reveal">
                <SectionHead
                    title="What we can help with"
                    intro="Support for websites, domains, tools, and everyday tech problems."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {helpCards.map(([title, body]) => (
                        <Card key={title}>
                            <Text type="display" sizing="XS" as="h3">{title}</Text>
                            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>{body}</Text>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="sunken" pad="default" className="reveal" style={{ marginTop: 56 }}>
                <SectionHead
                    title="Support options"
                    intro="Choose the support option that best fits your needs."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    <Card>
                        <Text type="display" sizing="XS" as="h3">By incident</Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>
                            We offer support on a per-incident basis, allowing you to pay only for the help you need when you need it.
                        </Text>
                        <Text type="display" sizing="XS" style={{ marginTop: 20 }}>Starting at $50 per incident</Text>
                    </Card>
                    <Card>
                        <Text type="display" sizing="XS" as="h3">Custom support</Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>
                            We offer custom support plans tailored to your specific needs, providing ongoing assistance and priority access to our team.
                        </Text>
                        <Text type="display" sizing="XS" style={{ marginTop: 20 }}>Contact us for pricing</Text>
                    </Card>
                </div>
            </Section>

            <Section pad="default" className="reveal">
                <Text type="display" sizing="L" as="h2">Need help with a tech issue?</Text>
                <Text type="body" sizing="L" measure color="var(--text-secondary)" style={{ marginTop: 18 }}>
                    Contact us today to request support for your website, domain, tools, or any tech problem you're facing. We'll work with you to understand the issue and provide practical solutions to get you back on track as quickly as possible.
                </Text>
                <div style={{ display: 'flex', gap: 24, marginTop: 44, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button size="l" iconRight="→" as={Link} to="/#contact">Contact us</Button>
                    <Button variant="link" iconRight="→" as={Link} to="/">Return home</Button>
                </div>
            </Section>
        </div>
    );
}

export default TechSupport;
