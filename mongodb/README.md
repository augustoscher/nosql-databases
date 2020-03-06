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

#### 1. Liste/Conte todas as pessoas que tem exatamente 99 anos. Você pode usar um count para indicar a quantidade.
> db.italians.find({age: 99}).count();
```
0
```

#### 2. Identifique quantas pessoas são elegíveis atendimento prioritário (pessoas com mais de 65 anos)
> db.italians.find({"age": {"$gt": 65}});
```
1768
```

#### 3. Identifique todos os jovens (pessoas entre 12 a 18 anos).
> db.italians.find({"age" : {"$gte" : 12, "$lte" : 18}})
```
883
```

#### 4. Identifique quantas pessoas tem gatos, quantas tem cachorro e quantas não tem nenhum dos dois
> db.italians.find({cat: { $exists: true }}).count();
```
5995
```
> db.italians.find({dog: { $exists: true }}).count();
```
3937
```
> db.italians.find({$and: [{ cat: { $exists: false }}, { dog: { $exists: false }}]}).count()
```
2420
```

#### 5. Liste/Conte todas as pessoas acima de 60 anos que tenham gato
> db.italians.find({$and: [{ cat: { $exists: true }}, { age: { $gte: 60 }}]}).count()
```
1526
```

#### 6. Liste/Conte todos os jovens com cachorro
> db.italians.find({$and: [{ age: { $gte: 12, $lte: 18 }}, { dog: { $exists: true }}]}).count()
```
340
```

#### 7. Utilizando o $where, liste todas as pessoas que tem gato e cachorro
> db.italians.find({ $where: "this.cat != null && this.dog != null" }).count()
```
2352
```

#### 8. Liste todas as pessoas mais novas que seus respectivos gatos.
> db.italians.find({ $and: [{ cat: { $exists: true }}, { $where: "this.age < this.cat.age" }]}).count()
```
635
```

#### 9. Liste as pessoas que tem o mesmo nome que seu bichano (gatou ou cachorro)
> db.italians.find({$or: [{$and: [{cat: {$exists: true}}, {$where: "this.firstname == this.cat.name"}]}, {$and: [{dog: {$exists: true}}, {$where: "this.firstname == this.dog.name"}]}]}).count();
```
102
```

#### 10. Projete apenas o nome e sobrenome das pessoas com tipo de sangue de fator RH negativo
> db.italians.find({"bloodType": "O-"}, {"firstname":1, "surname":1, "_id": 0}).count();
```
1309
```

> db.italians.find({"bloodType": "O-"}, {"firstname":1, "surname":1, "_id": 0});
```javascript
{ "firstname" : "Patrizia", "surname" : "Caputo" }
{ "firstname" : "Maurizio", "surname" : "Serra" }
{ "firstname" : "Gabiele", "surname" : "Amato" }
{ "firstname" : "Angela", "surname" : "Bianchi" }
{ "firstname" : "Dario", "surname" : "Gentile" }
{ "firstname" : "Tiziana", "surname" : "Montanari" }
{ "firstname" : "Elisabetta", "surname" : "Negri" }
{ "firstname" : "Daniele", "surname" : "Sartori" }
{ "firstname" : "Simone", "surname" : "Amato" }
{ "firstname" : "Federico", "surname" : "Bernardi" }
{ "firstname" : "Angela", "surname" : "Monti" }
{ "firstname" : "Cristian", "surname" : "Messina" }
{ "firstname" : "Gianni", "surname" : "Costa" }
{ "firstname" : "Elisabetta", "surname" : "Amato" }
{ "firstname" : "Giacomo", "surname" : "Lombardi" }
{ "firstname" : "Salvatore", "surname" : "Damico" }
{ "firstname" : "Daniela", "surname" : "Mancini" }
{ "firstname" : "Rita", "surname" : "Sanna" }
{ "firstname" : "Simona", "surname" : "Marino" }
{ "firstname" : "Salvatore", "surname" : "Conte" }
Type "it" for more
```

