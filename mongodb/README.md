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
```bash
db.italians.insert({
   firstname: "Italian",
   surname: "italian2",
   username: "Mamamia",
   email: "italian.mamamia@gmail.com",
   registerDate: new Date(),
   lion: {name: "Simba", age: 10}
});
```

```
WriteResult({ "nInserted" : 1 })
```

#### 14. Infelizmente o Leão comeu o italiano. Remova essa pessoa usando o Id.
> db.italians.find({"lion.name": "Simba"})
```javascript
{
   "_id":ObjectId("5e61ab404b9ddc88370d544e"),
   "firstname":"Italian",
   "surname":"italian2",
   "username":"Mamamia",
   "email":"italian.mamamia@gmail.com",
   "registerDate": ISODate("2020-03-06T01:45:36.224Z"),
   "lion":{
      "name":"Simba",
      "age":10
   }
}

``` 

> db.italians.remove({"_id": ObjectId("5e61ab404b9ddc88370d544e")})
```
WriteResult({ "nRemoved" : 1 })
```

#### 15. Passou um ano. Atualize a idade de todos os italianos e dos bichanos em 1.
> db.italians.update({}, {"$inc": {"age": 1}}, {multi: true});
```
WriteResult({ "nMatched" : 10000, "nUpserted" : 0, "nModified" : 10000 })
```
> db.italians.update({"cat": {$exists: true}}, {$inc: {"cat.age": 1}}, {multi: true})
```
WriteResult({ "nMatched" : 6040, "nUpserted" : 0, "nModified" : 6040 })
```

> db.italians.update({"dog": {$exists: true}}, {$inc: {"dog.age": 1}}, {multi: true})
```
WriteResult({ "nMatched" : 4039, "nUpserted" : 0, "nModified" : 4039 })
```

#### 16. O Corona Vírus chegou na Itália e misteriosamente atingiu pessoas somente com gatos e de 66 anos. Remova esses italianos.
> db.italians.remove({"$and": [{"cat": {"$exists": true}}, {"age": 66}]})
```
WriteResult({ "nRemoved" : 91 })
```

#### 17. Utilizando o framework agregate, liste apenas as pessoas com nomes iguais a sua respectiva mãe e que tenha gato ou cachorro.
```bash
db.italians.aggregate([
   {'$match': { mother: { $exists: 1}}}, 
   {'$match': { $or: [{ cat: { $exists: true }}, { dog: { $exists: true }}]}}, 
   {'$project': { "firstname": 1, "mother": 1, "cat": 1, "dog": 1, "isEqual": { "$cmp": ["$firstname","$mother.firstname"]} }},
   {'$match': {"isEqual": 0}}
]);
```

```javascript
{ "_id" : ObjectId("5e61beefb07851f47a424642"), "firstname" : "Massimiliano", "mother" : { "firstname" : "Massimiliano", "surname" : "Ruggiero", "age" : 46 }, "cat" : { "name" : "Dario", "age" : 10 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef0b07851f47a424764"), "firstname" : "Maurizio", "mother" : { "firstname" : "Maurizio", "surname" : "Conte", "age" : 83 }, "dog" : { "name" : "Emanuele", "age" : 3 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef0b07851f47a42477a"), "firstname" : "Antonella", "mother" : { "firstname" : "Antonella", "surname" : "Ferri", "age" : 27 }, "cat" : { "name" : "Raffaele", "age" : 3 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef1b07851f47a424f18"), "firstname" : "Angelo", "mother" : { "firstname" : "Angelo", "surname" : "De Angelis", "age" : 34 }, "cat" : { "name" : "Stefania", "age" : 11 }, "dog" : { "name" : "Massimo", "age" : 5 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef1b07851f47a424f8f"), "firstname" : "Gianluca", "mother" : { "firstname" : "Gianluca", "surname" : "Conte", "age" : 24 }, "cat" : { "name" : "Emanuela", "age" : 7 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef2b07851f47a425070"), "firstname" : "Emanuela", "mother" : { "firstname" : "Emanuela", "surname" : "Galli", "age" : 23 }, "dog" : { "name" : "Sara", "age" : 18 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef2b07851f47a425433"), "firstname" : "Valentina", "mother" : { "firstname" : "Valentina", "surname" : "Martino", "age" : 31 }, "cat" : { "name" : "Sonia", "age" : 17 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef3b07851f47a425926"), "firstname" : "Dario", "mother" : { "firstname" : "Dario", "surname" : "Riva", "age" : 57 }, "cat" : { "name" : "Federica", "age" : 1 }, "isEqual" : 0 }
{ "_id" : ObjectId("5e61bef4b07851f47a425c4e"), "firstname" : "Antonio", "mother" : { "firstname" : "Antonio", "surname" : "Bruno", "age" : 109 }, "dog" : { "name" : "Nicola", "age" : 10 }, "isEqual" : 0 }
```

