interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase opacity-60">
        §{number}
      </span>
      <div className="flex-1 h-px noir-divider" />
    </div>
    <h2 className="text-2xl md:text-3xl text-primary noir-glow">{title}</h2>
    {subtitle && (
      <p className="font-serif text-secondary-foreground italic mt-2 text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
