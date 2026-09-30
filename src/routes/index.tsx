import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Heart, Instagram, Menu, MessageCircle, PackageCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/via-da-graca-logo.svg";
import basilica from "@/assets/basilica-nazare.jpg.asset.json";
import corda from "@/assets/corda-cirio.jpg.asset.json";
import fitas from "@/assets/fitas-cirio.webp.asset.json";
import pulseiraFe from "@/assets/pulseira-fe.jpg.asset.json";
import pulseiraNazare from "@/assets/pulseira-nazare.jpg.asset.json";
import pulseiraInfantil from "@/assets/pulseira-infantil.jpg.asset.json";
import conjuntoDevocional from "@/assets/conjunto-devocional.jpg.asset.json";
import dezenasFe from "@/assets/dezenas-fe.jpg.asset.json";
import tercosArtesanais from "@/assets/tercos-artesanais.jpg.asset.json";

type Category = "Todos" | "Terços Artesanais" | "Pulseiras & Dezenas" | "Artigos de Oração";

type Product = {
  name: string;
  category: Exclude<Category, "Todos">;
  image: string;
  description: string;
  price: string;
};

const products: Product[] = [
  { name: "Pulseira Fé", category: "Pulseiras & Dezenas", image: pulseiraFe.url, description: "Contas naturais e medalhas que celebram a história de amor entre Nossa Senhora de Nazaré e o povo paraense.", price: "R$ 64,00" },
  { name: "Pulseira Nazinha", category: "Pulseiras & Dezenas", image: pulseiraNazare.url, description: "Composição artesanal em contas claras e vermelhas, metais em tom antigo e fitas delicadas.", price: "R$ 58,00" },
  { name: "Dezeninha Infantil", category: "Pulseiras & Dezenas", image: pulseiraInfantil.url, description: "Uma lembrança de fé para acompanhar os pequenos, com contas alegres e crucifixo delicado.", price: "R$ 42,00" },
  { name: "Dezenas de Fé", category: "Pulseiras & Dezenas", image: dezenasFe.url, description: "Terços compactos para usar como pulseira, com contas naturais, madeira e símbolos de devoção.", price: "R$ 48,00" },
  { name: "Terços Artesanais", category: "Terços Artesanais", image: tercosArtesanais.url, description: "Feitos um a um em contas claras e amarelas, com medalhas e acabamento prateado.", price: "R$ 72,00" },
  { name: "Conjunto Colo de Maria", category: "Artigos de Oração", image: conjuntoDevocional.url, description: "Composição devocional com terço, imagem de Nossa Senhora e apoio para momentos de oração.", price: "R$ 96,00" },
];

const categories: Category[] = ["Todos", "Terços Artesanais", "Pulseiras & Dezenas", "Artigos de Oração"];
const whatsappNumber = "559100000000";

function whatsappUrl(item?: string) {
  const message = item
    ? `Olá! Gostaria de consultar a peça ${item} da Via da Graça.`
    : "Olá! Gostaria de conhecer as peças da Via da Graça.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Via da Graça | Terços e artigos de fé artesanais em Belém" },
      { name: "description", content: "Showroom de terços, pulseiras e artigos devocionais feitos à mão em Belém, inspirados no Círio de Nazaré." },
      { property: "og:title", content: "Via da Graça | Feito com fé" },
      { property: "og:description", content: "Peças artesanais que celebram a devoção a Nossa Senhora de Nazaré e a fé do povo paraense." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandLogo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="Via da Graça — Feito com Fé" className={className} />;
}

