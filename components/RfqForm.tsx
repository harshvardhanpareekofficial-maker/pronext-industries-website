"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
};

const empty: Fields = { name: "", company: "", email: "", phone: "", need: "" };

type Props = {
  glass?: boolean;
};

export function RfqForm({ glass = false }: Props) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const action = useMemo(
    () => (formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined),
    [formspreeId],
  );

  function validate(next: Fields) {
    const e: Partial<Fields> = {};
    if (!next.name.trim()) e.name = "Name is required.";
    if (!next.company.trim()) e.company = "Company is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) e.email = "A working email is required.";
    if (next.phone.replace(/\D/g, "").length < 8) e.phone = "A reachable phone is required.";
    if (next.need.trim().length < 8) e.need = "Describe the parts, finish, quantity, or drawing.";
    return e;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      event.preventDefault();
      setErrors(nextErrors);
      return;
    }

    if (action) {
      return;
    }

    event.preventDefault();
    const subject = encodeURIComponent(`RFQ from ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nNeed:\n${values.need}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent && !action) {
    return (
      <div className="ok" role="status">
        Your mail client should open with the request. If it does not, write {site.email} or call {site.phones[0].display}.
      </div>
    );
  }

  return (
    <form className="rfq" action={action} method={action ? "POST" : "dialog"} onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="rfq-name">Name</label>
        <input
          id="rfq-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        {errors.name ? <p className="error">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="rfq-email">Email</label>
        <input
          id="rfq-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email ? <p className="error">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="rfq-company">Company</label>
        <input
          id="rfq-company"
          name="company"
          autoComplete="organization"
          placeholder="Company"
          value={values.company}
          onChange={(e) => setValues({ ...values, company: e.target.value })}
        />
        {errors.company ? <p className="error">{errors.company}</p> : null}
      </div>
      <div>
        <label htmlFor="rfq-phone">Phone</label>
        <input
          id="rfq-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        {errors.phone ? <p className="error">{errors.phone}</p> : null}
      </div>
      <div className="rfq-wide">
        <label htmlFor="rfq-need">Need</label>
        <textarea
          id="rfq-need"
          name="need"
          placeholder="Tell us about the parts, finish, quantity, or drawing."
          value={values.need}
          onChange={(e) => setValues({ ...values, need: e.target.value })}
        />
        {errors.need ? <p className="error">{errors.need}</p> : null}
      </div>
      <div className="rfq-wide">
        <button className={glass ? "btn btn-cream" : "btn"} type="submit">
          Send request
        </button>
        <p className="quiet" style={{ marginTop: "0.75rem", fontSize: "0.82rem" }}>
          {action
            ? "Submits to the plant inbox via Formspree."
            : `Opens mail to ${site.email}.`}
        </p>
      </div>
    </form>
  );
}