#### 18. Utilizando aggregate framework, faça uma lista de nomes única de nomes. Faça isso usando apenas o primeiro nome
> db.italians.aggregate([{$group: { _id: "$firstname"}}])
```javascript
{ "_id" : "Daniele" }
{ "_id" : "Paolo" }
{ "_id" : "Fabio" }
{ "_id" : "Giacomo" }
{ "_id" : "Gianluca" }
{ "_id" : "Monica" }
{ "_id" : "Luca" }
{ "_id" : "Stefano" }
{ "_id" : "Giuseppe" }
{ "_id" : "Carlo" }
{ "_id" : "Michela" }
{ "_id" : "Alessio" }
{ "_id" : "Pasquale" }
{ "_id" : "Emanuele" }
{ "_id" : "Roberto" }
{ "_id" : "Gianni" }
{ "_id" : "Elisabetta" }
{ "_id" : "Giovanna" }
{ "_id" : "Rosa" }
{ "_id" : "Alessia" }
{ "_id" : "Maurizio" }
{ "_id" : "Alessandra" }
{ "_id" : "Barbara" }
{ "_id" : "Domenico" }
{ "_id" : "Rita" }
{ "_id" : "Simone" }
{ "_id" : "Matteo" }
{ "_id" : "Riccardo" }
{ "_id" : "Mario" }
{ "_id" : "Gabiele" }
{ "_id" : "Sabrina" }
{ "_id" : "Serena" }
{ "_id" : "Tiziana" }
{ "_id" : "Enzo " }
{ "_id" : "Mirko" }
{ "_id" : "Valeira" }
{ "_id" : "Sara" }
{ "_id" : "Dario" }
{ "_id" : "Claudio" }
{ "_id" : "Giovanni" }
{ "_id" : "Filipo" }
{ "_id" : "Silvia" }
{ "_id" : "Ilaria" }
{ "_id" : "Paola" }
{ "_id" : "Nicola" }
{ "_id" : "Marta" }
{ "_id" : "Roberta" }
{ "_id" : "Emanuela" }
{ "_id" : "Anna" }
{ "_id" : "Veronica" }
{ "_id" : "Luigi" }
{ "_id" : "Manuela" }
{ "_id" : "Giorgia" }
{ "_id" : "Eleonora" }
{ "_id" : "Michele" }
{ "_id" : "Elena" }
{ "_id" : "Mattia" }
{ "_id" : "Maria" }
{ "_id" : "Giusy" }
{ "_id" : "Federico" }
{ "_id" : "Angela" }
{ "_id" : "Daniela" }
{ "_id" : "Fabrizio" }
{ "_id" : "Vincenzo" }
{ "_id" : "Marco" }
{ "_id" : "Patrizia" }
{ "_id" : "Alberto" }
{ "_id" : "Sergio" }
{ "_id" : "Davide" }
{ "_id" : "Cinzia" }
{ "_id" : "Antonella" }
{ "_id" : "Sonia" }
{ "_id" : "Martina" }
{ "_id" : "Antonio" }
{ "_id" : "Stefania" }
{ "_id" : "Giulia" }
{ "_id" : "Cristina" }
{ "_id" : "Elisa" }
{ "_id" : "Simona" }
{ "_id" : "Massimo" }
{ "_id" : "Salvatore" }
{ "_id" : "Cristian" }
{ "_id" : "Lorenzo" }
{ "_id" : "Enrico" }
{ "_id" : "Angelo" }
{ "_id" : "Lucia" }
{ "_id" : "Pietro" }
{ "_id" : "Andrea" }
{ "_id" : "Chiara" }
{ "_id" : "Raffaele" }
{ "_id" : "Massimiliano" }
{ "_id" : "Alessandro" }
{ "_id" : "Federica" }
{ "_id" : "Alex" }
{ "_id" : "Teresa" }
{ "_id" : "Mauro" }
{ "_id" : "Valentina" }
{ "_id" : "Claudia" }
{ "_id" : "Giorgio" }
{ "_id" : "Laura" }
```

