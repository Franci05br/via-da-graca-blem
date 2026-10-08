import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Instagram, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/via-da-graca-logo.svg";
import corda from "@/assets/corda-fios.png";
import ourLady from "@/assets/nossa-senhora-gravura.png";
import pulseiraFe from "@/assets/p-fe.jpg";
import pulseiraNazinha from "@/assets/p-nazinha.jpg";
import infantil from "@/assets/p-infantil.jpg";
import dezenas from "@/assets/p-dezenas.jpg";
import perola from "@/assets/p-terco-perola.jpg";
import amarelo from "@/assets/p-terco-amarelo.jpg";
import vermelho from "@/assets/p-terco-vermelho.jpg";
import imagemGrande from "@/assets/p-imagem-grande.jpg";
import imagemPequena from "@/assets/p-imagem-pequena.jpg";
import cirioArtUrl from "@/assets/cirio-berlinda.png";
const cirioArt = { url: cirioArtUrl };

type Product = {
  name: string;
  edition: string;
  description: string;
  details: string[];
  images: string[];
};

const products: Product[] = [
  {
    name: "Pulseira Fé",
    edition: "Coleção Círio",
    description: "Contas azul-marianas e símbolos delicados compõem uma peça para levar a devoção sempre por perto.",
    details: ["Contas naturais", "Pingentes em metal envelhecido", "Acabamento ajustável"],
    images: [pulseiraFe],
  },
  {
    name: "Pulseira Nazinha",
    edition: "Edição artesanal",
    description: "Uma composição afetiva de contas claras e vermelhas, medalhas e fitas em tons suaves.",
    details: ["Montagem manual", "Medalhas devocionais", "Pompom de fios coloridos"],
    images: [pulseiraNazinha],
  },
  {
    name: "Dezeninha Infantil",
    edition: "Pequenos gestos de fé",
    description: "Leve, alegre e delicada, foi pensada para acompanhar as crianças em seus primeiros caminhos de oração.",
    details: ["Contas amarelas", "Pingentes leves", "Tamanho infantil"],
    images: [infantil],
  },
  {
    name: "Dezenas de Fé",
    edition: "Três variações",
    description: "Terços compactos para usar no pulso, reunindo madeira, hematita e símbolos de proteção.",
    details: ["Três combinações", "Contas de pedra ou madeira", "Crucifixos e medalhas"],
    images: [dezenas],
  },
  {
    name: "Terços de Pulso",
    edition: "Tríptico de cores",
    description: "Três leituras de uma mesma delicadeza: pérola, amarelo e vermelho em composições luminosas.",
    details: ["Contas facetadas", "Detalhes dourados", "Produção em pequena escala"],
    images: [perola, amarelo, vermelho],
  },
  {
    name: "Colo de Maria",
    edition: "Composição devocional",
    description: "Imagem artesanal acompanhada por terços delicados, criada para um recanto de oração íntimo e acolhedor.",
    details: ["Imagem artesanal", "Terço coordenado", "Duas variações"],
    images: [imagemGrande, imagemPequena],
  },
];

// Rope kept for future sections; hidden on the cover for now.
const SHOW_COVER_ROPE = false;

function whatsappUrl(name?: string) {
  const message = name
    ? `Olá! Gostaria de consultar a peça ${name} da Via da Graça.`
    : "Olá! Gostaria de conhecer as peças da Via da Graça.";
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Via da Graça | Catálogo artesanal" },
      { name: "description", content: "Catálogo interativo de terços, pulseiras e artigos devocionais artesanais da Via da Graça, em Belém." },
      { property: "og:title", content: "Via da Graça | Catálogo artesanal" },
      { property: "og:description", content: "Folheie a coleção de peças devocionais feitas à mão e consulte pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://via-da-graca-blem.lovable.app/" },
      { property: "og:image", content: "https://via-da-graca-blem.lovable.app/__l5e/assets-v1/9324ff3a-c4e5-4c49-b9a3-6a0744d9ce50/og-via-da-graca.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://via-da-graca-blem.lovable.app/__l5e/assets-v1/9324ff3a-c4e5-4c49-b9a3-6a0744d9ce50/og-via-da-graca.jpg" },
    ],
  }),
  component: Catalog,
});

