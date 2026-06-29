import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Clapperboard,
  Headset,
  Languages,
  MapPin,
  Megaphone,
  Monitor,
  Route,
  ShoppingCart,
  UserRoundCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const heroBackgroundImage = "/images/Hero1.jpg";
const contactBackgroundImage =
  "https://images.unsplash.com/photo-1745323309688-fc2639112546?auto=format&fit=crop&w=1800&q=80";
const primaryPortraitImage = "/images/Portrett%20J%C3%B8rgen%202.png";

type SkillItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual:
    | {
        type: "image";
        src: string;
        alt: string;
        className?: string;
      }
    | {
        type: "leadSystem";
      };
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
  logo: string;
  logoAlt: string;
  isCurrent?: boolean;
};

type PersonalImageCard = {
  title: string;
  image: string;
  imageAlt: string;
  align?: string;
};

const skillItems: SkillItem[] = [
  {
    title: "Betalt markedsføring",
    description:
      "Planlegging, oppsett, testing og optimalisering av kampanjer i Meta, Google og andre kanaler.",
    icon: Megaphone,
  },
  {
    title: "Content og creatives",
    description:
      "Video, statiske annonser, UGC-scripts, annonsetekster og innhold som kan testes raskt.",
    icon: Clapperboard,
  },
  {
    title: "Nettsider og landingssider",
    description:
      "Bygging og forbedring av sider for kampanjer, tilbud, produkter og leadgenerering.",
    icon: Monitor,
  },
  {
    title: "Analyse og rapportering",
    description:
      "Gjøre tall mer forståelige gjennom dashboards, rapporter og konkrete anbefalinger.",
    icon: BarChart3,
  },
  {
    title: "AI-verktøy og workflows",
    description:
      "Bruke AI og automatisering til å spare tid, strukturere arbeid og teste ideer raskere.",
    icon: Bot,
  },
  {
    title: "Shopify og e-handel",
    description:
      "Optimalisering av nettbutikk, produktsider, kampanjesider og kjøpsflyt.",
    icon: ShoppingCart,
  },
  {
    title: "Support og kundereise",
    description:
      "Forbedre kundedialog, supportflyt, FAQ, chatbot og informasjon som reduserer friksjon.",
    icon: Headset,
  },
  {
    title: "Prosjekt og gjennomføring",
    description:
      "Holde oversikt, prioritere og få ting ut uten at prosessen blir større enn nødvendig.",
    icon: Wrench,
  },
];

const experienceItems: ExperienceItem[] = [
  {
    role: "Vekstmarkedsfører",
    company: "Lildog AS",
    period: "aug. 2021–i dag",
    isCurrent: true,
    tags: ["Annonser", "Innhold", "Shopify", "Analyse"],
    logo: "/images/Lildog_Small_Green_RGB.png",
    logoAlt: "Lildog-logo",
    bullets: [
      "Ansvar for annonsering, innhold, kampanjer, optimalisering og rapportering.",
      "Lager statiske og videoannonser, UGC-scripts, annonsetekster og kampanjesider.",
      "Jobber på tvers av 5+ land med kreative tester, nettsideforbedringer og analyse.",
    ],
  },
  {
    role: "Markedskommunikasjonskonsulent",
    company: "EYD AS",
    period: "jan. 2021–aug. 2021",
    tags: ["SEO", "Nettside", "Nyhetsbrev"],
    logo: "/images/EYD%20logo.png",
    logoAlt: "EYD-logo",
    bullets: [
      "Jobbet med SEO, nettsideforbedringer, nyhetsbrev og annonsering.",
      "Bidro med innhold, kommunikasjon og kundedialog i en tidlig vekstfase.",
    ],
  },
  {
    role: "Prosjektkoordinator",
    company: "We Are Live AS",
    period: "aug. 2019–jun. 2022",
    tags: ["Prosjektkoordinering", "Kampanjer", "Logistikk"],
    logo: "/images/Wal%20logo.png",
    logoAlt: "We Are Live-logo",
    bullets: [
      "Koordinerte kampanjer, personell, logistikk og gjennomføring i Trondheim.",
      "Ansvar for oppfølging, opplæring og struktur rundt brand ambassadors.",
      "Jobbet tett på kunder, team og praktisk gjennomføring.",
    ],
  },
  {
    role: "Prosjektleder / COO",
    company: "Tail it Technologies AS",
    period: "feb. 2018–jun. 2019",
    tags: ["Drift", "Support", "Produkt", "Team"],
    logo: "/images/tailit.png",
    logoAlt: "Tail it-logo",
    bullets: [
      "Operativ rolle med ansvar for support, team, drift og prosjektoppfølging.",
      "Jobbet med apputvikling, nettsider, betalingsløsninger og interne prosesser.",
      "Samarbeidet med regnskap, leverandører og eksterne utviklere.",
    ],
  },
  {
    role: "Kundeservice / Support",
    company: "Tail it Technologies AS",
    period: "jun. 2017–feb. 2018",
    tags: ["Drift", "Support", "Produkt", "Team"],
    logo: "/images/tailit.png",
    logoAlt: "Tail it-logo",
    bullets: [
      "Ansvar for kundesupport via telefon, e-post, chat og møter.",
      "Håndterte forsendelser, reparasjoner, retur og praktisk kundeoppfølging.",
      "Bygget tidlig forståelse for kundereise, produktfriksjon og tydelig kommunikasjon.",
    ],
  },
];