#### 11. Projete apenas os animais dos italianos. Devem ser listados os animais com nome e idade. Não mostre o identificado do mongo (ObjectId)
> db.italians.find({$or: [{ cat: { $exists: true }}, { dog: { $exists: true }}]}, {"cat.name":1, "cat.age":1, "dog.name": 1, "dog.age": 1, "_id": 0});
```javascript
{ "cat" : { "name" : "Barbara", "age" : 2 }, "dog" : { "name" : "Mirko", "age" : 15 } }
{ "cat" : { "name" : "Salvatore", "age" : 10 } }
{ "cat" : { "name" : "Vincenzo", "age" : 5 } }
{ "dog" : { "name" : "Vincenzo", "age" : 5 } }
{ "dog" : { "name" : "Emanuele", "age" : 6 } }
{ "dog" : { "name" : "Lorenzo", "age" : 7 } }
{ "cat" : { "name" : "Lorenzo", "age" : 9 }, "dog" : { "name" : "Stefano", "age" : 2 } }
{ "cat" : { "name" : "Maria", "age" : 3 } }
{ "dog" : { "name" : "Riccardo", "age" : 14 } }
{ "cat" : { "name" : "Giorgia", "age" : 5 } }
{ "cat" : { "name" : "Giorgio", "age" : 6 } }
{ "dog" : { "name" : "Martina", "age" : 4 } }
{ "cat" : { "name" : "Giusy", "age" : 13 } }
{ "cat" : { "name" : "Mauro", "age" : 3 }, "dog" : { "name" : "Chiara", "age" : 0 } }
{ "cat" : { "name" : "Mirko", "age" : 15 } }
{ "cat" : { "name" : "Andrea", "age" : 15 }, "dog" : { "name" : "Giovanni", "age" : 10 } }
{ "cat" : { "name" : "Monica", "age" : 6 }, "dog" : { "name" : "Filipo", "age" : 17 } }
{ "dog" : { "name" : "Serena", "age" : 7 } }
{ "cat" : { "name" : "Simone", "age" : 17 } }
Type "it" for more
```

#### 12. Quais são as 5 pessoas mais velhas com sobrenome Rossi?
> db.italians.find({surname: "Rossi"},{firstname:1, age:1}).sort({age: -1}).limit(5)
```javascript
{ "_id" : ObjectId("5e5d964053508b2f1cdcee24"), "firstname" : "Vincenzo", "age" : 79 }
{ "_id" : ObjectId("5e5d963f53508b2f1cdceb07"), "firstname" : "Sergio", "age" : 78 }
{ "_id" : ObjectId("5e5d963b53508b2f1cdcd77e"), "firstname" : "Carlo", "age" : 77 }
{ "_id" : ObjectId("5e5d963f53508b2f1cdce9d5"), "firstname" : "Antonio", "age" : 76 }
{ "_id" : ObjectId("5e5d963f53508b2f1cdced9d"), "firstname" : "Paolo", "age" : 76 }
```

#### 13. Crie um italiano que tenha um leão como animal de estimação. Associe um nome e idade ao bichano
> db.italians.insert({
>   firstname: "Italian",
>   surname: "italian2",
>   username: "Mamamia",
>   email: "italian.mamamia@gmail.com",
>   registerDate: new Date(),
>   lion: {name: "Simba", age: 10}
> });
```
WriteResult({ "nInserted" : 1 })
```

#### 14. Infelizmente o Leão comeu o italiano. Remova essa pessoa usando o Id.


#### 15. Passou um ano. Atualize a idade de todos os italianos e dos bichanos em 1.
#### 16. O Corona Vírus chegou na Itália e misteriosamente atingiu pessoas somente com gatos e de 66 anos. Remova esses italianos.
#### 17. Utilizando o framework agregate, liste apenas as pessoas com nomes iguais a sua respectiva mãe e que tenha gato ou cachorro.
#### 18. Utilizando aggregate framework, faça uma lista de nomes única de nomes. Faça isso usando apenas o primeiro nome
#### 19. Agora faça a mesma lista do item acima, considerando nome completo.
#### 20. Procure pessoas que gosta de Banana ou Maçã, tenham cachorro ou gato, mais de 20 e menos de 60 anos.

### 3. Exercício - Stockbrokers