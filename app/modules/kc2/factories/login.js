function LoginFactory() {
    var factory = {
        user : _user,
	};
	
	return factory;

    //Formata os dados recebidos no login para o formato que usaremos na aplicação
	function _user(data){
        var result = {};
        result.id=data.id;
        result.name=data.nome;
        result.email=data.mail;
        return result;
    }
    
}


angular.module("kc2App").factory("LoginFactory", LoginFactory);