const selectedProjects: ProjectItem[] = [
  {
    title: "Insight Ads AI",
    category: "SaaS / annonserapportering",
    description:
      "Et dashboard-konsept for å gjøre Meta Ads-data lettere å lese, forstå og bruke i beslutninger.",
    tags: ["Meta Ads", "Dashboard", "SaaS", "Analyse"],
    visual: {
      type: "image",
      src: "/images/IAAI%20-%20Saas.png",
      alt: "Skjermbilde fra Insight Ads AI-konseptet",
      className: "object-cover object-[center_18%]",
    },
  },
  {
    title: "Creative OS",
    category: "Creative workflow",
    description:
      "Et arbeidsflyt-system for annonser: fra idé og script til innholdsproduksjon, publisering, iterering og analyse.",
    tags: ["Ads", "Workflow", "Creatives", "Analyse", "Internsystem"],
    visual: {
      type: "image",
      src: "/images/creative%20os.png",
      alt: "Skjermbilde fra Creative OS",
      className: "object-cover object-[40%_20%]",
    },
  },
  {
    title: "AI/GEO Dashboard",
    category: "AI / synlighet",
    description:
      "Et konsept for å følge med på hvordan merkevarer omtales og posisjoneres i AI-søk og nye søkeflater.",
    tags: ["AI", "GEO", "Merkevare", "Dashboard"],
    visual: {
      type: "image",
      src: "/images/GEO%20prosjekt.jpeg",
      alt: "Skjermbilde fra AI/GEO Dashboard",
      className: "object-cover object-top",
    },
  },
  {
    title: "Landingsidesystemer",
    category: "Nettsider / leadgenerering",
    description:
      "Gjenbrukbare landingssider for lokale bedrifter, bygget for rask testing av budskap, tilbud og konvertering.",
    tags: ["Landingssider", "Webdesign", "Konvertering", "Lokale bedrifter"],
    visual: {
      type: "image",
      src: "/images/Nettside%20-%20Bilpleie.png",
      alt: "Bilpleie-nettside som eksempel på landingsidesystem",
      className: "object-cover object-top",
    },
  },
  {
    title: "Leadgenereringssystem",
    category: "Outbound / leadarbeid",
    description:
      "Et system for å finne, strukturere og score potensielle bedriftsleads raskere enn manuell leting.",
    tags: ["Leadfunn", "Google Places", "Scoring", "Automatisering"],
    visual: {
      type: "leadSystem",
    },
  },
  {
    title: "Mobilapp for trening",
    category: "App / MVP",
    description:
      "Tidlige appkonsepter bygget i React Native / Expo for trening, progresjon, logging og brukeroppfølging.",
    tags: ["React Native", "Expo", "MVP", "Produkt"],
    visual: {
      type: "image",
      src: "/images/TNAX%20-%20App.png",
      alt: "Skjermbilde fra mobilappen TNAX",
      className: "object-cover object-[center_24%]",
    },
  },
];

