### Redis
Remote Dictinoary Server
É basicamente um Hashmap Database, com estrutura adicionais como listas, mapas e conjuntos
Tipo: Key-Value
Uma tabela hash (hash table) é um dos conceitos básicos de um banco chave-valor;
A maioria dos bancos implementa um dicionario (tabela hash) distribuido;

Usado em:
- Cache de dados
- Publisher/Subscriber e Filas
- Contadores (acessos a sites, clicks)
- Controle de rate limit de API (camada de redis em cima da API)

#### Setup with Docker
Docker container:
```docker run -d -p 6379:6379 --name myredis redis```

Optional: 
Running redis CLI in the container:
```docker exec -it myredis bash```

Run:
```redis-cli```

Test:
```ping``` 