import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  ChartNoAxesCombined,
  FileText,
  Megaphone,
  Monitor,
  MousePointerClick,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CasesSection from "./CasesSection";

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1745323309688-fc2639112546?auto=format&fit=crop&w=1800&q=80";
const contactBackgroundImage =
  "https://images.unsplash.com/photo-1745323309688-fc2639112546?auto=format&fit=crop&w=1800&q=80";
const heroPortraitImage = "/images/Portrett%20J%C3%B8rgen%202.png";
const processPortraitImage = "/images/Portrett%20J%C3%B8rgen%201.png";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type PricingItem = {
  title: string;
  price?: string;
  outcomes?: string[];
  bullets: string[];
  cta: string;
  emphasis?: "dark" | "light";
};

type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

const serviceItems: ServiceItem[] = [
  {
    title: "Synlighet",
    description:
      "Hjelp med lokal synlighet, søk, Google-profil og tydeligere tilstedeværelse der folk faktisk leter.",
    icon: Search,
  },
  {
    title: "Nettsider",
    description:
      "Nettsider og landingssider som gjør det enklere å forstå tilbudet og enklere å ta kontakt.",
    icon: Monitor,
  },
  {
    title: "Markedsføring",
    description:
      "Annonsering, innhold og optimalisering med fokus på flere henvendelser, ikke bare flere klikk.",
    icon: Megaphone,
  },
  {
    title: "AI og automatisering",
    description:
      "Praktiske oppsett som sparer tid, gjør arbeidsflyten enklere og gir bedre beslutningsgrunnlag.",
    icon: Bot,
  },
];

const pricingItems: PricingItem[] = [
  {
    title: "Synlighetsanalyse",
    price: "2 900 kr",
    outcomes: [
      "Oversikt over hva som holder tilbake synlighet og henvendelser",
      "En prioritert handlingsplan med anbefalte tiltak",
    ],
    bullets: [
      "Gjennomgang av nettside",
      "Google-profil og synlighet",
      "Konkurrentanalyse",
      "AI-synlighet",
      "Prioritert handlingsplan",
    ],
    cta: "Start med analyse",
  },
  {
    title: "Få flere henvendelser",
    price: "Fra 7 900 kr",
    outcomes: [
      "En nettside og synlighet som er bygget for flere henvendelser",
      "Løpende forbedringer basert på data",
    ],
    bullets: [
      "Nettsideforbedringer",
      "Struktur og budskap",
      "Konverteringsforbedringer",
      "SEO og synlighet",
      "Implementering",
    ],
    cta: "Forbedre nettsiden",
    emphasis: "dark",
  },
  {
    title: "Fast samarbeid",
    price: "Fra 4 900 kr / mnd",
    outcomes: [
      "En sparringspartner som følger opp forbedringsarbeidet",
      "Prioriterte tiltak og forbedringer hver måned",
    ],
    bullets: [
      "Månedlig oppfølging",
      "Analyse og rapportering",
      "Prioritering av tiltak",
      "AI-verktøy og automatisering",
      "Løpende forbedringer",
    ],
    cta: "Utforsk samarbeid",
  },
  {
    title: "Usikker på hva du trenger?",
    bullets: [
      "Kort sparring om hvor flaskehalsen ligger",
      "Hjelp til å velge riktig løsning",
      "Passer for dere som vil starte enkelt",
    ],
    cta: "Book en kort prat",
  },
];

const additionalServiceItems: ServiceItem[] = [
  {
    title: "Innhold og kreativer",
    description:
      "Ideer, manus, UGC-konsepter, annonsemateriell og innhold til sosiale medier.",
    icon: FileText,
  },
  {
    title: "Annonsering",
    description:
      "Oppsett, testing og optimalisering av Meta Ads, Google Ads og Snapchat Ads.",
    icon: Megaphone,
  },
  {
    title: "SEO og lokal synlighet",
    description:
      "Forbedringer som gjør det enklere å bli funnet av relevante kunder i Google.",
    icon: Search,
  },
  {
    title: "Analyse og rapportering",
    description:
      "Enklere oversikt over hva som fungerer, hva som bør forbedres og hva som bør prioriteres.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "AI og automatisering",
    description:
      "Små systemer og arbeidsflyter som sparer tid og gjør markedsføringen mer effektiv.",
    icon: Bot,
  },
  {
    title: "Konverteringsforbedring",
    description:
      "Forbedring av budskap, struktur, CTA-er og brukerflyt for å få flere henvendelser.",
    icon: MousePointerClick,
  },
];