const personalGalleryCards: PersonalImageCard[] = [
  {
    title: "Skihopping",
    image: "/images/IMG_1874.JPG",
    imageAlt: "Jørgen Berg i langrennsmiljø",
    align: "object-[center_34%]",
  },
  {
    title: "Musikk og DJ",
    image: "/images/IMG_3370.JPG",
    imageAlt: "Jørgen Berg i DJ- eller musikksammenheng",
    align: "object-[center_28%]",
  },
];

const bottomGalleryCards: PersonalImageCard[] = [
  {
    title: "Golf",
    image: "/images/IMG_4858.JPG",
    imageAlt: "Jørgen Berg i golfmiljø",
    align: "object-[center_25%]",
  },
  {
    title: "Utfordringer",
    image: "/images/IMG_1984.JPG",
    imageAlt: "Jørgen Berg i en situasjon som representerer utfordringer",
    align: "object-[center_36%]",
  },
];

const featuredAboutImage: PersonalImageCard = {
  title: "Langrenn og trening",
  image: "/images/IMG_4761%202.JPG",
  imageAlt: "Jørgen Berg i skimiljø",
  align: "object-[center_32%]",
};

const competencyGroups = [
  {
    title: "Performance marketing",
    items: ["Meta Ads", "Snapchat Ads", "Google Ads", "Funnels", "Testing og iterasjon"],
  },
  {
    title: "Innhold og creatives",
    items: [
      "Videoannonser",
      "Statiske annonser",
      "UGC-scripts",
      "Annonsetekst",
      "CapCut",
      "Canva",
      "Photoshop",
    ],
  },
  {
    title: "Nettsider og e-handel",
    items: ["Shopify", "WordPress", "Landingssider", "Kampanjesider", "Konvertering"],
  },
  {
    title: "Analyse og rapportering",
    items: ["GA4", "Looker Studio", "Dashboards", "KPI-er", "Rapportering"],
  },
  {
    title: "AI og workflows",
    items: ["OpenAI", "Codex", "Automatisering", "Interne systemer", "MVP-testing"],
  },
];

const practicalItems = [
  {
    icon: MapPin,
    label: "Basert i Trondheim",
  },
  {
    icon: Route,
    label: "Førerkort klasse B",
  },
  {
    icon: Languages,
    label: "Norsk og engelsk",
  },
  {
    icon: Megaphone,
    label: "Erfaring med kampanjer på tvers av flere markeder",
  },
  {
    icon: UserRoundCheck,
    label: "Åpen for nye muligheter",
  },
];

