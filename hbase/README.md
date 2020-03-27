### HBase Exercises

#### Exercicio 1
##### 1. Crie a tabela com 2 famílias de colunas:
- personal-data  
- professional-data  

Firt, enter on hbase shell and create table:
> hbase shell
> create 'italians', 'personal-data', 'professional-data'

```
hbase(main):006:0* create 'italians', 'personal-data', 'professional-data'
Created table italians
Took 1.1534 seconds
=> Hbase::Table - italians
```

#### Exercicio 2
##### 1. Importe o arquivo via linha de comando
Exit hbase shell, copy file to docker container and run
> exit
> docker cp /home/augusto.scher/git/rep/nosql-databases/hbase/italians.txt my-hbase:/italians.txt
> hbase shell italians.txt

you can also generate .sh file and import it.
> exit
> docker cp /home/augusto.scher/git/rep/nosql-databases/hbase/italians.sh my-hbase:/italians.sh
> chmod +x italians.sh
> hbase shell ./italians.sh

#### Exercicio 3
##### 1. Adicione mais 2 italianos mantendo adicionando informações como data de nascimento nas informações pessoais e um atributo de anos de experiência nas informações profissionais;
``` 
put 'italians', '11', 'personal-data:name',  'My 11 Italian'
put 'italians', '11', 'personal-data:city',  'Milan'
put 'italians', '11', 'personal-data:birth_date',  '4/2/1981'
put 'italians', '11', 'professional-data:role',  'Comunicacao Institucional'
put 'italians', '11', 'professional-data:salary',  '9470'
put 'italians', '11', 'professional-data:experience_years',  '2'

put 'italians', '12', 'personal-data:name',  'My 12 Italian'
put 'italians', '12', 'personal-data:city',  'Turim'
put 'italians', '12', 'personal-data:birth_date',  '4/2/1991'
put 'italians', '12', 'professional-data:role',  'Software'
put 'italians', '12', 'professional-data:salary',  '10000'
put 'italians', '12', 'professional-data:experience_years',  '8'
``` 

##### 2. Adicione o controle de 5 versões na tabela de dados pessoais.
```
alter 'italians', NAME => 'personal-data', VERSIONS => 5
``` 

##### 3. Faça 5 alterações em um dos italianos;
```
put 'italians',’12’,'personal-data:name','Batman'
put 'italians',’12’,'personal-data:city','Gothan'
put 'italians',’12’,'personal-data:bloo_type','A+'
put 'italians',’12’,'professional-data:salary',  '11000'
put 'italians','12', 'professional-data:experience_years',  '9'
```

##### 4. Com o operador get, verifique como o HBase armazenou o histórico.

##### 5. Utilize o scan para mostrar apenas o nome e profissão dos italianos.

##### 6. Apague os italianos com row id ímpar

##### 7. Crie um contador de idade 55 para o italiano de row id 5

##### 8. Incremente a idade do italiano em 1