# Sobre o projeto:
A KC2 cursos possui um sistema de gerenciamento de vídeo aulas, originalmente feito em PHP.
O objetivo desse projeto é converter essa mesma funcionalidade para o framework AngularJS, como projeto final da Academia Accenture Front-end.
# Estados do sistema:
## home
Tela inicial da aplicação.

**Meus cursos** - Cursos aos quais o usuário tem acesso.
**Outros cursos** - Cursos aos quais o usuário não tem acesso.

Antes de efetuar o Login, o array de permissões estará vazio. Assim todos os cursos estarão sobre o título de "Outros cursos".

## login
Login realizado pelo método POST através da API ‘http://kc2.com.br/api/login’.
Caso o login não seja valido, o usuário receberá a mensagem 'Não foi possível efetuar o login!'.
## lesson
esse estado é composto por um select e uma tag de vídeo. O select é composto por uma série de opções as quais, cada uma, representa uma aula do curso. Ao trocar de opção a origem do conteúdo do vídeo é atualizada para a aula selecionada.
# Factories:
## LoginFactory
Formata os dados recebidos no login para o formato que usado na aplicação.
Formato 

**Original**:


    "user":{   
       "id":"71",
       "name":"Usuário teste",
       "email":"teste@kc2.com.br"
    }



------------
**LoginFactory**


    "user":{   
       "id":"71",
       "name":"Usuário teste",
       "email":"teste@kc2.com.br"
    }

##CoursesFactory
Converte os dados dos cursos para o formato que iremos usar na aplicação.

**Original**
     

     "101":{  
             "nome":"REUNIÕES EFICIENTES",
             "img":"reuniaoc.jpg",
             "descricao":"Improdutividade das reuniões
    é uma constante nas empresas. Aprenda a tornar as 
    reuniões mais curtas e com mais resultados.",
             "aulas":{  
                "1":{  
                   "id_curso":"101",
                   "id_aula":"1",
                   "nome":"1 - Introdução"
                },
                "2":{  
                   "id_curso":"101",
                   "id_aula":"2",
                   "nome":"2 - Planejamento"
                },
                "3":{  
                   "id_curso":"101",
                   "id_aula":"3",
                   "nome":"3 - Condução"
                },
                "4":{  
                   "id_curso":"101",
                   "id_aula":"4",
                   "nome":"4 - Acompanhamento"
                }
             }
     },
------------
**CoursesFactory**


    "101":{  
    	"name":"REUNIÕES EFICIENTES",
    	"image":"assets/images/reuniaoc.jpg",
    	"description":"Improdutividade das reuniões é uma constante nas empresas. Aprenda a tornar as reuniões mais curtas e com mais resultados.",
    	"lessons":[  
    		 "1 - Introdução",
    		 "2 - Planejamento",
    		 "3 - Condução",
    		 "4 - Acompanhamento"
    	]
    },

# $rootScope
#### $rootScope.user
Recebe os dados do usuario cursos vindos de LoginFactory

#### $rootScope.courses
Recebe os dados dos cursos vindos de CoursesFactory

#### $rootScope.logged
Boolean que indica se o usuário está logado

#### $rootScope.permissions
Array com os IDs dos cursos que o usuário tem acesso

####$rootScope.lCourses
Constituido de dois objetos myCourses e otherCourses.
**myCourses** contem uma versão simplificada dos dados dos cursos, apenas dos cursos que o usuário possui acesso.
**otherCourses** contem uma versão simplificada dos dados dos cursos, apenas dos cursos que o usuário **não** possui acesso.


    "101":{  
    	   "image":"assets/images/reuniaoc.jpg",
    	   "description":"Improdutividade das reuniões é uma constante nas empresas. Aprenda a tornar as reuniões mais curtas e com mais resultados."
    }
