# Plano — Capa plana com atmosfera do Círio de Nazaré

Referência: imagem anexada (capa unificada, corda à esquerda, fita verde à direita, N. Sra. de Nazaré em traço dourado no canto superior direito).

## 1. Fundo plano e unificado (sem sombras)
- Remover `box-shadow` da página da revista e de qualquer elemento da capa.
- Fundo da capa e da seção inteira em um único tom marfim/off-white contínuo, como papel impresso.
- Páginas de produtos mantêm a mesma superfície, sem borda destacada.

## 2. Header limpo e desobstruído
- Barra superior com logotipo à esquerda e menu (Categorias, Sobre, @viadagraca._, controle de som) sempre visível.
- Corda e fita começam abaixo do header: nada sobrepõe a barra (z-index e posicionamento garantidos).

## 3. Elementos laterais do Círio
- Corda do Círio (foto realista já recortada) nascendo da borda esquerda, logo abaixo do header, descendo em curva suave ao longo da lateral — mais fina e integrada do que hoje.
- À direita, fita de cetim verde-esmeralda plana e reta nascendo da borda, com o texto em dourado legível: "Feliz Círio de Nazaré 2026".
- Remover as fitas verticais multicoloridas atuais (substituídas pela fita verde única).

## 4. Centro e cenário da capa
- Manter: logotipo "Via da Graça — Feito com Fé", a frase "Pequenos símbolos. Grandes histórias.", os botões de ação e o traço fino dourado da fachada da Basílica ao fundo do texto.
- Nossa Senhora de Nazaré em traços dourados finos no canto superior direito do cenário (fora da capa), com a coroa e o manto radiante, como na referência.

## 5. Escopo preservado
- Páginas de produtos, navegação de folhear, som, contracapa e botões de WhatsApp permanecem como estão.
- Mobile: corda e fita reduzidas/adaptadas; menu "Categorias" e "Sobre" continuam acessíveis.

## Detalhes técnicos
- Edições em `src/routes/index.tsx` (componentes da capa, fita verde com texto SVG) e `src/styles.css` (fundo plano, sombras removidas, posicionamento dos elementos).
- Corda reutiliza `src/assets/corda.png` (PNG transparente já gerado); fita e N. Sra. em SVG vetorial próprio.
- Verificação visual em desktop e celular com capturas de tela antes de concluir.
