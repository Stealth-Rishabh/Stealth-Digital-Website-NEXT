"use client"

import type * as React from "react"
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer role="contentinfo" className="relative overflow-hidden" aria-label="Site footer">
      {/* Background */}
      <div
        className="relative"
        style={{
          background: "linear-gradient(180deg, rgba(9,11,12,1) 0%, rgba(9,11,12,1) 100%)",
        }}
      >
        {/* Glow accents (bottom-left purple, bottom-right amber) */}
        <div className="pointer-events-none absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(45% 45% at 50% 50%, rgba(108,92,231,0.35) 0%, rgba(73,53,199,0.25) 45%, rgba(23,18,41,0.0) 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 -right-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(45% 45% at 50% 50%, rgba(232,171,77,0.35) 0%, rgba(156,104,39,0.25) 45%, rgba(41,30,18,0.0) 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-8 md:pt-20">
          {/* Top content grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Brand + about */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                {/* Simple emblem approximating the logo mark */}
                <span className="relative inline-flex h-8 w-8 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[rgba(246,70,70,1)]" />
                  <span className="absolute inset-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
                  <span className="relative h-3 w-3 rounded-full bg-[rgba(110,90,240,1)]" />
                </span>
                <span className="text-xl font-semibold tracking-wide text-[rgba(245,247,249,1)]">Stealth Digital</span>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-[rgba(156,163,175,1)]">
                Sed perspiciatis unde omnis natus doloremque laudantium totae
              </p>

              {/* Social icons */}
              <div className="mt-8 flex items-center gap-4">
                <IconButton label="Facebook">
                  <Facebook className="h-5 w-5" />
                </IconButton>
                <IconButton label="Twitter / X">
                  <Twitter className="h-5 w-5" />
                </IconButton>
                <IconButton label="Instagram">
                  <Instagram className="h-5 w-5" />
                </IconButton>
                <IconButton label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </IconButton>
              </div>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-base md:text-[22px] font-semibold tracking-wide text-[rgba(245,247,249,1)]">
                Quick Link
              </h3>
              <ul className="mt-6 space-y-4 text-[15px] text-[rgba(201,206,214,1)]">
                <li>
                  <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                    Popular Services
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                    Team Member
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                    Privacy &amp; Setting
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                    Pricing Package
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
            <h3 className="text-base md:text-[22px] font-semibold tracking-wide text-[rgba(245,247,249,1)]">Get In Touch</h3>

              <ul className="mt-6 space-y-5 text-[15px] text-[rgba(201,206,214,1)]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[rgba(234,193,90,1)]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="leading-6">
                    55 Main Street, 2nd block
                    <br />
                    Malborne, Australia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[rgba(234,193,90,1)]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <a
                    href="mailto:support@gmail.com"
                    className="leading-6 transition-colors hover:text-[rgba(245,247,249,1)]"
                  >
                    support@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[rgba(234,193,90,1)]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <a href="tel:+0012345688" className="leading-6 transition-colors hover:text-[rgba(245,247,249,1)]">
                    +000 (123) 456 88
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-base md:text-[22px] font-semibold tracking-wide text-[rgba(245,247,249,1)]">Newsletter</h3>
              <p className="mt-6 text-[15px] leading-6 text-[rgba(201,206,214,1)]">Get more update to join us</p>

              <form
                className="mt-6"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
                aria-label="Newsletter subscription"
              >
                <div className="flex items-center">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="h-12 w-full rounded-full border border-[rgba(255,255,255,0.08)] bg-white/95 px-4 pr-12 text-[15px] text-[rgba(17,24,39,1)] placeholder:text-[rgba(107,114,128,1)] outline-none ring-2 ring-transparent transition focus:ring-[rgba(110,90,240,0.35)]"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email"
                    className="ml-[-44px] inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(110,90,240,1)] text-white shadow-[0_6px_18px_rgba(110,90,240,0.45)] transition hover:bg-[rgba(98,79,224,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(110,90,240,0.6)]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-[rgba(255,255,255,0.06)]" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-6 py-6 text-sm text-[rgba(156,163,175,1)] md:flex-row">
            <nav aria-label="Footer secondary" className="flex items-center gap-8">
              <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                FAQs
              </a>
              <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                Company
              </a>
              <a className="transition-colors hover:text-[rgba(245,247,249,1)]" href="#">
                Privacy
              </a>
            </nav>

            <p className="text-center">
              © 2025 • <span className="font-medium text-[rgba(245,247,249,1)]">Stealth Digital</span>, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* --- Local helper components (inline SVG icons + social button) --- */

function IconButton({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(27,31,36,0.75)] text-[rgba(245,247,249,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-[rgba(27,31,36,0.95)]"
    >
      <span className="h-5 w-5">{children}</span>
    </a>
  )
}
