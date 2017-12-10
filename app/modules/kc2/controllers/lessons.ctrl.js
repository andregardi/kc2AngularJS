function LessonsCtrl($rootScope, $stateParams, $state) {
    var vm = this;
    
    //Na tentativa de abrir um curso não permitido, direcionar para home
    if($rootScope.permissions.indexOf($stateParams.id) == -1 ){
        $state.go('main.home');
    }
        
    vm.course = $rootScope.courses[$stateParams.id];
    vm.lesson = vm.course.lessons[0];

    //Muda a origem do video quando trocamos de opção no select de aulas
    vm.selectLesson = function(){
        let id_aula = (1+vm.course.lessons.indexOf(vm.lesson)).toString();
        vm.video= 'http://kc2.com.br/api/video/' +[$stateParams.id] + '/' + id_aula;
    }

    //Chama a função acima para dar a primeira aula como origem do video
    vm.selectLesson();


}

angular.module('kc2App').controller('LessonsCtrl', LessonsCtrl);