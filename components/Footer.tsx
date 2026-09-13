import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <h2 style={{ fontSize: "2.6rem", fontStyle: "italic" }}>ProNext Industries</h2>
          <p>
            Scaffolding and formwork production from Chakan, Pune. Manufacturing since {site.founded}. {site.qualityClaim}.
          </p>
          <p>
            {site.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3>Works</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.raw}>
                <a href={phone.href}>{phone.display}</a>
              </li>
            ))}
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link href="/products/">Products</Link>
            </li>
            <li>
              <Link href="/manufacturing/">Manufacturing</Link>
            </li>
            <li>
              <Link href="/quality/">Quality & delivery</Link>
            </li>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ</Link>
            </li>
            <li>
              <Link href="/contact/">Request a quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
