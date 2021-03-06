##  nosql-databases

NOSQL: Not Only SQL
 - Criado por Eric Evans (Rackspace) para divulgar um evento sobre armazenamento de dados.
 - NoSQL é mais um movimento do que uma tecnologia.

Características NoSQL

- Schemaless
Schema on read (preciso saber o meu schema ao ler os dados, não na escrita, como nos bancos SQL)

### Tipos de Bancos NOSQL

#### 1. Chave-Valor
Ex: DynamoDB, Redis

Modelo mais simples de banco de dados  muito utilizado para alta performance
Utiliza o conceito mapeamento hash distribuído
Mapeamento de hash distribuído (Consistent Hash)

##### Caracteristicas:
- Alta escalabilidade
- Alta produtividade (API Simples)
- Alta performance (geralmente opera em memoria)
- Baixa complexidade
- Schemaless
- Funcionalidades mais limitadas (chave/valor)
- Altamente particionavel

##### Evitar utilizar:
- Dados do valor em geral não são indexados
- Não é indicado se existem relacionamentos entre dados
- Não é uma boa quando precisa de transações
- Não é uma boa quando precisa busca por valores diferentes da chave

#### 2. Documentos
Ex: MongoDB, CouchDB

Tem o documento como centro conceitual do banco
O documento é uma string (json, objeto) estruturado
Cada documento pode ser associado a uma linha do banco SQL

##### Caracteristicas:
- Alta escalabilidade (mas alguns casos o master write pode ser gargalo)
- Alta produtividade (armazena objetos de forma natural)
- Boa performance
- Baixa complexidade
- Schemaless
- Escala bem nós para leitura

##### Quando utilizar
- Aramanzenamento de eventos 
- Armazenamento de notas 
- 
##### Evitar utilizar:
- Alta quantidade de alteração de valores
- Não usar se existem relacionamentos entre valores
- Se há buscas complexas com joins
- Não usar se precisar de transações


#### 3. Banco de grafos
Ex: Neo4J

Utiliza conceitos de grafos armazenados em disco
É um modelo mais natural para uma série de aplicações como redes sociais
Tem vantagens de ser uma área bem explorada da computação como algoritmos
- Caminho minimo/máximo
- Indetificação de ciclos
- Busca em profundidade
  
##### Caracteristicas:
- Modelo onde a escala chegou depois (neo4j suporta). Em geral usa sharding
- Entrega um modelo ACID
- ENtrega por padrão soluções de algoritmos de graphos

##### Quando utilizar
- Problemas de logistica
- Qualquer problema onde grafo por ser aplicado
  
##### Evitar utilizar


#### 4. Familia de colunas
Ex: HBase, Cassandra

##### Caracteristicas:
- Em geral, desenhados para alta disponibilidade
- Fazer queries é mais simples para quem conhece RDBMS
- Modelos parecidos com bancos SQL

##### Utilizar:
- Onde demanda muita escala
- Soluções analisticas
- Contabilização de visitantes

##### Evitar:
- Pouca escala



### SQL x NOSQL

Conceito de persistência Poliglota:
 - Perfil de usuário: não tem tanto acesso e é tabulado: Usa BD relacional
 - Foto: Precisa de leitura e escrita rápida, usa banco chave/valor por ex.

Padrão ACID (Bancos SQL):
- Atomicity: Trabalho indivisível (ou commit ou rollback)
- Consistency: 
- Isolation
- Durability

Padrão SAGA:
- A aplicação assume comportamentos do banco de dados
- Cada evento precisa ter um fallback para resolver um possível problema
  

