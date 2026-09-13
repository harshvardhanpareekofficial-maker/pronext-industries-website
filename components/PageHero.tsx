import { Frame } from "./Frame";

type Props = {
  title: string;
  lede: string;
  image?: { src: string; alt: string; wide?: boolean };
};

export function PageHero({ title, lede, image }: Props) {
  return (
    <section className="page-hero">
      <div className={image ? "shell page-hero-grid" : "shell"}>
        <div>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
        {image ? (
          <Frame className={image.wide ? "page-hero-media wide" : "page-hero-media"} src={image.src} alt={image.alt} />
        ) : null}
      </div>
    </section>
  );
}
