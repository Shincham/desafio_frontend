# Tipografia de um projeto em React

## 1. Pequeno projeto como Sandbox
Para facilitar a construção deste documento, assim como fornecer exemplos e imagens para facilitar o entendimento da documentação, criei um pequeno projeto para servir de sandbox onde o modelo de tipografia é representado. [Este é o repositório do projeto](https://github.com/Shincham/tipografia-react). A documentação contém imagens de exemplo, referentes a este projeto sandbox. Eu também a incluí no readme deste repositório.

## 2. Objetivo deste modelo de tipografia

Ter um conjunto de componentes estilizados, com propriedades padrões, e que tenham flexibilidade para serem alterados visualmente e semanticamente.

Exemplo de uso: <br>
![Exemplo de uso do Componente](./public/images/objetivo_1.PNG "Exemplo de uso do Componente")

Ou a invés de usar as cores pré-definida dos temas, também poder utilizar uma cor padrão do HTML:
![Outro exemplo de uso do Componente](./public/images/objetivo_2.PNG "Outro exemplo de uso do Componente")

## 3. O modelo utilizado

Este modelo foi utilizado tendo como base 2 principais pacotes: styled-components e styled-system. 
Styled Componentes permite colocar estilos diretamente no componente, e o styled system permite flexibilizar a forma de passar props para os componentes, permitindo a criação de componentes dinâmicos, ao mesmo tempo que mantém o código enxuto.

No arquivo theme.js, colocamos todas as definições padrões dos nossos componentes, com os valores default para cada um deles.

![Exemplo de padrão de componente](./public/images/theme_1.PNG "Exemplo de padrão de componente no theme.js")

### 3.1 Multiplas fontes
Este modelo de multiplas fontes presente na variável fontFamilies segue uma prioridade de uso. A primeira fonte é a fonte que possui a prioridade de uso. Caso o browser não tenha suporte para a primeira fonte, ele utiliza a segunda fonte, se não tiver novamente, usa a próxima.

### 3.2 Breakpoints

Algumas propriedades, recebem um array de valores. Esse array é relacionado a responsividade do componente de acordo com o tamanho de cada tela. Isto é configurado pelo array breakpoints que define a largura mínima de cada tela.

![Array de Breakpoints](./public/images/theme_2.PNG "Array de Breakpoints")


Por exemplo, a propriedade "fontSize: [36, 40, 48]", é 36px para telas que se enquadrem no breakpoint A (min-width = 319px). 40px para telas que se enquadrem no breakpoint B (min-width = 599px), e 48px para o breakpoint C, onde se enquadra o restante das telas.

Os tamanhos de tela da maioria dos dispositivos móveis se enquadram no breakpoint B, enquanto que a tela de Desktop ou de outros dispositivos com telas maiores que o dispositivo móvel, como alguns tablets, se enquadram no breakpoint C. Somente alguns poucos dispositivos móveis se enquadram no breakpoint A.

Tela Desktop - Breakpoint C
![Breakpoint C](./public/images/breakpoints_1.PNG "Breakpoint C")

Tela Mobile - Breakpoint B
![Breakpoint B](./public/images/breakpoints_2.PNG "Breakpoint B")

Tela Mobile - Breakpoint A
![Breakpoint A](./public/images/breakpoints_3.PNG "Breakpoint A")

O arquivo onde fica o media query que consome a informação do array de breakpoints do tema, é o arquivo index.js que fica na pasta Breakpoint. Caso precise incluir um valor adicional no array para gerar um novo comportamento do tema via breakpoint, é necessário adicionar o media query neste arquivo também.

![Media Query](./public/images/breakpoints_4.PNG "Media Query")


### 3.3 O Dynamic Component

O Dynamic Component é um High Order Component, criado usando o pacote [styled system](https://github.com/styled-system/styled-system), para definir quais são as props que podem ser alteradas, nos componentes do nosso tema.  
No arquivo index.js da pasta Dynamic Component é especificado todas as props que qualquer um dos nossos componentes do theme.js pode receber, e no arquivo index.js da pasta Typography, todos os componentes compartilham o Dynamic Component. 

Dynamic Component <br>
![Dynamic Component](./public/images/dynamiccomponent_1.PNG "Dynamic Component")

Typography <br>
![Typography](./public/images/dynamiccomponent_2.PNG "Fazendo os componentes usarem o Dynamic Component")


## 4. Usando os componentes

Para usar os componentes, basta apenas importa-los e chamar os componentes. Eles ja possuem suas props pré-definidas pelo theme.js, mas eles podem ser sobrescritos de acordo com a necessidade. São facilmente customizáveis.

![Usando os componentes](./public/images/usando_componentes_1.PNG "Usando os componentes")

Os componentes permitem também que a marcação html dele seja sobrescrita. Por exemplo, não é obrigatório usar o Display sempre como h1, é possível usar ele como "p" ou "span", passando a prop "as".

![Mudando o html do componente](./public/images/usando_componentes_2.PNG "Mudando o html do componente")

Para saber quais são todas as props que o componente aceita, basta conferir o arquivo index.js da pasta Dynamic Component. É também possível incluir facilmente uma nova propriedade a ser aceita, e isso será aplicado para todos os componentes do tema, facilitando a escalabilidade do projeto quando se deseja incluir novas props para serem aceitas pelos componentes. No entanto, esta Prop precisa fazer parte do pacote styled-system. 

### 4.1 Aninhando com componentes genéricos

Além de ter a estrutura padrão dos componentes do tema, também é possível criar novos componentes fora do tema, estilizando eles com styled components e carregando propriedades css exclusiva neles. Em seguida, junta-se estes componentes com os componentes da nossa tipografia. É o exemplo do componente criado chamado Link, assim como dos componentes presentes na pasta Layout. O componente Link por exemplo, possui a propriedade `text-decoration: underline`. Uma propriedade que não faz parte do nosso Dynamic Component. <br>
Esse componente então pode ser usado como um componente filho de algum dos componentes da nossa tipografia, fazendo com que essa propriedade seja aplicada, mesmo que ela não seja passada via props.

Componente Link <br>
![Componente Link](./public/images/link_1.PNG "Componente Link")

Link como Filho de XS Heading <br>
![Link como Filho de XS Heading](./public/images/link_2.PNG "Link como Filho de XS Heading")

Xs Heading com text decoration <br>
![Xs Heading com text decoration](./public/images/link_3.PNG "Xs Heading com as propriedades do Link")


## 5. Criando novos componentes na Tipografia

Para criar novos componentes, é necessário apenas:
1. Adicionar o novo componente no arquivo theme.js, com as propriedades default desejadas.
2. Exportar esse componente no arquivo index.js, na pasta Typography, fazendo ele usar o Dynamic Component, passando todas as props com o operador spread. Neste mesmo arquivo, incluir ele junto com os outros componentes para receber os valores de theme.textStyles.

Com isso, o novo componente da tipografia ja pode ser importado para ser utilizado.
