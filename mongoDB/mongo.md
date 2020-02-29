### MongoDB
No centro de tudo, MongoDB está o documento em formato JSON
Tipo: Orientado a documento

Caracteristicas
- Armazena os documentos em BSON e não JSON
- As chaves são sempre string
- Qualquer caractere UTF-8 pode ser usado exceto /0
- É case-sensitive
- Chaves não podem ser duplicadas
- 

Usado em:
- Cache de dados
- Publisher/Subscriber e Filas
- Contadores (acessos a sites, clicks)
- Controle de rate limit de API (camada de redis em cima da API)
