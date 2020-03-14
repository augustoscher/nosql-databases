## HBASE 

Banco de dados open source orientado a coluna

Topografia: Familia de Colunas
Outros bancos: Facebook Cassandra, AWS DynamoDB, Google BigTable
Nasceu do Google BigTable e foi renomeado para HBase

Escreve em um HDFS (Haddop File System), que é um sistema de arquivo distribuído.
Capaz de armazenar uma grande quantidade de dados (terabytes, petabytes) ainda ser performático

#### Características
• Low latency operations
• Desempenho “constante” para random read e write operations
• Armazenamento de grandes quantidades de dados em tabelas
• Mantém resposta linear conforme a demanda aumenta (considerando um cluster escalável)
• Permite configurar sharding entre tabelas automaticamente
• Failover automático entre regiões
• Diversas APIs para operar com o banco

Totalmente projetado para “fault tolerance” – ambientes onde problemas com servidores são a norma, não a exceção.

A estratégia usada para essa resiliência se chama “write-ahead-logging”
• Escreve os dados em um log em memória antes de colocar no disco.
• Isso permite a outros nós consultar esses logs em caso de falha com um servidor e não depender do disco
• Como é distribuído, os nós podem confiar uns nos outros e não em um “servidor central”

#### Limitações
• Não possibilita a execução de comandos SQL ou joins tradicionais para fácil relacionamento dentre entidades
• É um banco que utiliza muitos recursos computacionais como memória, CPU e disco de forma distribuída
• Para entregar mais, precisa ser combinado com elementos adicionais como Hive, Drill e Phoenix
• Complexo de gerenciar e de configurar
• Tem limitações quanto à flexibilidade do modelo schemaless

#### Instalação e Configuração
Existem 3 modos de execução
- Standalone: Modelo apenas em uma maquina
- Psuedo-Distribuited - Um nó apenas que se comorta como se fosse cluster
- Fully Distribuited - Modo de produção com um cluster de servidores trabalhando em conjunto
  
  