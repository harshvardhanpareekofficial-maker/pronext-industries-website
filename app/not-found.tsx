import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="page-meta data">PN-404</p>
        <h1>Sheet not on file.</h1>
        <p className="lede">That route is not a drawing we issue. Return to the works or send a quote.</p>
        <p>
          <Link className="btn" href="/">
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}
