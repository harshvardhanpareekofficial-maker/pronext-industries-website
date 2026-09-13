import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function Frame({ src, alt, className }: Props) {
  return (
    <figure className={className ? `frame ${className}` : "frame"}>
      <Image src={src} alt={alt} fill sizes="(max-width: 860px) 100vw, 55vw" />
    </figure>
  );
}
