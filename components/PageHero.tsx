type Props = {
  drawing: string;
  title: string;
  lede: string;
};

export function PageHero({ drawing, title, lede }: Props) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="page-meta data">
          <span>{drawing}</span>
          <span>REV 00</span>
          <span>CHAKAN WORKS</span>
        </p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
