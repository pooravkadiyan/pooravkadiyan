import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "gold";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: React.ComponentProps<typeof Link>["href"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap select-none font-semibold tracking-[0.03em] transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

const size =
  "h-11 px-7 text-[14px] rounded-[var(--radius-2)] font-[var(--font-display)]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,rgba(45,227,255,1),rgba(56,189,248,0.92))] text-[var(--bg-primary)] hover:scale-[1.01] shadow-[var(--shadow-glow-blue)]",
  secondary:
    "bg-[rgba(255,255,255,0.02)] text-[var(--text-primary)] border border-[var(--bg-border)] hover:border-[rgba(45,227,255,0.45)] hover:text-[rgba(235,248,255,0.95)] hover:shadow-[0_0_0_1px_rgba(45,227,255,0.1)]",
  gold: "bg-[rgba(255,255,255,0.02)] text-[var(--accent-gold)] border border-[rgba(216,177,90,0.55)] hover:border-[rgba(216,177,90,0.9)] hover:shadow-[var(--shadow-glow-gold)]",
};

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return "href" in props;
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "secondary";
  const className = cn(
    base,
    size,
    variants[variant],
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-[var(--dur-2)] after:ease-[var(--ease-out)] after:[background:radial-gradient(420px_120px_at_-10%_-10%,rgba(255,255,255,0.35),transparent_55%)] hover:after:opacity-100",
    props.className,
  );

  if (isLinkButton(props)) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { className: _c, variant: _v, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  );
}

