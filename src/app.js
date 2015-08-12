var BASE_URL = 'php/';
var angularTodo = angular.module('lostsysApp', []);
 
function mainController($scope, $http) {
    $scope.names = [ ];
 
    $http.get(BASE_URL+'model.php')
            .success(function(data) {
                    $scope.names = eval(data);
                    console.log(data)
                })
            .error(function(data) {
                    console.log('Error: ' + data);
            });
 
    $scope.addNom = function() {
        $http.post(BASE_URL+'model.php', { op: 'append', nom: $scope.nom, telefon: $scope.telefon } )
                .success(function(data) {
                        $scope.names = eval(data);
                        console.log(data)
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
 
        $scope.nom="";
        $scope.telefon="";
        }
 
    $scope.delNom = function( nom ) {
        if ( confirm("Seguro?") ) {
            $http.post(BASE_URL+'model.php', { op: 'delete', nom: nom } )
                .success(function(data) {
                        $scope.names = eval(data);
                        console.log(data)
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
            }
        }
 
    }
