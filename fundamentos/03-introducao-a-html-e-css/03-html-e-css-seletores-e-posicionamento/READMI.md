# Aula 03 HTML e CSS Seletors e Posicionamento

#### Conceitos
shorthand - termo usado para se referir a atalhos para controlar um conjunto de outras propriedades.
Ex: border-width, border-style

#### Comandos de delimitação de área
Servem para delimitar a área de um conteúdo, desconsiderando as bordas, margens e padding
width: _; - serve para delimitar largura de um objeto
height: _; - serve para delimitar altura de um objeto

#### Padding
Controla o espaço vazio entre um conteúdo e a borda da caixa

#### Border

##### Comandos
border-width
border-style
border-color

#### Margin
Um espaço além das delimitações do elemento indo além das suas dimensões visíveis. Ficando após a borda do elemento e não sendo afetada pelas estilizações realizadas no elemento.

### Overflow
#### Comando
overflow: _; - trata o conteúdo que ultrapassa o espaço delimitado, serve para criar barras de rolagem.

#### Valores possíveis
visible - deixa o conteúdo que ultrapassa o espaço visível, podendo causa sobreposição
hidden - esconde o conteúdo que ultrapassa o espaço
auto - serve para criar barra de rolagem

#### Informações adicionais
Você pode usar o overflow em eixos específicos com os comandos:
overflow-y: _;
overflow-x: _;

### Box Model
Todos os elementos de HTML são renderizados como caixas pelo browser!

Box Model (Modelo de Caixas) é a forma como nos referimos a essa forma de renderização

conteúdo - mais interno
padding
border
margin - mais externo