# SPEC.md
# HR SHOPTIME — Protótipo do site E-commerce

## Projeto

Desenvolver o protótipo da página inicial do site e-commerce HR SHOPTIME.
O objetivo deste projeto não é desenvolver um e-commerce funcional, mas sim uma apresentação comercial de alto nível para demonstrar ao cliente como será a futura loja virtual.
Todo o desenvolvimento deve priorizar qualidade visual, experiência do usuário e fidelidade à identidade premium da marca.
O projeto deve ser construído pensando em sua futura expansão para um e-commerce completo.

---

# Objetivos

A página deve transmitir:

- Sofisticação
- Credibilidade
- Elegância
- Organização
- Modernidade
- Facilidade de navegação

O visitante deve perceber imediatamente que se trata de uma loja especializada em relógios e perfumes.

---

# Navegação

O protótipo possuirá apenas uma página.
Não haverá mudança de página.

Estrutura da página:

Hero
↓
Marcas
↓
Produtos em Destaque
↓
Coleções
↓
Como escolher seu perfume?
↓
Benefícios
↓
Depoimentos
↓
Footer
---

# Navbar

Navbar desaparece de forma suave ao descer a página (quando o usuário usar o scroll pra baixo), e reaparece também de forma suave ao subir a página (quando o usuário usar o scroll para cima).
Deve transmitir limpeza visual.

Estrutura:

- Logo (\images\logo hr shop time\HR logo sem fundo destaque (em branco) v2)
- Home
- Produtos
- Coleções
- Busca (Ícone)
- Carrinho (Ícone)
- Usuário (Ícone)
- Os três ícones devem ficar alinhados à direita.
- A logo deve ficar alinhada à esquerda.
- A navbar deverá permanecer com a cor #303030 durante toda a navegação.
---

# Hero

É a principal seção (ela não irá ocupar toda a seção que o usuário vê) da página.
Deve ocupar praticamente toda a primeira dobra.
Deverá conter uma imagem/banner na dimensão 1912 x 617px
Banner: images\banners\banner hero section hrshop v2
O banner ter
No centro:
- Headline ("DEFINA SUA ESSÊNCIA")
- Texto de apoio>: "Perfumes marcantes e relógios exclusivos para quem valoriza elegância, personalidade e estilo em cada detalhe."
- Botão CTA ("Explorar Produtos")

A imagem da Hero deverá atuar como elemento de apoio visual.
- Ela não deve competir visualmente com a Headline.
- Aplicar um overlay escuro ou claro (dependendo da imagem) para reduzir seu contraste.
- A imagem deverá possuir baixa prioridade visual, valorizando o conteúdo central.
- O foco principal da Hero deve permanecer no título, texto de apoio e botão CTA.

Não utilizar sliders.
O Hero deve permanecer estático.

Deverá conter uma lista horizontal logo abaixo da hero com algumas logos de marcas que são vendidas na loja.
Exibir os logotipos oficiais.

Perfumes (Junto com seus respectivos diretórios onde estão suas logos):

- Al Wataniah (images/logo-marcas/al-wataniah-logo)
- Maison Alhambra (images/logo-marcas/maison-alhambra-logov2)
- French Avenue (images/logo-marcas/French-Avenue-Logov2)
- Lattafa (images/logo-marcas/maison-alhambra-logov2)
- Armaf (images/logo-marcas/armaf-logov2)

Todas as Logos devem estar do mesmo tamanho, uma ao lado da outra horizontalmente.

Objetivo:
Criar impacto visual imediatamente ao acessar o site.
---

# Seção Produtos

Primeira seção após o Hero.
Título:
- Produtos em Destaque

Subtítulo:
- Uma seleção dos principais produtos da loja.

Exibir um grid responsivo.
O grid aparecerá como um fade-in assim que o usuário entrar na seção (scroll para baixo)

Desktop:
- 4 produtos por linha.

Tablet:
- 2 produtos.

Mobile:
- 1 produto.

Cada card deverá possuir:

- Imagem
- Marca
- Nome
- Preço
- "Adicionar ao Carrinho" Junto com o ícone do carrinho no hover (ícone: images/ícones/carrinho-de-compras).

Ao passar o mouse:

- pequena elevação
- sombra suave
- animação elegante

Ao clicar em "Adicionar ao Carrinho": 

- O botão muda temporariamente para ✓ Adicionado.
- O contador do carrinho passa de 0 → 1.
- Uma aba desliza pela direita (300–350px de largura).
    - Fundo da página recebe um overlay escuro de aproximadamente 25% de opacidade.
        - A aba exibe:
        - Produto adicionado.
        - Quantidade.
        - Preço.
        - Subtotal.
        - Botão "Continuar Comprando" (O botão continuar comprando leva o usuário de volta a seção Produtos)
        - Botão "Ir para o Carrinho". (Este botao não tem ação)
        - Botão de "X" (Para o usuário sair da aba)
    - Se o usuário fechar a aba
        - A aba não abre novamente automaticamente.
        - Quando adicionar novos produtos:
        - Apenas o contador será atualizado.
        - Opcionalmente exibir um pequeno toast:
            - "✓ Produto adicionado ao carrinho" durante 2 segundos.
    - O usuário poderá reabrir o painel clicando no ícone do carrinho na navbar.
    - O painel deve ser responsivo com mobile first.

---

# Seção Coleções

Esta seção servirá para destacar grandes categorias.
Não será um catálogo.
Serão apenas grandes banners clicáveis.

Categorias previstas:
- Relógios
- Perfumes Masculinos
- Perfumes Femininos
- Promoções

Cada banner deverá conter:
- Imagem
- Overlay escuro
- Título
- Hover com pequeno zoom.
---

# Seção — Como escolher seu perfume?

## Objetivo

Criar uma seção educativa que agregue valor ao visitante antes da compra.

Ao invés de apenas vender um produto, esta seção deve ensinar rapidamente como funciona a estrutura de uma fragrância, tornando a experiência mais envolvente e aumentando a confiança do cliente.

A seção deve possuir aparência premium, moderna e minimalista, mantendo consistência com toda a identidade visual do site.

---

## Layout

A seção será dividida em duas colunas.

### Lado Esquerdo

Imagem principal.

A imagem será adicionada posteriormente.

Ela deve ocupar praticamente toda a altura da seção.

A imagem deve possuir:

- alta qualidade
- cantos levemente arredondados
- sombra extremamente discreta

---

### Lado Direito

Conteúdo textual.

Estrutura:

Título

"Como escolher seu perfume?"

Descrição

"Cada fragrância possui uma evolução única ao longo do dia. Conheça suas principais notas e descubra qual combina melhor com sua personalidade."

Logo abaixo, apresentar três cards informativos.

---

## Cards

Cada card representa uma etapa da fragrância.

### Notas de Saída

Pequena descrição explicando que são as primeiras notas percebidas após a aplicação do perfume.

---

### Notas de Coração

Pequena descrição explicando que representam a identidade principal da fragrância.

---

### Notas de Fundo

Pequena descrição explicando que permanecem por mais tempo na pele e definem a fixação do perfume.

---

Ao final da seção adicionar um botão CTA.

Texto:

"Conhecer Perfumes"

O botão deverá direcionar futuramente para o catálogo de perfumes.

---

# Microinterações

Esta seção deve possuir pequenas animações para torná-la mais dinâmica, porém sem exageros.

## Scroll Reveal

Quando a seção entrar na área visível da tela:

- imagem aparece utilizando Fade + leve deslocamento horizontal;
- conteúdo textual aparece poucos milissegundos depois;
- os três cards surgem em sequência (stagger animation).

A animação deve acontecer apenas uma vez.

Duração aproximada:

300–500ms.

---

## Hover da imagem

Ao posicionar o cursor sobre a imagem:

- aplicar zoom extremamente discreto (aproximadamente 1.03x);
- transição suave;
- nenhuma alteração brusca.

---

## Hover dos cards

Cada card deverá responder ao cursor.

