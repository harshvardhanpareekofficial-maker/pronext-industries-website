import { Frame } from "./Frame";

type Props = {
  title: string;
  lede: string;
  image?: { src: string; alt: string };
};

export function PageHero({ title, lede, image }: Props) {
  return (
    <section className="page-hero">
      <div className="shell">
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
      {image ? <Frame className="wide-plate" src={image.src} alt={image.alt} /> : null}
    </section>
  );
}