OR 

> db.italians.distinct("firstname")

```javascript
["Alberto", "Alessandra", "Alessandro", "Alessia", "Alessio", "Alex", "Andrea", "Angela", "Angelo", "Anna",
"Antonella", "Antonio", "Barbara", "Carlo", "Chiara", "Cinzia", "Claudia", "Claudio", "Cristian", "Cristina",
"Daniela", "Daniele", "Dario", "Davide", "Domenico", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela",
"Emanuele", "Enrico", "Enzo ", "Fabio", "Fabrizio", "Federica", "Federico", "Filipo", "Gabiele", "Giacomo",
"Gianluca", "Gianni", "Giorgia", "Giorgio", "Giovanna", "Giovanni", "Giulia", "Giuseppe", "Giusy", "Ilaria",
"Laura", "Lorenzo", "Luca", "Lucia", "Luigi", "Manuela", "Marco", "Maria", "Mario", "Marta",
"Martina", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michela", "Michele", "Mirko",
"Monica", "Nicola", "Paola", "Paolo", "Pasquale", "Patrizia", "Pietro", "Raffaele", "Riccardo", "Rita",
"Roberta", "Roberto", "Rosa", "Sabrina", "Salvatore", "Sara", "Serena", "Sergio", "Silvia", "Simona",
"Simone", "Sonia", "Stefania", "Stefano", "Teresa", "Tiziana", "Valeira", "Valentina", "Veronica", "Vincenzo"]
```

#### 19. Agora faça a mesma lista do item acima, considerando nome completo.
> db.italians.aggregate([{"$group": { "_id": { firstname: "$firstname", surname: "$surname" }}}]);
```
results in mongodb/exe2-item19.js
```

#### 20. Procure pessoas que gosta de Banana ou Maçã, tenham cachorro ou gato, mais de 20 e menos de 60 anos.
```javascript
db.italians.find({"$and": [
  {"$or": [{ cat: { $exists: true }}, { dog: { $exists: true }}]},
  {"age": {"$gt": 20, "$lt": 60 }},
  {"$and": [{"favFruits": {"$exists": true}}, {"favFruits": ["Banana", "Maçã"]}]}
]}).count();
```
```
13
```

### 3. Exercício - Stockbrokers

#### 1. Liste as ações com profit acima de 0.5 (limite a 10 o resultado)
> db.stocks.find({"Profit Margin": { $gt: 0.5 } }, {"Ticker":1, "Profit Margin":1, "Sector":1, "Company":1, "_id":0 }).sort({"Profit Margin": -1}).limit(10)
```javascript
{ "Ticker" : "BPT", "Profit Margin" : 0.994, "Sector" : "Basic Materials", "Company" : "BP Prudhoe Bay Royalty Trust" }
{ "Ticker" : "CACB", "Profit Margin" : 0.994, "Sector" : "Financial", "Company" : "Cascade Bancorp" }
{ "Ticker" : "ROYT", "Profit Margin" : 0.99, "Sector" : "Basic Materials", "Company" : "Pacific Coast Oil Trust" }
{ "Ticker" : "NDRO", "Profit Margin" : 0.986, "Sector" : "Basic Materials", "Company" : "Enduro Royalty Trust" }
{ "Ticker" : "WHZ", "Profit Margin" : 0.982, "Sector" : "Basic Materials", "Company" : "Whiting USA Trust II" }
{ "Ticker" : "MVO", "Profit Margin" : 0.976, "Sector" : "Basic Materials", "Company" : "MV Oil Trust" }
{ "Ticker" : "AGNC", "Profit Margin" : 0.972, "Sector" : "Financial", "Company" : "American Capital Agency Corp." }
{ "Ticker" : "VOC", "Profit Margin" : 0.971, "Sector" : "Basic Materials", "Company" : "VOC Energy Trust" }
{ "Ticker" : "MTR", "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "Mesa Royalty Trust" }
{ "Ticker" : "OLP", "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "One Liberty Properties Inc." }
```

