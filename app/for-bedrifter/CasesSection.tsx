"use client";

import { useState } from "react";
import Image from "next/image";

type CaseDetail = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoAlt?: string;
  imageClassName?: string;
  projectText: string;
  workItems: string[];
  projectHighlights: string[];
};

const caseItems: CaseDetail[] = [
  {
    slug: "lildog",
    title: "Lildog",
    description:
      "Ansvar for annonsering, innhold og vekst i 5+ europeiske markeder for et norsk teknologiselskap.",
    image: "/images/Maren2.png",
    imageAlt: "Lildog prosjektbilde",
    imageClassName: "object-cover object-center",
    projectText:
      "Arbeid med annonsering, innhold, analyse og løpende forbedringer for et norsk teknologiselskap med salg i flere europeiske markeder.",
    workItems: [
      "Meta Ads",
      "Innholdsproduksjon",
      "Testing og optimalisering",
      "Analyse og rapportering",
      "Nettsideforbedringer",
    ],
    projectHighlights: [
      "Ansvar for annonsering i 5+ europeiske markeder",
      "50+ annonser utviklet, testet og optimalisert",
      "Arbeid med Meta Ads, Google Ads og Snapchat",
      "Produksjon og testing av UGC-innhold",
      "Samarbeid med influencere og affiliate-partnere",
      "Løpende analyse, rapportering og prioritering av tiltak",
    ],
  },
  {
    slug: "eyra",
    title: "Eyra",
    description:
      "Produktutvikling, lanseringsstrategi og outreach for en app innen lyttetrening.",
    image: "/images/Eyra%20app.png",
    imageAlt: "Konseptvisning for digital synlighet",
    imageClassName: "object-cover object-top",
    projectText:
      "Utvikling og lansering av en app for lyttetrening, inkludert produktutvikling, markedsstrategi og outreach mot fagmiljøer i Norge og UK.",
    workItems: [
      "Produktutvikling",
      "Go-to-market strategi",
      "Outreach",
      "Innholdsproduksjon",
      "Markedsføring",
      "Brukerinnsikt",
    ],
    projectHighlights: [
      "Bidratt i utvikling av produkt og konsept",
      "Utarbeidet lanserings- og markedsplan",
      "Bygget outreach-system for fagmiljøer",
      "Produsert og publisert innhold for sosiale medier",
      "Kartlagt og kontaktet 500+ fagpersoner i Norge og UK",
      "Arbeidet med posisjonering, målgruppe og distribusjon",
    ],
  },
  {
    slug: "insight-ads-ai",
    title: "AI-verktøy og automasjon",
    description:
      "Utvikling av AI-verktøy og interne systemer som hjelper markedsførere med analyse, innhold, rapportering og arbeidsflyt.",
    image: "/images/AI%20verkt%C3%B8y.png",
    imageAlt: "Skjermbilde fra Insight Ads AI",
    imageClassName: "object-cover object-[center_18%]",
    projectText:
      "Utvikling av AI-verktøy, automasjoner og SaaS-produkter som effektiviserer analyse, innholdsarbeid og arbeidsflyt for markedsføring og support.",
    workItems: [
      "Produktutvikling",
      "AI-integrasjoner",
      "Automatisering",
      "Analyseverktøy",
      "Markedsføringssystemer",
      "Dashboard-design",
    ],
    projectHighlights: [
      "Bygget AI-verktøy for analyse, rapportering og markedsføring",
      "Integrert OpenAI, Meta Ads og andre datakilder",
      "Utviklet automatisering for arbeidsflyt og innholdsarbeid",
      "Designet dashboards og verktøy for bedre beslutningsgrunnlag",
      "Testet løsninger med reelle brukere og bedrifter",
    ],
  },
  {
    slug: "golfprosjekter",
    title: "Nettsider og synlighet",
    description:
      "Nettsider, SEO og digitale forbedringer som gjør det enklere å bli funnet og få flere henvendelser.",
    image: "/images/Nettside%20-%20Bilpleie.png",
    imageAlt: "Golfrelatert prosjekt",
    imageClassName: "object-cover object-center",
    projectText:
      "Utvikling av nettsider, struktur og synlighet for lokale bedrifter og organisasjoner som ønsker flere henvendelser og en tydeligere digital tilstedeværelse.",
    workItems: [
      "Nettsider",
      "SEO og synlighet",
      "Struktur og budskap",
      "Innhold",
      "Leadgenerering",
      "Konverteringsforbedring",
    ],
    projectHighlights: [
      "Utviklet nettsidekonsepter for lokale virksomheter",
      "Arbeidet med SEO, struktur og synlighet",
      "Bygget landingssider med fokus på henvendelser",
      "Forenklet brukerflyt og innhold",
      "Arbeidet med både WordPress og moderne webteknologi",
    ],
  },
];

