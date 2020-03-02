## MongoDB Exercises

### 1. Exercício - Aquecendo com os pets

#### 1. Adicione outro Peixe e um Hamster com nome Frodo
> db.pets.insert({name: "Frodo", species: "Peixe"});
```
WriteResult({ "nInserted" : 1 })
```
> db.pets.insert({name: "Frodo", species: "Hamster"});
```
WriteResult({ "nInserted" : 1 })
```

#### 2. Faça uma contagem dos pets na coleção
> db.pets.count();
```
8 
``` 

#### 3. Retorne apenas um elemento o método prático possível
> db.pets.findOne();
```javascript
{
	"_id" : ObjectId("5e5d350f8a3133fd03294001"),
	"name" : "Mike",
	"species" : "Hamster"
}
``` 

#### 4. Identifique o ID para o Gato Kilha
> db.pets.find({name: "Kilha"}, {"_id": 1});
```javascript
{ "_id" : ObjectId("5e5d350f8a3133fd03294003") }
```

#### 5. Faça uma busca pelo ID e traga o Hamster Mike
> db.pets.find({"_id": ObjectId("5e5d350f8a3133fd03294001")});
```javascript
{ "_id" : ObjectId("5e5d350f8a3133fd03294001"), "name" : "Mike", "species" : "Hamster" }
```

#### 6. Use o find para trazer todos os Hamsters
> db.pets.find({species: "Hamster"});
```javascript
{ "_id" : ObjectId("5e5d350f8a3133fd03294001"), "name" : "Mike", "species" : "Hamster" }
{ "_id" : ObjectId("5e5d36658a3133fd0329400a"), "name" : "Frodo", "species" : "Hamster" }
```

#### 7. Use o find para listar todos os pets com nome Mike
> db.pets.find({name: "Mike"});
```javascript
{ "_id" : ObjectId("5e5d350f8a3133fd03294001"), "name" : "Mike", "species" : "Hamster" }
{ "_id" : ObjectId("5e5d350f8a3133fd03294004"), "name" : "Mike", "species" : "Cachorro" }
```

#### 8. Liste apenas o documento que é um Cachorro chamado Mike
> db.pets.find({name: "Mike", species: "Cachorro"});
```javascript
{ "_id" : ObjectId("5e5d350f8a3133fd03294004"), "name" : "Mike", "species" : "Cachorro" }
```

### 2. Exercício - Mama mia!