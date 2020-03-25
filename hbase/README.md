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

#### Exercicio 2 - Importe o arquivo via linha de comando
Exit hbase shell, copy file to docker container and run
> exit
> docker cp /home/augusto.scher/git/rep/nosql-databases/hbase/italians.txt my-hbase:/italians.txt
> hbase shell italians.txt

you can also generate .sh file and import it.


#### Exercicio 3 - Agora execute as seguintes operações:

##### 1. Adicione mais 2 italianos mantendo adicionando informações como data de nascimento nas informações pessoais e um atributo de anos de experiência nas informações profissionais;

##### 2. Adicione o controle de 5 versões na tabela de dados pessoais.

##### 3. Faça 5 alterações em um dos italianos;

##### 4. Com o operador get, verifique como o HBase armazenou o histórico.

##### 5. Utilize o scan para mostrar apenas o nome e profissão dos italianos.

##### 6. Apague os italianos com row id ímpar

##### 7. Crie um contador de idade 55 para o italiano de row id 5

##### 8. Incremente a idade do italiano em 1