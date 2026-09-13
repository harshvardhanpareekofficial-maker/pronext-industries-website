import { IconPhone } from "./Icons";
import { site } from "@/lib/site";

export function StickyCall() {
  const phone = site.phones[0];
  return (
    <a className="sticky-call" href={phone.href}>
      <IconPhone />
      Call the plant
    </a>
  );
}
