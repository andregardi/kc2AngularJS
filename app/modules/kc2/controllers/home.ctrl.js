function HomeCtrl($rootScope , CoursesService, CoursesFactory) {
    var vm = this;
    
    //Quando usuário clica em algum curso ao qual não tem permissão
    vm.deny = function(){
        alert('Seu usuário não te acesso a este curso.');
    }
}

angular.module('kc2App').controller('HomeCtrl', HomeCtrl);
