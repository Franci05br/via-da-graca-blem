# Plano — Catálogo-Revista Folheável Via da Graça

## Conceito
Substituir a página atual por uma revista digital: o visitante folheia páginas como um catálogo físico. Sem seções institucionais, sem "Nossa História", sem fotos de igrejas. Sem carrinho ou pagamento.

## Visual
- Fundo creme/marfim com papel levemente texturizado, detalhes em dourado e verde profundo, tipografia clássica.
- Fachada da Basílica de Nazaré redesenhada em traço fino dourado, bem suave ao fundo da capa e das páginas.
- Corda do Círio (textura realista, recortada e sem fundo) curvando-se discretamente nos cantos; fitas coloridas do Círio flutuando nas bordas.
- Nossa Senhora apenas como traço abstrato minimalista (o mesmo do logotipo), nunca fotografia.
- Logotipo em SVG transparente, sem círculo.

## Páginas
1. **Capa**: logotipo, frase curta de apresentação, botões para Instagram e WhatsApp, convite "Folheie o catálogo".
2. **Sumário** discreto: Terços, Pulseiras & Dezenas, Imagens & Oratórios.
3. **Uma página dupla por produto**:
   - Esquerda: foto principal grande + miniaturas para outros ângulos ou variações de cor.
   - Direita: nome, descrição delicada dos materiais, preço (provisório), escolha de variação quando houver, botão destacado "Pedir no WhatsApp" com mensagem pronta incluindo peça e variação.
4. **Contracapa**: logotipo, como pedir em 3 passos curtos (escolher, pedir no WhatsApp, combinar entrega/pagamento em Belém), Instagram.

## Produtos previstos (a partir de todas as fotos enviadas)
- Pulseira Fé (contas azul-claras, pingentes bronze) — 2 ângulos.
- Pulseira Nazinha (contas brancas e vermelhas, tassel) — 2–3 ângulos.
- Pingentes avulsos/personalização (coração, coroa, sol, cruz, Berlinda) — foto do conjunto.
- Dezenas de Fé (madeira, hematita, Jesus Misericordioso, São Miguel) — 3 variações.
- Dezeninha Infantil (amarela) — 1 foto.
- Terço de mão — variações: perolado/champanhe, amarelo, vermelho.
- Terços artesanais longos — variações prata, amarelo, pérola.
- Imagem de Nossa Senhora com terço — variações branca e dourada.
- Oratório/Kit "Lugar dela" (imagem, vela, bandeja vermelha com terço).
Nomes, preços e textos continuam provisórios e sinalizados até você enviar os reais.

## Fotos dos produtos
- Cada peça será recortada e reeditada com IA: fundo removido ou trocado por superfície sóbria creme/linho, luz uniforme, sem textos do Instagram, mãos ou plantas quando possível. A peça em si será preservada fielmente (cores, contas, pingentes).
- Fotos usadas no braço/mão (onde mostrar o uso é útil) terão fundo neutralizado em vez de removido.

## Movimento e interação
- Virada de página com efeito de folha em 3D (dupla página no computador, página única no celular), por clique nas setas, teclado, arraste ou deslize no toque.
- Som sutil de papel ao folhear, com botão para silenciar (desligado até a primeira interação, como exigem os navegadores).
- Corda e fitas surgem com fade e leve deslocamento lento a cada página, além de parallax suave ao mover o mouse/rolar.
- Indicador de páginas (pontos ou "03 / 14") e setas com dica animada "folheie".
- Botões fixos discretos: Instagram e WhatsApp.
- Respeito a quem prefere menos movimento (animações reduzidas).

## Pendências que continuam provisórias
- Número oficial do WhatsApp (hoje fictício, sinalizado).
- Nomes finais, preços e materiais confirmados.

## Detalhes técnicos
- Remover da página: hero da Basílica, faixa, seção "Como funciona" fotográfica, "Nossa história", rodapé institucional; apagar assets fotográficos de basílica/corda/fitas não usados.
- Flipbook: biblioteca `react-pageflip` (funciona no navegador, carregada só no cliente) ou implementação própria com CSS 3D + Motion; preferência pela biblioteca pela fidelidade do efeito.
- Som: arquivo curto de folhear (gerado/licença livre) tocado via Web Audio.
- Arte vetorial: Basílica, Nossa Senhora e fitas em SVG próprio; corda como PNG transparente gerado por IA.
- Produtos em lista de dados única (nome, categoria, variações → imagens, preço, descrição) para fácil substituição.
- Fotos reeditadas com edição de imagem por IA a partir dos originais, salvas como assets.
- Atualizar roadmap.md com o novo escopo; título/descrição da página revisados.
