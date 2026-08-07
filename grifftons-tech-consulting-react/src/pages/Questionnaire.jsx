import React from 'react';
import useReveal from '../hooks/useReveal';
import { Section } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Input } from '../ds/components/forms/Input.jsx';
import Seo from '../components/Seo.jsx';
import '../styles/questionnaire.css';

// Style vocabulary for the pieces the system has no component for:
// fieldsets, legends, checkbox/radio groups and the plain file input.
const legendStyle = {
    display: 'block',
    marginBottom: 10,
    padding: 0,
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    lineHeight: '14px',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: 'var(--text-muted)',
};

const fieldsetStyle = { border: 0, padding: 0, margin: 0, minWidth: 0 };

const groupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    background: 'var(--surface-raised)',
    border: 'var(--border-hairline)',
    borderRadius: 'var(--radius-s)',
    padding: '20px 22px',
};

const optionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: '27px',
    letterSpacing: '-0.2px',
    color: 'var(--text-primary)',
    cursor: 'pointer',
};

const detailsStyle = {
    background: 'var(--surface-raised)',
    borderRadius: 'var(--radius-l)',
    boxShadow: 'var(--shadow-card)',
};

const summaryStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    padding: '24px 32px',
    cursor: 'pointer',
};

const sectionBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    padding: '4px 32px 32px',
};

const hintStyle = {
    display: 'block',
    marginTop: 8,
    paddingLeft: 22,
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    lineHeight: '19px',
    color: 'var(--text-muted)',
};

