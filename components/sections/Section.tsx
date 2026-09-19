export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full px-6 py-[calc(var(--plinth-space)/2)]">
      <div className="mx-auto w-full max-w-3xl">
        {heading ? (
          <h2 className="mb-8 text-2xl font-bold text-ink tracking-tight pb-3 border-b-2 border-accent">
            {heading}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
