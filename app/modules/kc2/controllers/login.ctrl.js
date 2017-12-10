function LoginCtrl($rootScope, LoginService, LoginFactory, CoursesFactory, $state) {
    var vm = this;
    vm.user='';
    vm.pass='';
    vm.login=_login;

    //Chama a API de login através do service LoginService
    function _login(){
        data ={
            mail : vm.mail,
            pass : vm.pass
        };
        LoginService.kc2Login(data).then(_successLogin, _errorLogin );
    }

    //Caso LoginService returne o login de maneira positiva
    function _successLogin(response){
        $rootScope.user = LoginFactory.user(response.data.usuario);
        $rootScope.logged=true;
        $rootScope.permissions = response.data.permissoes;
        $rootScope.lCourses = CoursesFactory.processPermissions($rootScope.courses, $rootScope.permissions );
        $state.go('main.home');
    }

    //Caso o login não tenha sido efetuado.
    function _errorLogin(error){
        alert('Não foi possível efetuar o login!');
    }

}

angular.module('kc2App').controller('LoginCtrl', LoginCtrl);
