import React, { useState } from 'react';
import { Section, SectionHead } from '../ds/components/layout/Section.jsx';
import { Text } from '../ds/components/core/Text.jsx';
import { Button } from '../ds/components/core/Button.jsx';
import { Card } from '../ds/components/content/Card.jsx';

const inputStyles = {
  display: 'block',
  width: '100%',
  marginTop: 8,
  padding: '12px 14px',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-s)',
  background: 'var(--white)',
  color: 'var(--ink)',
  font: 'inherit',
  boxSizing: 'border-box',
};

function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const business = formData.get('business')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      setStatus('Please complete your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(
      `Website inquiry from ${name}${business ? ` — ${business}` : ''}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        business ? `Business: ${business}` : '',
        '',
        'Message:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    const form = event.currentTarget;

    setStatus('Your email app is opening with your message ready to send.');

    window.location.href =
      `mailto:msgem0523@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        form.reset();
      }, 500);
  }

  return (
    <Section pad="default">
      <SectionHead
        label="Contact"
        title="Let’s talk about what you need."
        intro="Share a few details about your project, and your email app will open with everything ready to send."
      />

      <Card style={{ maxWidth: 720, margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 20,
            }}
          >
            <label>
              <Text as="span" type="label" sizing="M">
                Name
              </Text>

              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                style={inputStyles}
              />
            </label>

            <label>
              <Text as="span" type="label" sizing="M">
                Email
              </Text>

              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                title="Please enter a valid email address, such as name@example.com"
                style={inputStyles}
              />
            </label>
          </div>

          <label style={{ display: 'block', marginTop: 20 }}>
            <Text as="span" type="label" sizing="M">
              Business or organization
            </Text>

            <input
              type="text"
              name="business"
              autoComplete="organization"
              style={inputStyles}
            />
          </label>

          <label style={{ display: 'block', marginTop: 20 }}>
            <Text as="span" type="label" sizing="M">
              How can I help?
            </Text>

            <textarea
              name="message"
              rows="7"
              required
              style={{
                ...inputStyles,
                resize: 'vertical',
              }}
            />
          </label>

          <Button type="submit" iconRight="→" style={{ marginTop: 24 }}>
            Prepare my email
          </Button>

          <Text
            type="body"
            sizing="S"
            color="var(--text-secondary)"
            role="status"
            aria-live="polite"
            style={{ marginTop: 16, minHeight: '1.5em' }}
          >
            {status}
          </Text>
        </form>
      </Card>
    </Section>
  );
}

export default Contact;