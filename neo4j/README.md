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

#### Retrieve all roles for a different actor.
> MATCH (m:Movie)-[rel:ACTED_IN]-(:Person {name: 'Keanu Reeves'}) RETURN m.title, rel.roles

#### Retrieve all roles played for a particular movie.
> MATCH (m:Movie)-[rel]-(p:Person) WHERE m.title = 'The Matrix' RETURN m.title, p.name, rel.roles
