import { introContent } from "@/lib/siteContent";

export default function IntroSection() {
  return (
    <section className="mx-auto flex min-h-[62vh] w-full max-w-[1100px] flex-col justify-center gap-8">
      <div className="surface-panel flex flex-col gap-8 p-6 md:p-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-[var(--muted)]">Introduction</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--foreground)] md:text-6xl">
            {introContent.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {introContent.description}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {introContent.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="rounded-[1rem] border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-4 transition-colors duration-200 hover:bg-[var(--surface)]"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {link.label}
                </span>
                <span className="text-base font-semibold break-all text-[var(--foreground)]">
                  {link.href}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="#ceep"
          className="inline-flex w-fit items-center rounded-xl border border-[var(--line)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface-strong)]"
        >
          프로젝트 보기
        </a>
      </div>
    </section>
  );
}
