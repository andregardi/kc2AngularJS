function CoursesFactory() {
    var factory = {
        processCourses : _processCourses,
        processPermissions : _processPermissions
	};
	

	return factory;

    //Converte os dados dos cursos para o formato que iremos usar na aplicação
	function _processCourses(data){
        var result = {};
        angular.forEach(data, 
            function(value, key) {
                let course = {};
                course.name=value.nome;
                course.image = 'assets/images/'+value.img;
                course.description = value.descricao;
                course.lessons = [];
                angular.forEach(value.aulas,
                    function(value, key){
                        course.lessons.push( value.nome);
                    }
                );
                result[key]=course;
            }
        );
        return result;
    }

    //Converte os dados das permissoes para o formato que iremos usar na aplicação
    //Cria otherCourses e myCourses para diferenciar mais facilmente os cursos que o usuario pode acessar
    function _processPermissions(courses, permissions){
        result = {};
        result.myCourses = {};
        result.otherCourses = {};
        angular.forEach(courses,
            function(value, key){
                if(permissions.indexOf(key) == -1){
                    result.otherCourses[key]={};
                    result.otherCourses[key].image=value.image;
                    result.otherCourses[key].description = value.description;
                }
                else{
                    result.myCourses[key]={};
                    result.myCourses[key].image=value.image;
                    result.myCourses[key].description = value.description;
                }               
            }   
        );
        return result;
    }
    
}


angular.module("kc2App").factory("CoursesFactory", CoursesFactory);