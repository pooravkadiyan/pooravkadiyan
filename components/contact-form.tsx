"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  toEmail: string;
  subject: string;
  ctaLabel?: string;
};

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export function ContactForm({ className, toEmail, subject, ctaLabel }: Props) {
  const [status, setStatus] = React.useState<
    "idle" | "copied" | "error" | "opening"
  >("idle");

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const mailtoHref = React.useMemo(() => {
    const lines = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Company: ${form.company || "-"}`,
      "",
      "Context:",
      form.message || "-",
    ];

    const body = lines.join("\n");
    return `mailto:${toEmail}?subject=${encodeMailto(subject)}&body=${encodeMailto(
      body,
    )}`;
  }, [form.company, form.email, form.message, form.name, subject, toEmail]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(toEmail);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1200);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 1400);
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1.5">
          <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
            Name
          </div>
          <input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            className="h-11 w-full rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[rgba(235,238,255,0.35)] transition-[border-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          />
        </label>

        <label className="space-y-1.5">
          <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
            Work email
          </div>
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="name@company.com"
            inputMode="email"
            className="h-11 w-full rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[rgba(235,238,255,0.35)] transition-[border-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          />
        </label>
      </div>

      <label className="space-y-1.5">
        <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
          Company (optional)
        </div>
        <input
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          placeholder="Company / team"
          className="h-11 w-full rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] px-4 text-[14px] text-[var(--text-primary)] placeholder:text-[rgba(235,238,255,0.35)] transition-[border-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        />
      </label>

      <label className="space-y-1.5">
        <div className="text-[12px] font-medium tracking-[0.04em] text-[var(--text-muted)]">
          What decision should improve? (context)
        </div>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Example: improve pricing decisions, reduce churn via better retention triggers, forecast demand per SKU-city, rank leads, detect anomalies…"
          rows={5}
          className="w-full resize-none rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-[14px] leading-[1.6] text-[var(--text-primary)] placeholder:text-[rgba(235,238,255,0.35)] transition-[border-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[13px] leading-[1.6] text-[var(--text-muted)]">
          Reply window: <span className="text-[var(--text-secondary)]">within 24 hours</span>.{" "}
          If it’s a fit, we’ll suggest a short scoping call.
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={copyEmail}
            className="h-10 rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.01)] px-4 text-[13px] font-medium tracking-[0.03em] text-[var(--text-secondary)] transition-[border-color,background-color,color] duration-[var(--dur-1)] ease-[var(--ease-out)] hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          >
            {status === "copied"
              ? "Email copied"
              : status === "error"
                ? "Copy failed"
                : "Copy email"}
          </button>

          <Button
            href={mailtoHref}
            variant="primary"
            className="h-10 px-5"
            onClick={() => setStatus("opening")}
          >
            {ctaLabel ?? "Open email draft"}
          </Button>
        </div>
      </div>

      <div className="text-[12px] leading-[1.6] text-[var(--text-muted)]">
        This form doesn’t store your data on the site. It just helps you send a structured intro.
      </div>
    </div>
  );
}