#### 2. Liste as ações com perdas (limite a 10 novamente)
> db.stocks.find({"Profit Margin": { $lt: 0 } }, {"Ticker":1, "Profit Margin":1, "Sector":1, "Company":1, "_id":0 }).sort({"Profit Margin": 1}).limit(10)
```javascript
{ "Ticker" : "EMIS", "Profit Margin" : -266.0417, "Sector" : "Healthcare", "Company" : "Emisphere Technologies, Inc." }
{ "Ticker" : "CERP", "Profit Margin" : -27.9802, "Sector" : "Basic Materials", "Company" : "Cereplast, Inc." }
{ "Ticker" : "GNBT", "Profit Margin" : -21.5587, "Sector" : "Healthcare", "Company" : "Generex Biotechnology Corp." }
{ "Ticker" : "PURE", "Profit Margin" : -11.7596, "Sector" : "Basic Materials", "Company" : "PURE Bioscience, Inc." }
{ "Ticker" : "MRNA", "Profit Margin" : -11.079, "Sector" : "Healthcare", "Company" : "Marina Biotech, Inc." }
{ "Ticker" : "APPA", "Profit Margin" : -6.176, "Sector" : "Healthcare", "Company" : "AP Pharma Inc." }
{ "Ticker" : "AFFY", "Profit Margin" : -4.7349, "Sector" : "Healthcare", "Company" : "Affymax, Inc." }
{ "Ticker" : "FTBK", "Profit Margin" : -3.3162, "Sector" : "Financial", "Company" : "Frontier Financial Corporation" }
{ "Ticker" : "CCGM", "Profit Margin" : -3.0824, "Sector" : "Services", "Company" : "China CGame, Inc." }
{ "Ticker" : "PBIO", "Profit Margin" : -3.0335, "Sector" : "Healthcare", "Company" : "Pressure BioSciences, Inc." }
```

#### 3. Liste as 10 ações mais rentáveis
> db.stocks.find({}, {"Ticker":1, "Profit Margin":1, "Company":1, "Sector":1, "_id":0 }).sort({"Profit Margin": -1}).limit(10)
```javascript
{ "Ticker" : "BPT", "Profit Margin" : 0.994, "Sector" : "Basic Materials", "Company" : "BP Prudhoe Bay Royalty Trust" }
{ "Ticker" : "CACB", "Profit Margin" : 0.994, "Sector" : "Financial", "Company" : "Cascade Bancorp" }
{ "Ticker" : "ROYT", "Profit Margin" : 0.99, "Sector" : "Basic Materials", "Company" : "Pacific Coast Oil Trust" }
{ "Ticker" : "NDRO", "Profit Margin" : 0.986, "Sector" : "Basic Materials", "Company" : "Enduro Royalty Trust" }
{ "Ticker" : "WHZ", "Profit Margin" : 0.982, "Sector" : "Basic Materials", "Company" : "Whiting USA Trust II" }
{ "Ticker" : "MVO", "Profit Margin" : 0.976, "Sector" : "Basic Materials", "Company" : "MV Oil Trust" }
{ "Ticker" : "AGNC", "Profit Margin" : 0.972, "Sector" : "Financial", "Company" : "American Capital Agency Corp." }
{ "Ticker" : "VOC", "Profit Margin" : 0.971, "Sector" : "Basic Materials", "Company" : "VOC Energy Trust" }
{ "Ticker" : "MTR", "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "Mesa Royalty Trust" }
{ "Ticker" : "OLP", "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "One Liberty Properties Inc." }
```

