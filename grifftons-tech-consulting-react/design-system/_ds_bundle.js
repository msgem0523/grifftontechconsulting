/* @ds-bundle: {"format":4,"namespace":"FableDesignSystem_270490","components":[{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Chip","sourcePath":"components/content/Chip.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"Callout","sourcePath":"components/core/Modal.jsx"},{"name":"Text","sourcePath":"components/core/Text.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Subscribe","sourcePath":"components/forms/Subscribe.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Nav","sourcePath":"components/layout/Nav.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionHead","sourcePath":"components/layout/Section.jsx"}],"sourceHashes":{"components/content/Avatar.jsx":"a9d772024c0d","components/content/Card.jsx":"46214c2f0373","components/content/Chip.jsx":"68b62b693544","components/content/ProjectCard.jsx":"b11dc07b5ad5","components/content/Quote.jsx":"6e9742a3839c","components/content/Stat.jsx":"07ab3a206d3c","components/core/Button.jsx":"d4ba3d2c6868","components/core/Modal.jsx":"1a8a9aefc217","components/core/Text.jsx":"6366d62c7700","components/core/Wordmark.jsx":"f8d00a539228","components/forms/Input.jsx":"8e74b7f3c77c","components/forms/Subscribe.jsx":"8547a22cb28d","components/layout/Footer.jsx":"017e459eb598","components/layout/Nav.jsx":"465b355fe888","components/layout/Section.jsx":"b7a426279c8d","ui_kits/site/about.jsx":"fad18e98602c","ui_kits/site/app.jsx":"a243a93f3853","ui_kits/site/casestudy.jsx":"e1ca9847528b","ui_kits/site/chrome.jsx":"6e5e031628a7","ui_kits/site/data.js":"0673856f7cdd","ui_kits/site/home.jsx":"87007a1a5d92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FableDesignSystem_270490 = window.FableDesignSystem_270490 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  initials = 'TG',
  size = 64,
  tone = 'blush',
  style,
  ...rest
}) {
  const bg = {
    blush: 'var(--blush)',
    saffron: 'var(--saffron)',
    moss: 'var(--moss)',
    sky: 'var(--sky)',
    forest: 'var(--forest)'
  }[tone] || 'var(--blush)';
  const fg = tone === 'forest' ? 'var(--white)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-round)',
      overflow: 'hidden',
      background: bg,
      flex: '0 0 auto',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size * 0.4,
      letterSpacing: '-0.02em',
      color: fg
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'raised',
  interactive = false,
  pad = 32,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = {
    raised: 'var(--surface-raised)',
    sunken: 'var(--pearl-light)',
    outline: 'transparent',
    inverse: 'var(--forest)',
    accent: 'var(--saffron)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      color: tone === 'inverse' ? 'var(--white)' : 'var(--text-primary)',
      border: tone === 'outline' ? '1px solid var(--line)' : '1px solid transparent',
      borderRadius: 'var(--radius-l)',
      padding: pad,
      boxShadow: tone === 'outline' ? 'none' : interactive && hover ? 'var(--shadow-lifted)' : 'var(--shadow-soft)',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--haze-light)', 'var(--text-secondary)', 'var(--line)'],
  saffron: ['var(--saffron-tint)', 'var(--saffron-dark)', 'transparent'],
  forest: ['var(--forest-tint)', 'var(--forest)', 'transparent'],
  sky: ['var(--sky-tint)', 'var(--sky)', 'transparent'],
  berry: ['var(--berry-tint)', 'var(--berry)', 'transparent'],
  moss: ['var(--moss-tint)', 'var(--forest)', 'transparent'],
  coral: ['var(--coral-tint)', 'var(--brick)', 'transparent'],
  inverse: ['var(--white-20)', 'var(--white)', 'transparent']
};
function Chip({
  tone = 'neutral',
  size = 'm',
  selected = false,
  children,
  style,
  ...rest
}) {
  const [bg, fg, bd] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: size === 's' ? '4px 12px' : '7px 16px',
      fontSize: size === 's' ? 12 : 13,
      lineHeight: '18px',
      letterSpacing: '-0.1px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--ink)' : bg,
      color: selected ? 'var(--white)' : fg,
      border: '1px solid ' + (selected ? 'var(--ink)' : bd),
      whiteSpace: 'nowrap',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Chip.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  image,
  imageTone = 'sky',
  title,
  client,
  summary,
  tags = [],
  year,
  onClick,
  size = 'm',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tint = {
    sky: 'var(--sky-tint)',
    berry: 'var(--berry-tint)',
    moss: 'var(--moss-tint)',
    coral: 'var(--coral-tint)',
    saffron: 'var(--saffron-tint)',
    forest: 'var(--forest-tint)'
  }[imageTone] || 'var(--haze-light)';
  const ratio = size === 'l' ? '16 / 10' : '4 / 3';
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-m)',
      overflow: 'hidden',
      background: tint,
      boxShadow: hover ? 'var(--shadow-lifted)' : 'var(--shadow-soft)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'var(--transition-interactive)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform .5s cubic-bezier(.22,1,.36,1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, client && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, client), year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '.1em',
      color: 'var(--slate-light)',
      whiteSpace: 'nowrap'
    }
  }, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size === 'l' ? 36 : 28,
      lineHeight: size === 'l' ? '42px' : '34px',
      letterSpacing: size === 'l' ? '-0.8px' : '-0.5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      boxShadow: hover ? 'inset 0 -0.5em 0 var(--saffron)' : 'none',
      transition: 'box-shadow .25s cubic-bezier(.22,1,.36,1)'
    }
  }, title)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      maxWidth: '48ch',
      fontSize: 16,
      lineHeight: '27px',
      letterSpacing: '-0.2px',
      color: 'var(--text-secondary)'
    }
  }, summary), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '5px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--haze-light)',
      border: '1px solid var(--line)',
      fontSize: 12,
      lineHeight: '18px',
      letterSpacing: '-0.1px',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, t))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  role,
  tone = 'page',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 36,
      lineHeight: '46px',
      letterSpacing: '-0.8px',
      maxWidth: '22ch',
      color: inverse ? 'var(--white)' : 'var(--text-primary)'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '19px',
      letterSpacing: '-0.1px',
      color: inverse ? 'var(--white-70)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: inverse ? 'var(--white)' : 'var(--text-primary)'
    }
  }, attribution), role && /*#__PURE__*/React.createElement("span", null, " \xB7 ", role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  tone = 'ink',
  align = 'left',
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--saffron)' : tone === 'inverse' ? 'var(--white)' : tone === 'forest' ? 'var(--forest)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: '66px',
      letterSpacing: '-1.8px',
      color
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '19px',
      letterSpacing: '-0.1px',
      color: tone === 'inverse' ? 'var(--white-70)' : 'var(--text-muted)',
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  letterSpacing: '-0.2px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',
  boxShadow: 'none',
  borderRadius: 'var(--radius-pill)',
  transition: 'var(--transition-interactive)'
};
const SIZES = {
  l: {
    height: '58px',
    padding: '0 30px',
    fontSize: '17px'
  },
  m: {
    height: '52px',
    padding: '0 26px',
    fontSize: '16px'
  },
  s: {
    height: '40px',
    padding: '0 18px',
    fontSize: '14px'
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  fullWidth = false,
  disabled = false,
  iconRight,
  as,
  href,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const looks = {
    primary: {
      background: hover ? 'var(--forest-deep)' : 'var(--forest)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    accent: {
      background: hover ? 'var(--saffron-dark)' : 'var(--saffron)',
      color: 'var(--ink)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--ink)' : 'transparent',
      color: hover ? 'var(--white)' : 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    ghost: {
      background: hover ? 'var(--haze)' : 'transparent',
      color: 'var(--ink)',
      border: '1px solid transparent'
    },
    inverse: {
      background: hover ? 'var(--pearl-deep)' : 'var(--white)',
      color: 'var(--forest-ink)',
      border: '1px solid transparent'
    },
    link: {
      background: 'none',
      border: 0,
      padding: 0,
      height: 'auto',
      borderRadius: 0,
      color: 'var(--ink)',
      boxShadow: hover ? 'inset 0 -0.7em 0 var(--saffron)' : 'inset 0 -2px 0 var(--saffron)'
    }
  };
  const look = looks[variant] || looks.primary;
  const sized = variant === 'link' ? {
    fontSize: '16px'
  } : SIZES[size];
  const off = disabled ? {
    background: 'var(--action-disabled-bg)',
    borderColor: 'transparent',
    color: 'var(--action-disabled-fg)',
    pointerEvents: 'none',
    boxShadow: 'none'
  } : null;
  const lift = hover && variant !== 'link' && !disabled ? {
    transform: 'translateY(-1px)'
  } : null;
  const Tag = as || (href ? 'a' : 'button');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...BASE,
      ...sized,
      ...look,
      ...lift,
      ...(fullWidth ? {
        width: '100%'
      } : null),
      ...off,
      ...style
    }
  }, rest), children, iconRight && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform .25s cubic-bezier(.22,1,.36,1)'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Modal({
  open = true,
  title,
  onClose,
  footer,
  width = 560,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--black-60)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 100,
      animation: 'tg-fade-in .25s cubic-bezier(.22,1,.36,1) forwards'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-l)',
      padding: '40px',
      width: '100%',
      maxWidth: width,
      boxShadow: 'var(--shadow-lifted)',
      animation: 'tg-fade-up .25s cubic-bezier(.22,1,.36,1) forwards',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      lineHeight: '34px',
      letterSpacing: '-0.5px',
      color: 'var(--text-primary)'
    }
  }, title), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      gap: '12px'
    }
  }, footer)));
}
function Callout({
  tone = 'accent',
  label,
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: ['var(--saffron-tint)', 'var(--saffron)'],
    forest: ['var(--forest-tint)', 'var(--forest)'],
    sky: ['var(--sky-tint)', 'var(--sky)'],
    berry: ['var(--berry-tint)', 'var(--berry)'],
    neutral: ['var(--haze-light)', 'var(--slate-light)']
  };
  const [bg, bar] = tones[tone] || tones.accent;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      background: bg,
      borderRadius: 'var(--radius-m)',
      padding: '24px 28px',
      display: 'flex',
      gap: '18px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 4px',
      borderRadius: '999px',
      background: bar
    }
  }), /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: '27px',
      letterSpacing: '-0.2px',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Modal, Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCALES = {
  display: {
    XXL: ['88px', '88px', '-2.5px'],
    XL: ['64px', '66px', '-1.8px'],
    L: ['48px', '52px', '-1.2px'],
    M: ['36px', '42px', '-0.8px'],
    S: ['28px', '34px', '-0.5px'],
    XS: ['22px', '28px', '-0.3px']
  },
  body: {
    XL: ['21px', '34px', '-0.3px'],
    L: ['18px', '30px', '-0.2px'],
    M: ['16px', '27px', '-0.2px'],
    S: ['14px', '22px', '-0.1px'],
    XS: ['12px', '18px', '0px']
  },
  label: {
    L: ['13px', '16px', '0.08em'],
    M: ['11px', '14px', '0.1em']
  }
};
const DEFAULT_TAG = {
  display: 'h2',
  body: 'p',
  label: 'div'
};
function Text({
  type = 'body',
  sizing = 'M',
  as,
  color,
  weight,
  align,
  italic,
  truncate,
  measure,
  className = '',
  style,
  children,
  ...rest
}) {
  const scale = SCALES[type] || SCALES.body;
  const [fontSize, lineHeight, letterSpacing] = scale[sizing] || scale.M;
  const Tag = as || DEFAULT_TAG[type];
  const s = {
    margin: 0,
    fontFamily: type === 'display' ? 'var(--font-display)' : 'var(--font-body)',
    fontSize,
    lineHeight,
    letterSpacing,
    fontWeight: weight ?? (type === 'display' ? 400 : type === 'label' ? 500 : 400),
    color: color || 'inherit',
    textAlign: align,
    fontStyle: italic ? 'italic' : undefined,
    textTransform: type === 'label' ? 'uppercase' : undefined,
    maxWidth: measure ? 'var(--measure-prose)' : undefined,
    ...style
  };
  if (truncate) {
    Object.assign(s, {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: truncate,
      WebkitBoxOrient: 'vertical'
    });
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Text.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 28,
  variant = 'full',
  tone = 'ink',
  lockup = false,
  role,
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--white)' : tone === 'forest' ? 'var(--forest)' : 'var(--ink)';
  const text = variant === 'initials' ? 'TG' : variant === 'first' ? 'Temecha' : 'Temecha Griffin';
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: size > 40 ? '-0.035em' : '-0.02em',
      color,
      display: 'block',
      whiteSpace: 'nowrap'
    }
  }, text);
  if (!lockup) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      ...style
    }
  }, rest), mark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.18,
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(10, size * 0.34),
      lineHeight: 1.25,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: tone === 'inverse' ? 'var(--white-70)' : 'var(--slate)'
    }
  }, role || 'Designer & Writer'));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  error,
  hint,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const shared = {
    width: '100%',
    boxSizing: 'border-box',
    border: 0,
    outline: 0,
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    lineHeight: '27px',
    letterSpacing: '-0.2px',
    color: 'var(--text-primary)',
    resize: 'none'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      padding: multiline ? '14px 22px' : '0 22px',
      height: multiline ? 'auto' : 'var(--control-height)',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--forest)' : 'var(--line)'),
      borderRadius: multiline ? 'var(--radius-s)' : 'var(--radius-pill)',
      boxShadow: focus ? '0 0 0 3px var(--saffron-light)' : 'none',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: shared
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: shared
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      paddingLeft: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: '19px',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Subscribe.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Subscribe({
  title = 'The newsletter',
  blurb,
  cta = 'Subscribe',
  note,
  tone = 'sunken',
  onSubmit,
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: inverse ? 'var(--forest)' : 'var(--pearl-light)',
      borderRadius: 'var(--radius-l)',
      padding: '48px',
      color: inverse ? 'var(--white)' : 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 36,
      lineHeight: '42px',
      letterSpacing: '-0.8px'
    }
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      maxWidth: '46ch',
      fontSize: 18,
      lineHeight: '30px',
      letterSpacing: '-0.2px',
      color: inverse ? 'var(--white-70)' : 'var(--text-secondary)'
    }
  }, blurb), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 16,
      lineHeight: '27px',
      color: inverse ? 'var(--saffron)' : 'var(--forest)'
    }
  }, "You're in. First one lands Sunday.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
      onSubmit && onSubmit(email);
    },
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com",
    style: {
      flex: 1,
      minWidth: 0,
      height: 'var(--control-height)',
      padding: '0 22px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (inverse ? 'var(--white-20)' : 'var(--line)'),
      background: inverse ? 'var(--white-20)' : 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      letterSpacing: '-0.2px',
      outline: 0,
      color: inverse ? 'var(--white)' : 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: inverse ? 'accent' : 'primary'
  }, cta)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 13,
      color: inverse ? 'var(--white-50)' : 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { Subscribe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Subscribe.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  columns = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      margin: '0 var(--page-gutter) var(--page-gutter)',
      padding: '72px 48px 40px',
      background: 'var(--forest)',
      borderRadius: 'var(--radius-l)',
      color: 'var(--white)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 40,
    tone: "inverse",
    lockup: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(columns.length, 1) + ',1fr)',
      gap: 32,
      marginTop: 56
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--white-50)',
      marginBottom: 14
    }
  }, c.title), c.items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 15,
      lineHeight: '28px',
      color: 'var(--white-70)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      paddingTop: 22,
      borderTop: '1px solid var(--white-20)',
      fontSize: 13,
      color: 'var(--white-50)'
    }
  }, note || '© ' + new Date().getFullYear() + ' Temecha Griffin')));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Nav({
  items = [],
  active,
  onNavigate,
  action,
  tone = 'page',
  homeId = 'home',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      padding: '22px var(--page-gutter)',
      background: inverse ? 'var(--forest)' : 'var(--pearl)',
      color: inverse ? 'var(--white)' : 'var(--ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(homeId);
    },
    style: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22,
    tone: inverse ? 'inverse' : 'ink'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '30px',
      flex: 1
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        letterSpacing: '-0.2px',
        fontWeight: 500,
        color: inverse ? on ? 'var(--white)' : 'var(--white-70)' : on ? 'var(--ink)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -2px 0 var(--saffron)' : 'none',
        paddingBottom: 2,
        transition: 'var(--transition-interactive)'
      }
    }, it.label);
  })), action);
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Nav.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Section({
  tone = 'page',
  width = 'content',
  pad = 'default',
  id,
  children,
  style,
  ...rest
}) {
  const bg = {
    page: 'transparent',
    raised: 'var(--surface-raised)',
    sunken: 'var(--pearl-light)',
    inverse: 'var(--forest)',
    accent: 'var(--saffron)'
  }[tone];
  const fg = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const py = {
    none: '0',
    tight: '56px',
    default: '96px',
    large: '160px'
  }[pad];
  const inset = tone !== 'page';
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      background: bg,
      color: fg,
      padding: py + ' var(--page-gutter)',
      borderRadius: inset ? 'var(--radius-l)' : 0,
      margin: inset ? '0 var(--page-gutter)' : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      width: '100%',
      maxWidth: {
        prose: '680px',
        content: '1080px',
        wide: '1360px',
        full: 'none'
      }[width]
    }
  }, children));
}
function SectionHead({
  label,
  title,
  intro,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '40px',
      marginBottom: '48px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: '14px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      lineHeight: '52px',
      letterSpacing: '-1.2px',
      fontWeight: 400,
      margin: 0,
      maxWidth: '18ch'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      maxWidth: '52ch',
      fontSize: 18,
      lineHeight: '30px',
      letterSpacing: '-0.2px',
      color: 'var(--text-secondary)'
    }
  }, intro)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      paddingBottom: 6
    }
  }, action));
}
Object.assign(__ds_scope, { Section, SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/about.jsx
try { (() => {
const {
  Section,
  SectionHead,
  Text,
  Button,
  Avatar,
  Chip,
  Card,
  Input
} = window.FableDesignSystem_270490;
function About() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    type: "label",
    sizing: "M",
    color: "var(--text-muted)"
  }, "About"), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XL",
    as: "h1",
    style: {
      marginTop: 24,
      maxWidth: '16ch'
    }
  }, "I'm Temecha. I ask a lot of questions first."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "XL",
    measure: true,
    color: "var(--text-secondary)",
    style: {
      marginTop: 28
    }
  }, "I've spent fifteen years designing software for places where the stakes are real \u2014 clinics, city offices, people's money. The work is usually less about invention and more about subtraction."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    measure: true,
    style: {
      marginTop: 24
    }
  }, "Before design I was a technical writer, which is why I still think the fastest way to fix an interface is to try writing its instructions. If they run past a paragraph, the interface is wrong.")), /*#__PURE__*/React.createElement(Avatar, {
    size: 320,
    tone: "blush",
    initials: "TG",
    style: {
      borderRadius: 'var(--radius-l)'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "large"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    label: "How I work",
    title: "Three things you can count on."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [['I start in the room', 'Twelve waiting rooms before a single artboard. The finding is always in the room, not the analytics.'], ['I write before I draw', 'If the instructions run long, the design is wrong. Copy is the first prototype.'], ['I stay until it ships', 'Handoff is not a deliverable. I am in the standups through launch week.']].map(([h, p]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    tone: "raised",
    pad: 32
  }, /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XS",
    as: "h3"
  }, h), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "M",
    color: "var(--text-secondary)",
    style: {
      marginTop: 14
    }
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    label: "Capabilities",
    title: "What I'm hired for.",
    style: {
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['Product design', 'Design systems', 'User research', 'Service design', 'Content design', 'Prototyping', 'Workshops', 'Design ops'].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    tone: "neutral"
  }, t))), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XS",
    as: "h3",
    style: {
      marginTop: 56
    }
  }, "Currently"), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "M",
    color: "var(--text-secondary)",
    style: {
      marginTop: 12
    }
  }, "Taking one new engagement for Q4. Based in Durham, NC; happy anywhere in US timezones.")), /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    pad: 40,
    id: "contact"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "S",
    as: "h2"
  }, "Tell me what's going on."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "M",
    color: "var(--text-secondary)",
    style: {
      marginTop: 12
    }
  }, "A sentence is plenty. I reply to everything within two days."), sent ? /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    color: "var(--forest)",
    style: {
      marginTop: 32
    }
  }, "Got it \u2014 talk soon.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What are you working on?",
    multiline: true,
    rows: 4,
    placeholder: "A form nobody finishes\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "l",
    fullWidth: true,
    iconRight: "\u2192"
  }, "Send it"))))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/app.jsx