function BasilicaLineArt() {
  return (
    <svg className="basilica-line" viewBox="0 0 900 560" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M142 470V190h92v280M666 470V190h92v280M173 190v-52h30v52M697 190v-52h30v52M187 138V92M712 138V92" />
        <path d="M160 190c0-32 13-55 28-55s28 23 28 55M684 190c0-32 13-55 28-55s28 23 28 55" />
        <path d="M234 470V248l216-120 216 120v222M270 265h360M305 470V290h290v180M365 470V322h170v148" />
        <path d="M450 128V69M429 87h42M398 220h104M450 188c32 0 51 23 51 51H399c0-28 19-51 51-51Z" />
        <path d="M116 470h668M101 488h698M278 290l-23 180M622 290l23 180M337 290l-11 180M563 290l11 180" />
        <circle cx="188" cy="238" r="20" /><circle cx="712" cy="238" r="20" /><circle cx="450" cy="250" r="17" />
      </g>
    </svg>
  );
}

function GreenRibbon({ className = "cirio-sash" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 120" aria-hidden="true">
      <defs>
        <linearGradient id="satin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(.46 .1 155)" />
          <stop offset=".5" stopColor="oklch(.43 .1 155)" />
          <stop offset="1" stopColor="oklch(.38 .09 155)" />
        </linearGradient>
        <linearGradient id="satinDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(.33 .08 155)" />
          <stop offset="1" stopColor="oklch(.39 .09 155)" />
        </linearGradient>
        <filter id="weave" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".9 .25" numOctaves="2" seed="3" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" result="g" />
          <feComponentTransfer in="g" result="t"><feFuncA type="linear" slope=".18" /></feComponentTransfer>
          <feComposite in="t" in2="SourceGraphic" operator="in" result="tx" />
          <feBlend in="SourceGraphic" in2="tx" mode="multiply" />
        </filter>
      </defs>
      <g filter="url(#weave)">
        <path d="M78 46 C58 50 40 66 24 84 L6 98 L30 96 L18 116 C40 100 58 82 82 74 Z" fill="url(#satinDark)" />
        <path d="M346 30 C368 26 386 14 400 4 L414 6 L402 20 L418 26 C398 38 372 54 342 58 Z" fill="url(#satinDark)" />
        <path d="M70 44 C110 36 140 34 210 34 C280 34 310 32 350 26 L350 58 C310 64 280 66 210 66 C140 66 110 68 70 76 Z" fill="url(#satin)" />
      </g>
      <text x="210" y="55" textAnchor="middle" className="sash-text">Feliz Círio de Nazaré 2026</text>
    </svg>
  );
}

function OurLadyLineArt() {
  return <img src={ourLady} alt="" aria-hidden="true" className="our-lady" width={768} height={1152} />;
}

const categories = [
  { label: "Pulseiras de Fé", page: 1 },
  { label: "Infantil", page: 3 },
  { label: "Terços & Dezenas", page: 4 },
  { label: "Imagens Devocionais", page: 6 },
];

const photoBg = new Map<string, string>([
  [pulseiraFe, "#edddc6"], [pulseiraNazinha, "#f6ead2"], [infantil, "#e8dfd0"], [dezenas, "#f3e1cb"],
  [perola, "#f2e8de"], [amarelo, "#eee1d1"], [vermelho, "#efe6d6"], [imagemGrande, "#f4ecd9"], [imagemPequena, "#f8e5c5"],
]);

