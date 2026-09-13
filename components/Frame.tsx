import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  ken?: boolean;
};

export function Frame({ src, alt, className, ken = false }: Props) {
  const classes = ["frame", ken ? "frame-ken" : "", className].filter(Boolean).join(" ");

  return (
    <figure className={classes}>
      <Image src={src} alt={alt} fill sizes="(max-width: 960px) 100vw, 55vw" />
    </figure>
  );
}
