type IconProps = { className?: string; title?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPhone({ className, title = "Phone" }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden={title ? undefined : true} role={title ? "img" : "presentation"}>
      {title ? <title>{title}</title> : null}
      <path {...stroke} d="M6.2 3.8h3.1l1.4 3.4-1.9 1.2a13 13 0 0 0 6.8 6.8l1.2-1.9 3.4 1.4v3.1c0 .8-.7 1.5-1.6 1.5C9.9 19.3 4.7 14.1 4.7 5.4c0-.9.7-1.6 1.5-1.6Z" />
    </svg>
  );
}

export function IconMail({ className, title = "Email" }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden={title ? undefined : true} role={title ? "img" : "presentation"}>
      {title ? <title>{title}</title> : null}
      <rect {...stroke} x="3.5" y="5.5" width="17" height="13" />
      <path {...stroke} d="m4 6.5 8 6.2 8-6.2" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}
