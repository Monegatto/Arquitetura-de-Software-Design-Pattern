#### Alunos: Giovani Gabriel Mendes Ohira de Rossi, João Pedro Boter Monegatto


## Padrões de Projeto Utilizados no Sistema de Gerenciamento de Contatos

Neste projeto de sistema de gerenciamento de contatos, foram aplicados os padrões de projeto Strategy, Singleton e Facade. A seguir, detalhamos por que esses padrões foram selecionados e como eles foram implementados.

### Padrão de Projeto Strategy

#### Motivação:

O padrão Strategy foi escolhido para lidar com diferentes estratégias de busca de contatos. Prevendo a possibilidade de futuras mudanças nos algoritmos de busca, queríamos uma abordagem que permitisse alterações sem a necessidade de modificar diretamente o código existente. Isso ajuda a manter o sistema flexível e fácil de manter.

#### Implementação:

- **Interface Strategy (`BuscaStrategy`):** Foi definida uma interface que declara os métodos comuns a todas as estratégias de busca.
  
- **Estratégias Concretas (`BuscaPorNome` e `BuscaPorTelefone`):** Implementamos diferentes estratégias de busca, cada uma focada em um critério específico (nome ou telefone).

- **Uso no `GerenciadorContatos` e `CLI`:** O `GerenciadorContatos` utiliza a estratégia de busca atualmente definida para realizar as operações de busca. A classe `CLI` permite que o usuário escolha a estratégia de busca desejada durante a execução do programa.

### Padrão de Projeto Singleton

#### Motivação:

O padrão Singleton foi adotado para garantir que haja apenas uma instância da classe `GerenciadorContatos` em toda a execução do programa. Isso é útil para compartilhar o mesmo estado do gerenciador de contatos entre diferentes partes do sistema, evitando inconsistências e problemas de sincronização.

#### Implementação:

- **Implementação na Classe `GerenciadorContatos`:** A classe foi projetada de forma que seu construtor verifique se já existe uma instância. Se existir, retorna essa instância; caso contrário, cria uma nova e a retorna.

 ### Padrão de Projeto Facade

 #### Motivação:

 O Padrão Facade foi escolhido para permitir que o usuário se comunique com o sistema por meio de uma interface de nivel mais elevado, facilitando o uso da aplicação.

 ### Implementação:

- **Implementação do `CLI`:** No arquivo index.js é possível encontrar a classe `CLI` que é responsável por exibir ao usuário um menu de operações para interagir com o sistema, transportar as informações fornecidas pelo usuário para as classes que as operam e exibir ao usuário os resultados das funções do sistema.

### Conclusão

A escolha dos padrões de projeto expostos anteriormente para este sistema de gerenciamento de contatos visa proporcionar uma arquitetura flexível, fácil de entender e de manter. A aplicação desses padrões nos permite lidar eficientemente com diferentes estratégias de busca e garantir a consistência do estado do gerenciador de contatos em toda a aplicação.

Esta abordagem de design ajuda a melhorar a modularidade, a reutilização de código e a escalabilidade do sistema, preparando-o para enfrentar mudanças e evoluções futuras com facilidade.
