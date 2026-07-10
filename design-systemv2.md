# DESIGN-SYSTEM.md
# HR SHOPTIME — Design System

---

# Conceito

A identidade visual da HR SHOPTIME deve transmitir sofisticação sem exageros.

Todo o projeto deve seguir uma linguagem visual limpa, moderna e minimalista, priorizando espaços em branco, boas proporções e fotografias de alta qualidade.

A experiência deve remeter a marcas premium de relógios e perfumaria, mantendo personalidade própria.

Palavras-chave:

- Elegante
- Premium
- Minimalista
- Contemporâneo
- Refinado
- Atemporal
- Organizado

---

# Identidade Visual

A interface deve transmitir calma e confiança.

Os produtos são o elemento principal da página.

Todos os demais elementos devem existir apenas para conduzir o usuário até eles.

Evitar:

- excesso de sombras
- excesso de gradientes
- excesso de cores
- excesso de elementos gráficos
- excesso de animações

Valorizar:

- espaçamento
- tipografia
- fotografias
- hierarquia visual
- microinterações

---

# Paleta de Cores

## Text

#19140e

Cor padrão para títulos e textos.

---

## Background

#f9f6f3

Cor principal da página.

Nunca utilizar branco puro como plano de fundo principal.

---

## Primary

#b88e5d

Cor utilizada para:

- botões secundários
- links
- pequenos destaques
- hover
- bordas ativas

---

## Secondary

#d6b690

Utilizar apenas em:

- backgrounds suaves
- pequenos detalhes
- cards informativos

---

## Accent

#d3a773

Reservado para:

- micro detalhes
- ícones ativos
- pequenos destaques
- animações

---

## Navbar

Background

#303030

Texto

#FFFFFF

Hover

#d3a773

---

# Tipografia

Família:

Montserrat

---

## Heading 1

Peso

700

Uso

Hero

---

## Heading 2

Peso

600

Uso

Seções

---

## Heading 3

Peso

600

Uso

Cards

---

## Texto

Peso

400

Uso

Parágrafos

---

## Botões

Peso

600

Letras levemente espaçadas.

---

## Preços

Peso

700

Maior destaque visual.

---

# Grid

Container

1200px

---

Desktop

4 colunas

---

Tablet

2 colunas

---

Mobile

1 coluna

---

Padding lateral

Desktop

32px

Tablet

24px

Mobile

20px

---

# Espaçamento

Utilizar apenas múltiplos de:

8

16

24

32

48

64

96

128

Nunca utilizar espaçamentos aleatórios.

---

# Border Radius

## Cards

24px

---

## Cards Informativos

22px

---

## Botões

16px

O botão deve transmitir firmeza.

Não utilizar formato "pill".

---

## Inputs

16px

---

## Imagens

22px

---

## Mini Cart

24px apenas nos cantos esquerdos.

---

## Navbar

Altura: 80px

Background: #303030

A navbar não permanecerá fixa durante toda a navegação. Ela deverá responder ao comportamento do scroll, transmitindo leveza e fluidez.

### Comportamento

- Ao carregar a página, a navbar permanece totalmente visível.
- Após aproximadamente **120px** de scroll, ela passa a responder ao movimento do usuário.
- Ao rolar a página para baixo, a navbar desliza suavemente para cima até desaparecer.
- Ao rolar a página para cima, a navbar reaparece utilizando a mesma animação.
- Ao retornar ao topo da página, a navbar volta ao estado inicial, totalmente visível.

Evitar qualquer efeito de "piscar" ou desaparecer com pequenos movimentos de scroll.

### Animação

- Transform: `translateY()`
- Duração: 300ms
- Timing Function: `ease-in-out`

### Estrutura

Logo → Home → Produtos → Coleções → Busca → Carrinho → Usuário

Os três ícones devem permanecer alinhados à direita, mantendo espaçamento uniforme e aparência minimalista.
---

## Comportamento

Ao realizar scroll para baixo:

- esconder suavemente a navbar;
- animação utilizando translateY.

Ao realizar scroll para cima:

- exibir novamente a navbar;
- mesma velocidade da animação.

Nunca desaparecer instantaneamente.

A animação deve transmitir fluidez.

---

## Transição

300ms

Ease-in-out

---

## Estrutura

Logo

↓

Home

