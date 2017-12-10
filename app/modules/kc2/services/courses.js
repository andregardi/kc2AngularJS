function CoursesService($http ) {

    var uri = "http://kc2.com.br/api/cursos";
    
    var service={
        getCourses: _getCourses
    };

    return service;

    function _getCourses() {
        return $http.get(uri);
    }
}


angular.module("kc2App").service("CoursesService", CoursesService);