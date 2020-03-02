### MongoDB
Notes:
- Local MongoDB instance should be running

#### Setup
1. Running MongoDB container:
   > docker run -d -p 27017:27017 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin mongo:4

2. Clone repository:
   > git clone git@github.com:augustoscher/nosql-databases.git

3. Connection on docker container if necessary:
   > docker exec -it mongodb bash
   > mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin

#### Running
1. Running...


