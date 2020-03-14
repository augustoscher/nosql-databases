### Graph

Grafos é uma estrutura que tem muito valor para computação como ferramenta elegante para resolver problemas
complexos do mundo real.

É baseado na teoria dos conjuntos. 
Um grafo G(A,V) é definido pelo par de conjuntos V e A onde:
- V: Vértice
- A: Aresta


Entra na teoria dos NP-Complexos

Problemas comumente representados por grafos
- Trajeto entre cidades
- Roteamento de veículos
- Redes de computadores
- Máquina de estados finita
- Redes sociais
- Jogos (Jogadas de xadrez)

#### Vantages:

- Flexibilidade para conectar novas informações
- Schema é flexível para adotar novas informações e relações


### Graph Database
Um banco de dados de grafos é basicamente um sistema de gerenciamento de dados com operações
CRUD sobre estrutura de grafos.

Diferente dos demais bancos de dados, os relacionamentos são "first class citizens" no modelo de grafos.

Algumas vantagens de grafos em relação a bancos relacionais são:
- Performance
- Flexibilidade
- Agilidade
- Clareza/Semantica

A principal vantagem é simplificar operações sobre relacionamento entre entidades.

### Neo4J
Plataforma composta por
- Banco de dados core
- Linguagem Cypher para interagir com o banco de dados
- Ferramenta de visualização e descoberta
- Ferramentas de analytics e integração

Nodes - Vértices
Relationships(edges) - Arestas

Grafos são sempre rotulados(label)
O rotulo é um vertice chamado label que se aplica a um ou mais vértices (nodes)

É um banco que implementa um grafo de propriedades.

#### Indice em BD relacional
Indice de bancos de dados relacionais usam Arvore B
Vira um arquivo com a relação da arvore com com o indice balanceado relacionado com a posição do indice da tabela.

- Tudo que é maior que a chave inicial vai para a direita do nó
- Tudo que é menor que a chave inicial, vai para a esquerda do nó

É muito parecido com a teoria de grafos a indexação no momento da gravação.