function Questionnaire() {
    useReveal();

    return (
        <div className="questionnaire-page">
            <Seo
                title="Website Discovery Questionnaire / Griffton's Tech Consulting"
                description="Tell us about your project by completing our website questionnaire so we can recommend the best solution for your business."
            />
            <Section tone="page" width="prose" pad="default" className="reveal">
                <Text type="display" sizing="L" as="h1">
                    Website discovery questionnaire
                </Text>
                <Text type="body" sizing="L" color="var(--text-secondary)" measure style={{ margin: '20px 0 48px' }}>
                    Thank you for choosing Griffton's Tech Consulting! We're excited to learn about your business and your vision. The more detail you provide, the better we can design a website that reflects your brand and helps you achieve your goals. Most clients complete this questionnaire in about 10-15 minutes. Please fill out the form below to provide us with the necessary information for your website project. This will help us understand your needs and goals, and allow us to create a tailored solution for your business.
                </Text>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >

                    <details style={detailsStyle} open>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Business information</Text>
                        </summary>

                        <div style={sectionBodyStyle}>
                            <Input
                                label="Business name"
                                type="text"
                                id="business-name"
                                name="businessName"
                                autoComplete="organization"
                                placeholder="Your business name"
                                required
                            />

                            <Input
                                label="Owner or primary contact name"
                                type="text"
                                id="owner-name"
                                name="ownerName"
                                autoComplete="name"
                                placeholder="First and last name"
                                required
                            />

                            <Input
                                label="Email address"
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="name@example.com"
                                required
                            />

                            <Input
                                label="Phone number"
                                type="tel"
                                id="phone"
                                name="phone"
                                autoComplete="tel"
                                placeholder="(123) 456-7890"
                                required
                            />

                            <Input
                                label="Business address"
                                multiline
                                rows={3}
                                id="business-address"
                                name="businessAddress"
                                autoComplete="street-address"
                                placeholder="Street, city, state, ZIP"
                            />

                            <fieldset style={fieldsetStyle}>
                                <legend style={legendStyle}>Do you currently have a website?</legend>

                                <div style={{ ...groupStyle, flexDirection: 'row', gap: 32 }}>
                                    <label style={optionStyle}>
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="yes"
                                            required
                                        />
                                        Yes
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="no"
                                        />
                                        No
                                    </label>
                                </div>
                            </fieldset>

                            <Input
                                label="Current website address"
                                type="url"
                                id="current-website"
                                name="currentWebsite"
                                placeholder="https://example.com"
                                hint="Leave this blank if you do not have a current website."
                            />

                            <Input
                                label="Facebook page"
                                type="url"
                                id="facebook"
                                name="facebook"
                                placeholder="https://facebook.com/yourbusiness"
                            />

                            <Input
                                label="Instagram profile"
                                type="url"
                                id="instagram"
                                name="instagram"
                                placeholder="https://instagram.com/yourbusiness"
                            />

                            <Input
                                label="LinkedIn profile"
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                placeholder="https://linkedin.com/company/yourbusiness"
                            />

                            <Input
                                label="Other social media profiles"
                                multiline
                                rows={8}
                                id="other-social"
                                name="otherSocial"
                                placeholder="Add one link per line. Example: https://socialmedia.com/yourbusiness"
                            />
                        </div>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">About your business</Text>
                        </summary>

                        <div style={sectionBodyStyle}>
                            <Input
                                label="Business description"
                                multiline
                                rows={6}
                                id="business-description"
                                name="businessDescription"
                                placeholder="Briefly describe your business."
                                required
                            />

                            <Input
                                label="What products or services do you offer?"
                                multiline
                                rows={6}
                                id="business-offerings"
                                name="businessOfferings"
                                placeholder="List products and services"
                                required
                            />

                            <Input
                                label="What differentiates your business from competitors?"
                                multiline
                                rows={6}
                                id="diff-competitors"
                                name="diffCompetitors"
                                placeholder="What makes your business unique?"
                                required
                            />

                            <Input
                                label="Who is your ideal customer?"
                                multiline
                                rows={6}
                                id="ideal-customer"
                                name="idealCustomer"
                                placeholder="Describe your target audience."
                                required
                            />
                        </div>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Project goals</Text>
                        </summary>

                        <div style={sectionBodyStyle}>
                            <fieldset style={fieldsetStyle}>
                                <legend style={legendStyle}>What do you want your website to accomplish?</legend>

                                <div style={groupStyle}>
                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="generateLeads"
                                        />
                                        Generate contact form inquiries
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="increaseCalls"
                                        />
                                        Increase phone calls
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="bookAppointments"
                                        />
                                        Book appointments / reservations
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="sellProducts"
                                        />
                                        Sell products online
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="buildCredibility"
                                        />
                                        Build brand awareness &amp; credibility
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="showcasePortfolio"
                                        />
                                        Showcase portfolio / work samples
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="shareInformation"
                                        />
                                        Share information / resources
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="emailList"
                                        />
                                        Build email list / newsletter signups
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="seo"
                                        />
                                        Improve search engine visibility (SEO)
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteGoals"
                                            value="other"
                                        />
                                        Other
                                    </label>
                                </div>

                                <div style={{ marginTop: 20 }}>
                                    <Input
                                        label="If other, please specify"
                                        id="website-goals-other"
                                        name="websiteGoalsOther"
                                        placeholder="Please specify"
                                    />
                                </div>
                            </fieldset>

                            <fieldset style={fieldsetStyle}>
                                <legend style={legendStyle}>What type of website do you need?</legend>

                                <div style={groupStyle}>
                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="business"
                                        />
                                        Business website
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="landingPage"
                                        />
                                        Landing page
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="portfolio"
                                        />
                                        Portfolio
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="e-commerce"
                                        />
                                        Online store / e-commerce
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="bookingWebsite"
                                        />
                                        Booking website
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="restaurant"
                                        />
                                        Restaurant / food service
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="nonprofit"
                                        />
                                        Nonprofit / charity
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="blog"
                                        />
                                        Blog / content website
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="websiteType"
                                            value="other"
                                        />
                                        Other
                                    </label>
                                </div>

                                <div style={{ marginTop: 20 }}>
                                    <Input
                                        label="If other, please specify"
                                        id="website-type-other"
                                        name="websiteTypeOther"
                                        placeholder="Please specify"
                                    />
                                </div>
                            </fieldset>
                        </div>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Branding</Text>
                        </summary>

                        <div style={sectionBodyStyle}>
                            <fieldset style={fieldsetStyle}>
                                <legend style={legendStyle}>Do you already have a logo?</legend>

                                <div style={{ ...groupStyle, flexDirection: 'row', gap: 32 }}>
                                    <label style={optionStyle}>
                                        <input
                                            type="radio"
                                            name="hasLogo"
                                            value="yes"
                                            required
                                        />
                                        Yes
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="radio"
                                            name="hasLogo"
                                            value="no"
                                        />
                                        No
                                    </label>
                                </div>
                            </fieldset>

                            <label style={{ display: 'block' }}>
                                <span style={legendStyle}>
                                    If you have a logo, please upload it here
                                </span>

                                <input
                                    type="file"
                                    id="logo-upload"
                                    name="logoUpload"
                                    accept=".png, .jpg, .jpeg, .svg, .pdf"
                                />

                                <span style={hintStyle}>
                                    Accepted file types: PNG, JPG, JPEG, SVG, PDF. Maximum file size: 5MB.
                                </span>
                            </label>

                            <Input
                                label="Brand colors"
                                type="text"
                                id="brand-colors"
                                name="brandColors"
                                placeholder="Example: navy blue, gold, and white"
                            />

                            <Input
                                label="Fonts, if any"
                                type="text"
                                id="brand-fonts"
                                name="brandFonts"
                                placeholder="Example: Playfair Display and Montserrat"
                            />

                            <fieldset style={fieldsetStyle}>
                                <legend style={legendStyle}>How would you describe your brand style?</legend>

                                <div style={groupStyle}>
                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="modern"
                                        />
                                        Modern
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="luxury"
                                        />
                                        Luxury
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="minimal"
                                        />
                                        Minimal
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="professional"
                                        />
                                        Professional
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="fun"
                                        />
                                        Fun
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="bold"
                                        />
                                        Bold
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="elegant"
                                        />
                                        Elegant
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="tech"
                                        />
                                        Tech-focused
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="rustic"
                                        />
                                        Rustic
                                    </label>

                                    <label style={optionStyle}>
                                        <input
                                            type="checkbox"
                                            name="brandStyle"
                                            value="other"
                                        />
                                        Other
                                    </label>
                                </div>

                                <div style={{ marginTop: 20 }}>
                                    <Input
                                        label="If other, please specify"
                                        type="text"
                                        id="brand-style-other"
                                        name="brandStyleOther"
                                        placeholder="Please specify"
                                    />
                                </div>
                            </fieldset>

                            <Input
                                label="Describe the feeling you want visitors to have when they visit your website."
                                multiline
                                rows={5}
                                id="brand-feeling"
                                name="brandFeeling"
                                placeholder="Example: confident, welcomed, inspired, relaxed, or excited"
                            />
                        </div>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Website content</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Website pages</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Features</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Search engine optimization (SEO)</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Design inspiration</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Domain &amp; hosting</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Timeline</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Maintenance &amp; support (optional)</Text>
                        </summary>
                    </details>

                    <details style={detailsStyle}>
                        <summary style={summaryStyle}>
                            <Text type="display" sizing="XS" as="span">Additional information (optional)</Text>
                        </summary>
                    </details>

                    <div style={{ marginTop: 12 }}>
                        <Button type="submit" size="l" iconRight={'→'}>
                            Send it
                        </Button>
                    </div>

                </form>
            </Section>
        </div>
    );
}

export default Questionnaire;
