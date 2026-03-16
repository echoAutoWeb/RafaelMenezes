# Lista de modificações – aproximar do layout de referência

Use este checklist para deixar o site mais fiel à imagem do escritório Rafael Menezes. Pode usar imagens placeholder sem problema.

---

## 1. Header / Navegação

- [x] **Fundo** – Quase preto (`#0a0a0a` ou `#0d0d0d`), sem bordas/sombras que não estejam na referência.
- [x] **Logo** – Manter “RM” + “RAFAEL MENEZES” centralizados; ajustar tamanhos (ex.: iniciais um pouco maiores) e `letter-spacing` do nome para bater com a referência.
- [x] **Nav** – Links em uma única linha, centralizados, com espaçamento uniforme; fonte em branco, sem sublinhado exceto no hover/ativo (conforme referência).
- [x] **Mobile** – Garantir que o menu hamburger e o drawer continuem com fundo escuro e texto branco.

---

## 2. Hero

- [x] **Só imagem** – Nenhum texto ou CTA sobre a foto; apenas a imagem de fundo.
- [x] **Overlay** – Manter escurecimento leve (ex.: 0,3–0,5 de opacidade) para contraste; se na referência a foto está “um pouco escura/desfocada”, ajustar `opacity` e, se quiser, um leve `filter: blur(1px)`.
- [x] **Altura** – Aumentar `min-height` (ex.: 55–70vh) para a faixa hero ficar mais “alta” como na referência.
- [x] **Placeholder** – Usar imagem placeholder (ex.: escritório moderno ou genérico) em `src/assets/images/hero.jpg` e referenciar no HTML/CSS para manter o layout mesmo sem foto real.

---

## 3. Quem Somos

- [x] **Proporções** – Coluna da esquerda ~20–25% (só o logo), direita ~75–80% (título + texto).
- [x] **Logo** – Logo “RM” + “RAFAEL MENEZES” centralizado na coluna esquerda (vertical e horizontal).
- [x] **Fundo** – Cinza escuro sólido (ex.: `#141414` ou `#1a1a1a`), igual em toda a seção.
- [x] **Tipografia** – Título “Quem Somos” em branco, grande; parágrafo em branco/cinza claro, tamanho menor, boa legibilidade.

---

## 4. Missão, Visão, Valores

- [x] **Separadores** – Linhas verticais finas e claras (`1px solid rgba(255,255,255,0.15)`) entre as três colunas (não só no grid).
- [x] **Gradiente de fundo** – De cinza escuro no topo → um pouco mais claro no meio → cinza escuro de novo no rodapé da seção.
- [x] **Colunas** – Três colunas de largura igual em desktop; títulos (Missão, Visão, Valores) em branco; texto em branco/cinza claro.
- [x] **Valores** – Manter como lista (Lealdade, Excelência no atendimento, etc.), com quebras de linha ou bullets discretos.

---

## 5. Áreas de Atuação

- [x] **Título** – “Áreas de Atuação” centralizado no topo da seção.
- [x] **Layout por área** – Cada área em “faixa horizontal”: **título à esquerda** (ex.: Direito Civil) e **descrição à direita** na mesma linha (em desktop); em mobile pode empilhar.
- [x] **Separadores** – Linhas horizontais finas e claras entre cada faixa (não só entre título e lista).
- [x] **Fundo** – Cinza escuro sólido, igual ao de “Quem Somos” se for o caso na referência.

---

## 6. Bloco “Contrate nossos serviços agora”

- [x] **Texto** – Uma linha: “Contrate nossos serviços agora”, centralizada.
- [x] **Botão** – Um único botão, centralizado: “Preencha o formulário”, fundo dourado/laranja claro (`#c9a227` ou tom da referência), texto branco, cantos arredondados.
- [x] **Fundo da seção** – Cinza escuro sólido, sem gradiente.

---

## 7. Conheça nossa estrutura