function PersonalImagePanel({
  title,
  image,
  imageAlt,
  align = "object-center",
  compact = false,
}: PersonalImageCard & { compact?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.9rem] border border-white/20 bg-[rgba(255,255,255,0.5)] shadow-[0_20px_52px_rgba(34,42,37,0.08)]">
      <div className={`relative ${compact ? "h-56" : "min-h-[420px] h-full"}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={compact ? "(min-width: 1024px) 22vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"}
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${align}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,13,0.01)_0%,rgba(9,14,13,0.05)_58%,rgba(9,14,13,0.5)_100%)]" />
        <div className="absolute inset-x-4 bottom-4">
          <h3 className="text-base font-semibold tracking-[-0.03em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: ProjectItem }) {
  if (project.visual.type === "leadSystem") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#f3f5f1_0%,#e7ece5_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,170,148,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(210,197,170,0.12),transparent_26%)]" />
        <div className="absolute inset-x-5 top-5 rounded-[1.2rem] border border-white/70 bg-white/78 p-3 shadow-[0_16px_34px_rgba(36,44,39,0.07)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Lead list
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                128 bedrifter vurdert
              </p>
            </div>
            <div className="rounded-full border border-[rgba(93,143,115,0.18)] bg-[rgba(220,232,223,0.72)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent)]">
              24 nye
            </div>
          </div>
          <div className="mt-3 grid gap-2">
            {[
              ["Bilpleie Midtbyen", "A", "88"],
              ["Nordic Takservice", "B", "74"],
              ["Fjord Renhold", "A", "81"],
            ].map(([name, grade, score]) => (
              <div
                key={name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-2xl border border-white/65 bg-white/72 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">{name}</p>
                  <p className="text-xs text-[var(--muted)]">Lokal bedrift • høy match</p>
                </div>
                <span className="rounded-full bg-[rgba(93,143,115,0.12)] px-2 py-1 text-[11px] font-semibold text-[var(--accent)]">
                  {grade}
                </span>
                <span className="text-xs font-medium text-[var(--muted)]">{score}/100</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-5 bottom-5 grid grid-cols-[1.08fr_0.92fr] gap-3">
          <div className="rounded-[1.2rem] border border-white/70 bg-white/72 p-4 shadow-[0_14px_32px_rgba(36,44,39,0.06)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Pipeline
            </p>
            <div className="mt-3 space-y-3">
              {[
                ["Research", "42"],
                ["Scored", "18"],
                ["Kontaktet", "9"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-[rgba(17,23,20,0.06)]">
                    <div
                      className={`h-full rounded-full bg-[linear-gradient(90deg,rgba(93,143,115,0.88),rgba(128,163,138,0.58))] ${
                        label === "Research"
                          ? "w-[78%]"
                          : label === "Scored"
                            ? "w-[54%]"
                            : "w-[31%]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.2rem] border border-white/70 bg-[rgba(246,248,244,0.82)] p-4 shadow-[0_14px_32px_rgba(36,44,39,0.06)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Research signaler
            </p>
            <div className="mt-3 space-y-2">
              {["Nettside oppdatert", "Meta Pixel funnet", "Lav annonseaktivitet"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/76 px-3 py-2 text-xs text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={project.visual.src}
      alt={project.visual.alt}
      fill
      sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
      className={`transition-transform duration-300 group-hover:scale-[1.02] ${
        project.visual.className ?? "object-cover object-top"
      }`}
    />
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section
        id="top"
        className="relative isolate min-h-[580px] overflow-hidden text-white lg:min-h-[620px]"
      >
        <Image
          src={heroBackgroundImage}
          alt="Rolig nordisk vinterlandskap"
          fill
          priority
          sizes="100vw"
          className="scale-[1.03] object-cover object-[58%_center] md:object-[center_38%] lg:object-[center_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,12,0.88)_0%,rgba(8,13,12,0.78)_34%,rgba(8,13,12,0.48)_62%,rgba(8,13,12,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,125,97,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(222,199,153,0.1),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[580px] w-full max-w-7xl flex-col px-6 pb-8 pt-6 sm:px-8 lg:min-h-[620px] lg:px-12">
          <header className="fade-up relative z-20 flex items-center justify-between rounded-full border border-white/12 bg-black/18 px-5 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-md">
            <a href="#top" className="text-sm font-semibold tracking-tight text-white">
              Jørgen Berg
            </a>
            <nav className="hidden items-center gap-6 text-sm text-white/74 md:flex">
              <a href="#skills" className="hover:text-white">
                Hva jeg kan bidra med
              </a>
              <a href="#experience" className="hover:text-white">
                Erfaring
              </a>
              <a href="#projects" className="hover:text-white">
                Prosjekter
              </a>
              <a href="#contact" className="hover:text-white">
                Kontakt
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12">
            <div className="fade-up max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-medium text-white/78 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Åpen for nye muligheter
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.065em] text-balance sm:text-5xl lg:text-6xl">
                Markedsfører med builder-mindset
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                Jeg jobber med annonsering, innhold, nettsider, analyse og AI-verktøy og liker å få ting raskt fra idé til noe som kan testes.
              </p>
              <div className="fade-up-delay mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--foreground)] shadow-[0_18px_44px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
                >
                  Se prosjekter
                </a>
                <a
                  href="#contact"
                  data-track="contact-cta"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/32"
                >
                  Ta kontakt
                </a>
              </div>
            </div>

            <div className="fade-up-delay mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <div className="overflow-hidden rounded-[2rem] border border-white/16 bg-[rgba(255,255,255,0.12)] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.34)] backdrop-blur-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d6ddd7]">
                  <Image
                    src={primaryPortraitImage}
                    alt="Portrett av Jørgen Berg"
                    fill
                    priority
                    sizes="(min-width: 1024px) 20rem, 70vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Jørgen Berg</p>
                    <p className="mt-1 text-sm text-white/82">Growth Marketer / Builder</p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/72">
                      Jobber med annonsering, innhold, nettsider, analyse og AI-verktøy for små team og vekstselskaper.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full border border-white/18 bg-black/12 px-3 py-1 text-xs text-white/78">
                      Trondheim
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        <section id="skills" className="py-12 scroll-mt-24 lg:py-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-xs font-semibold">Hva jeg kan bidra med</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Her er områdene jeg typisk kan bidra på.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="content-card rounded-[1.6rem] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="py-12 scroll-mt-24 lg:py-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-xs font-semibold">Profesjonell erfaring</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Erfaring
            </h2>
          </div>
          <div className="relative mt-8 max-w-5xl pl-8 sm:pl-10">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-[linear-gradient(180deg,rgba(130,170,145,0.22)_0%,rgba(130,170,145,0.14)_32%,rgba(130,170,145,0.08)_68%,rgba(17,23,20,0.04)_100%)] sm:left-4" />
            {experienceItems.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="group relative pb-4 last:pb-0 sm:pb-5"
              >
                <div className="absolute left-[-1.9rem] top-5 h-3 w-3 rounded-full border-2 border-white bg-[var(--accent)] shadow-[0_0_0_5px_rgba(220,232,223,0.85)] sm:left-[-2.35rem]" />
                <article
                  className={`relative max-w-4xl overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_14px_34px_rgba(34,42,37,0.04),0_28px_64px_rgba(34,42,37,0.06)] ring-1 ring-black/3 transition-all duration-200 after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-[linear-gradient(90deg,rgba(255,255,255,0.78),rgba(255,255,255,0.3),rgba(255,255,255,0.7))] after:pointer-events-none group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_38px_rgba(34,42,37,0.05),0_34px_72px_rgba(34,42,37,0.09)] ${
                    item.isCurrent
                      ? "border-[rgba(125,156,136,0.24)] bg-[linear-gradient(180deg,rgba(250,250,246,0.97),rgba(244,246,241,0.96))]"
                      : "border-[rgba(255,255,255,0.72)] bg-[linear-gradient(180deg,rgba(251,250,246,0.97),rgba(246,244,239,0.95))]"
                  } sm:p-5`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,206,185,0.12),transparent_38%)] pointer-events-none" />
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${
                      item.isCurrent
                        ? "bg-[radial-gradient(circle_at_top_left,rgba(133,167,145,0.1),transparent_34%)] opacity-100"
                        : "bg-[radial-gradient(circle_at_top_left,rgba(133,167,145,0.08),transparent_34%)] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div className="relative">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/88 p-2 shadow-[0_10px_24px_rgba(34,42,37,0.05)]">
                        <Image
                          src={item.logo}
                          alt={item.logoAlt}
                          width={56}
                          height={56}
                          className="h-auto max-h-7 w-auto object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-xl">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)] sm:text-[15px]">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:max-w-[48%] sm:justify-end sm:pt-0.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[rgba(17,23,20,0.08)] bg-white/74 px-3 py-1 text-xs leading-none text-[var(--muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--muted)]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12 scroll-mt-24 lg:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-xs font-semibold">Egne prosjekter</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Egne prosjekter og konsepter
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Ved siden av jobb har jeg brukt mye tid på å bygge og teste egne konsepter. Noen er små SaaS-verktøy, noen er landingssider, noen er interne systemer — men felles for dem er at de er bygget raskt for å lære, teste og løse konkrete problemer.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {selectedProjects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-[var(--border)] bg-[var(--surface-strong)] shadow-[0_22px_60px_rgba(36,44,39,0.06)]"
              >
                <div className="relative h-52 overflow-hidden bg-[var(--background-deep)]">
                  <ProjectVisual project={project} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,15,0.04)_0%,rgba(10,16,15,0.22)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/84 px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                    {project.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-white/76 px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-5 py-12 scroll-mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-14"
        >
          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-[1.08fr_0.92fr]">
            <PersonalImagePanel {...featuredAboutImage} />

            <div className="grid gap-6">
              <section className="content-card rounded-[2rem] bg-[linear-gradient(145deg,rgba(252,253,251,0.96),rgba(238,244,239,0.94))] p-7 shadow-[0_18px_46px_rgba(34,42,37,0.06)] sm:p-8">
                <p className="eyebrow text-xs font-semibold">Om meg</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Mer enn bare markedsføring
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
                  <p>
                    Jeg er tidligere skihopper, og mye av det jeg liker i livet kommer nok derfra: fart, fokus, konkurranse og følelsen av å bli litt bedre over tid.
                  </p>
                  <p>
                    Utenom jobb går mye av tiden til golf, løping, trening og langrenn. Jeg liker ting som holder meg i bevegelse, og trives best når det skjer noe.
                  </p>
                  <p>
                    Jeg har også bakgrunn fra DJ-ing og musikkproduksjon. Det er kanskje derfor jeg alltid har likt tempo, detaljer og det å bygge noe fra bunnen av.
                  </p>
                  <p>
                    Jeg er nysgjerrig av natur, liker å lære nye ting fort og har en oppriktig interesse for teknologi, produkter og alt som føles gjennomtenkt.
                  </p>
                </div>
              </section>

              <div className="grid gap-6 sm:grid-cols-2">
                {personalGalleryCards.map((card) => (
                  <PersonalImagePanel key={card.title} {...card} compact />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-2">
            {bottomGalleryCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-[rgba(255,255,255,0.5)] shadow-[0_20px_52px_rgba(34,42,37,0.08)]"
              >
                <div className="relative h-72 lg:h-80">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${card.align ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,13,0.02)_0%,rgba(9,14,13,0.08)_58%,rgba(9,14,13,0.44)_100%)]" />
                  <div className="absolute inset-x-5 bottom-4">
                    <h3 className="text-base font-semibold tracking-[-0.03em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)] sm:text-lg">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_0.3fr]">
            <section className="content-card rounded-[1.9rem] bg-[linear-gradient(145deg,rgba(249,251,250,0.97),rgba(232,238,234,0.95))] p-6 shadow-[0_18px_46px_rgba(34,42,37,0.06)] sm:p-7">
              <p className="eyebrow text-xs font-semibold">Ekstra lag</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Kompetanse, verktøy og praktisk erfaring
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                En kort oversikt over verktøy, arbeidsområder og erfaring som utfyller CV-en.
              </p>

              <div className="mt-7">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  Kompetanse og verktøy
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-base">
                  Områder, verktøy og arbeidsflyt jeg har jobbet med de siste årene.
                </p>

                <div className="mt-6 divide-y divide-[rgba(17,23,20,0.08)]">
                  {competencyGroups.map((group, index) => (
                    <article
                      key={group.title}
                      className={`py-5 ${index === 0 ? "pt-0" : ""}`}
                    >
                      <h4 className="text-sm font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-base">
                        {group.title}
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[rgba(17,23,20,0.08)] bg-white/78 px-3 py-1.5 text-xs text-[var(--muted)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="content-card rounded-[1.9rem] bg-[linear-gradient(145deg,rgba(250,252,252,0.96),rgba(236,241,243,0.94))] p-6 shadow-[0_18px_46px_rgba(34,42,37,0.06)] sm:p-7">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                Praktisk
              </h3>
              <div className="mt-5 grid gap-3">
                {practicalItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </span>
                      <span className="text-sm leading-6 text-[var(--muted)]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </section>
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
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,14,13,0.9)_0%,rgba(8,14,13,0.76)_48%,rgba(8,14,13,0.86)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,125,97,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(210,184,134,0.08),transparent_20%)]" />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-xs font-semibold text-white/62">Kontakt</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
                Ta gjerne kontakt
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
                Jeg er åpen for å snakke med selskaper som bygger noe spennende, særlig hvis dere trenger en person som kan bidra bredt med markedsføring, innhold, nettsider, analyse eller AI-verktøy.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:j_berg123@hotmail.com"
                  data-track="contact-email"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--foreground)] shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-0.5"
                >
                  j_berg123@hotmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/j%C3%B8rgen-berg-61b6a3b7/"
                  data-track="linkedin-click"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/jorgen.berg"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur hover:-translate-y-0.5"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
