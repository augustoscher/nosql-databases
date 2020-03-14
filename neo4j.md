### Neo4J Exercises

#### Exercise 1
Exercise 1.1: Retrieve all nodes from the database
> MATCH(n) RETURN n

Exercise 1.2: Examine the data model of the graph
> call db.schema() 
or
> call db.schema.visualization

Exercise 1.3: Retrieve all Person nodes
> MATCH(p:Person) RETURN p

Exercise 1.4: Retrieve all Movie nodes
> MATCH(m:Movie) RETURN m