try { (() => {
function Site() {
  const [route, setRoute] = React.useState('work');
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteNav, {
    route: route,
    go: go
  }), (route === 'work' || route === 'home') && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), route === 'case' && /*#__PURE__*/React.createElement(CaseStudy, {
    go: go
  }), route === 'about' && /*#__PURE__*/React.createElement(About, null), route === 'writing' && /*#__PURE__*/React.createElement(Writing, {
    go: go
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/casestudy.jsx
try { (() => {
const {
  Section,
  Text,
  Button,
  Chip,
  Stat,
  Callout,
  Quote,
  Card
} = window.FableDesignSystem_270490;
function CaseStudy({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('work')
  }, "\u2190 All work")), /*#__PURE__*/React.createElement(Text, {
    type: "label",
    sizing: "M",
    color: "var(--text-muted)",
    style: {
      marginTop: 40
    }
  }, "Northwind Health \xB7 2025"), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XL",
    as: "h1",
    style: {
      marginTop: 20,
      maxWidth: '17ch'
    }
  }, "Rebuilding intake for 400 clinics"), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "XL",
    measure: true,
    color: "var(--text-secondary)",
    style: {
      marginTop: 28
    }
  }, "Northwind's first-visit form asked 38 questions. Nearly half of patients gave up before submitting it. I spent four months finding out which nine actually mattered."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, ['Product design', 'Research', 'Design system'].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    tone: "moss"
  }, t)))), /*#__PURE__*/React.createElement(Section, {
    pad: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      borderRadius: 'var(--radius-l)',
      background: 'var(--moss-tint)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "S",
    color: "var(--text-muted)"
  }, "Hero image \u2014 16:9, 28px radius"))), /*#__PURE__*/React.createElement(Section, {
    pad: "large",
    width: "prose"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "M",
    as: "h2"
  }, "The problem wasn't the form"), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    style: {
      marginTop: 22
    }
  }, "Every clinic had added a question over the years and nobody had ever taken one away. The form was a record of eleven departments' anxieties, in the order they arrived. Patients read it as a test they were about to fail."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    style: {
      marginTop: 22
    }
  }, "I sat in twelve waiting rooms before I touched a design tool. The finding that mattered: people abandoned at question six, every time, regardless of what question six was."), /*#__PURE__*/React.createElement(Callout, {
    tone: "forest",
    label: "What changed",
    style: {
      margin: '40px 0'
    }
  }, "We moved everything that wasn't needed to book the appointment into the visit itself, where a person could ask it out loud."), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "M",
    as: "h2",
    style: {
      marginTop: 56
    }
  }, "Nine questions"), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    style: {
      marginTop: 22
    }
  }, "The new form fits on one screen on a phone. It asks who you are, what hurts, and when you can come in. Everything else is a conversation, not a field.")), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    pad: "large"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "forest",
    value: "41%",
    label: "Fewer support tickets in the first quarter"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "forest",
    value: "9",
    label: "Fields, down from 38"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "forest",
    value: "2.1\xD7",
    label: "More completed intakes per week"
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "large",
    width: "prose"
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Dana Whitfield",
    role: "VP Product, Northwind Health"
  }, "She rewrote the whole intake flow in a week and it just\u2026 worked.")), /*#__PURE__*/React.createElement(Section, {
    pad: "none",
    style: {
      marginBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    pad: 48
  }, /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "M",
    as: "h2",
    style: {
      maxWidth: '20ch'
    }
  }, "Got a form nobody finishes?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconRight: "\u2192",
    onClick: () => go('about')
  }, "Tell me about it")))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/casestudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/chrome.jsx
