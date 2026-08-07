import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import profilePicture from '../assets/profilePicture.jpg';
import { Section } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import Seo from '../components/Seo.jsx';

const superpowers = [
    ['Veteran:', 'Brought discipline and problem-solving from the Air Force.'],
    ['Mother:', 'Driven by empathy and building a better future.'],
    ['Junior Software Engineer:', 'Strong foundation in the MERN stack, Agile, and Scrum methodologies.'],
    ['Healthcare IT Advocate:', 'Passionate about data security and enhancing patient experiences.'],
];

function About() {
    useReveal();

    return (
        <div className="about-page">
            <Seo 
                title="About | Griffton's Tech Consulting" 
                description="Learn about Griffton's Tech Consulting and our mission to build practical, approachable technology solutions for small businesses."
            />
            <Section pad="large" className="reveal">
                <Text type="label" sizing="M" color="var(--text-muted)">The team</Text>
                <Text type="display" sizing="L" as="h1" style={{ marginTop: 16 }}>Meet the founder</Text>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', marginTop: 48 }}>
                    <div
                        style={{
                            flex: '0 1 320px',
                            background: 'var(--blush-tint)',
                            borderRadius: 'var(--radius-m)',
                            padding: 16,
                        }}
                    >
                        <img
                            src={profilePicture}
                            alt="TeMecha Griffin"
                            style={{
                                display: 'block',
                                width: '100%',
                                borderRadius: 'var(--radius-m)',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    <div style={{ flex: '1 1 380px' }}>
                        <Text type="display" sizing="M" as="h2">TeMecha Griffin</Text>
                        <Text type="label" sizing="M" color="var(--text-muted)" style={{ marginTop: 10 }}>
                            Software developer
                        </Text>
                        <Text type="body" sizing="L" measure color="var(--text-secondary)" style={{ marginTop: 20 }}>
                            TeMecha is a software engineer with a passion for developing innovative solutions that enhance user experience and drive business success.
                        </Text>
                        <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {superpowers.map(([term, detail]) => (
                                <li key={term}>
                                    <Text type="body" sizing="M" measure as="span">
                                        <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{term}</span>{' '}
                                        <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                                    </Text>
                                </li>
                            ))}
                        </ul>
                        <Button as={Link} to="/resume/temecha" variant="primary" iconRight="→" style={{ marginTop: 32 }}>
                            View resume
                        </Button>
                    </div>
                </div>

            </Section>
        </div>
    );
}

export default About;
