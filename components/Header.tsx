"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMark, IconMenu } from "./Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="shell header-register">
        <span>DWG PN-WEB · {site.hoursShort}</span>
        <span>
          <a href={site.phones[0].href}>{site.phones[0].display}</a>
          {" · "}
          <a href={site.phones[1].href}>{site.phones[1].display}</a>
          {" · "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
      <div className="shell header-main">
        <Link className="brand" href="/">
          <IconMark className="brand-mark" />
          <span className="brand-type">
            PRONEXT
            <span>INDUSTRIES PVT. LTD.</span>
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
          {nav.map((item) =>
            item.href === "/contact/" ? (
              <Link key={item.href} className="nav-quote" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
