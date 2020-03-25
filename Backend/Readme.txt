
Métodos HTTP:

GET: Buscar/listar uma informação do back-end;
POST: Criar uma informação no back-end;
PUT: Alterar uma informação no back-end;
DELETE: Deletar uma informação no back-end.


Tipos de parâmetros:

Query: Parâmetros nomeados
    enviados na rota após '?' (Filtros, paginação...);

Route Params: Parâmetros utilizados para identificar recursos;

Request Body: Corpo da requisição utilizado para
    criar ou alterar recursos


Banco de Dados:

SQL: MySQL, SQLite, Oracle, Microsoft SQL Server;
NoSQL: MongoDB, CouchDB.
    Driver: SELECT * FROM users
    Query Builder: table('users).select('*').where()
Entidades:
-Ong,
-Caso (Incident)

Funcionalidades:
-Login de ONG,
-Cadastro de ONG,
-Logout de ONG,
-Cadastro de casos,
-Deletar Casos,
-Listar casos específicos da ONG,
-Listar todos os casos,
-Entrar em contato com a ONG
    (via Whatsapp ou via e-mail)
