Criei este documento para explicar quais foram minhas ações de refatoração no documento `index.html`.

Renomeei o arquivo inicial para index.old para ter uma versão de backup e poder visualizar facilmente quais foram as alterações no código.

### Lista de alterações:

1 - Separei o conteúdo CSS e JS em seus próprios arquivos, e criei a referência para eles no arquivo HTML.
2 - Troquei o elemento HTML do titulo da model "Deixe seu Feedback" para h2, que é um elemento html mais apropriado para títulos em vez de deixa-lo em uma div.
3 - Retirei o elemento Table contendo o botão principal da página principal, pois criar o design das páginas principais usando tabelas é uma prática html antiga. Troquei apenas por uma div com o botão, e centralizei o elemento através do css.
4 - Coloquei toda a tela e a modal para ser navegável através do Keyboard, seja para fechar o modal, selecionar uma nota, escrever e enviar o feedback. Todo o processo pode ser feito sem a dependência do mouse, de acordo com as boas práticas de acessibilidade.
5 - Coloquei `aria attributes` em alguns elementos do modal, para que um usuário de Screen Reader possa navegar pelo modal e saber exatamente em que parte do modal está.
6 - Coloquei foco em elementos ao carregar tanto a página quanto o modal, para facilitar a navegação. Para que o foco nos botões pudesse ser visualiado, removi o atributo outline: none do css.
7 - Alterei um pouco o CSS para adicionar hover ao textarea, o mesmo css do input field. Também limitei a extensão do textarea para que ele não ultrapasse os limites do seu elemento pai.
8 - Alterei o css para que o "X" de fechar o modal fique visível ao usuário. Mas o modal também pode ser fechado apertando a tecla ESC.
9 - Alterei um pouco a estrutura de como estava os labels e input texts, para permitir que um clique no label selecione o input text, além de fazer com que o input text ao ser selecionado, fale o nome da label quando visto por um screen reader. 


Como a tarefa era de refatoração, acessibilidade e padrões de código, eu mantive exatamente o mesmo design, apenas alterei a forma que o código estava escrito.