function Index() {
  const [category, setCategory] = useState<Category>("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProducts = category === "Todos" ? products : products.filter((product) => product.category === category);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Via da Graça — início"><BrandLogo className="h-14 w-auto" /></a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            <a href="#colecao" className="nav-link">Coleção</a>
            <a href="#como-funciona" className="nav-link">Como funciona</a>
            <a href="#nossa-historia" className="nav-link">Nossa história</a>
            <a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
          </nav>
          <div className="hidden lg:block"><Button asChild><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Falar com a artesã</a></Button></div>
          <Button variant="ghost" className="size-11 px-0 lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="flex flex-col gap-4">
              {[['Coleção','#colecao'],['Como funciona','#como-funciona'],['Nossa história','#nossa-historia']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="nav-link py-2">{label}</a>)}
              <Button asChild><a href={whatsappUrl()} target="_blank" rel="noreferrer">Falar com a artesã</a></Button>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] items-end pt-20">
        <img src={basilica.url} alt="Fachada da Basílica Santuário de Nossa Senhora de Nazaré, em Belém" className="absolute inset-0 h-full w-full object-cover object-[center_40%]" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
          <div className="max-w-3xl text-primary-foreground">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"><span className="h-px w-10 bg-current" />Belém do Pará · Círio 2026</p>
            <h1 className="font-display text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">Via da Graça</h1>
            <p className="mt-6 max-w-2xl font-display text-2xl leading-tight sm:text-3xl">A história de amor entre o povo paraense e Nossa Senhora.</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">Peças feitas à mão, uma a uma, para transformar fé, carinho e oração em lembranças que atravessam gerações.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="#colecao">Explorar coleção <ArrowRight size={16} /></a></Button>
              <Button asChild variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Contato no WhatsApp</a></Button>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/70">Contato de demonstração — número e valores provisórios.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-accent/30 bg-accent px-5 py-4 text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.14em] sm:flex-row sm:gap-5"><span>Atendimento 100% humanizado & seguro</span><Sparkles size={14} /><span>Peças exclusivas em Belém-PA</span></div>
      </section>

      <section id="colecao" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="eyebrow">Coleção feita com fé</p><h2 className="section-title">Pequenos símbolos.<br />Grandes histórias.</h2></div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Cada peça é escolhida e montada com cuidado, inspirada na fé que move Belém e na presença amorosa de Nossa Senhora de Nazaré.</p>
        </div>
        <div className="mb-9 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar coleção">
          {categories.map((item) => <Button key={item} variant={category === item ? "primary" : "outline"} onClick={() => setCategory(item)} aria-pressed={category === item} className="shrink-0 normal-case tracking-normal">{item}</Button>)}
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <article key={product.name} className="group">
              <div className={`overflow-hidden bg-muted ${index % 3 === 1 ? "aspect-[4/5] lg:mt-10" : "aspect-[4/5]"}`}>
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary/70">{product.category}</p>
                <div className="mt-2 flex items-start justify-between gap-4"><h3 className="font-display text-2xl">{product.name}</h3><p className="shrink-0 font-semibold text-primary">{product.price}<span className="block text-right text-[9px] font-normal uppercase text-muted-foreground">provisório</span></p></div>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <Button asChild variant="ghost" className="mt-3 -ml-5 text-primary"><a href={whatsappUrl(product.name)} target="_blank" rel="noreferrer">Consultar no WhatsApp <ArrowRight size={15} /></a></Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[440px] lg:min-h-[650px]"><img src={corda.url} alt="Mãos unidas segurando a corda do Círio de Nazaré" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-primary/20" /></div>
          <div id="como-funciona" className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
            <p className="eyebrow text-accent">Da escolha ao encontro</p><h2 className="section-title text-primary-foreground">Um atendimento próximo, como deve ser.</h2>
            <ol className="mt-10 space-y-8">
              {[
                ["01", "Escolha com calma", "Navegue pela coleção e encontre as peças que falam ao seu coração."],
                ["02", "Converse com a artesã", "Clique em consultar e conte pelo WhatsApp quais peças você deseja."],
                ["03", "Receba em Belém", "Combinamos entrega ou retirada e o pagamento acontece no recebimento."],
              ].map(([number, title, text]) => <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-primary-foreground/20 pt-6"><span className="font-display text-2xl text-accent">{number}</span><div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p></div></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="nossa-historia" className="relative overflow-hidden py-20 lg:py-28">
        <img src={fitas.url} alt="Fitinhas coloridas do Círio de Nazaré" className="absolute inset-y-0 right-0 hidden h-full w-[38%] object-cover lg:block" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl lg:w-[58%]"><p className="eyebrow">Nossa história & devoção</p><h2 className="section-title">Quando a fé encontra o fazer das mãos.</h2><div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground"><p>A Via da Graça nasceu do desejo de prestar uma homenagem a Nossa Nazinha e à história que une Maria de Nazaré ao povo do Pará.</p><p>Cada peça carrega um gesto de gratidão: contas escolhidas com cuidado, medalhas que guardam memórias e detalhes feitos um a um. É uma forma delicada de manter a oração por perto e partilhar o amor que atravessa o Círio.</p></div><div className="mt-8 flex items-center gap-3 text-primary"><Heart size={18} /><span className="text-sm font-semibold">Feito artesanalmente em Belém, com fé e carinho.</span></div></div></div>
      </section>

      <section className="border-y border-border bg-secondary py-16"><div className="mx-auto max-w-4xl px-5 text-center"><BrandLogo className="mx-auto h-28 w-auto" /><p className="mx-auto mt-5 max-w-xl font-display text-2xl">Quer encontrar uma peça especial para você ou para presentear?</p><Button asChild className="mt-7"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Conversar com a artesã</a></Button><p className="mt-3 text-xs text-muted-foreground">Número fictício nesta demonstração.</p></div></section>

      <footer className="bg-primary px-5 py-12 text-primary-foreground lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]"><div><BrandLogo className="h-24 w-auto brightness-0 invert" /><p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/65">Terços, pulseiras e artigos devocionais feitos artesanalmente em Belém do Pará.</p></div><div><p className="footer-title">Visite</p><div className="mt-4 flex flex-col gap-3 text-sm"><a href="#colecao">Coleção</a><a href="#como-funciona">Como funciona</a><a href="#nossa-historia">Nossa história</a></div></div><div><p className="footer-title">Acompanhe</p><a href="https://www.instagram.com/viadagraca._" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm"><Instagram size={18} /> @viadagraca._</a><p className="mt-5 flex items-center gap-2 text-xs text-primary-foreground/60"><Check size={14} /> Atendimento em Belém-PA</p></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row"><span>© 2026 Via da Graça. Feito com fé.</span><span>Preços e contato exibidos são provisórios.</span></div></footer>

      <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Consultar pelo WhatsApp — contato de demonstração" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105"><MessageCircle size={25} /></a>
    </main>
  );
}
