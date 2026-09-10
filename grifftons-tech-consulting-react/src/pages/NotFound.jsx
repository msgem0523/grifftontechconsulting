import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../ds/components/layout/Section.jsx";
import { Text } from "../ds/components/core/Text.jsx";

function NotFound() {
  return (
    <Section pad="large">
      <Text type="label" sizing="M" color="var(--text-muted)">
        404
      </Text>

      <Text type="display" sizing="XL" as="h1" style={{ marginTop: 24 }}>
        Page not found.
      </Text>

      <Text
        type="body"
        sizing="L"
        color="var(--text-secondary)"
        style={{ marginTop: 24 }}
      >
        The page you’re looking for doesn’t exist or may have moved.
      </Text>

      <Link to="/" style={{ display: "inline-block", marginTop: 32 }}>
        Back home
      </Link>
    </Section>
  );
}

export default NotFound;
