function LoginService($http) {
    
    var uri = "http://kc2.com.br/api/";
    
    var service={
        kc2Login: _kc2Login
    };

    return service;

    function _kc2Login(data) {

        return $http({
            method: 'POST',
            url: uri+'login',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
            data :jsonToForm(data)
        });
        
    }

    function jsonToForm(data){
        result = '';
        angular.forEach(data, function(value, key) {
            result+=key+"=" + (value) + "&";
          });
        return result;
    }
}


angular.module("kc2App").service("LoginService", LoginService);
