### MongoDB Exercises

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
#### 5. Faça uma busca pelo ID e traga o Hamster Mike
#### 6. Use o find para trazer todos os Hamsters
#### 7. Use o find para listar todos os pets com nome Mike
#### 8. Liste apenas o documento que é um Cachorro chamado Mike

