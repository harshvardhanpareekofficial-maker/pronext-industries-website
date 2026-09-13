type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function Frame({ src, alt, className }: Props) {
  return (
    <figure className={className ? `frame ${className}` : "frame"}>
      <img src={src} alt={alt} />
    </figure>
  );
}