Ao passar o mouse:

- leve elevação (translateY);
- aumento extremamente discreto da sombra;
- borda recebe a cor Primary (#b88e5d);
- pequeno brilho utilizando a cor Accent (#d3a773) com baixa opacidade.

As animações devem durar aproximadamente 200ms.

---

## Efeito de Paralaxe

Durante o scroll da página, a imagem deverá mover-se levemente em velocidade inferior ao conteúdo textual.

O efeito deve ser extremamente sutil, apenas para gerar sensação de profundidade.

Não exagerar na intensidade.

---

## CTA

Ao posicionar o cursor sobre o botão:

- alterar suavemente a cor de fundo;
- pequeno aumento de escala (aproximadamente 1.02x);
- adicionar sombra discreta.

---

# Responsividade

Desktop

Layout em duas colunas.

Imagem à esquerda.

Conteúdo à direita.

---

Tablet

Imagem acima.

Conteúdo abaixo.

Manter bom espaçamento entre os elementos.

---

Mobile

Todos os elementos empilhados.

Cards ocupando 100% da largura.

Imagem reduzida proporcionalmente.

O efeito de paralaxe deverá ser desativado em dispositivos móveis para preservar desempenho.

---

# Restrições

- Não utilizar carrosséis.
- Não utilizar animações chamativas.
- Evitar excesso de movimento.
- Toda a seção deve transmitir elegância e sofisticação.
- A prioridade deve permanecer na leitura do conteúdo e na compreensão das informações.
---

# Seção Benefícios

Criar quatro cards.
Cada card deve possuir:
- Ícone
- Título
- Descrição
- Benefícios:
- Produtos Originais
- Pagamento Seguro
- Entrega para Todo o Brasil
- Atendimento via WhatsApp

---

# Depoimentos

Adicionar uma pequena seção contendo avaliações fictícias apenas para composição visual.

Cada card possuirá:
- Foto
- Nome
- Quantidade de estrelas
- Comentário
- Todo o conteúdo será substituído posteriormente.

---
# Footer

O rodapé deverá conter:

- Chamada para ficar por dentro de novidades/promoções através de um input de nome e e-mail, com um botão "Cadastrar" ao lado.
- Logo

- "INFORMAÇÕES" à esquerda:
    - Meus Pedidos
    - Frete e entrega
    - Trocas e Devoluções
    - Política de Privacidade
- "NOSSAS REDES SOCIAIS" (apenas os ícones)
    - Facebook: https://www.facebook.com/hrshoptime
    - Instagram: https://www.instagram.com/hrshoptime/
- "'SITE SEGURO"
    - GOOGLE SITE SEGURO (Com ícone)
↓
- Uma linha abaixo
"HR Shop Time ® - Todos os direitos reservados."
Contato Whatsapp: https://api.whatsapp.com/send/?phone=5521986711298
---

# Responsividade

Toda a página deverá ser construída utilizando abordagem Mobile First.
Breakpoints:
- Desktop
- Notebook
- Tablet
- Mobile

Nenhuma seção poderá quebrar o layout.
---

# Conteúdo Temporário

Durante o desenvolvimento utilizar:

Textos fictícios (somente aqueles que não foram definidos neste aquivo)

Imagens placeholder
Produtos fictícios (somente aqueles que não foram definidos neste aquivo)
Preços fictícios (em Real Brasileiro)

Esses elementos serão substituídos posteriormente pelo conteúdo oficial da HR SHOPTIME.

---

# Regras Gerais

O layout deve parecer um e-commerce premium.

Não utilizar:

- excesso de cores
- excesso de animações
- excesso de sombras
- gradientes exagerados
- elementos chamativos

Dar prioridade para:

- espaçamento
- tipografia
- imagens
- hierarquia visual
- experiência do usuário

A interface deve transmitir sensação de produto moderno, semelhante ao padrão visual utilizado por marcas de luxo e tecnologia.

O código deverá ser organizado em componentes reutilizáveis para facilitar a futura expansão do projeto para um e-commerce completo.