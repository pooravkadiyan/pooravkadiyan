"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <div className="h-11 w-full animate-pulse rounded-[var(--radius-2)] bg-[rgba(255,255,255,0.045)]" />
        <div className="h-11 w-full animate-pulse rounded-[var(--radius-2)] bg-[rgba(255,255,255,0.04)]" />
        <div className="h-28 w-full animate-pulse rounded-[var(--radius-2)] bg-[rgba(255,255,255,0.04)]" />
      </div>
    ),
  },
);

type LazyContactFormProps = {
  toEmail: string;
  subject: string;
  ctaLabel?: string;
};

export function LazyContactForm(props: LazyContactFormProps) {
  return <ContactForm {...props} />;
}
