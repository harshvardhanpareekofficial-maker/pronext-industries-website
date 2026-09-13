"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "header is-scrolled" : "header"}>
      <div className="shell header-main">
        <Link className="brand" href="/">
          <span className="brand-type">
            Pronext
            <span>Industries</span>
          </span>
        </Link>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(true)}>
          <IconMenu />
          <span className="visually-hidden">Open menu</span>
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary">
          <button className="nav-close" type="button" onClick={() => setOpen(false)}>
            <IconClose />
            <span className="visually-hidden">Close menu</span>
          </button>
          {nav
            .filter((item) => item.href !== "/" && item.href !== "/contact/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href || pathname?.startsWith(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          <a className="nav-phone" href={site.phones[0].href}>
            {site.phones[0].display}
          </a>
          <Link className="nav-quote" href="/contact/">
            Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
