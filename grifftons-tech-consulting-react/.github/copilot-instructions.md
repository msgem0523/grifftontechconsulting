# GitHub Copilot Instructions

## Project

This project is Griffton's Tech Consulting.

The application is built with:

- React
- Vite
- React Router
- CSS Modules (or plain CSS if applicable)

## Architecture

- Use reusable components.
- Avoid duplicated code.
- Prefer composition over repetition.
- Keep components small and focused.

## Design System

Always reference the design system before generating UI.

Use:

- Existing color tokens
- Existing spacing tokens
- Existing typography
- Existing components

Never invent new colors, spacing, or fonts.

## Components

Reuse components whenever possible.

Examples:

- Button
- Card
- Hero
- CTA
- Navbar
- Footer
- PricingCard
- FAQ

## Accessibility

Every component should:

- Use semantic HTML
- Include aria labels where needed
- Support keyboard navigation
- Meet WCAG contrast standards

## Code Style

- Functional components only
- Hooks instead of class components
- Descriptive variable names
- Keep files organized
- Prefer early returns