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
> MATCH(p:Person)-[:ACTED_IN]-(m:Movie)
> WHERE p.born > 1960 AND m.title = 'The Matrix'
> RETURN p.name, p.born ORDER BY p.born

##### 4.4: Retrieve all movies by testing the node label and a property.
> MATCH(m) WHERE m:Movie AND m.released = 2000 RETURN m.title

##### 4.5: Retrieve all people that wrote movies by testing the relationship between two nodes, returning the names of the people and the titles of the movies.
> MATCH(p)-[rel]-(m)
> WHERE p:Person AND m:Movie AND type(rel) = 'WROTE'
> RETURN p.name, m.title

##### 4.6: Retrieve all people in the graph that do not have a born property, returning their names.
> MATCH(p:Person) WHERE NOT EXISTS(p.born) RETURN p.name

##### 4.7: Retrieve all people related to movies where the relationship has the rating property, then return their name, movie title, and the rating.
> MATCH(p:Person)-[rel]->(m:Movie)
> WHERE EXISTS (rel.rating)
> RETURN p.name, m.title, rel.rating

##### 4.8: Retrieve all actors whose name begins with James.
> MATCH(p:Person)-[:ACTED_IN]->(:Movie) WHERE p.name STARTS WITH 'James' RETURN p.name 

##### 4.9: Retrieve all REVIEWED relationships from the graph where the summary of the review contains the string fun, returning the movie title reviewed and the rating and summary of the relationship.
> MATCH(:Person)-[rel:REVIEWED]->(m:Movie)
> WHERE toLower(rel.summary) CONTAINS 'fun'
> RETURN m.title, rel.rating, rel.summary

##### Retrieve all movies in the database that have love in their tagline and return the movie titles
> MATCH(m:Movie) WHERE toLower(m.tagline) CONTAINS 'love' RETURN m.title, m.tagline

##### Retrieve movies in the database, specifying a regular expression for the content of the tagline.
> MATCH(m:Movie) WHERE m.tagline =~ '(?i)speed.*' RETURN m.title, m.tagline

##### 4.10: Retrieve all people who have produced a movie, but have not directed a movie.
> MATCH (a:Person)-[:PRODUCED]->(m:Movie)
> WHERE NOT ((a)-[:DIRECTED]->(:Movie))
> RETURN a.name, m.title

##### 4.11: Retrieve the movies and their actors where one of the actors also directed the movie, returning the actors names, the director’s name, and the movie title.
> MATCH (p1:Person)-[:ACTED_IN]->(m:Movie)<-[:ACTED_IN]-(p2:Person)
> WHERE EXISTS( (p2)-[:DIRECTED]->(m) )
> RETURN p1.name as Actor, p2.name as `Actor/Director`, m.title as Movie

##### 4.12: etrieve all movies that were released in the years 2000, 2004, and 2008, returning their titles and release years.
> MATCH(m:Movie) WHERE m.released IN [2000, 2004, 2008] RETURN m.title, m.released ORDER BY m.released

##### 4.13: Retrieve the movies that have an actor’s role that is the name of the movie, return the movie title and the role.
> MATCH(m:Movie)<-[rel:ACTED_IN]-(p:Person) 
> WHERE m.title in rel.roles
> RETURN m.title as Movie, p.name as Actor , rel.roles as Role


#### Exercise 5
##### 5.1: Retrieve data using multiple MATCH patterns.
Write a Cypher query that retrieves all movies that Gene Hackman has acted it, along with the directors of the movies. In addition, retrieve the actors that acted in the same movies as Gene Hackman. Return the name of the movie, the name of the director, and the names of actors that worked with Gene Hackman.

> MATCH (a:Person)-[:ACTED_IN]->(m:Movie)<-[:DIRECTED]-(d:Person),
>      (a2:Person)-[:ACTED_IN]->(m)
> WHERE a.name = 'Gene Hackman'
> RETURN m.title as movie, d.name AS director , a2.name AS `co-actors`

##### 5.2: Retrieve all nodes that the person named James Thompson directly has the FOLLOWS relationship in either direction.
> MATCH (p1:Person)-[:FOLLOWS]-(p2:Person)
> WHERE p1.name = 'James Thompson'
> RETURN p1, p2

##### 5.3: Modify the query to retrieve nodes that are exactly three hops away.
> MATCH (p1:Person)-[:FOLLOWS*3]-(p2:Person)
> WHERE p1.name = 'James Thompson'
> RETURN p1, p2

##### 5.4: Modify the query to retrieve nodes that are one and two hops away.
> MATCH (p1:Person)-[:FOLLOWS*1..2]-(p2:Person)
> WHERE p1.name = 'James Thompson'
> RETURN p1, p2

##### 5.5: Modify the query to retrieve particular nodes that are connected no matter how many hops are required.
> MATCH (p1:Person)-[:FOLLOWS*]-(p2:Person)
> WHERE p1.name = 'James Thompson'
> RETURN p1, p2

##### 5.6: Write a Cypher query to retrieve all people in the graph whose name begins with Tom and optionally retrieve all people named Tom who directed a movie
> MATCH(p:Person) WHERE p.name STARTS WITH 'Tom'
> OPTIONAL MATCH(p)-[:DIRECTED]->(m:Movie)
> RETURN p.name, m.title

##### 5.7: Retrieve actors and the movies they have acted in, returning each actor’s name and the list of movies they acted in.
> MATCH (a:Person)-[:ACTED_IN]->(m:Movie)
> WITH a, collect(m.title) as movies
> RETURN a.name, movies
 or
> MATCH (p:Person)-[:ACTED_IN]->(m:Movie) RETURN p.name, collect(m.title)

##### 5.8: Retrieve all movies that Tom Cruise has acted in and the co-actors that acted in the same movie, returning the movie title and the list of co-actors that Tom Cruise worked with
> MATCH (p:Person)-[:ACTED_IN]->(m:Movie)<-[:ACTED_IN]-(p2:Person)
> WHERE p.name = 'Tom Cruise'
> RETURN p.name, m.title, collect(p2.name)

##### 5.9: Retrieve all people who reviewed a movie, returning the list of reviewers and how many reviewers reviewed the movie.
> MATCH (p:Person)-[:REVIEWED]->(m:Movie)
> RETURN m.title as movie, count(p) as numReviews, collect(p.name) as reviewers

##### 5.10: Retrieve all directors, their movies, and people who acted in the movies, returning the name of the director, the number of actors the director has worked with, and the list of actors.
> MATCH (d:Person)-[:DIRECTED]->(m:Movie)<-[:ACTED_IN]-(a:Person)
> RETURN d.name AS director, count(a) AS `actors` , collect(a.name) AS `actors worked`


##### 5.11: Retrieve the actors who have acted in exactly five movies.

##### 5.12: Retrieve the movies that have at least 2 directors with other optional data.

## Vai até o 11