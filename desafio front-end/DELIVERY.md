## Entrega

### 4: Arquitetura

### Front-End:

Para o front-end, recomendo utilizar a _library_ React.js e as ferramentas do seu ecosistema.
O motivo é que considero o React uma tecnologia moderna, eficiente e escalável. A tecnologia está sempre trazendo features novas em suas atualizações, fornecendo novas possibilidades para tornar os projetos mais otimizados e simples de dar manutenção.
A tecnologia permite que o front-end do projeto seja organizado, performático, simples de entender e fácil de testar. É uma tecnologia baseada no uso de componentes, que permite que esses componentes sejam reutilizados por toda a aplicação, facilitando grandes alterações e também auxiliando no trabalho em uma equipe com múltiplos desenvolvedores.
Um projeto bem construído em React fornece uma ótima experiência para o usuário e possui páginas que são carregadas rapidamente, pois atualiza somente a parte da UI que mudou. 
O React também possui uma funcionalidade muito boa para otimizar a performance da aplicação chamada _Server Side Rendering_, que faz com que a aplicação seja toda renderizada no servidor ao invés de ser renderizada no browser. 

Dentre as _librarys_ / _frameworks_ do ecosistema React que recomendo utilizar, estão:

**Redux** - _Library_ que permite a centralização do estado da aplicação para facilitar o seu gerenciamento, fazendo com que toda ação feita pelo usuário passe por um gerenciador que identifica qual mudança de estado será feita na aplicação e quais componentes serão afetados por essa mudança. O Redux é uma _library_ muito usada para evitar que grandes projetos em React caiam em um problema conhecido como `props drilling`, que é o excesso de props passadas para os componentes, mesmo que os componentes não usem essas props, só para que estes componentes possam repassar as props para outros componentes.

**Styled Components** - Permite a criação de componentes estilizados, colocando o CSS fazendo parte do componente. 

**Styled System** - Uma _library_ que é ótima para complementar o Styled Components, permitindo que o CSS dos componentes seja dinâmico e customizável, simplificando bastante a quantidade de código necessário para tornar isso possível. 

**Jest** - _Framework_ para realizar testes automatizados, excelente para testar a aplicação.

Há também uma outra _library_ excelente no react que é esta aqui:

**Material UI** - Uma excelente _library_ de UI para React, repleta de componentes React pré-definidos, que servem para criar uma padrão de design, UI e tipografia para sua aplicação. Ela possui vários temas e também permite a criação de temas customizáveis, facilitando muito a troca de temas na aplicação, permitindo que o time desenvolva de forma ágil, fácil e eficiente.

No entanto, se o projeto utiliza Material UI, provavelmente não precisará usar Styled Components e Styled System, e vice-versa. É possível usar ambas as _librarys_, mas geralmente apenas uma delas já é suficiente para criar o padrão de design da aplicação.
Como ambas as _librarys_ são boas, uma conversa com o time sempre é boa para decidir qual delas usar.


### Back-End:

Como o Back-End também faz parte da arquitetura de uma aplicação, vou deixar aqui o que penso sobre as tecnologias de Back-End, para chegar em uma arquitetura ideal, considerando uma aplicação com Front-End React.

Para Backend, recomendo muito as linguagens C#, Python ou o próprio Javascript como o Node.js, de acordo com o contexto da aplicação, então vou especificar brevemente o que acho de cada uma:

Python:
Dentre essas 3, é a que mais costumo trabalhar no back-end dos projetos, considero uma linguagem boa, simples, fácil de aprender e fácil de ler o código. É uma linguagem que gosto bastante. No entanto, ela possui alguns probleminhas conhecidos com _multithreading_, relacionados ao _Global Interpreter Lock (GIL)_ que afetam a performance da aplicação, que fazem com que eu atualmente não considere ela a linguagem mais adequada para ser o back-end de aplicações de larga escala, com alta volumetria e que dependem de _multithreading_ para serem performáticas. No entanto, o Python hoje também possui o _multiprocessing_ como uma opção para sanar este problema do _multithreading_. Outro problema do Python é que em uma aplicação onde o Front-End é em React, talvez seja um pouco mais complicado para aplicar _Server Side Rendering (SSR)_ caso necessário.

C#:
Hoje é a que vejo como uma das linguagens mais robustas do mercado para ser back-end de aplicações. O framework ASP.NET Core com seu suporte multi-plataforma é extremamente eficiente para aplicações webs de larga escala. Além disso, o ASP.NET Core possui um número gigantesco de funcionalidades e pacotes para auxiliar no desenvolvimento, várias ferramentas para testes, facilidade para aplicar as regras de segurança em todos os endpoints da aplicação, possui bastante documentação e é uma linguagem que se integra bem com React, permitindo a aplicação de _SSR_.   


