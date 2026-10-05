import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Instagram, MessageCircle, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/via-da-graca-logo.svg";
import corda from "@/assets/corda-pedaco.png";
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
    images: [pulseiraFe, pulseiraNazinha],
  },
  {
    name: "Pulseira Nazinha",
    edition: "Edição artesanal",
    description: "Uma composição afetiva de contas claras e vermelhas, medalhas e fitas em tons suaves.",
    details: ["Montagem manual", "Medalhas devocionais", "Pompom de fios coloridos"],
    images: [pulseiraNazinha, pulseiraFe],
  },
  {
    name: "Dezeninha Infantil",
    edition: "Pequenos gestos de fé",
    description: "Leve, alegre e delicada, foi pensada para acompanhar as crianças em seus primeiros caminhos de oração.",
    details: ["Contas amarelas", "Pingentes leves", "Tamanho infantil"],
    images: [infantil, amarelo],
  },
  {
    name: "Dezenas de Fé",
    edition: "Três variações",
    description: "Terços compactos para usar no pulso, reunindo madeira, hematita e símbolos de proteção.",
    details: ["Três combinações", "Contas de pedra ou madeira", "Crucifixos e medalhas"],
    images: [dezenas, perola],
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
      { name: "twitter:card", content: "summary_large_image" },
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

function GreenRibbon() {
  return (
    <svg className="cirio-sash" viewBox="0 0 420 120" aria-hidden="true">
      <defs>
        <linearGradient id="satin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(.5 .1 160)" />
          <stop offset=".35" stopColor="oklch(.44 .095 160)" />
          <stop offset=".7" stopColor="oklch(.36 .085 160)" />
          <stop offset="1" stopColor="oklch(.3 .07 160)" />
        </linearGradient>
        <linearGradient id="satinDark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(.28 .07 160)" />
          <stop offset="1" stopColor="oklch(.38 .085 160)" />
        </linearGradient>
      </defs>
      {/* left tail with V-cut, curling down */}
      <path d="M78 46 C58 50 40 66 24 84 L6 98 L30 96 L18 116 C40 100 58 82 82 74 Z" fill="url(#satinDark)" />
      {/* right tail curling up */}
      <path d="M346 30 C368 26 386 14 400 4 L414 6 L402 20 L418 26 C398 38 372 54 342 58 Z" fill="url(#satinDark)" />
      {/* main body: gentle wave only at ends, flat center */}
      <path d="M70 44 C110 36 140 34 210 34 C280 34 310 32 350 26 L350 58 C310 64 280 66 210 66 C140 66 110 68 70 76 Z" fill="url(#satin)" />
      <path d="M70 44 C110 36 140 34 210 34 C280 34 310 32 350 26 L350 33 C310 39 280 41 210 41 C140 41 110 43 70 51 Z" fill="#fff" opacity=".12" />
      <text x="210" y="56" textAnchor="middle" className="sash-text">Feliz Círio de Nazaré 2026</text>
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

function ProductPage({ product, number }: { product: Product; number: number }) {
  const [selected, setSelected] = useState(0);
  useEffect(() => setSelected(0), [product]);
  return (
    <article className="product-spread">
      <div className="photo-page">
        <div className="photo-frame"><img src={product.images[selected]} alt={`${product.name} — vista ${selected + 1}`} /></div>
        <div className="thumbnail-row" aria-label={`Outras vistas de ${product.name}`}>
          {product.images.map((image, index) => (
            <button key={image} type="button" onClick={() => setSelected(index)} className={selected === index ? "thumb active" : "thumb"} aria-label={`Ver imagem ${index + 1}`} aria-pressed={selected === index}>
              <img src={image} alt="" />
            </button>
          ))}
        </div>
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
        <div className="cover-links">
          <a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer"><Instagram size={16} /> @viadagraca._</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Consultar coleção</a>
        </div>
      </div>
      <button type="button" className="cover-enter" onClick={onEnter}>Folhear catálogo <ArrowRight size={15} /></button>
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
  const [soundOn, setSoundOn] = useState(true);
  const touchStart = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const paperSound = useCallback(() => {
    if (!soundOn || typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.12), context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    filter.type = "bandpass"; filter.frequency.value = 1150; gain.gain.value = 0.035;
    source.buffer = buffer; source.connect(filter); filter.connect(gain); gain.connect(context.destination); source.start();
    source.onended = () => void context.close();
  }, [soundOn]);

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(totalPages - 1, next));
    if (bounded === page) return;
    setDirection(bounded > page ? "next" : "prev"); setPage(bounded); paperSound();
  }, [page, paperSound, totalPages]);

  useEffect(() => {
    const url = new URL(window.location.href); url.searchParams.set("page", String(page + 1)); window.history.replaceState({}, "", url);
    document.title = `${page + 1}/${totalPages} — Via da Graça`;
  }, [page, totalPages]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") goTo(page + 1);
      if (event.key === "ArrowLeft") goTo(page - 1);
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [goTo, page]);

  return (
    <main className="catalog-shell">
      <OurLadyLineArt />
      <div className="scene-rope" aria-hidden="true"><img src={corda} alt="" width={1536} height={768} /></div>
      <GreenRibbon />
      <header className="catalog-bar">
        <img src={logo} alt="Via da Graça" />
        <nav className="bar-menu" aria-label="Menu">
          <div className="menu-item">
            <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}>Categorias</button>
            {menuOpen && (
              <div className="menu-dropdown">
                {categories.map((c) => <button key={c.label} type="button" onClick={() => { goTo(c.page); setMenuOpen(false); }}>{c.label}</button>)}
              </div>
            )}
          </div>
          <button type="button" onClick={() => { setAboutOpen(true); setMenuOpen(false); }}>Sobre</button>
          <a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /><span className="hide-sm">@viadagraca._</span></a>
        </nav>
        <div className="bar-actions">
          <span className="hide-sm">{String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>
          <Button variant="ghost" size="icon" onClick={() => setSoundOn((value) => !value)} aria-label={soundOn ? "Desativar som de página" : "Ativar som de página"}>{soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}</Button>
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

      <div className={`magazine-stage ${page === 0 ? "on-cover" : ""}`} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const start = touchStart.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 45) goTo(end < start ? page + 1 : page - 1); touchStart.current = null; }}>
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
  );
}
