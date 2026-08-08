import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';
import { Stat } from '../ds/components/content/Stat.jsx';
import Seo from '../components/Seo.jsx';

const included = [
    ['Responsive design', 'Our websites are designed to look great on all devices, ensuring a seamless user experience for your visitors to work across phones, tablets, and desktop screens.'],
    ['Core pages', 'We typically include a homepage, about page, services/products page, and contact page. We can also add additional pages as needed to showcase your business effectively.'],
    ['Customer CTA', 'We include clear calls-to-action to guide your visitors towards taking the desired actions, such as contacting you, signing up for a newsletter, or making a purchase.'],
    ['SEO basics', 'We optimize your website for search engines by implementing basic SEO practices, such as keyword research, meta tags, and clean code to help improve your online visibility.'],
    ['Brand alignment', 'We ensure your website aligns with your brand identity, including colors, fonts, and overall style, to create a cohesive and professional online presence.'],
    ['Launch support', 'We provide support during the launch phase to ensure your website goes live smoothly and any initial issues are promptly addressed.'],
];

const support = [
    ['Hourly support', 'We offer hourly support for any website updates, changes, or troubleshooting you may need after your website is launched. This allows you to keep your website up-to-date and functioning properly without committing to a long-term maintenance plan.', 'Starting at $35/hour'],
    ['Incident support', 'We provide incident support for any urgent issues or unexpected problems that may arise with your website. Our team is ready to assist you promptly to minimize downtime and ensure your website remains operational.', 'Starting at $50/incident'],
    ['Custom feature requests', "We can implement custom features and functionality tailored to your specific business needs. Whether it's a unique form, integration with third-party services, or any other special requirement, we can help bring your ideas to life.", 'Pricing varies based on complexity'],
];

function BusinessWebsites() {
    useReveal();

    return (
        <div className="business-page">
            <Seo
                title="Business Websites / Griffton's Tech Consulting"
                description="Professional business websites designed to build trust, attract customers, and help your company grow online."
            />
            <Section pad="large" className="reveal">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>
                    <div>
                        <Text type="label" sizing="M" color="var(--text-muted)">Business websites</Text>
                        <Text type="display" sizing="XL" as="h1" style={{ marginTop: 24, maxWidth: '22ch' }}>
                            Clean, mobile-friendly websites built to help your business look credible online.
                        </Text>
                        <Text type="body" sizing="L" measure color="var(--text-secondary)" style={{ marginTop: 28 }}>
                            We create practical websites for small businesses, service providers, and personal brands. Our custom website design, development, and maintenance services help you establish a strong online presence and grow your business. Whether you need a simple informational site or a more complex e-commerce platform, we have the expertise to deliver a website that meets your needs and exceeds your expectations.
                        </Text>
                        <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
                            <Button as={Link} to="/#contact" size="l" iconRight="→">Request a quote</Button>
                            <Button as={Link} to="/#services" size="l" variant="outline">Back to services</Button>
                        </div>
                    </div>
                    <Card pad={40}>
                        <Text type="label" sizing="M" color="var(--text-muted)" as="h2">Starting at</Text>
                        <Stat value="$500" label="Business websites starting at $500" style={{ marginTop: 20 }} />
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 24 }}>
                            Final pricing depends on page count, content needs, features, and timeline.
                        </Text>
                    </Card>
                </div>
            </Section>

            <Section pad="tight" className="reveal">
                <SectionHead
                    title="What's included"
                    intro="A strong starter website package focused on clarity, trust, and easy customer action."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {included.map(([title, body]) => (
                        <Card key={title}>
                            <Text type="display" sizing="S" as="h3">{title}</Text>
                            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>{body}</Text>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="support" pad="default" className="reveal">
                <SectionHead
                    title={<Link to="/tech-support">Support &amp; maintenance</Link>}
                    intro="We offer ongoing support and maintenance to keep your website running smoothly, including updates, troubleshooting, and technical assistance after launch."
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {support.map(([title, body, price]) => (
                        <Card key={title}>
                            <Text type="display" sizing="S" as="h3">{title}</Text>
                            <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 14 }}>{body}</Text>
                            <Text type="body" sizing="M" weight={600} style={{ marginTop: 18 }}>{price}</Text>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="inverse" pad="default" className="reveal" style={{ marginBottom: 96 }}>
                <Text type="display" sizing="L" as="h2">Ready to build your business website?</Text>
                <Text type="body" sizing="L" measure color="var(--white-70)" style={{ marginTop: 24 }}>
                    Contact us today to get started on your custom website project with your business goals, timeline, and any examples you like. We'll help turn that into a clean, professional website that helps you grow your business online.
                </Text>
                <div style={{ display: 'flex', gap: 24, marginTop: 40, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button as={Link} to="/#contact" variant="accent" size="l">Contact us</Button>
                    <Link to="/" style={{ color: 'var(--white)' }}>Return home →</Link>
                </div>
            </Section>
        </div>
    );
}

export default BusinessWebsites;