#### 4. Qual foi o setor mais rentável?
> db.stocks.aggregate([{ $group: { _id: "$Sector", Profits: {$sum: "$Profit Margin"} }}, { $sort: { "Profits": -1 }} ])

```javascript
{ "_id" : "Financial", "Profits" : 162.5356 }
{ "_id" : "Services", "Profits" : 20.5515 }
{ "_id" : "Consumer Goods", "Profits" : 13.23 }
{ "_id" : "Industrial Goods", "Profits" : 11.0327 }
{ "_id" : "Utilities", "Profits" : 7.423 }
{ "_id" : "Conglomerates", "Profits" : 0.3835 }
{ "_id" : "Basic Materials", "Profits" : -9.190900000000001 }
{ "_id" : "Technology", "Profits" : -18.8968 }
{ "_id" : "Healthcare", "Profits" : -316.68649999999997 }
```

#### 5. Ordene as ações pelo profit e usando um cursor, liste as ações.
Declara cursor fazendo um find, filtrando apenas ações que possuem Profit Margin e projetando Company, Sector e Profit Margin:
> var cursor = db.stocks.find({"Profit Margin": {$exists: true}}, {"Company": 1, "Sector": 1, "Profit Margin": 1, "_id": 0 })

Ordena o cursor por Profit Margin através do comando sort:
> cursor = cursor.sort({"Profit Margin": -1})

```javascript
{ "Profit Margin" : 0.994, "Sector" : "Basic Materials", "Company" : "BP Prudhoe Bay Royalty Trust" }
{ "Profit Margin" : 0.994, "Sector" : "Financial", "Company" : "Cascade Bancorp" }
{ "Profit Margin" : 0.99, "Sector" : "Basic Materials", "Company" : "Pacific Coast Oil Trust" }
{ "Profit Margin" : 0.986, "Sector" : "Basic Materials", "Company" : "Enduro Royalty Trust" }
{ "Profit Margin" : 0.982, "Sector" : "Basic Materials", "Company" : "Whiting USA Trust II" }
{ "Profit Margin" : 0.976, "Sector" : "Basic Materials", "Company" : "MV Oil Trust" }
{ "Profit Margin" : 0.972, "Sector" : "Financial", "Company" : "American Capital Agency Corp." }
{ "Profit Margin" : 0.971, "Sector" : "Basic Materials", "Company" : "VOC Energy Trust" }
{ "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "Mesa Royalty Trust" }
{ "Profit Margin" : 0.97, "Sector" : "Financial", "Company" : "One Liberty Properties Inc." }
{ "Profit Margin" : 0.97, "Sector" : "Basic Materials", "Company" : "Permian Basin Royalty Trust" }
{ "Profit Margin" : 0.969, "Sector" : "Basic Materials", "Company" : "Cross Timbers Royalty Trust" }
{ "Profit Margin" : 0.967, "Sector" : "Financial", "Company" : "Harvest Capital Credit Corporation" }
{ "Profit Margin" : 0.966, "Sector" : "Basic Materials", "Company" : "Whiting USA Trust I" }
{ "Profit Margin" : 0.963, "Sector" : "Financial", "Company" : "Mesabi Trust" }
{ "Profit Margin" : 0.959, "Sector" : "Financial", "Company" : "Sabine Royalty Trust" }
{ "Profit Margin" : 0.958, "Sector" : "Financial", "Company" : "North European Oil Royalty Trust" }
{ "Profit Margin" : 0.933, "Sector" : "Basic Materials", "Company" : "Sandridge Mississippian Trust II" }
{ "Profit Margin" : 0.93, "Sector" : "Basic Materials", "Company" : "Hugoton Royalty Trust" }
{ "Profit Margin" : 0.928, "Sector" : "Basic Materials", "Company" : "SandRidge Mississippian Trust I" }
Type "it" for more
```


#### 6. Renomeie o campo “Profit Margin” para apenas “profit”.
#### 7. Agora liste apenas a empresa e seu respectivo resultado
#### 8. Analise as ações. É uma bola de cristal na sua mão... Quais as três ações você investiria?
#### 9. Liste as ações agrupadas por setor