↓

Produtos

↓

Coleções

↓

Busca

↓

Carrinho

↓

Usuário

Os três ícones devem permanecer alinhados à direita.

---

# Ícones

Biblioteca

Lucide Icons

Todos devem possuir:

- mesmo tamanho
- mesma espessura
- estilo outline

Ícones:

Search

Shopping Cart

User

Arrow Right

Heart

Menu

Chevron

Nenhum ícone preenchido.

---

# Hero

Altura

90vh

A Hero deve ocupar praticamente toda a primeira dobra.

---

## Banner

A imagem servirá apenas como apoio visual.

Ela nunca deverá competir com o conteúdo central.

Aplicar overlay escuro extremamente discreto quando necessário.

A prioridade visual deve permanecer em:

- Headline
- Texto
- CTA

---

## Conteúdo

Sempre centralizado.

Máxima largura:

700px

---

# Botões

## Primário

Background

#19140e

Texto

Branco

Hover

Background

#303030

Leve aumento da sombra.

---

## Secundário

Background

Transparente

Borda

1px solid #b88e5d

Texto

#19140e

Hover

Background

#b88e5d

Texto branco.

---

# Cards de Produtos

Layout vertical.

Imagem ocupa aproximadamente 70% do card.

Estrutura:

Imagem

Marca

Nome

Preço

Botão

Adicionar ao Carrinho

---

## Hover

TranslateY

-6px

Sombra aumenta discretamente.

Imagem recebe zoom de aproximadamente 1.03.

Transição:

250ms

---

# Mini Cart

Largura

360px

Entrada

Deslizar pela direita.

Overlay

Background preto

25% de opacidade.

---

## Primeira adição

Abrir automaticamente.

---

## Demais adições

Não abrir novamente.

Atualizar apenas:

- contador
- subtotal

Exibir toast discreto.

---

# Cards Informativos

Utilizados na seção

Como escolher seu perfume?

Background

Branco

Radius

22px

Padding confortável.

Hover

Leve elevação.

Mudança suave da borda para Primary.

Pequeno brilho utilizando Accent.

---

# Seção Educativa

Imagem ocupa aproximadamente metade da largura.

Imagem:

Hover

Zoom extremamente discreto.

Scroll

Parallax suave.

---

Cards

Scroll Reveal em sequência.

Primeiro card

↓

Segundo card

↓

Terceiro card

Nunca aparecer simultaneamente.

---

# Logos das Marcas

Utilizar sempre os logotipos oficiais.

Mesmo tamanho óptico.

Mesmo alinhamento.

Muito espaço entre eles.

Nunca utilizar fundos coloridos.

---

# Footer

Background

#303030

Texto

Branco

Links

Cinza claro

Hover

Primary

---

# Animações

Toda animação deve transmitir elegância.

Nunca chamar mais atenção do que o conteúdo.

---

## Scroll Reveal

Fade Up

Deslocamento

24px

Duração

500ms

Uma única execução.

---

## Hover

Todos os componentes interativos devem responder ao cursor.

Nunca utilizar efeitos exagerados.

---

## Botões

Leve aumento de escala

1.02

---

## Cards

TranslateY

-6px

---

## Imagens

Scale

1.03

---

## Navbar

TranslateY

Ao descer

↓

Esconde

Ao subir

↓

Aparece

---

## Mini Cart

Entrada lateral.

Fade simultâneo.

Overlay suave.

---

## Toast

Fade In

↓

Permanência

↓

Fade Out

Tempo total

2 segundos.

---

# Responsividade

Desktop

≥1280px

Notebook

1024px

Tablet

768px

Mobile

390px

Toda a experiência deve permanecer consistente.

Nenhuma animação deve prejudicar a navegação em dispositivos móveis.

Desabilitar:

- Parallax
- animações pesadas
- efeitos dependentes de hover

em telas touch.

---

# Filosofia de Design

Cada elemento deve possuir um propósito.

O usuário deve perceber imediatamente uma interface premium, organizada e intuitiva.

A identidade visual deve transmitir a mesma sensação de uma boutique especializada em relógios e perfumes: sofisticada, elegante e acolhedora.

A simplicidade deve ser a principal característica do projeto.

Menos elementos, melhor hierarquia e mais espaço em branco resultarão em uma experiência superior.