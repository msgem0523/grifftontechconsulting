import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { Section } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { ProjectCard } from '../ds/components/content/ProjectCard.jsx';
import Seo from '../components/Seo.jsx';

const templates = [
    {
        title: 'Professional Queen',
        summary: 'Polished, professional, and clean.',
        imageTone: 'sky',
        href: '/templates/profQueenTemplate.html',
    },
    {
        title: 'Bold & Beautiful',
        summary: 'Bold layout with strong visual energy.',
        imageTone: 'berry',
        href: '/templates/boldBeautifulTemplate.html',
    },
    {
        title: 'Hybrid Premium',
        summary: 'Premium balance of modern + classic.',
        imageTone: 'moss',
        href: '/templates/hybridTemplate.html',
    },
];

function LandingPages() {
    useReveal();

    return (
        <div className="landing-page">
            <Section className="reveal" pad="default">
                <Seo
                    title="Landing Page Templates / Griffton's Tech Consulting"
                    description="High-converting landing pages built to generate leads, promote services, and increase customer engagement."
                />

                <Text type="display" sizing="XXL" as="h1">Landing page templates</Text>

                <Text type="body" sizing="XL" measure color="var(--text-secondary)" style={{ marginTop: 24 }}>
                    Pick a style, then we customize it to match your brand and goals.
                </Text>

                <Text type="display" sizing="M" as="h2" style={{ marginTop: 64 }}>
                    Choose a template
                </Text>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px 48px', marginTop: 32 }}>
                    {templates.map((t) => (
                        <div key={t.title}>
                            <ProjectCard
                                client="Template"
                                title={t.title}
                                summary={t.summary}
                                imageTone={t.imageTone}
                            />
                            <div style={{ marginTop: 20 }}>
                                <Button
                                    variant="primary"
                                    size="s"
                                    href={t.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Preview
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Text type="body" sizing="M" as="p" style={{ marginTop: 64 }}>
                    <Link to="/">&larr; Back to home</Link>
                    {'  ·  '}
                    <Link to="/pricing">View pricing &rarr;</Link>
                </Text>
            </Section>
        </div>
    );
}

export default LandingPages;
