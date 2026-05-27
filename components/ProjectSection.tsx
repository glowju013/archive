import Image from "next/image";

type ProjectSectionProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  work?: {
    title: string;
    description: string;
    items: readonly string[];
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    frameClassName?: string;
  };
  priority?: boolean;
};

export default function ProjectSection({
  id,
  label,
  title,
  description,
  work,
  image,
  priority = false,
}: ProjectSectionProps) {
  return (
    <section id={id} className="mx-auto flex w-full max-w-[1100px] scroll-mt-10 flex-col gap-8">
      <div className="surface-panel flex flex-col gap-5 p-6 md:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-[var(--muted)]">{label}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-6xl">
            {title}
          </h2>
        </div>
        <p className="max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {description}
        </p>
      </div>
      <div className="surface-panel overflow-hidden p-3 md:p-4">
        <div className={work ? "grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start" : "w-full"}>
          <div className={image.frameClassName ?? "w-full"}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={priority}
              className="h-auto w-full rounded-[1rem] border border-[var(--line)]"
            />
          </div>
          {work ? (
            <aside className="rounded-[1rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-[var(--muted)]">{work.title}</p>
                <p className="text-sm leading-7 text-[var(--muted)]">{work.description}</p>
              </div>
              <ul className="mt-5 grid gap-3">
                {work.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[0.875rem] border border-[var(--line)] bg-white px-4 py-3 text-sm leading-6 text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
