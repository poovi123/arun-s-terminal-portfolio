import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUp,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Menu,
  MessageSquare,
  Terminal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun — Full Stack Developer" },
      {
        name: "description",
        content: "Portfolio of Arun, a full-stack developer exploring frontend, backend, and AI integrations.",
      },
      { property: "og:title", content: "Arun — Full Stack Developer" },
      {
        property: "og:description",
        content: "Explore Arun's skills, projects, and full-stack development journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navigation = ["About", "Skills", "Projects", "Contact"];
const activeSkills = ["HTML", "CSS", "JavaScript", "Core Java", "JDBC", "JEE", "Spring", "Hibernate", "MongoDB", "SQL"];
const learningSkills = ["React.js", "Next.js", "Node.js", "Express.js", "AI integration"];
const projects = ["Task Manager App", "Weather Dashboard", "Time Table"];

// Replace this single value when Arun's public contact email is ready.
const CONTACT_EMAIL_PLACEHOLDER = "update-me@example.com";

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sections.forEach((section) => section.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="text-xl font-bold tracking-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            ARUN<span className="text-accent">.</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {item}
              </a>
            ))}
            <Button variant="resume" size="lg" disabled title="Résumé file to be added">
              <Download /> Download résumé
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-semibold text-muted-foreground hover:bg-card hover:text-accent">
                  {item}
                </a>
              ))}
              <Button variant="resume" size="lg" className="mt-3 w-full" disabled title="Résumé file to be added">
                <Download /> Download résumé
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-atmosphere relative min-h-[760px] border-b border-border pt-20">
          <div className="mx-auto grid min-h-[680px] max-w-[1200px] items-center gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold text-muted-foreground">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" /> FULL STACK DEVELOPER
              </div>
              <h1 className="max-w-2xl text-5xl leading-[1.04] font-bold tracking-normal sm:text-6xl lg:text-7xl">
                I build for the <span className="text-accent">web.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                I’m Arun, a full-stack developer exploring thoughtful frontend experiences, dependable backend systems, and practical AI integrations.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="terminal" size="lg">
                  <a href="#projects">Explore projects <ArrowDownRight /></a>
                </Button>
                <Button asChild variant="terminalOutline" size="lg">
                  <a href="#contact">Get in touch <MessageSquare /></a>
                </Button>
              </div>
            </div>

            <TerminalVisual />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8" data-reveal>
          <SectionHeading number="01" title="About" eyebrow="The person behind the code" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[15px] border border-border bg-card p-6 sm:p-8">
              <Code2 className="mb-6 size-7 text-accent" aria-hidden="true" />
              <p className="text-lg leading-8 text-muted-foreground">
                I’m a passionate full-stack developer interested in both frontend and backend technologies. I enjoy understanding how complete products come together—from a clear interface to the systems working underneath.
              </p>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                I’m also interested in open-source contributions and the shared learning that happens when developers build in public.
              </p>
            </div>
            <blockquote className="relative flex flex-col justify-between rounded-[15px] border border-accent/40 bg-card p-6 sm:p-8">
              <span className="font-mono text-5xl leading-none text-accent" aria-hidden="true">“</span>
              <p className="my-6 text-xl leading-8 font-semibold">
                Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
              </p>
              <footer className="text-sm text-muted-foreground">— Martin Fowler</footer>
            </blockquote>
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-terminal" data-reveal>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
            <SectionHeading number="02" title="Skills" eyebrow="Tools, foundations, and what’s next" />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <SkillPanel title="Active toolkit" icon={<Braces />} items={activeSkills} className="lg:col-span-2" />
              <SkillPanel title="Learning next" icon={<Terminal />} items={learningSkills} accent />
              <SkillPanel title="Soft skills" icon={<MessageSquare />} items={["Communication", "Problem solving", "Team collaboration"]} />
              <SkillPanel title="Languages" icon={<Check />} items={["English", "Hindi", "Kannada"]} className="lg:col-span-2" />
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8" data-reveal>
          <SectionHeading number="03" title="Projects" eyebrow="A workspace taking shape" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project} className="group overflow-hidden rounded-[15px] border border-border bg-card">
                <ProjectPreview variant={index} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{project}</h3>
                    <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Project details coming soon.</p>
                  <div aria-disabled="true" className="mt-6 inline-flex cursor-not-allowed items-center gap-2 text-sm font-semibold text-muted-foreground opacity-60">
                    Case study unavailable <ExternalLink className="size-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-border" data-reveal>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold text-accent"><span>04</span><span className="h-px w-8 bg-accent" /> CONTACT</div>
                <h2 className="max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">Let’s build something clear, useful, and made for the web.</h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Contact details to be added. Arun’s public contact channel will appear here once confirmed.</p>
              </div>
              <Button variant="terminalOutline" size="lg" disabled data-contact-placeholder={CONTACT_EMAIL_PLACEHOLDER} title="Contact details to be added">
                Contact details pending <ChevronRight />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Arun. Built with intent.</p>
          <Button asChild variant="ghost" size="sm">
            <a href="#top" aria-label="Back to top">Back to top <ArrowUp /></a>
          </Button>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ number, title, eyebrow }: { number: string; title: string; eyebrow: string }) {
  return (
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs font-semibold text-accent"><span>{number}</span><span className="h-px w-8 bg-accent" /></div>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground">{eyebrow}</p>
    </div>
  );
}

function TerminalVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-label="Decorative code editor illustration">
      <div className="absolute -inset-8 bg-accent/5 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[15px] border border-border bg-terminal">
        <div className="flex h-12 items-center justify-between border-b border-border px-4">
          <div className="flex gap-2" aria-hidden="true"><span className="size-2 rounded-full bg-muted-foreground/35" /><span className="size-2 rounded-full bg-muted-foreground/35" /><span className="size-2 rounded-full bg-accent" /></div>
          <span className="font-mono text-[11px] text-muted-foreground">arun.dev / portfolio.tsx</span>
        </div>
        <div className="terminal-grid p-5 sm:p-7">
          <pre className="overflow-hidden font-mono text-[12px] leading-7 text-muted-foreground sm:text-sm"><code><span className="text-accent">const</span> developer = {`{`}<br />  name: <span className="text-foreground">"Arun"</span>,<br />  role: <span className="text-foreground">"Full Stack Developer"</span>,<br />  focus: [<br />    <span className="text-foreground">"frontend"</span>,<br />    <span className="text-foreground">"backend"</span>,<br />    <span className="text-foreground">"AI integration"</span><br />  ],<br />  curiosity: <span className="text-accent">true</span><br />{`}`};</code></pre>
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground"><span className="text-accent">➜</span><span>building the next idea</span><span className="h-4 w-2 animate-pulse bg-accent" aria-hidden="true" /></div>
        </div>
      </div>
      <div className="absolute -right-3 -bottom-5 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground sm:-right-5"><span className="size-2 rounded-full bg-accent" /> OPEN TO LEARNING</div>
    </div>
  );
}

function SkillPanel({ title, icon, items, accent = false, className = "" }: { title: string; icon: React.ReactNode; items: string[]; accent?: boolean; className?: string }) {
  return (
    <article className={`rounded-[15px] border ${accent ? "border-accent/40" : "border-border"} bg-card p-6 ${className}`}>
      <div className="mb-6 flex items-center gap-3 text-sm font-bold text-foreground"><span className="text-accent [&>svg]:size-5">{icon}</span>{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => <span key={item} className="rounded-full border border-border bg-background/30 px-3 py-2 text-xs font-semibold text-muted-foreground">{item}</span>)}
      </div>
    </article>
  );
}

function ProjectPreview({ variant }: { variant: number }) {
  if (variant === 0) return (
    <div className="terminal-grid flex h-48 items-center justify-center border-b border-border bg-terminal p-6" aria-hidden="true">
      <div className="w-full max-w-[220px] rounded-lg border border-border bg-card p-4"><div className="mb-4 flex items-center justify-between"><span className="h-2 w-20 rounded-full bg-accent/80" /><span className="size-4 rounded border border-accent" /></div>{["w-full", "w-4/5", "w-3/5"].map((width, i) => <div key={width} className="mb-2 flex items-center gap-2"><span className={`size-3 rounded-sm ${i === 0 ? "bg-accent" : "border border-border"}`} /><span className={`h-2 ${width} rounded-full bg-muted-foreground/20`} /></div>)}</div>
    </div>
  );
  if (variant === 1) return (
    <div className="terminal-grid flex h-48 items-center justify-center border-b border-border bg-terminal p-6" aria-hidden="true">
      <div className="flex items-end gap-6"><div className="relative size-24 rounded-full border border-accent/50"><span className="absolute inset-4 rounded-full border border-border" /><span className="absolute top-1/2 left-1/2 h-px w-10 origin-left -rotate-45 bg-accent" /><span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" /></div><div className="pb-1"><p className="font-mono text-3xl font-bold text-foreground">24°</p><div className="mt-3 h-2 w-16 rounded-full bg-accent/60" /><div className="mt-2 h-2 w-10 rounded-full bg-muted-foreground/20" /></div></div>
    </div>
  );
  return (
    <div className="terminal-grid flex h-48 items-center justify-center border-b border-border bg-terminal p-6" aria-hidden="true">
      <div className="grid w-full max-w-[235px] grid-cols-5 gap-2">{Array.from({ length: 15 }, (_, i) => <span key={i} className={`h-7 rounded-sm border ${[2, 6, 8, 12].includes(i) ? "border-accent bg-accent/15" : "border-border bg-card"}`} />)}</div>
    </div>
  );
}