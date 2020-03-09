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


### Setup

Starting mongodb container
> docker start mongodb

Connect on mongodb docker container
> docker exec -it mongodb bash

Connecting on mongo inside container
> mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin

Import file on docker container
a) Copy file to docker container
> docker cp /home/augusto.scher/git/rep/nosql-databases/mongodb/stock.json mongodb:/stock.json
> docker cp /home/augusto.scher/git/rep/nosql-databases/mongodb/enron.json mongodb:/enron.json

b) 
> mongoimport --db stocks --collection stocks --file stock.json
or
> mongoimport --host localhost -u admin -p senhaadmin --authenticationDatabase admin --db stocks --collection stocks --file stock.json
> mongoimport --host localhost -u admin -p senhaadmin --authenticationDatabase admin --db enron --collection enron --file enron.json


### Commands
> db.italians.insert({firstname: "Mamamia2", surname: "Mamamia2-surname", username: "userMamamia2", email: "Mamamia1.mamamia2@gmail.com", registerDate: new Date()});

> db.italians.find({"firstname": "Mamamia5"})
> db.italians.find({"mother.age": 81})
> db.italians.find({"mother.age": 81}).count();

> db.italians.remove({"mother.age": 81})


> db.italians.insert({firstname: "Mamamia9", email: "Mamamia9.mamamia@gmail.com", registerDate: new Date(), age: 40, friends: "friends", enemies: "enemies"});

#### Update gerando um novo atributo
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, {$set: {"favoriteBook": "War and Peace"}})
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, {$set: {"favoritePet": "Higuana"}})

#### Increment atomico do atributo age
> db.italians.update({"firstname": "Mamamia9"}, {"$inc": { "age": 1 }});

#### Increment all documents with update
> db.italians.update({}, {"$inc": { "age": 1 }}, {"multi": true});

#### Push item inside array of document
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, { $push: { "favFruits": "Morango"}});
> db.italians.update({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, { $push: { "top10": { $each: ["test", "test2"]} }});

#### Get timestamp of document
> ObjectId("5e5aa7f771cd3d6a94e8b54c").getTimestamp() //ISODate("2020-02-29T18:05:43Z")

#### Return only some attrs
> db.italians.find({"_id": ObjectId("5e5aa7f771cd3d6a94e8b54c")}, {"firstname": 1, "email": 1});

#### Find italians where age is in 18 and 19
> db.italians.find({"age": {"$in": [18, 19]}})

#### Return all where age mod 17 == 0
> db.italians.find({"age": {"$mod": [17, 0]}})

#### Return all where age greather then 18 and blood type = O-
> db.italians.find({"$and": [{"age": {"$gt": 18}}, {"bloodType": "O-"}]})

#### Find with regex
> db.italians.find({"$and": [{"firstname": /Mama/i}, {"surname": /mia/gi}]})

#### Cursor
> var cursor = db.italians.find();
```
cursor.forEach(item => {
    print(item.firstname)
});
``` 