const experienceBlocks = [
  "Kombinerer markedsføring, nettsider og analyse",
  "Fokus på tiltak som gir størst effekt først",
  "Erfaring fra både lokale bedrifter og internasjonale markeder",
  "Ser helheten mellom trafikk, nettside og konvertering",
  "Bygger egne systemer og AI-verktøy for å jobbe smartere",
  "Kontinuerlig testing, måling og forbedring",
];

const skillTags = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Nettsider",
  "Analyse",
  "Konverteringsforbedring",
  "AI & automatisering",
  "Innholdsstrategi",
  "Innholdsproduksjon",
  "UGC og kreativer",
  "Rapportering",
  "Leadgenerering",
];

const statsSectionItems = [
  { value: "5,2 MNOK+", label: "Administrert annonsebudsjett" },
  { value: "41 M+", label: "Annonsevisninger" },
  { value: "3,8 M+", label: "Personer nådd" },
  { value: "586k+", label: "Klikk generert" },
  { value: "495+", label: "Annonser kjørt" },
  { value: "45+", label: "Kampanjer administrert" },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Tjenester",
    links: [
      { label: "Synlighet", href: "#services" },
      { label: "Nettsider", href: "#services" },
      { label: "AI og automatisering", href: "#services" },
      { label: "Analyse", href: "#services" },
    ],
  },
  {
    title: "Cases",
    links: [
      { label: "Lildog", href: "#cases" },
      { label: "Eyra", href: "#cases" },
      { label: "AI-verktøy og automasjon", href: "#cases" },
      { label: "Nettsider og synlighet", href: "#cases" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Send e-post", href: "mailto:bergjorgen9@gmail.com" },
      { label: "Ring meg", href: "tel:+4746463410" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/j%C3%B8rgen-berg-61b6a3b7/" },
      { label: "CV og portefølje", href: "/" },
    ],
  },
];

export const metadata: Metadata = {
  title: "For bedrifter | Jørgen Berg",
  description:
    "Praktisk markedsføring, nettsider, innhold og systemer for bedrifter som vil vokse raskere.",
};

function ProcessSection() {
  return (
    <section id="process" className="py-12 scroll-mt-24 lg:py-14">
      <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(145deg,#111714_0%,#1a2320_48%,#202d28_100%)] py-12 text-white shadow-[0_24px_66px_rgba(15,20,18,0.22)] lg:py-14">
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch lg:gap-10">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/6 shadow-[0_18px_42px_rgba(0,0,0,0.16)] min-h-[21rem] sm:min-h-[26rem] lg:h-full lg:min-h-[34rem]">
              <Image
                src={processPortraitImage}
                alt="Portrett av Jørgen Berg"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-[62%_18%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,12,0.04)_0%,rgba(8,13,12,0.18)_52%,rgba(8,13,12,0.32)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(61,125,97,0.12),transparent_24%)]" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="max-w-3xl">
                <p className="eyebrow text-xs font-semibold text-white/52">Hvordan jeg jobber</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Hvordan jeg skaper resultater
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/64 sm:text-base">
                  De fleste bedrifter trenger ikke flere ideer. De trenger å finne hva som faktisk
                  holder dem tilbake, prioritere riktig og gjennomføre forbedringer som kan måles.
                </p>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-3">
                {[
                  {
                    icon: Search,
                    title: "Finn flaskehalsen",
                    body: "Jeg finner hvor kunder faller av og hva som hindrer vekst.",
                  },
                  {
                    icon: Megaphone,
                    title: "Prioriter riktig",
                    body: "Jeg fokuserer på tiltak som gir størst effekt først.",
                  },
                  {
                    icon: Bot,
                    title: "Test og optimaliser",
                    body: "Jeg bruker data til å forbedre resultater over tid.",
                  },
                ].map((item) => {
                  const StepIcon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/8 text-white/82">
                        <StepIcon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/64">{item.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ForBedrifterPage() {
  return (
    <main className="relative overflow-hidden">
      <section
        id="top"
        className="relative isolate min-h-[680px] overflow-hidden text-white lg:min-h-[780px]"
      >
        <Image
          src={heroBackgroundImage}
          alt="Moderne arkitektur i et urbant forretningsmiljø"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,12,0.94)_0%,rgba(8,13,12,0.88)_42%,rgba(8,13,12,0.68)_72%,rgba(8,13,12,0.8)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,125,97,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(222,199,153,0.08),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[680px] w-full max-w-7xl flex-col px-6 pb-10 pt-6 sm:px-8 lg:min-h-[780px] lg:px-12">
          <header className="relative z-20 flex items-center justify-between rounded-full border border-white/12 bg-black/18 px-5 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              Jørgen Berg
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-white/74 md:flex">
              <a href="#services" className="hover:text-white">
                Hjelp
              </a>
              <a href="#cases" className="hover:text-white">
                Cases
              </a>
              <a href="#process" className="hover:text-white">
                Hvordan jeg jobber
              </a>
              <a href="#contact" className="hover:text-white">
                Kontakt
              </a>
            </nav>
          </header>

          <div className="relative z-10 grid flex-1 items-center gap-14 py-16 lg:grid-cols-[0.96fr_0.7fr] lg:gap-20 lg:py-20">
            <div className="max-w-3xl">
              <h1 className="max-w-3xl text-4xl leading-[0.92] font-semibold tracking-[-0.07em] text-balance sm:text-5xl lg:text-[4.15rem]">
                Mer synlighet. Flere henvendelser. Mindre gjetting.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                Jeg hjelper bedrifter med analyse, nettsider, markedsføring og praktisk
                gjennomføring av tiltak som kan måles, prioriteres og forbedres over tid.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--foreground)] shadow-[0_18px_44px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
                >
                  Book en kort prat
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/32"
                >
                  Se hvordan jeg kan hjelpe
                </a>
              </div>
              <p className="mt-7 text-sm text-white/52">
                Basert i Trondheim — jobber med både lokale og digitale selskaper.
              </p>
            </div>

            <div className="hidden items-center justify-end lg:flex">
              <article className="relative w-full max-w-[21.5rem] translate-y-2 overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-2 shadow-[0_30px_78px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(93,143,115,0.1),transparent_24%)]" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-black/20">
                  <div className="relative aspect-[0.84] overflow-hidden">
                    <Image
                      src={heroPortraitImage}
                      alt="Jørgen Berg i portrett"
                      fill
                      sizes="22rem"
                      className="object-cover object-[center_22%] grayscale contrast-[1.08] brightness-[0.84] scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,12,0.01)_0%,rgba(8,13,12,0.16)_46%,rgba(8,13,12,0.58)_100%)]" />
                  </div>
                  <div className="relative px-5 py-4">
                    <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">
                      Jørgen Berg
                    </p>
                    <p className="mt-1 text-sm text-white/82">Digital markedsfører</p>
                    <p className="mt-1.5 text-sm leading-6 text-white/56">
                      Jobber med annonsering, nettsider, analyse og digitale prosjekter for små
                      og mellomstore bedrifter.
                    </p>
                    <div className="mt-3">
                      <span className="rounded-full border border-white/18 bg-black/12 px-3 py-1 text-xs text-white/78">
                        Trondheim
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        <section id="services" className="py-6 scroll-mt-24 lg:py-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-xs font-semibold">Hva jeg hjelper med</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Praktisk hjelp med det som faktisk påvirker resultatene
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base">
              Tydelige leveranser, roligere struktur og fokus på de områdene der bedrifter faktisk
              taper synlighet, henvendelser eller fremdrift.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-[rgba(17,23,20,0.08)] bg-[linear-gradient(145deg,rgba(252,253,251,0.94),rgba(239,244,240,0.92))] p-6 shadow-[0_18px_46px_rgba(34,42,37,0.06)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[var(--accent-soft)] text-[var(--accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-12 lg:py-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-xs font-semibold">Tall fra de siste 12 månedene</p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              Basert på arbeid med markedsføring, annonsering, nettsider og digitale prosjekter de
              siste 12 månedene.
            </p>
          </div>

          <div className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-y-0">
            {statsSectionItems.map((item) => (
              <article
                key={item.label}
                className="xl:border-l xl:border-[rgba(17,23,20,0.1)] xl:px-5 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
              >
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--accent)] sm:text-[2.25rem]">
                  {item.value}
                </p>
                <p className="mt-2.5 max-w-[12rem] text-sm leading-6 text-[var(--muted)]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <CasesSection />

        <ProcessSection />

        <section id="pricing" className="py-12 scroll-mt-24 lg:py-14">
          <div className="overflow-hidden rounded-[2.3rem] bg-[linear-gradient(145deg,rgba(250,252,249,0.96),rgba(235,241,236,0.94))] py-12 shadow-[0_22px_56px_rgba(34,42,37,0.07)] lg:py-14">
            <div className="px-6 sm:px-8 lg:px-10">
              <div className="max-w-3xl">
                <p className="eyebrow text-xs font-semibold">Tre måter å jobbe sammen</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Velg en enkel start som passer behovet deres
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base">
                  Tydelige pakker for bedrifter som vil starte med analyse, forbedring eller løpende
                  samarbeid. Den siste er for dere som bare vil finne riktig vei først.
                </p>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-4">
                {pricingItems.map((item) => (
                  <article
                    key={item.title}
                    className={`rounded-[1.9rem] border p-6 shadow-[0_18px_46px_rgba(34,42,37,0.06)] ${
                      item.emphasis === "dark"
                        ? "border-[rgba(17,23,20,0.08)] bg-[linear-gradient(145deg,#111714_0%,#1a2320_48%,#202d28_100%)] text-white"
                        : "border-[rgba(17,23,20,0.08)] bg-white/78"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-semibold tracking-[-0.04em] ${
                        item.emphasis === "dark" ? "text-white" : "text-[var(--foreground)]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.price ? (
                      <p
                        className={`mt-3 text-3xl font-semibold tracking-[-0.05em] ${
                          item.emphasis === "dark" ? "text-white" : "text-[var(--foreground)]"
                        }`}
                    >
                      {item.price}
                    </p>
                    ) : null}
                    {item.outcomes ? (
                      <div
                        className={`mt-5 rounded-[1rem] px-4 py-3 text-sm ${
                          item.emphasis === "dark"
                            ? "border border-white/10 bg-white/7 text-white/72"
                            : "border border-[rgba(17,23,20,0.08)] bg-[var(--accent-soft)]/55 text-[var(--muted)]"
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                            item.emphasis === "dark" ? "text-white/52" : "text-[var(--foreground)]/58"
                          }`}
                        >
                          Du får:
                        </p>
                        <div className="mt-1.5 grid gap-1">
                          {item.outcomes.map((outcome) => (
                            <p key={outcome} className="leading-5.5">
                              • {outcome}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    <div className="mt-5 grid gap-2">
                      {item.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className={`rounded-[1rem] px-4 py-3 text-sm ${
                            item.emphasis === "dark"
                              ? "border border-white/10 bg-white/8 text-white/76"
                              : "border border-[rgba(17,23,20,0.08)] bg-white/76 text-[var(--muted)]"
                          }`}
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                        item.emphasis === "dark"
                          ? "bg-white text-[var(--foreground)] shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
                          : "bg-[var(--foreground)] text-white shadow-[0_16px_36px_rgba(17,23,20,0.14)]"
                      }`}
                    >
                      {item.cta}
                    </a>
                  </article>
                ))}
              </div>

              <div className="mt-12 border-t border-[rgba(17,23,20,0.09)] pt-10">
                <div className="max-w-3xl">
                  <p className="eyebrow text-xs font-semibold">Mer jeg kan hjelpe med</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    Trenger dere hjelp med mer enn nettsiden?
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base">
                    Mange bedrifter taper synlighet og henvendelser fordi innhold, annonser,
                    nettside og analyse ikke henger godt nok sammen. Jeg kan hjelpe med konkrete
                    oppgaver som gjør markedsføringen enklere å gjennomføre og lettere å forbedre.
                  </p>
                </div>

                <div className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
                  {additionalServiceItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="flex gap-4 rounded-[1.35rem] border border-[rgba(17,23,20,0.07)] bg-white/48 p-4 shadow-[0_10px_28px_rgba(34,42,37,0.035)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                          <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                        </span>
                        <div>
                          <h4 className="text-base font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 scroll-mt-24 lg:py-14">
          <div className="overflow-hidden rounded-[2.2rem] border border-[rgba(17,23,20,0.08)] bg-[linear-gradient(145deg,rgba(252,253,251,0.96),rgba(238,244,239,0.94))] py-12 shadow-[0_18px_46px_rgba(34,42,37,0.06)] lg:py-14">
            <div className="px-6 sm:px-8 lg:px-10">
              <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
                <div className="max-w-md">
                  <p className="eyebrow text-xs font-semibold">Hvorfor jobbe med meg</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    Hvorfor bedrifter velger å jobbe med meg
                  </h2>
                  <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
                    Jeg kombinerer markedsføring, nettsider, analyse og AI-verktøy i én prosess.
                    Målet er ikke flere rapporter eller flere ideer, men konkrete forbedringer som
                    skaper flere henvendelser og bedre resultater.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {experienceBlocks.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.45rem] border border-[rgba(17,23,20,0.08)] bg-white/78 px-4 py-4 shadow-[0_10px_24px_rgba(34,42,37,0.05)]"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-6 text-[var(--foreground)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.9rem] border border-[rgba(17,23,20,0.08)] bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(246,249,245,0.9))] p-5 shadow-[0_14px_34px_rgba(34,42,37,0.05)] sm:p-6">
                <p className="text-sm font-semibold text-[var(--foreground)]">Arbeidsområder</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(17,23,20,0.08)] bg-white px-3.5 py-2 text-sm text-[var(--muted)] shadow-[0_6px_16px_rgba(34,42,37,0.04)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 scroll-mt-24 lg:py-16">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 p-8 text-white shadow-[0_36px_100px_rgba(8,16,14,0.22)] sm:p-10 lg:p-12">
            <Image
              src={contactBackgroundImage}
              alt="Moderne arkitektur i et urbant forretningsmiljø"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,14,13,0.92)_0%,rgba(8,14,13,0.78)_46%,rgba(8,14,13,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,125,97,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(210,184,134,0.08),transparent_20%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow text-xs font-semibold text-white/62">Kontakt</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                  Har du et prosjekt eller en utfordring?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                  Send en kort melding om hva dere ønsker å forbedre, så ser jeg raskt om jeg kan
                  hjelpe og hvor det er smartest å starte.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.08))] p-5 backdrop-blur-md">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/48">
                  Kort vei til prat
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="mailto:bergjorgen9@gmail.com"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--foreground)] shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-0.5"
                  >
                    Book en prat
                  </a>
                  <a
                    href="https://www.linkedin.com/in/j%C3%B8rgen-berg-61b6a3b7/"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur hover:-translate-y-0.5"
                  >
                    LinkedIn
                  </a>
                  <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-transparent px-6 text-sm font-medium text-white/82 hover:-translate-y-0.5 hover:text-white"
                  >
                    Se CV og portefølje
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[rgba(17,23,20,0.08)] py-10">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                Berg Digital
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Trondheim, Norge
                <br />
                +47 464 63 410
                <br />
                bergjorgen9@gmail.com
                <br />
                Org.nr. 937 024 118
              </p>
              <p className="mt-4 text-xs text-[var(--muted)]">
                © 2026 Berg Digital. Alle rettigheter forbeholdt.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerLinkGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{group.title}</p>
                  <div className="mt-3 flex flex-col gap-2">
                    {group.links.map((link) =>
                      link.href.startsWith("/") ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                        >
                          {link.label}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
