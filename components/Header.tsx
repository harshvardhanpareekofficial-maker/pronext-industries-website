"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlay = pathname === "/" || pathname === "/contact/";

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
    <header className={overlay ? "header header-overlay" : "header"}>
      <div className="header-bar">
        <Link className="brand" href="/">
          Pronext
          <span>Industries</span>
        </Link>
        <div className="header-end">
          <Link className="nav-quote" href="/contact/">
            Quote
          </Link>
          <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(true)}>
            <IconMenu />
            <span className="visually-hidden">Open menu</span>
          </button>
        </div>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary">
          <button className="nav-close" type="button" onClick={() => setOpen(false)}>
            <IconClose />
            <span className="visually-hidden">Close menu</span>
          </button>
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href || (item.href !== "/contact/" && pathname?.startsWith(item.href)) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          <a href={site.phones[0].href}>{site.phones[0].display}</a>
        </nav>
      </div>
    </header>
  );
}