function CaseVisual({ item }: { item: CaseDetail }) {
  if (item.logo && item.logoAlt) {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,#111714_0%,#1a2320_48%,#22302a_100%)] sm:h-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,143,115,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_20%)]" />
        <div className="absolute inset-4 rounded-[1.25rem] border border-white/10 bg-white/8 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={item.logo}
            alt={item.logoAlt}
            width={180}
            height={64}
            className="h-auto w-auto max-w-[7.5rem] object-contain sm:max-w-[8.5rem]"
          />
        </div>
      </div>
    );
  }

  if (item.image && item.imageAlt) {
    return (
      <div className="relative h-28 overflow-hidden rounded-[1.35rem] sm:h-32">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1280px) 12rem, (min-width: 768px) 16rem, 100vw"
          className={item.imageClassName ?? "object-cover object-center"}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,16,0.02)_0%,rgba(12,18,16,0.18)_100%)]" />
      </div>
    );
  }

  return null;
}

export default function CasesSection() {
  const [openCase, setOpenCase] = useState<string | null>(null);
  const activeCase = caseItems.find((item) => item.slug === openCase) ?? null;

  return (
    <section id="cases" className="py-12 scroll-mt-24 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <div className="max-w-lg">
          <p className="eyebrow text-xs font-semibold">UTVALGTE PROSJEKTER</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            Eksempler på arbeid som har skapt resultater.
          </h2>
        </div>
        <p className="max-w-2xl pt-1 text-sm leading-6 text-[var(--muted)] sm:text-base lg:text-right">
          Et lite utvalg prosjekter som viser hvordan jeg jobber med synlighet, nettsider,
          analyse og forbedringer i praksis.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {caseItems.map((item) => {
          const isActive = openCase === item.slug;

          return (
            <article
              key={item.slug}
              className="overflow-hidden rounded-[1.9rem] border border-[rgba(17,23,20,0.08)] bg-white shadow-[0_18px_46px_rgba(34,42,37,0.06)]"
            >
              <div className="h-[44%] min-h-[11rem] p-4">
                <CaseVisual item={item} />
              </div>
              <div className="flex min-h-[13rem] flex-col border-t border-[rgba(17,23,20,0.08)] bg-white px-5 py-5">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setOpenCase(isActive ? null : item.slug)}
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    Les mer
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenCase(isActive ? null : item.slug)}
                    aria-label={isActive ? `Lukk ${item.title}` : `Åpne ${item.title}`}
                    className="text-lg text-[var(--muted)] transition-transform duration-300"
                  >
                    <span className={`inline-block ${isActive ? "rotate-90" : ""}`}>→</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          activeCase ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {activeCase ? (
            <article className="rounded-[2rem] border border-[rgba(17,23,20,0.1)] bg-[linear-gradient(145deg,rgba(252,253,251,0.96),rgba(238,244,239,0.94))] p-5 shadow-[0_18px_46px_rgba(34,42,37,0.06)] sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-7 lg:items-start">
                <div className="max-w-sm">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Case
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    {activeCase.title}
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-[1.6rem]">
                    <div className="[&>div]:h-44 sm:[&>div]:h-52">
                      <CaseVisual item={activeCase} />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeCase.workItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(17,23,20,0.08)] bg-white/86 px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="max-w-2xl">
                  <section className="border-b border-[rgba(17,23,20,0.12)] pb-5">
                    <p className="text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                      Hva var prosjektet?
                    </p>
                    <p className="mt-2.5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {activeCase.projectText}
                    </p>
                  </section>

                  <section className="border-b border-[rgba(17,23,20,0.12)] py-5">
                    <p className="text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                      Hva jobbet jeg med?
                    </p>
                    <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                      {activeCase.workItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.1rem] border border-[rgba(17,23,20,0.08)] bg-white/82 px-4 py-3"
                        >
                          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span className="text-sm text-[var(--foreground)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="pt-5">
                    <p className="text-sm font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                      Erfaring fra prosjektet
                    </p>
                    <div className="mt-3.5 grid gap-2">
                      {activeCase.projectHighlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="text-[var(--accent)]">✓</span>
                          <span className="text-sm leading-6 text-[var(--foreground)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
