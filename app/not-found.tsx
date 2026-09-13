import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="shell">
        <h1>This page is not here.</h1>
        <p className="lede">That route is not one we publish. Return home, or send a quote.</p>
        <p>
          <Link className="btn" href="/">
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}
