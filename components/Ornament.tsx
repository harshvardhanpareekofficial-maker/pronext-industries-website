type Props = {
  className?: string;
};

export function Ornament({ className }: Props) {
  return (
    <span className={className ? `ornament ${className}` : "ornament"} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
