## HBASE 

Banco de dados open source orientado a coluna

Topografia: Familia de Colunas
Outros bancos: Facebook Cassandra, AWS DynamoDB, Google BigTable
Nasceu do Google BigTable e foi renomeado para HBase

Escreve em um HDFS (Haddop File System), que é um sistema de arquivo distribuído.
Capaz de armazenar uma grande quantidade de dados (terabytes, petabytes) ainda ser performático

Características
• Low latency operations
• Desempenho “constante” para random read e write operations
• Armazenamento de grandes quantidades de dados em tabelas
• Mantém resposta linear conforme a demanda aumenta (considerando um cluster escalável)
• Permite configurar sharding entre tabelas automaticamente
• Failover automático entre regiões
• Diversas APIs para operar com o banco