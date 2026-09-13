import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <h3>Products</h3>
          <ul>
            <li>
              <Link href="/products/#scaffolding">Scaffolding</Link>
            </li>
            <li>
              <Link href="/products/#formwork">Formwork</Link>
            </li>
            <li>
              <Link href="/products/">All products</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Plant</h3>
          <ul>
            <li>
              <Link href="/manufacturing/">Manufacturing</Link>
            </li>
            <li>
              <Link href="/quality/">Quality & delivery</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Works</h3>
          <ul>
            {site.phones.map((phone) => (
              <li key={phone.raw}>
                <a href={phone.href}>{phone.display}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/contact/">Request a quote</Link>
            </li>
            <li>{site.hoursShort}</li>
          </ul>
        </div>
      </div>
      <div className="shell footer-copy">© {new Date().getFullYear()} {site.legalName}. Chakan, Pune.</div>
    </footer>
  );
}
