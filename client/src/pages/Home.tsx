import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Facebook,
  Instagram,
  Share2,
  Star,
  Wrench,
  Workflow,
  UsersRound,
  Zap,
} from "lucide-react";
import { assets, socialProfiles, VOTE_URL } from "@/lib/campaign";
import CampaignMark from "@/components/CampaignMark";

const reasons = [
  {
    icon: Workflow,
    text: "Když se něco zamotá, Kubu jen tak něco nerozhodí. Zachová klid a hledá, kde je problém doopravdy.",
  },
  { icon: Wrench, text: "Vidí souvislosti a rychle se zorientuje i ve složitých systémových problémech." },
  { icon: UsersRound, text: "V našem engineeringovém koutku jsme na jedné vlně. Jeho pohledu si vážím." },
  {
    icon: Zap,
    text: "Černý humor máme společný. A když si chce vyčistit hlavu, vyrazí běhat.",
  },
];

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [shareMessage, setShareMessage] = useState("");

  async function shareCampaign() {
    const shareData = {
      title: "Podpořte Jakuba Špringera",
      text: "Za dobrými výsledky stojí dobří lidé. Podpořte Jakuba Špringera ve Foxconn Stars.",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Děkujeme za sdílení.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage("Odkaz na stránku je zkopírovaný.");
      } else {
        setShareMessage("Sdílení není v tomto prohlížeči dostupné.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setShareMessage("Stránku se nepodařilo sdílet.");
    }
  }

  return (
    <div className="campaign-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Foxconn Stars — začátek stránky"
        >
          <CampaignMark />
        </a>
        <nav className="main-nav" aria-label="Hlavní navigace">
          <a href="#prinos">Jakubův přínos</a>
          <a href="#jakub">O Jakubovi</a>
          <a href="#podpora">Podpora</a>
        </nav>
        <a className="header-cta" href="#podpora">
          Podpořit Jakuba <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              2. KOLO <span className="eyebrow-divider">•</span> FOXCONN STARS
            </div>
            <p className="category-label">Technologie a procesy</p>
            <h1 id="hero-title">
              Za dobrými výsledky stojí <em>dobří lidé.</em>
            </h1>
            <p className="hero-intro">
              A za posunem vpřed ti, kteří umí propojit techniku, nápady a lidi.
            </p>
            <p className="hero-name">
              Jakub <span>Špringer</span>
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#podpora">
                Podpořit Jakuba <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href="#prinos">
                Proč právě Jakub <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <img src={assets.heroPortrait} alt="Jakub Špringer" />
            <figcaption>
              <span>Foxconn Stars</span>
              <span>Technologie a procesy</span>
            </figcaption>
            <span className="hero-star" aria-hidden="true">
              <Star />
            </span>
          </figure>
          <div className="hero-footnote">
            <span>01 / LIDÉ, KTEŘÍ POSOUVAJÍ VĚCI VPŘED</span>
            <span>
              FOXCONN STARS <span className="foot-star">✳</span>
            </span>
          </div>
        </section>

        <section
          className="contribution section-wrap"
          id="prinos"
          aria-labelledby="contribution-title"
        >
          <div className="section-heading">
            <p className="kicker">TAKOVÝ JE KUBA</p>
            <h2 id="contribution-title">
              Když se hroutí systém,
              <br />
              <em>Kuba ne.</em>
            </h2>
            <p className="section-lede">
              Chladná hlava, žádný drama!
            </p>
          </div>
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, text }, index) => (
              <article className="reason" key={text}>
                <span className="reason-number">0{index + 1}</span>
                <span className="reason-icon">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="personal section-wrap"
          id="jakub"
          aria-labelledby="personal-title"
        >
          <figure className="cycling-photo">
            <img
              src={assets.cycling}
              alt="Jakub Špringer v cyklistickém oblečení u jezera v přírodě"
              loading="lazy"
              width="1200"
              height="1200"
            />
            <figcaption>
              Jakub <span>•</span> mimo pracovní prostředí
            </figcaption>
          </figure>
          <div className="personal-copy">
            <p className="kicker">ZA NOMINACÍ JE ČLOVĚK</p>
            <h2 id="personal-title">Jakub i mimo výrobu.</h2>
            <p className="personal-subtitle">Na kole, v přírodě, v pohybu.</p>
            <p>
              Na jeho Instagramu najdete i cyklistický výlet do Českého ráje.
              Malý pohled na Jakuba mimo pracovní prostředí.
            </p>
            <a className="text-link" href="#podpora">
              Podpořte Jakuba <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="support"
          id="podpora"
          aria-labelledby="support-title"
        >
          <div
            className="support-banner"
            style={{
              backgroundImage:
                "radial-gradient(circle at 84% 24%, rgba(240,197,108,.18) 0 1px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(240,197,108,.16) 0 1px, transparent 2px), linear-gradient(112deg, #0b2235, #071726 68%, #102b40)",
            }}
          >
            <div className="support-content">
              <p className="kicker">KAŽDÝ HLAS SE POČÍTÁ</p>
              <h2 id="support-title">
                Jsme o krok blíž
                <br />
                <em>k vítězství.</em>
              </h2>
              {VOTE_URL ? (
                <a
                  className="button button-gold"
                  href={VOTE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hlasovat pro Jakuba{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <>
                  <p className="vote-note">
                    Odkaz a termín hlasování doplníme po potvrzení.
                  </p>
                  <button
                    className="button button-outline"
                    type="button"
                    onClick={() => dialogRef.current?.showModal()}
                  >
                    Jak hlasovat <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="share-row">
            <div>
              <p className="kicker">POMOZTE NÁM ŠÍŘIT PODPORU</p>
              <p>Pošlete stránku dál. Každá podpora má smysl.</p>
            </div>
            <button
              type="button"
              className="share-button"
              onClick={shareCampaign}
            >
              <Share2 size={17} aria-hidden="true" /> Sdílet stránku
            </button>
          </div>
          <p className="share-feedback" aria-live="polite">
            {shareMessage}
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <CampaignMark />
        <p>
          Stránka na podporu nominace. Nejde o oficiální hlasovací systém
          Foxconn.
        </p>
        <div className="social-links">
          <a
            href={socialProfiles.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram — profil Jakuba Špringera (nové okno)"
          >
            <Instagram size={18} />
          </a>
          <a
            href={socialProfiles.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook — profil Jakuba Špringera (nové okno)"
          >
            <Facebook size={18} />
          </a>
        </div>
      </footer>

      <dialog
        className="vote-dialog"
        ref={dialogRef}
        aria-labelledby="dialog-title"
      >
        <div className="dialog-inner">
          <button
            type="button"
            className="dialog-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Zavřít"
          >
            ×
          </button>
          <p className="kicker">HLASOVÁNÍ</p>
          <h2 id="dialog-title">Jak hlasovat</h2>
          <ol>
            <li>
              <span>01</span>
              <p>Otevřete firemní hlasování podle pokynů organizátorů.</p>
            </li>
            <li>
              <span>02</span>
              <p>Najděte Jakuba Špringera v kategorii Technologie a procesy.</p>
            </li>
            <li>
              <span>03</span>
              <p>Odešlete hlas podle pravidel hlasování.</p>
            </li>
          </ol>
          <p className="dialog-note">Tato stránka hlasy nezaznamenává.</p>
          <button
            className="button button-gold"
            type="button"
            onClick={() => dialogRef.current?.close()}
          >
            Rozumím <Check size={17} aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </div>
  );
}
