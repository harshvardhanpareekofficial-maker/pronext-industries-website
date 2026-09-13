import type { CSSProperties } from "react";
import { Frame } from "./Frame";
import { Ornament } from "./Ornament";

type Props = {
  title: string;
  lede: string;
  image?: { src: string; alt: string; wide?: boolean };
};

export function PageHero({ title, lede, image }: Props) {
  return (
    <section className="page-hero">
      <div className={image ? "shell page-hero-grid" : "shell"}>
        <div className="page-hero-copy">
          <Ornament />
          <h1 className="hero-in" style={{ "--d": "0.12s" } as CSSProperties}>
            {title}
          </h1>
          <p className="lede hero-in" style={{ "--d": "0.26s" } as CSSProperties}>
            {lede}
          </p>
        </div>
        {image ? (
          <Frame
            ken
            className={image.wide ? "page-hero-media wide" : "page-hero-media"}
            src={image.src}
            alt={image.alt}
          />
        ) : null}
      </div>
    </section>
  );
}