Node.js:
Ter o Back-End em Node.js tem uma grande vantagem em aplicações cujo Front-End é React: Toda a aplicação é baseada em Javascript/Typescript. As vantagens de ter uma aplicação inteira em Javascript é a maior facilidade de integração entre o Front-End e o Back-End. Por exemplo, pode-se usar o _framework_ **Next.js** para realizar o _SSR_ da aplicação, e como o servidor é Node.js, toda a integração é feita de forma muito mais fluída, sem a necessidade de diversas configurações adicionais.
Outra vantagem é ter uma equipe de desenvolvedores especializada em uma única tecnologia, evitando a dependência de conhecimento em uma outra tecnologia para resolver os problemas. 

Tomar a decisão de qual tecnologia usar no Back-End, também pode ser resolvida com uma boa conversa com o time, ou também verificando o nível de conhecimento que cada desenvolvedor do time possui em cada tecnologia. 
Imagino hoje a arquitetura ideal usando React no front-end e uma dessas 3 no Back-end.

---

### Projetos e artigos

Sobre projetos em que trabalhei, irei citar dois principais grandes projetos:

1 - Um foi um projeto bastante desafiador chamado _Welfur_, em que o Front-End da aplicação era mobile, usando a tecnologia _React-Native_, e o Back-End era com a tecnologia Python com _Django Framework_.
Tratava-se de um sistema de auditoria de fazendas para uma empresa europeia, onde os auditores usavam o tablet para coletar diversos dados da fazenda e determinar se os produtos dela estavam adequados ao mercado ou não. 

Foi um projeto que foi feito sempre com um prazo muito curto para entregar qualquer feature, e eu entrei já com ele em progresso, então não participei da base arquitetural dele. Nós tivemos diversos problemas durante o desenvolvimento. Muitas refatorações, retrabalhos, erros desconhecidos no gerenciamento do estado, dava bastante trabalho encontrar os erros quando eles ocorriam. O projeto acabou ficando mal estruturado, e quanto mais crescia, mais confuso ficava. Componentes gigantescos ao invés de pequenos e reutilizáveis, uma imensa quantidade de props sendo passadas por todos os componentes da aplicação, não foram usadas _frameworks_ ou _librarys_ adicionais para otimizar o desenvolvimento. Não tinhamos testes automatizados, nem styled components, nem redux, e nem um padrão bem definido para que os desenvolvedores seguissem. Foi um projeto bastante desafiador. No entanto, conseguimos fazer a entrega, com ele completamente funcional.

Nesse projeto eu aprendi uma coisa extremamente relevante: Não é porque o projeto está utilizando uma tecnologia moderna e eficiente, que ele será bem arquitetado. Independente da tecnologia e da quantidade de ferramentas que há a disposição, tudo depende da forma que o time constroi o projeto, e uma base sólida e com boa arquitetura desde o começo é extremamente importante para que o projeto cresça sem sair do eixo.
Complementando esse ponto, também já trabalhei em projetos com tecnologias bem antigas e defasadas, porém com uma arquitetura bastante robusta.

2 - Este outro é um projeto em que trabalho atualmente, que é uma plataforma de microserviços cujo objetivo é extrair dados de um sistema legado e disponibiliza-los para clientes/projetos externos. O sistema legado possui uma volumetria de dados gigantesca, na casa das centenas de milhões de mensagens diariamente. Portanto, ações de otimização de performance foram extremamente necessárias para manter a arquitetura estável. É um projeto que não possui muito front-end com o usuário, ja que os clientes são apenas consumidores das APIs que disponibilizamos. É um projeto que tem praticamente tudo relacionado a boas práticas de desenvolvimento: testes automatizados, padrões de código bem definidos, constantes reviews da arquitetura, pipelines bem robustas, deploy contínuo, verificação da qualidade do código com ferramentas como SonarQube, enfim, um projeto que possui extremo foco em qualidade e preocupação com a escalabilidade da arquitetura, o oposto do projeto que citei acima. 
E foi justamente neste projeto que eu tive os problemas de _multi-threading_ com Python, pois a volumetria gigante de dados fez com que começassem a surgir problemas de performance.

Menciono aqui este projeto porque é um projeto extremamente desafiador, em que eu aprendo coisas novas constantemente, e apesar de ter pouco Front-End, ele usa uma grande quantidade de tecnologias diferentes, como: Python e Flask, C# e ASP.Net Core, Javascript e Jquery, Cobol, Docker, Kubernets, Datadog, SonarQube e diversas outras ferramentas que fazem com que o projeto seja bem rico em conhecimento e experiência para quem trabalha nele. 

<br>
Em relação a Artigos, ainda não escrevi artigos então não tenho artigos para adicionar no momento.

---

### Nos deixe um feedback!

Achei os exercícios bem interessantes. Achei que foram bem descritivos. Só fiquei um pouco na dúvida no exercício 4 se era para falar da arquitetura completa (Front-end e Back-End) ou se era para falar apenas da Arquitetura de Front-End, então preferi falar sobre a arquitetura completa.