function ProductPage({ product, number }: { product: Product; number: number }) {
  const [selected, setSelected] = useState(0);
  useEffect(() => setSelected(0), [product]);
  return (
    <article className="product-spread">
      <div className="photo-page">
        <div className="photo-frame" style={{ backgroundColor: photoBg.get(product.images[selected]!) }}><img src={product.images[selected]} alt={`${product.name} — vista ${selected + 1}`} /></div>
        {product.images.length > 1 && <div className="thumbnail-row" aria-label={`Outras vistas de ${product.name}`}>
          {product.images.map((image, index) => (
            <button key={image} type="button" onClick={() => setSelected(index)} className={selected === index ? "thumb active" : "thumb"} aria-label={`Ver imagem ${index + 1}`} aria-pressed={selected === index}>
              <img src={image} alt="" />
            </button>
          ))}
        </div>}
      </div>
      <div className="detail-page">
        <span className="page-number">{String(number).padStart(2, "0")}</span>
        <p className="catalog-kicker">{product.edition}</p>
        <h2>{product.name}</h2>
        <div className="gold-rule" />
        <p className="product-copy">{product.description}</p>
        <ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <div className="price-block"><span>Valor</span><strong>Sob consulta</strong></div>
        <Button asChild className="catalog-cta"><a href={whatsappUrl(product.name)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Pedir no WhatsApp</a></Button>
        <p className="contact-note">A mensagem será preparada; o número oficial ainda será vinculado.</p>
      </div>
    </article>
  );
}

function Cover({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="cover-page">
      <BasilicaLineArt />
      <div className="cover-content">
        <p className="cover-edition">Catálogo artesanal · Belém do Pará</p>
        <img src={logo} alt="Via da Graça — Feito com Fé" className="cover-logo" />
        <p className="cover-tagline">Pequenos símbolos.<br />Grandes histórias.</p>
        <div className="cover-links cover-links-lg">
          <a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer"><Instagram size={15} /> @viadagraca._</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Consultar coleção</a>
        </div>
        <button type="button" className="cover-enter cover-enter-sm" onClick={onEnter}>Folhear catálogo <ArrowRight size={15} /></button>
        <GreenRibbon className="cirio-sash-sm" />
      </div>
      <button type="button" ref={alignToHeaderCta} className="cover-enter cover-enter-lg" onClick={onEnter}>Folhear catálogo <ArrowRight size={15} /></button>
      <p className="cover-instruction">Arraste ou use as setas para folhear</p>
    </section>
  );
}

function BackCover() {
  return (
    <section className="back-cover">
      <BasilicaLineArt />
      <img src={logo} alt="Via da Graça — Feito com Fé" />
      <p>Feito à mão, com fé e delicadeza.</p>
      <Button asChild><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar sobre uma peça</a></Button>
      <a className="back-instagram" href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer"><Instagram size={16} /> @viadagraca._</a>
    </section>
  );
}

function Catalog() {
  const totalPages = products.length + 2;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStart = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const paperSound = useCallback(() => {}, []);

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(totalPages - 1, next));
    if (bounded === page) return;
    setDirection(bounded > page ? "next" : "prev"); setPage(bounded); paperSound();
  }, [page, paperSound, totalPages]);

  const loaded = useRef(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("p");
    const n = slug ? pageSlugs.indexOf(slug) : Number(params.get("page"));
    if (n > 0 && n < totalPages) setPage(n);
    loaded.current = true;
  }, [totalPages]);

  useEffect(() => {
    if (!loaded.current) return;
    const url = new URL(window.location.href);
    url.searchParams.delete("page");
    if (page === 0) url.searchParams.delete("p"); else url.searchParams.set("p", pageSlugs[page]!);
    window.history.replaceState({}, "", url);
    document.title = page === 0 ? "Via da Graça | Catálogo artesanal" : `${page === totalPages - 1 ? "Sobre" : products[page - 1]!.name} — Via da Graça`;
  }, [page, totalPages]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") goTo(page + 1);
      if (event.key === "ArrowLeft") goTo(page - 1);
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [goTo, page]);

  return (
    <>
    <main id="top" className={`catalog-shell ${page === 0 ? "is-cover" : ""}`}>
      <OurLadyLineArt />
      {SHOW_COVER_ROPE && page === 0 && <div className="scene-rope" aria-hidden="true"><img src={corda} alt="" width={1007} height={672} /></div>}
      {page === 0 && <GreenRibbon />}
      <header className="catalog-bar">
        <button type="button" className="bar-logo" onClick={() => { goTo(0); setMenuOpen(false); }} aria-label="Voltar à capa"><img src={logo} alt="Via da Graça" /></button>
        <nav className="bar-menu" aria-label="Menu">
          <button type="button" className="hide-sm" onClick={() => { goTo(0); setMenuOpen(false); }}>Home</button>
          <div className="menu-item">
            <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}>Coleção</button>
            {menuOpen && (
              <div className="menu-dropdown">
                {categories.map((c) => <button key={c.label} type="button" onClick={() => { goTo(c.page); setMenuOpen(false); }}>{c.label}</button>)}
              </div>
            )}
          </div>
          <button type="button" onClick={() => { setAboutOpen(true); setMenuOpen(false); }}>Sobre</button>
          <a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer" aria-label="Instagram da Via da Graça"><Instagram size={18} /></a>
        </nav>
        <div className="bar-actions">
          <a className="bar-cta hide-sm" href={whatsappUrl("uma peça da coleção")} target="_blank" rel="noreferrer"><MessageCircle size={15} /> <span>Falar com a artesã</span></a>
          <span className="hide-sm">{String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>
        </div>
      </header>
      {aboutOpen && (
        <div className="about-overlay" role="dialog" aria-modal="true" aria-label="Sobre a Via da Graça" onClick={() => setAboutOpen(false)}>
          <div className="about-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="about-close" onClick={() => setAboutOpen(false)} aria-label="Fechar"><X size={18} /></button>
            <p className="catalog-kicker">Feito à mão em Belém</p>
            <h2>Cada peça nasce das mãos de artesãs</h2>
            <div className="gold-rule" />
            <p>Conta por conta, nó por nó, nossos terços e pulseiras são montados manualmente por artesãs paraenses. Escolhemos medalhas, fitas e contas com cuidado, para que cada peça carregue afeto, devoção e a memória do Círio de Nazaré.</p>
            <p>Produzimos em pequena escala: por isso cada item é único e pode ter leves variações.</p>
          </div>
        </div>
      )}

      <div className={`magazine-stage ${page === 0 ? "on-cover" : ""}`} onTouchStart={(event) => { const onPhoto = (event.target as HTMLElement).closest(".photo-frame"); if (window.innerWidth <= 760 && page > 0 && !onPhoto) { touchStart.current = null; return; } touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const start = touchStart.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 45) goTo(end < start ? page + 1 : page - 1); touchStart.current = null; }}>
        <div key={page} className={`magazine-page flip-${direction}`}>
          {page === 0 ? <Cover onEnter={() => goTo(1)} /> : page === totalPages - 1 ? <BackCover /> : <ProductPage product={products[page - 1]!} number={page} />}
        </div>
        <button className="page-arrow page-arrow-left" type="button" onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Página anterior"><ArrowLeft /></button>
        <button className="page-arrow page-arrow-right" type="button" onClick={() => goTo(page + 1)} disabled={page === totalPages - 1} aria-label="Próxima página"><ArrowRight /></button>
      </div>

      <nav className="page-dots" aria-label="Páginas do catálogo">
        {Array.from({ length: totalPages }, (_, index) => <button key={index} type="button" className={index === page ? "active" : ""} onClick={() => goTo(index)} aria-label={`Ir para página ${index + 1}`} aria-current={index === page ? "page" : undefined} />)}
      </nav>

      <a className="fixed-instagram" href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer" aria-label="Instagram da Via da Graça"><Instagram size={20} /><span>@viadagraca._</span></a>
    </main>
    {page > 0 && <PrayerSection page={page} />}
    {page === 0 && <HowSection />}
    <SiteFooter />
    </>
  );
}

