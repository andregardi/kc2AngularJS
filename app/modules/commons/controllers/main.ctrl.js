function MainCtrl($rootScope, CoursesFactory, CoursesService) {
    var vm = this;
    
    //Estado inicial: não logado; nenhuma permissão
    $rootScope.logged=false;
    $rootScope.permissions= [];
    
    //Accessar os dados dos curusos na API da KC2
    CoursesService.getCourses().then(_successCourses, _errorCourses );

    function _successCourses(response){
        $rootScope.courses = CoursesFactory.processCourses(response.data.cursos);
        $rootScope.lCourses = CoursesFactory.processPermissions($rootScope.courses, $rootScope.permissions );
    }

    function _errorCourses(error){
        alert('Não foi possível carregar os cursos.');
    }

    //Função de logout
    vm.logout = function() {
        $rootScope.logged=false;
        $rootScope.permissions= [];
        $rootScope.lCourses = CoursesFactory.processPermissions($rootScope.courses, $rootScope.permissions );
    }
}

angular.module('kc2App').controller('MainCtrl', MainCtrl);