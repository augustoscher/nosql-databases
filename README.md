##  nosql-databases

NOSQL: Not Only SQL
 - Criado por Eric Evans (Rackspace) para divulgar um evento sobre armazenamento de dados.
 - NoSQL é mais um movimento do que uma tecnologia.

Características NoSQL

- Schemaless
Schema on read (preciso saber o meu schema ao ler os dados, não na escrita, como nos bancos SQL)

Tipos de Bancos NOSQL

- Chave-Valor
Modelo mais simples de banco de dados  muito utilizado para alta performance
Utiliza o conceito mapeamento hash distribuído

  








Persistência Poliglota:
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
  