const steps = [
  ["01", "Escolha com calma", "Folheie o catálogo e encontre as peças que falam ao seu coração."],
  ["02", "Converse com a artesã", "Toque em “Pedir no WhatsApp” e conte quais peças você deseja."],
  ["03", "Receba em Belém", "Combinamos entrega ou retirada e o pagamento acontece no recebimento."],
] as const;

const slugify = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pageSlugs = ["", ...products.map((p) => slugify(p.name)), "sobre"];

const prayers = [
  ["“O Todo-Poderoso fez em mim grandes coisas, e Santo é o seu nome.”", "Lucas 1,49"],
  ["“Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre.”", "Lucas 1,42"],
  ["“Deixai vir a mim as criancinhas, porque delas é o Reino de Deus.”", "Marcos 10,14"],
  ["“Tudo o que pedirdes na oração, crede que o recebestes, e assim será.”", "Marcos 11,24"],
  ["“Fazei tudo o que ele vos disser.”", "João 2,5"],
  ["“Maria guardava todas estas coisas, meditando-as em seu coração.”", "Lucas 2,19"],
  ["“Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra.”", "Lucas 1,38"],
] as const;

function PrayerSection({ page }: { page: number }) {
  const [text, cite] = prayers[(page - 1) % prayers.length]!;
  return (
    <section className="prayer-section" aria-label="Mensagem de fé">
      <span className="prayer-mark" aria-hidden="true">✦</span>
      <blockquote key={page}>
        <p>{text}</p>
        <cite>{cite}</cite>
      </blockquote>
    </section>
  );
}