- [x] **Título** – “Conheça nossa estrutura” alinhado à esquerda.
- [x] **Proporções** – Esquerda ~60% (imagens), direita ~40% (textos + botão).
- [x] **Duas imagens** – Lado a lado; cada uma com legenda abaixo: “Porto Alegre / RS” e “Rio de Janeiro / RJ”.
- [x] **Placeholders** – Usar imagens placeholder para as duas fotos (ex.: `placeholder.com` ou imagens genéricas de escritório em `src/assets/images/estrutura-poa.jpg` e `estrutura-rj.jpg`).
- [x] **Carrossel (opcional)** – Se na referência há “três pontinhos” abaixo de cada imagem (indicador de carrossel), adicionar dots decorativos ou um carrossel simples com placeholders.
- [x] **Lado direito** – “Atendimento Presencial” + “Porto Alegre” e “Rio de Janeiro”; depois “Atendimento Online” + “Todo o Brasil”; por fim botão “Fale conosco” (mesmo estilo dourado do outro CTA).

---

## 8. Footer

- [x] **Fundo** – Preto sólido (`#000`).
- [x] **Coluna 1** – Logo (RM + RAFAEL MENEZES) + ícone do Instagram + “@rafaelmenezes.advocacia” logo abaixo do ícone.
- [x] **Coluna 2** – “Fale Conosco” + e-mail + Matriz (Porto Alegre) com os dois telefones + Filial (Rio de Janeiro) com um telefone.
- [x] **Coluna 3** – Pequeno mapa (embed do Google Maps ou imagem estática placeholder) + texto “Porto Alegre” + endereço “Praça XV de novembro, 21/302 Centro Histórico”.
- [x] **WhatsApp** – Ícone grande, circular, verde (#25d366), à direita (ou no canto inferior direito como “floating” se for o caso na referência).
- [x] **Copyright** – Última linha: “Copyright © Rafael Menezes – Todos os direitos reservados”, texto pequeno, cinza claro.

---

## 9. Imagens placeholder

- [x] **Hero** – Adicionar `hero.jpg` (ou usar URL de placeholder, ex.: `https://placehold.co/1920x800/1a1a1a/666?text=Escritorio`) em `src/assets/images/` e apontar o hero para ela.
- [x] **Estrutura POA** – `estrutura-poa.jpg` (ou placeholder) para a primeira foto da seção “Conheça nossa estrutura”.
- [x] **Estrutura RJ** – `estrutura-rj.jpg` (ou placeholder) para a segunda foto.
- [x] **Footer – mapa** – Usar iframe do Google Maps (embed do endereço) ou imagem estática de mapa como placeholder até ter o embed definitivo.

---

## 10. Geral (cores e tipografia)

- [x] **Paleta** – Fundos: preto e cinzas escuros; texto: branco e cinza claro; destaque: dourado/laranja (`#c9a227` ou tom da referência) em botões e possivelmente em algum detalhe de título.
- [x] **Separadores** – Em toda a página, usar linhas finas e discretas (ex.: `rgba(255,255,255,0.1)` ou `0.15`) onde a referência mostrar divisórias.
- [x] **Botões** – Único estilo de CTA: fundo dourado, texto branco, bordas arredondadas, hover consistente (ex.: escurecer um pouco o dourado).

---

## Ordem sugerida de implementação

1. Ajustar cores e proporções (header, fundos das seções, footer preto).
2. Ajustar layout de “Quem Somos” (20/80) e “Conheça nossa estrutura” (60/40).
3. Adicionar separadores (Missão/Visão/Valores e Áreas de Atuação).
4. Trocar/ajustar imagens para placeholders onde faltar.
5. Inserir mapa no footer (embed ou placeholder).
6. Revisar tipografia e espaçamentos com a imagem ao lado.

Quando terminar cada item, marque o `[ ]` como `[x]` neste arquivo para acompanhar o progresso.
