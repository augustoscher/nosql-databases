### MongoDB
No centro de tudo, MongoDB está o documento em formato JSON
Tipo: Orientado a documento

Caracteristicas
- Armazena os documentos em BSON e não JSON
- As chaves são sempre string
- Qualquer caractere UTF-8 pode ser usado exceto /0
- É case-sensitive
- Chaves não podem ser duplicadas
- Schemas diferentes entre cada documento.
- Uma collection é um grupo de documentos, A coleção pode ser pensada como uma tabela em banco SQL

Tipos de dados:
- Data
- Tipos numericos
- Timestamp
- Minkey/Maxkey
- Boolean
- Array 
- Binarios
- ObjectId

Usado em:



Commands:
db.italians.insert({firstname: "Mamamia2", surname: "Mamamia2-surname", username: "userMamamia2", email: "Mamamia1.mamamia2@gmail.com", registerDate: new Date()});

db.italians.find({"firstname": "Mamamia5"})
db.italians.find({"mother.age": 81})
db.italians.find({"mother.age": 81}).count();

db.italians.remove({"mother.age": 81})


db.italians.insert({firstname: "Mamamia9", email: "Mamamia9.mamamia@gmail.com", registerDate: new Date(), age: 40, friends: "friends", enemies: "enemies"});

#### Update gerando um novo atributo
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, {$set: {"favoriteBook": "War and Peace"}})
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, {$set: {"favoritePet": "Higuana"}})

#### Increment atomico do atributo age
> db.italians.update({"firstname": "Mamamia9"}, {"$inc": { "age": 1 }});