try { (() => {
const {
  Nav,
  Footer,
  Button
} = window.FableDesignSystem_270490;
function SiteNav({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement(Nav, {
    items: [{
      id: 'work',
      label: 'Work'
    }, {
      id: 'about',
      label: 'About'
    }, {
      id: 'writing',
      label: 'Writing'
    }],
    active: route === 'case' ? 'work' : route,
    onNavigate: go,
    homeId: "work",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "s",
      onClick: () => go('about')
    }, "Get in touch")
  });
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      title: 'Work',
      items: ['Case studies', 'Services', 'Availability']
    }, {
      title: 'Writing',
      items: ['Newsletter', 'Archive']
    }, {
      title: 'Elsewhere',
      items: ['LinkedIn', 'GitHub', 'Read.cv']
    }]
  });
}
function Writing({
  go
}) {
  const {
    Section,
    SectionHead,
    Text,
    Chip,
    Subscribe
  } = window.FableDesignSystem_270490;
  const {
    writing
  } = window.TGData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "label",
    sizing: "M",
    color: "var(--text-muted)"
  }, "Writing"), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XL",
    as: "h1",
    style: {
      marginTop: 24,
      maxWidth: '17ch'
    }
  }, "Notes from the middle of the work."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "XL",
    measure: true,
    color: "var(--text-secondary)",
    style: {
      marginTop: 28
    }
  }, "Short pieces about process, research and the parts of a project that don't make it into the case study. Roughly one a month.")), /*#__PURE__*/React.createElement(Section, {
    pad: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, writing.concat([['Why I stopped running kickoff workshops', 'Process', '7 min'], ['A design system is a maintenance budget', 'Design systems', '5 min']]).map(([t, tag, read], i, arr) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      padding: '30px 0',
      borderTop: '1px solid var(--line)',
      borderBottom: i === arr.length - 1 ? '1px solid var(--line)' : 'none',
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: '34px',
      letterSpacing: '-0.5px',
      flex: 1
    }
  }, t), /*#__PURE__*/React.createElement(Chip, {
    size: "s",
    tone: "neutral"
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 52,
      textAlign: 'right'
    }
  }, read))))), /*#__PURE__*/React.createElement(Section, {
    pad: "none",
    style: {
      margin: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Subscribe, {
    tone: "inverse",
    title: "Notes on shipping",
    blurb: "One short letter a month about design, process, and the things that went wrong on the way to shipping.",
    note: "No spam. Unsubscribe whenever."
  })));
}
Object.assign(window, {
  SiteNav,
  SiteFooter,
  Writing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/data.js
try { (() => {
window.TGData = {
  projects: [{
    id: 'northwind',
    client: 'Northwind Health',
    year: '2025',
    tone: 'moss',
    title: 'Rebuilding intake for 400 clinics',
    summary: 'A four-month engagement that cut the first-visit form from 38 fields to 9 — and cut abandoned intakes by more than half.',
    tags: ['Product design', 'Research', 'Design system']
  }, {
    id: 'ledger',
    client: 'Ledgerly',
    year: '2024',
    tone: 'sky',
    title: 'Making a finance tool feel like a habit',
    summary: 'Weekly review became the product. Everything else moved out of the way.',
    tags: ['Product design', 'Strategy']
  }, {
    id: 'civic',
    client: 'City of Durham',
    year: '2024',
    tone: 'saffron',
    title: 'One form, eleven departments',
    summary: 'A permit application that stopped asking residents to know how the city is organised.',
    tags: ['Service design', 'Research']
  }, {
    id: 'atlas',
    client: 'Atlas Learning',
    year: '2023',
    tone: 'berry',
    title: 'A design system two people could maintain',
    summary: 'Forty-one components, one contributor guide, zero design-system team.',
    tags: ['Design system', 'Docs']
  }],
  writing: [['The brief is never the problem', 'Process', '6 min'], ['Nobody wants your component library', 'Design systems', '9 min'], ['What I ask in the first week', 'Research', '4 min']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/site/home.jsx
try { (() => {
const {
  Section,
  SectionHead,
  Text,
  Button,
  ProjectCard,
  Chip,
  Stat,
  Subscribe,
  Quote
} = window.FableDesignSystem_270490;
function Home({
  go
}) {
  const {
    projects,
    writing
  } = window.TGData;
  const [filter, setFilter] = React.useState('All work');
  const filters = ['All work', 'Product design', 'Design system', 'Research', 'Service design'];
  const shown = filter === 'All work' ? projects : projects.filter(p => p.tags.includes(filter));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "label",
    sizing: "M",
    color: "var(--text-muted)"
  }, "Designer & writer \xB7 Durham, NC"), /*#__PURE__*/React.createElement(Text, {
    type: "display",
    sizing: "XXL",
    as: "h1",
    style: {
      marginTop: 28,
      maxWidth: '15ch'
    }
  }, "I design things people actually finish using."), /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "XL",
    measure: true,
    color: "var(--text-secondary)",
    style: {
      marginTop: 32
    }
  }, "Fifteen years across health, fintech and civic tools. Mostly I show up when a team knows something is wrong but can't quite name it yet \u2014 and I stay until it ships."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconRight: "\u2192",
    onClick: () => go('about')
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "outline",
    onClick: () => go('case')
  }, "Read a case study"))), /*#__PURE__*/React.createElement(Section, {
    pad: "none"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    label: "Selected work",
    title: "Four projects, one throughline: fewer steps.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "All work")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 44,
      flexWrap: 'wrap'
    }
  }, filters.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: filter === t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px 48px'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    client: p.client,
    year: p.year,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    imageTone: p.tone,
    onClick: () => go('case')
  }))), shown.length === 0 && /*#__PURE__*/React.createElement(Text, {
    type: "body",
    sizing: "L",
    color: "var(--text-muted)"
  }, "Nothing under that filter yet.")), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    pad: "large",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "inverse",
    attribution: "Dana Whitfield",
    role: "VP Product, Northwind Health"
  }, "She rewrote the whole intake flow in a week and it just\u2026 worked."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "accent",
    value: "41%",
    label: "Fewer support tickets in the first quarter after launch"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "9",
    label: "Fields in the new intake form, down from 38"
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "large"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    label: "Writing",
    title: "Notes from the middle of the work."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, writing.map(([t, tag, read], i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      padding: '26px 0',
      borderTop: '1px solid var(--line)',
      borderBottom: i === writing.length - 1 ? '1px solid var(--line)' : 'none',
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: '34px',
      letterSpacing: '-0.5px',
      flex: 1
    }
  }, t), /*#__PURE__*/React.createElement(Chip, {
    size: "s",
    tone: "neutral"
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 52,
      textAlign: 'right'
    }
  }, read))))), /*#__PURE__*/React.createElement(Section, {
    pad: "none",
    style: {
      marginBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Subscribe, {
    tone: "inverse",
    title: "Notes on shipping",
    blurb: "One short letter a month about design, process, and the things that went wrong on the way to shipping.",
    note: "No spam. Unsubscribe whenever."
  })));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Subscribe = __ds_scope.Subscribe;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionHead = __ds_scope.SectionHead;

})();
