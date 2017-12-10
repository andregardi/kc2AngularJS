function config($stateProvider, $httpProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('home');
    
        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.home', {
            url: 'home',
            controller: 'HomeCtrl as vm',
            templateUrl: 'modules/kc2/views/home.html'
        })
        .state('main.login', {
            url: 'login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/kc2/views/login.html'
        })
        .state('main.lesson', {
            url: "lesson/:id",
            templateUrl: 'modules/kc2/views/lesson.html',
            controller: 'LessonsCtrl as vm'
        })

}


angular.module('kc2App').config(config);