function HowSection() {
  return (
      <section id="como-funciona" className="how-section">
        <div className="how-grid">
          <div className="how-text">
            <p className="catalog-kicker">Da escolha ao encontro</p>
            <h2>Um atendimento próximo, como deve ser.</h2>
            <div className="gold-rule" />
            <ol>
              {steps.map(([n, t, d]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}
            </ol>
          </div>
          <div className="how-photo how-art"><img src={cirioArt.url} alt="Mãos unidas na corda do Círio diante da Berlinda de Nossa Senhora de Nazaré" loading="lazy" /></div>
        </div>
      </section>
  );
}

function SiteFooter() {
  return (
      <footer className="site-footer">
        <div className="footer-grid">
          <div><img src={logo} alt="Via da Graça" className="footer-logo" /><p>Terços, pulseiras e artigos devocionais feitos artesanalmente em Belém do Pará.</p></div>
          <div><p className="footer-heading">Visite</p><a href="#top">Catálogo</a><a href="#como-funciona">Como funciona</a></div>
          <div><p className="footer-heading">Acompanhe</p><a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer"><Instagram size={16} /> @viadagraca._</a><a href={whatsappUrl("uma peça da coleção")} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Falar com a artesã</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Via da Graça. Feito com fé.</span><span>Atendimento em Belém-PA</span></div>
      </footer>
  );
}

function alignToHeaderCta(btn: HTMLButtonElement | null) {
  if (!btn || typeof window === "undefined") return;
  const place = () => {
    const cta = document.querySelector<HTMLElement>("a.bar-cta");
    const box = btn.offsetParent as HTMLElement | null;
    if (!cta || !box || window.innerWidth < 1025) { btn.style.removeProperty("right"); return; }
    const c = cta.getBoundingClientRect(); const b = box.getBoundingClientRect();
    const right = Math.max(24, b.right - c.right);
    btn.style.right = `${Math.min(right, b.width - btn.offsetWidth - 24)}px`;
  };
  place(); requestAnimationFrame(place);
  window.addEventListener("resize", place);
}
