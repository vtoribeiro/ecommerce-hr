# UPDATE V1 – Refinamento da Navbar, Hero Section e Cards de Produto

## Objetivo

Refinar o visual da V1 para deixá-la mais premium e sofisticada, preservando toda a estrutura atual do projeto. Não reescrever componentes do zero; apenas ajustar layout, alinhamentos, espaçamentos, tipografia e microinterações.

---

# 1. Hero Section (Nova Estrutura)

Substituir a Hero atual por uma versão inspirada em editoriais de marcas de luxo.

## Layout

Utilizar um layout em duas colunas.

Desktop:

- esquerda: conteúdo
- direita: imagem

A hero deve ocupar praticamente toda a largura da viewport.

Estrutura:

```
---------------------------------------------------------
|                   Navbar                              |
---------------------------------------------------------
|                                                       |
|  Headline               Imagem                        |
|  Texto                  (perfume + relógio)           |
|  CTA                                                 |
|                                                       |
---------------------------------------------------------
|            Logos das marcas                           |
---------------------------------------------------------
```

### Proporções

Desktop:

- Conteúdo: aproximadamente 42%
- Imagem: aproximadamente 58%

O conteúdo deve permanecer perfeitamente centralizado verticalmente.

---

# 2. Background da Hero

Utilizar exatamente a mesma identidade visual da página.

Background:

```
#f4f1e9
```

Não utilizar gradientes.

Não utilizar caixas.

Não utilizar cards.

A Hero deve parecer uma única composição limpa.

---

# 3. Imagem

A imagem permanece exatamente a utilizada atualmente (perfume + relógios).

Ela deve ocupar apenas a coluna direita.

Sem bordas.

Sem sombra.

Sem moldura.

Sem border-radius.

A imagem deve parecer parte natural do layout.

---

# 4. Headline

Utilizar Playfair Display.

Grande.

Elegante.

Com bastante respiro.

Exemplo visual:

```
DEFINA SUA
ESSÊNCIA
```

Características:

- peso forte
- line-height reduzido
- bastante contraste

Cor:

```
#171714
```

---

# 5. Texto de apoio

Fonte:

Manrope

Peso:

400

Cor:

#555

Máximo:

2 linhas

Espaçamento confortável abaixo da headline.

---

# 6. CTA

Manter botão sólido.

Background:

```
#171714
```

Texto branco.

Hover:

- background um pouco mais claro
- transition suave

Nada exagerado.

---

# 7. Navbar

A navbar está visualmente desequilibrada.

Hoje os links ficaram excessivamente deslocados para a direita.

O layout precisa ser reorganizado.

Estrutura correta:

```
LOGO

        Início
        Produtos
        Coleções
        Sobre Nós

                    Lupa
                    Carrinho
```

Ou seja:

Logo:

- alinhada à esquerda

Links:

- centralizados horizontalmente na navbar

Ícones:

- alinhados à direita

Todos os grupos precisam possuir espaçamento proporcional.

Evitar que o grupo central fique "empurrado" para qualquer lado.

---

# 8. Botões da Navbar

Fonte:

Manrope

Peso:

500

Hover:

Apenas alteração suave de cor.

Sem animações exageradas.

---

# 9. Cards de Produto

Existe um problema no botão "Adicionar ao Carrinho".

Ao passar o mouse:

- o background clareia
- porém o texto também fica claro
- o ícone também perde contraste

Resultado:

o botão praticamente desaparece.

## Corrigir

O hover deve manter contraste adequado.

Exemplo:

Background:

```
#2d2d2d
```

Texto:

```
#ffffff
```

Ícone:

```
#ffffff
```

Nunca permitir texto branco sobre fundo quase branco.

Manter contraste AA.

---

# 10. Hover do botão

Adicionar apenas:

- leve mudança de cor
- leve elevação (2~3px)
- transition de aproximadamente 250ms

Não alterar opacidade do texto.

---

# 11. Logos das Marcas

Remover completamente qualquer efeito de carrossel.

Desktop:

- estáticas

Mobile:

- também estáticas

Não duplicar logos.

Não repetir logos.

Não utilizar marquee.

Não utilizar animação infinita.

As logos devem aparecer apenas uma vez cada.

Distribuir utilizando Flexbox ou Grid.

Desktop:

- espaçamento uniforme
- centralizadas

Mobile:

- reduzir tamanho proporcionalmente
- permitir quebra de linha apenas se absolutamente necessário
- manter alinhamento visual consistente

---

# 12. Microinterações

Manter o padrão premium.

Hover apenas em:

- CTA
- Cards de produtos
- Cards de coleções

Transições:

250ms–350ms

Curva:

```
ease
```

Nada exagerado.

---

# 13. Resultado esperado

A interface deve transmitir sensação de uma loja premium de perfumes e relógios, inspirada em marcas como Tom Ford, Rolex, Creed, Byredo e Aesop.

O foco é um design editorial, sofisticado e minimalista, com excelente equilíbrio visual, tipografia refinada, amplo uso de espaços em branco e hierarquia clara entre conteúdo e imagem. A Hero Section deve parecer uma composição única e elegante, integrada naturalmente ao restante da página, enquanto a navbar deve apresentar distribuição perfeitamente equilibrada entre logo, navegação e ícones. Todos os elementos interativos devem possuir microanimações discretas, suaves e consistentes, reforçando a percepção de qualidade sem comprometer a limpeza do layout.