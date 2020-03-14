### Neo4J Exercises

Cypher with Neo4j

#### Exercise 1
##### 1.1: Retrieve all nodes from the database
> MATCH(n) RETURN n

##### 1.2: Examine the data model of the graph
> call db.schema() 
or
> call db.schema.visualization

##### 1.3: Retrieve all Person nodes
> MATCH(p:Person) RETURN p

##### 1.4: Retrieve all Movie nodes
> MATCH(m:Movie) RETURN m

#### Exercise 2
##### 2.1: Retrieve all Movie nodes that have a released property value of 2003.
> MATCH(m:Movie{released:2003}) RETURN m

##### Exercise 2.2: View the retrieved results as a table.
> MATCH(m:Movie{released:2003}) RETURN m
```
Click on table icon in the result
``` 

##### 2.3: Query the database for all property keys.
> call db.propertyKeys

##### 2.4: Retrieve all Movies released in 2006, returning their titles.
Return only title of movies released in 2006
> MATCH(m:Movie{released:2006}) RETURN m.title

Return all and see as table
> MATCH(m:Movie) RETURN m
```json
{
  "title": "The Matrix",
  "tagline": "Welcome to the Real World",
  "released": 1999
}
```

Return other movies in different release year with more prorperties
> MATCH(m:Movie{released:1999}) RETURN m.title, m.tagline, m.released

##### 2.5: Retrieve all Movie nodes from the database and return the title, released, and tagline values.
> MATCH(m:Movie) RETURN m.title, m.tagline, m.released

##### 2.6: Display more user-friendly headers in the table.
Modify the query you just ran so that the headings for the columns of the table returned are more descriptive.
> MATCH(m:Movie) RETURN m.title as `Movie`, m.tagline as `Tagline`, m.released as `Release Year`


#### Exercise 3
##### 3.1: Display the schema of the database.
> call db.schema.visualization

##### 3.2: Retrieve all people who wrote the movie Speed Racer.
> MATCH (p:Person)-[:WROTE]->(:Movie {title: 'Speed Racer'}) RETURN p.name

##### Retrieve all people who have written other movies.
> MATCH (p:Person)-[:WROTE]->(:Movie) RETURN p.name

##### Retrieve people who have acted in a particular movie.
> MATCH (p:Person)-[:ACTED_IN]->(:Movie{title: 'The Matrix'}) RETURN p.name

##### Retrieve people who have directed a particular movie.
> MATCH (p:Person)-[:DIRECTED]->(:Movie{title: 'The Matrix'}) RETURN p.name

##### 3.3: Retrieve all movies that are connected to the person, Tom Hanks.
> MATCH (m:Movie)<--(:Person {name: 'Tom Hanks'}) RETURN m.title

#### Retrieve all movies connected with another actor.
> MATCH (m:Movie)<--(:Person {name: 'Keanu Reeves'}) RETURN m.title

#### Retrieve all people connected with a particular movie.
> MATCH (p:Person)-->(:Movie{title: 'The Matrix'}) RETURN p.name

##### 3.4: Retrieve information about the relationships Tom Hanks had with the set of movies retrieved earlier.
> MATCH (m:Movie)-[rel]-(:Person {name: 'Tom Hanks'}) RETURN m.title, type(rel)

##### Retrieve the relationship information about a different actor.
> MATCH (m:Movie)-[rel]-(:Person {name: 'Keanu Reeves'}) RETURN m.title, type(rel)

##### 3.5: Retrieve information about the roles that Tom Hanks acted in.
> MATCH (m:Movie)-[rel:ACTED_IN]-(:Person {name: 'Tom Hanks'}) RETURN m.title, rel.roles

##### Retrieve all roles for a different actor.
> MATCH (m:Movie)-[rel:ACTED_IN]-(:Person {name: 'Keanu Reeves'}) RETURN m.title, rel.roles

##### Retrieve all roles played for a particular movie.
> MATCH (m:Movie)-[rel]-(p:Person) WHERE m.title = 'The Matrix' RETURN m.title, p.name, rel.roles


#### Exercise 4
##### 4.1: Retrieve all movies that Tom Cruise acted in.
> MATCH(p:Person)-[:ACTED_IN]-(m:Movie) WHERE p.name = 'Tom Cruise' RETURN m.title
or
> MATCH(m:Movie)<-[:ACTED_IN]-(:Person {name: 'Tom Cruise'}) RETURN m.title

##### 4.2: Retrieve all people that were born in the 70’s.
> MATCH(p:Person) WHERE p.born >=1970 AND p.born <=1979 RETURN p.name, p.born ORDER BY p.born

##### 4.3: Retrieve the actors who acted in the movie The Matrix who were born after 1960.
```cypher
MATCH(p:Person)-[:ACTED_IN]-(m:Movie)
WHERE p.born > 1960 AND m.title = 'The Matrix'
RETURN p.name, p.born ORDER BY p.born
```

##### 4.4: Retrieve all movies by testing the node label and a property.

##### 4.5: Retrieve all people that wrote movies by testing the relationship between two nodes.

##### 4.6: Retrieve all people in the graph that do not have a property.

##### 4.7: Retrieve all people related to movies where the relationship has a property.

##### 4.8: Retrieve all actors whose name begins with James.

##### 4.9: Retrieve all all REVIEW relationships from the graph with filtered results.

##### 4.10: Retrieve all people who have produced a movie, but have not directed a movie.

##### 4.11: Retrieve the movies and their actors where one of the actors also directed the movie.

##### 4.12: Retrieve all movies that were released in a set of years.

##### 4.13: Retrieve the movies that have an actor’s role that is the name of the movie.