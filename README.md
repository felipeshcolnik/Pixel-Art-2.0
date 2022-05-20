# Pixel-Art-2.0
# Boas vindas ao repositório do projeto Pixel ART!

Este foi um dos meus primeiros projetos de Programação Web, onde pude aplicar os aprendizados básicos de HTML, CSS e JS.

A ideia da aplicação é proporcionar ao usuário a possibilidade de desenhar em uma página WEB. Algo como o software "Paint", nativo do Windows, porém com bem menos recursos.

## Requisitos Obrigatórios:

* Neste projeto, você implementará um editor de arte com pixels.

**Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro!** 👩‍🎨

### 1 - A página deve possuir o título "Paleta de Cores".

##### As seguintes verificações serão feitas:

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Pixel Art Project".

### 2 - A página deve possuir uma paleta de 5 cores distintas.

##### As seguintes verificações serão feitas:

- A paleta de cores deve ser um elemento com `classe` `color-palette`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**;

- Cada elemento da paleta de cores deverá ter uma borda branca, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

- A paleta de cores não deve conter cores repetidas.

### 3 -  A página deve possuir um quadro de pixels, com 25 pixels.

##### As seguintes verificações serão feitas:

- O quadro de "pixels" deve ter 15 elementos de largura e 15 elementos de comprimento;

- O quadro de "pixels" deve possuir a `classe` denominada `board-frame`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

### 4 - Cada elemento do quadro de pixels deve possuir 40 _pixels_ de largura e 40 _pixels_ de altura e ser delimitado por uma borda preta de 1 pixel.

##### As seguintes verificações serão feitas:

- O quadro de pixels tem altura e comprimento de 5 elementos;

- 40 pixels deve ser o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

### 5 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.

##### As seguintes verificações serão feitas:

- A `classe` `active-color` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a `classe` `active-color` de cada vez;

- Note que os elementos que deverão receber a classe `active-color` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

### 6 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.

##### As seguintes verificações serão feitas:

- Ao carregar a página deve ser possível pintar os pixels de preto;

- Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

- Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

### 7 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

##### As seguintes verificações serão feitas:

- O botão deve ter o `id` denominado `clear-pixel-area`;

- O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O texto do botão deve ser **"Clear board"**.

## Requisitos Bônus:

### 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.

##### As seguintes verificações serão feitas:

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input;

 - Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "Change Board Size";

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

### 11 - Limite o tamanho do mínimo e máximo do board.

##### As seguintes verificações serão feitas:

- Caso o valor digitado no input `board-size` fuja do intervalo de 5 a 50, faça:

  - Valor menor que 5, considerar 5 como padrão;

  - Valor maior que 50, considerar 50 como padrão.

### 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

